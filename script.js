let display=document.getElementById("display")
function append(val){
    if(display.textContent==='0'){
        display.textContent=val;
    }
    else
        display.textContent+=val;
}

function result(){
    try{
        display.textContent=eval(display.textContent);
    }
    catch{
       alert("error");
    }
}

function clearres(){
    display.textContent="0";
}