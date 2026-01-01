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
function namegenerator() {
   let firstName = ["Jacob", "Michael", "Ethan", "Joshua", "Daniel", "Alexander", "Anthony", "William", "Christopher", "Matthew", "Jayden", "Andrew", "Joseph", "David", "Noah", "Aiden", "James", "Ryan", "Logan", "John", "Nathan", "Elijah", "Christian", "Gabriel", "Benjamin", "Jonathan", "Tyler", "Samuel", "Nicholas", "Gavin", "Dylan", "Jackson", "Brandon", "Caleb", "Mason", "Angel", "Isaac", "Evan", "Jack", "Kevin", "Jose", "Isaiah", "Luke", "Landon", "Justin", "Lucas", "Zachary", "Jordan", "Robert", "Aaron", "Brayden", "Thomas", "Cameron", "Hunter", "Austin", "Adrian", "Connor", "Owen", "Aidan", "Jason", "Julian", "Wyatt", "Charles", "Luis", "Carter", "Juan", "Chase", "Diego", "Jeremiah", "Brody", "Xavier", "Adam", "Carlos", "Sebastian", "Liam", "Hayden", "Nathaniel", "Henry", "Jesus", "Ian", "Tristan", "Bryan", "Sean", "Cole", "Alex", "Eric", "Brian", "Jaden", "Carson", "Blake", "Ayden", "Cooper", "Dominic", "Brady", "Caden", "Josiah", "Kyle", "Colton", "Kaden", "Eli", "Miguel", "Antonio", "Parker", "Steven", "Alejandro", "Riley", "Richard", "Timothy", "Devin", "Jesse", "Victor", "Jake", "Joel", "Colin", "Kaleb", "Bryce", "Levi", "Oliver", "Oscar", "Vincent", "Ashton", "Cody", "Micah", "Preston", "Marcus", "Max", "Patrick", "Seth", "Jeremy", "Peyton", "Nolan", "Ivan", "Damian", "Maxwell", "Alan", "Kenneth", "Jonah", "Jorge", "Mark", "Giovanni", "Eduardo", "Grant", "Collin", "Gage", "Omar", "Emmanuel", "Trevor", "Edward", "Ricardo", "Cristian", "Nicolas", "Kayden", "George", "Jaxon", "Paul", "Braden", "Elias", "Andres", "Derek", "Garrett", "Tanner", "Malachi", "Conner", "Fernando", "Cesar", "Javier", "Miles", "Jaiden", "Alexis", "Leonardo", "Santiago", "Francisco", "Cayden", "Shane", "Edwin", "Hudson", "Travis", "Bryson", "Erick", "Jace", "Hector", "Josue", "Peter", "Jaylen", "Mario", "Manuel", "Abraham", "Grayson", "Damien", "Kaiden", "Spencer", "Stephen", "Edgar", "Wesley", "Shawn", "Trenton", "Jared", "Jeffrey", "Landen", "Johnathan", "Bradley", "Braxton", "Ryder", "Camden", "Roman", "Asher", "Brendan", "Maddox", "Sergio", "Israel", "Andy", "Lincoln", "Erik", "Donovan", "Raymond", "Avery", "Rylan", "Dalton", "Harrison", "Andre", "Martin", "Keegan", "Marco", "Jude", "Sawyer", "Dakota", "Leo", "Calvin", "Kai", "Drake", "Troy", "Zion", "Clayton", "Roberto", "Zane", "Gregory", "Tucker", "Rafael", "Kingston", "Dominick", "Ezekiel", "Griffin", "Devon", "Drew", "Lukas", "Johnny", "Ty", "Pedro", "Tyson", "Caiden", "Mateo", "Braylon", "Cash", "Aden", "Chance", "Taylor", "Marcos", "Maximus", "Ruben", "Emanuel", "Simon", "Corbin", "Brennan", "Dillon", "Skyler", "Myles", "Xander", "Jaxson", "Dawson", "Kameron", "Kyler", "Axel", "Colby", "Jonas", "Joaquin", "Payton", "Brock", "Frank", "Enrique", "Quinn", "Emilio", "Malik", "Grady", "Angelo", "Julio", "Derrick", "Raul", "Fabian", "Corey", "Gerardo", "Dante", "Ezra", "Armando", "Allen", "Theodore", "Gael", "Amir", "Zander", "Adan", "Maximilian", "Randy", "Easton", "Dustin", "Luca", "Phillip", "Julius", "Charlie", "Ronald", "Jakob", "Cade", "Brett", "Trent", "Silas", "Keith", "Emiliano", "Trey", "Jalen", "Darius", "Lane", "Jerry", "Jaime", "Scott", "Graham", "Weston", "Braydon", "Anderson", "Rodrigo", "Pablo", "Saul", "Danny", "Donald", "Elliot", "Brayan", "Dallas", "Lorenzo", "Casey", "Mitchell", "Alberto", "Tristen", "Rowan", "Jayson", "Gustavo", "Aaden", "Amari", "Dean", "Braeden", "Declan", "Chris", "Ismael", "Dane", "Louis", "Arturo", "Brenden", "Felix", "Jimmy", "Cohen", "Tony", "Holden", "Reid", "Abel", "Bennett", "Zackary", "Arthur", "Nehemiah", "Ricky", "Esteban", "Cruz", "Finn", "Mauricio", "Dennis", "Keaton", "Albert", "Marvin", "Mathew", "Larry", "Moises", "Issac", "Philip", "Quentin", "Curtis", "Greyson", "Jameson", "Everett", "Jayce", "Darren", "Elliott", "Uriel", "Alfredo", "Hugo", "Alec", "Jamari", "Marshall", "Walter", "Judah", "Jay", "Lance", "Beau", "Ali", "Landyn", "Yahir", "Phoenix", "Nickolas", "Kobe", "Bryant", "Maurice", "Russell", "Leland", "Colten", "Reed", "Davis", "Joe", "Ernesto", "Desmond", "Kade", "Reece", "Morgan", "Ramon", "Rocco", "Orlando", "Ryker", "Brodie", "Paxton", "Jacoby", "Douglas", "Kristopher", "Gary", "Lawrence", "Izaiah", "Solomon", "Nikolas", "Mekhi", "Justice", "Tate", "Jaydon", "Salvador", "Shaun", "Alvin", "Eddie", "Kane", "Davion", "Zachariah", "Dorian", "Titus", "Kellen", "Camron", "Isiah", "Javon", "Nasir", "Milo", "Johan", "Byron", "Jasper", "Jonathon", "Chad", "Marc", "Kelvin", "Chandler", "Sam", "Cory", "Deandre", "River", "Reese", "Roger", "Quinton", "Talon", "Romeo", "Franklin", "Noel", "Alijah", "Guillermo", "Gunner", "Damon", "Jadon", "Emerson", "Micheal", "Bruce", "Terry", "Kolton", "Melvin", "Beckett", "Porter", "August", "Brycen", "Dayton", "Jamarion", "Leonel", "Karson", "Zayden", "Keagan", "Carl", "Khalil", "Cristopher", "Nelson", "Braiden", "Moses", "Isaias", "Roy", "Triston", "Walker", "Kale", "Jermaine", "Leon", "Rodney", "Kristian", "Mohamed", "Ronan", "Pierce", "Trace", "Warren", "Jeffery", "Maverick", "Cyrus", "Quincy", "Nathanael", "Skylar", "Tommy", "Conor", "Noe", "Ezequiel", "Demetrius", "Jaylin", "Kendrick", "Frederick", "Terrance", "Bobby", "Jamison", "Jon", "Rohan", "Jett", "Kieran", "Tobias", "Ari", "Colt", "Gideon", "Felipe", "Kenny", "Wilson", "Orion", "Kamari", "Gunnar", "Jessie", "Alonzo", "Gianni", "Omari", "Waylon", "Malcolm", "Emmett", "Abram", "Julien", "London", "Tomas", "Allan", "Terrell", "Matteo", "Tristin", "Jairo", "Reginald", "Brent", "Ahmad", "Yandel", "Rene", "Willie", "Boston", "Billy", "Marlon", "Trevon", "Aydan", "Jamal", "Aldo", "Ariel", "Cason", "Braylen", "Javion", "Joey", "Rogelio", "Ahmed", "Dominik", "Brendon", "Toby", "Kody", "Marquis", "Ulises", "Armani", "Adriel", "Alfonso", "Branden", "Will", "Craig", "Ibrahim", "Osvaldo", "Wade", "Harley", "Steve", "Davin", "Deshawn", "Kason", "Damion", "Jaylon", "Jefferson", "Aron", "Brooks", "Darian", "Gerald", "Rolando", "Terrence", "Enzo", "Kian", "Ryland", "Barrett", "Jaeden", "Ben", "Bradyn", "Giovani", "Blaine", "Madden", "Jerome", "Muhammad", "Ronnie", "Layne", "Kolby", "Leonard", "Vicente", "Cale", "Alessandro", "Zachery", "Gavyn", "Aydin", "Xzavier", "Malakai", "Raphael", "Cannon", "Rudy", "Asa", "Darrell", "Giancarlo", "Elisha", "Junior", "Zackery", "Alvaro", "Lewis", "Valentin", "Deacon", "Jase", "Harry", "Kendall", "Rashad", "Finnegan", "Mohammed", "Ramiro", "Cedric", "Brennen", "Santino", "Stanley", "Tyrone", "Chace", "Francis", "Johnathon", "Teagan", "Zechariah", "Alonso", "Kaeden", "Kamden", "Gilberto", "Ray", "Karter", "Luciano", "Nico", "Kole", "Aryan", "Draven", "Jamie", "Misael", "Lee", "Alexzander", "Camren", "Giovanny", "Amare", "Rhett", "Rhys", "Rodolfo", "Nash", "Markus", "Deven", "Mohammad", "Moshe", "Quintin", "Dwayne", "Memphis", "Atticus", "Davian", "Eugene", "Jax", "Antoine", "Wayne", "Randall", "Semaj", "Uriah", "Clark", "Aidyn", "Jorden", "Maxim", "Aditya", "Lawson", "Messiah", "Korbin", "Sullivan", "Freddy", "Demarcus", "Neil", "Brice", "King", "Davon", "Elvis", "Ace", "Dexter", "Heath", "Duncan", "Jamar", "Sincere", "Irvin", "Remington", "Kadin", "Soren", "Tyree", "Damarion", "Talan", "Adrien", "Gilbert", "Keenan", "Darnell", "Adolfo", "Tristian", "Derick", "Isai", "Rylee", "Gauge", "Harold", "Kareem", "Deangelo", "Agustin", "Coleman", "Zavier", "Lamar", "Emery", "Jaydin", "Devan", "Jordyn", "Mathias", "Prince", "Sage", "Seamus", "Jasiah", "Efrain", "Darryl", "Arjun", "Mike", "Roland", "Conrad", "Kamron", "Hamza", "Santos", "Frankie", "Dominique", "Marley", "Vance", "Dax", "Jamir", "Kylan", "Todd", "Maximo", "Jabari", "Matthias", "Haiden", "Luka", "Marcelo", "Keon", "Layton", "Tyrell", "Kash", "Raiden", "Cullen", "Donte", "Jovani", "Cordell", "Kasen", "Rory", "Alfred", "Darwin", "Ernest", "Bailey", "Gaige", "Hassan", "Jamarcus", "Killian", "Augustus", "Trevin", "Zain", "Ellis", "Rex", "Yusuf", "Bruno", "Jaidyn", "Justus", "Ronin", "Humberto", "Jaquan", "Josh", "Kasey", "Winston", "Dashawn", "Lucian", "Matias", "Sidney", "Ignacio", "Nigel", "Van", "Elian", "Finley", "Jaron", "Addison", "Aedan", "Braedon", "Jadyn", "Konner", "Zayne", "Franco", "Niko", "Savion", "Cristofer", "Deon", "Krish", "Anton", "Brogan", "Cael", "Coby", "Kymani", "Marcel", "Yair", "Dale", "Bo", "Jordon", "Samir", "Darien", "Zaire", "Ross", "Vaughn", "Devyn", "Kenyon", "Clay", "Dario", "Ishaan", "Jair", "Kael", "Adonis", "Jovanny", "Clinton", "Rey", "Chaim", "German", "Harper", "Nathen", "Rigoberto", "Sonny", "Glenn", "Octavio", "Blaze", "Keshawn", "Ralph", "Ean", "Nikhil", "Rayan", "Sterling", "Branson", "Jadiel", "Dillan", "Jeramiah", "Koen", "Konnor", "Antwan", "Houston", "Tyrese", "Dereon", "Leonidas", "Zack", "Fisher", "Jaydan", "Quinten", "Nick", "Urijah", "Darion", "Jovan", "Salvatore", "Beckham", "Jarrett", "Antony", "Eden", "Makai", "Zaiden", "Broderick", "Camryn", "Malaki", "Nikolai", "Howard", "Immanuel", "Demarion", "Valentino", "Jovanni", "Ayaan", "Ethen", "Leandro", "Royce", "Yael", "Yosef", "Jean", "Marquise", "Alden", "Leroy", "Gaven", "Jovany", "Tyshawn", "Aarav", "Kadyn", "Milton", "Zaid", "Kelton", "Tripp", "Kamren", "Slade", "Hezekiah", "Jakobe", "Nathanial", "Rishi", "Shamar", "Geovanni", "Pranav", "Roderick", "Bentley", "Clarence", "Lyric", "Bernard", "Carmelo", "Denzel", "Maximillian", "Reynaldo", "Cassius", "Gordon", "Reuben", "Samson", "Yadiel", "Jayvon", "Reilly", "Sheldon", "Abdullah", "Jagger", "Thaddeus", "Case", "Kyson", "Lamont", "Chaz", "Makhi", "Jan", "Marques", "Oswaldo", "Donavan", "Keyon", "Kyan", "Simeon", "Trystan", "Andreas", "Dangelo", "Landin", "Reagan", "Turner", "Arnav", "Brenton", "Callum", "Jayvion", "Bridger", "Sammy", "Deegan", "Jaylan", "Lennon", "Odin", "Abdiel", "Jerimiah", "Eliezer", "Bronson", "Cornelius", "Pierre", "Cortez", "Baron", "Carlo", "Carsen", "Fletcher", "Izayah", "Kolten", "Damari", "Hugh", "Jensen", "Yurem"];
   let no=Math.ceil(Math.random()*3);
   let str="";
   for(let i=0;i<no;i++){
    str+=firstName[Math.floor(firstName.length*Math.random())];
    if(i!=no-1){
     str+=" "
    }
   
   }
   return str;
}

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
                obj[a] = namegenerator();
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
    let obj = [];
    try {
        dtinp = JSON.parse(dtinput.value);
    }
    catch {
        jsoncheck = 0;
        alert("Invalid JSON");
    }
    if (jsoncheck) {
        const countSelect = document.getElementById("count");
        const count = parseInt(countSelect.value);
        for(let i=0;i<count;i++){
          obj.push(generatejson(dtinp));
        }
        
    }
    const outputBox = document.getElementById("output");
    outputBox.textContent = JSON.stringify(obj, null, 2);

})


const downloadbtn=document.getElementById("download");
downloadbtn.addEventListener("click",()=>{
    const outputBox = document.getElementById("output").textContent;
    if(outputBox==="Your generated data will appear here"||!outputBox){
        alert("No data to download");
    }
    else{
     const blob = new Blob([outputBox], { type: "application/json" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "mock_data.json";
  a.click();

    }
})
