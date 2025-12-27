const dtinput = document.getElementById("schema");

dtinput.addEventListener("input", () => {

});

const mockbtn = document.getElementById("generate");

function generaterandomstring(min, max) {
    let ranlen = Math.floor(min + (max - min + 1) * Math.random());
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for (let i = 0; i < ranlen; i++) {
        str += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return str;
}
function namegenerator(min, max) {
    let ranlen = Math.ceil(min + (max - min) * Math.random());
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let str = '';
    for (let i = 0; i < ranlen; i++) {
        str += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return str;
}
// function generaterandomfloat(){
//     let ranlen
// }

function genratephnum() {
    const characters = "0123456789";
    let str = "";
    for (let i = 0; i < 10; i++) {
        let char = characters.charAt(Math.floor(10 * Math.random()));
        str += char;
    }
    return str;
}
function generatemail() {
    let str = '';
    str = generaterandomstring(1, 14);
    str += "@gmail.com";
    return str;
}
function generateimgurl() {
    const w = 200 + Math.floor(Math.random() * 100);
    const h = 200 + Math.floor(Math.random() * 100);
    const imgUrl = `https://picsum.photos/${w}/${h}?random=${Math.floor(Math.random() * 1000)}`;
    return imgUrl;
}
function generatedate() {
    let str = '';
    str += Math.floor(1 + 30 * Math.random());
    str += '/';
    str += Math.floor(1 + 12 * Math.random());
    str += '/';
    str += Math.floor(2000 + (2026 - 2000) * Math.random());
    return str;
}
function generatejson(dtinp) {
    const obj = {};
    for (let a in dtinp) {
        const field = dtinp[a];
        if (typeof (dtinp[a]) === "object") {
            if (field.type === "int") {
                const min = field.min || 0;
                const max = field.max || 100;
                obj[a] = Math.ceil(min + (max - min) * Math.random())

            };

            if (field.type === "float") {
                const min = field.min
                const max = field.max
                obj[a] = min + (max - min) * (Math.random().toFixed(2));
            }
            if (field.type === "string") {
                const min = field.min;
                const max = field.max;
                obj[a] = generaterandomstring(min, max);
            }
            if (field.type === "name") {
                const min = field.min;
                const max = field.max;
                obj[a] = namegenerator(min, max);
            }
            if (field.type === "object") {
                obj[a] = generatejson(field.schema);
            }
             
             if (field.type === "array") {
                    const len = field.length || Math.floor(10*Math.random());
                    const items = field.items;
                    obj[a] = [];
                    for (let i = 0; i < len; i++) {
                        obj[a].push(generatejson(items));
                    }
                }
        }
        if (typeof (dtinp[a]) === "string") {
            if (dtinp[a] === "string") {
                obj[a] = generaterandomstring(1, 30);
            }
            if (dtinp[a] === "float") {
                obj[a] = 1000 * (Math.random().toFixed(2));
            }
            if (field === "int") {
                obj[a] = Math.ceil(1000 * Math.random());
            }
            if (field === "boolean") {
                obj[a] = Math.random() > 0.5 ? false : true;
            }
            if (field === "name") {
                obj[a] = namegenerator(1, 30);
            }
            if (field === "phone") {
                obj[a] = genratephnum();
            }
            if (field === "email") {
                obj[a] = generatemail();
            }
            if (field === "date") {
                obj[a] = generatedate();
            }
            if (field === "image_url") {
                obj[a] = generateimgurl();
            }
        }
        console.log(obj);
    } return obj;
}
mockbtn.addEventListener("click", () => {
    let jsoncheck = 1;
    let dtinp = {};
    let obj = {};
    try {
        dtinp = JSON.parse(dtinput.value);
    }
    catch {
        jsoncheck = 0;
        alert("Invalid JSON");
    }
    if (jsoncheck) {
        obj = generatejson(dtinp);
    }
    const outputBox = document.getElementById("output");
    outputBox.textContent = JSON.stringify(obj, null, 2);

})