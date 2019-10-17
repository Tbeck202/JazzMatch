var players = [
    {
        name: "Karl Malone",
        number: 32,
        difficulty: "bw",
    },
    {
        name: "John Stockton",
        number: 12,
        difficulty: "bw",
    },
    {
        name: "Rudy Gobert",
        number: 27,
        difficulty: "bw",
    },
    {
        name: "Ricky Rubio",
        number: 3,
        difficulty: "bw",
    },
    {
        name: "Kyle Korver",
        number: 26,
        difficulty: "bw",
    },
    {
        name: "Joe Ingles",
        number: 2,
        difficulty: "bw",
    },
    {
        name: "Donovan Mitchell",
        number: 45,
        difficulty: "bw",
    },
    {
        name: "Andrei Kirilenko",
        number: 47,
        difficulty: "ca",
    },
    {
        name: "Paul Millsap",
        number: 24,
        difficulty: "ca",
    },
    {
        name: "Jae Crowder",
        number: 99,
        difficulty: "ca",
    },
    {
        name: "Matt Harpring",
        number: 15,
        difficulty: "ca",
    },
    {
        name: "Mark Eaton",
        number: 53,
        difficulty: "ca",
    },
    {
        name: "Deron Williams",
        number: 8,
        difficulty: "ca",
    },
    {
        name: "Derrick Favors",
        number: 15,
        difficulty: "ca",
    },
    {
        name: "Carlos Boozer",
        number: 5,
        difficulty: "ca",
    },
    {
        name: "Alec Burks",
        number: 10,
        difficulty: "as",
    },
    {
        name: "Adam Keefe",
        number: 31,
        difficulty: "as",
    },
    {
        name: "Trevor Booker",
        number: 33,
        difficulty: "as",
    },
    {
        name: "Thurl Bailey",
        number: 41,
        difficulty: "as",
    },
    {
        name: "Greg Ostertag",
        number: 00,
        difficulty: "as",
    },
    {
        name: "Mehmet Okur",
        number: 13,
        difficulty: "as",
    },
    {
        name: "Jeremy Evans",
        number: 40,
        difficulty: "as",
    },
    {
        name: "Jeff Hornacek",
        number: 14,
        difficulty: "as",
    },
    {
        name: "CJ MIles",
        number: 34,
        difficulty: "as",
    },
    {
        name: "Bryon Russell",
        number: 3,
        difficulty: "as",
    },
    {
        name: "Antoine Carr",
        number: 55,
        difficulty: "as",
    },
    {
        name: "David Benoit",
        number: 21,
        difficulty: "sf",
    },
    {
        name: "Sundiata Gaines",
        number: 15,
        difficulty: "sf",
    },
    {
        name: "Shandon Anderson",
        number: 30,
        difficulty: "sf",
    },
    {
        name: "Ronnie Brewer",
        number: 9,
        difficulty: "sf",
    },
    {
        name: "John Crotty",
        number: 25,
        difficulty: "sf",
    },
    {
        name: "Jeff Malone",
        number: 24,
        difficulty: "sf",
    },
    {
        name: "Jarron Collins",
        number: 31,
        difficulty: "sf",
    },
    {
        name: "Jacque Vaughn",
        number: 11,
        difficulty: "sf",
    },
    {
        name: "Howard Eisley",
        number: 10,
        difficulty: "sf",
    },
    {
        name: "Darrell Griffith",
        number: 35,
        difficulty: "sf",
    },
    {
        name: "Adrian Dantley",
        number: 4,
        difficulty: "sf",
    },
    {
        name: "Blue Edwards",
        number: 30,
        difficulty: "sf",
    },
]
var display = [];

var skillBtn = document.querySelectorAll(".skill");
var skill;


for (var i = 0; i < skillBtn.length; i++){
    skillBtn[i].addEventListener("click", function(){
        skillBtn[0].classList.remove("selected");
        skillBtn[1].classList.remove("selected");
        skillBtn[2].classList.remove("selected");
        skillBtn[3].classList.remove("selected");
        this.classList.add("selected");
        var skill = this.textContent;
        display = [];
        setCards(skill);
    });
}

function setCards(skill){
    if(skill === "Bandwagon"){
        bandWagon();
    }
    else if(skill === "Casual"){
        bandWagon();
        casual();
    }
    else if(skill === "All-Star"){
        bandWagon();
        casual();
        allStar();
    }
    else{
        display = players;
    }
    console.log(display);
}

function bandWagon(){
    for(var i = 0; i < players.length; i++){
        if (players[i].difficulty === "bw"){
            display.push(players[i]);
        }
    }
}

function casual(){
    for(var i = 0; i < players.length; i++){
        if (players[i].difficulty === "ca"){
            display.push(players[i]);
        }
    }
}

function allStar(){
    for(var i = 0; i < players.length; i++){
        if (players[i].difficulty === "as"){
            display.push(players[i]);
        }
    }
}