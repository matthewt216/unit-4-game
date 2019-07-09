var randomnumber = Math.floor(Math.random() * 102) + 19;
var wins = 0;
var losses = 0;
var score = 0;
var ruby = Math.floor(Math.random() * 12) + 1;
var sapphire = Math.floor(Math.random() * 12) + 1;
var yellow = Math.floor(Math.random() * 12) + 1;
var lime = Math.floor(Math.random() * 12) + 1;
$("#number").html("<h2>" + randomnumber + "</h2>");
$("#wins").html("Wins: " + wins + "<br>" + "Losses: " + losses);
$("#score").text("Your total score is: ");
$("#scorer").text(score);
$("#ruby").on("click", function(){
score = score + ruby;
$("#scorer").text(score);
if (score === randomnumber){
    alert("You win!");
    wins++;
    $("#wins").html("Wins: " + wins + "<br>" + "Losses: " + losses);
    score = 0;
    $("#scorer").text(score);
    randomnumber = Math.floor(Math.random() * 102) + 19;
    $("#number").html("<h2>" + randomnumber + "</h2>");
    ruby = Math.floor(Math.random() * 12) + 1;
    sapphire = Math.floor(Math.random() * 12) + 1;
    yellow = Math.floor(Math.random() * 12) + 1;
    lime = Math.floor(Math.random() * 12) + 1;
     }
else if (score > randomnumber){
    alert("You lose!");
    losses++;
    $("#wins").html("Wins: " + wins + "<br>" + "Losses: " + losses);
    score = 0;
    $("#scorer").text(score);
    randomnumber = Math.floor(Math.random() * 102) + 19;
    $("#number").html("<h2>" + randomnumber + "</h2>");
    ruby = Math.floor(Math.random() * 12) + 1;
    sapphire = Math.floor(Math.random() * 12) + 1;
    yellow = Math.floor(Math.random() * 12) + 1;
    lime = Math.floor(Math.random() * 12) + 1;
    }
});
$("#sapphire").on("click", function(){
    score = score + sapphire;
    $("#scorer").text(score);
    if (score === randomnumber){
        alert("You win!");
        wins++;
        $("#wins").html("Wins: " + wins + "<br>" + "Losses: " + losses);
        score = 0;
        $("#scorer").text(score);
        randomnumber = Math.floor(Math.random() * 102) + 19;
        $("#number").html("<h2>" + randomnumber + "</h2>");
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        lime = Math.floor(Math.random() * 12) + 1;
    }
    else if (score > randomnumber){
        alert("You lose!");
        losses++;
        $("#wins").html("Wins: " + wins + "<br>" + "Losses: " + losses);
        score = 0;
        $("#scorer").text(score);
        randomnumber = Math.floor(Math.random() * 102) + 19;
        $("#number").html("<h2>" + randomnumber + "</h2>");
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        lime = Math.floor(Math.random() * 12) + 1;
    }
});
$("#yellow").on("click", function(){
    score = score + yellow;
    $("#scorer").text(score);
    if (score === randomnumber){
        alert("You win!");
        wins++;
        $("#wins").html("Wins: " + wins + "<br>" + "Losses: " + losses);
        score = 0;
        $("#scorer").text(score);
        randomnumber = Math.floor(Math.random() * 102) + 19;
        $("#number").html("<h2>" + randomnumber + "</h2>");
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        lime = Math.floor(Math.random() * 12) + 1;
    }
    else if (score > randomnumber){
        alert("You lose!");
        losses++;
        $("#wins").html("Wins: " + wins + "<br>" + "Losses: " + losses);
        score = 0;
        $("#scorer").text(score);
        randomnumber = Math.floor(Math.random() * 102) + 19;
        $("#number").html("<h2>" + randomnumber + "</h2>");
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        lime = Math.floor(Math.random() * 12) + 1;
    }
});
$("#lime").on("click", function(){
    score = score + lime;
    $("#scorer").text(score);
    if (score === randomnumber){
        alert("You win!");
        wins++;
        $("#wins").html("Wins: " + wins + "<br>" + "Losses: " + losses);
        score = 0;
        $("#scorer").text(score);
        randomnumber = Math.floor(Math.random() * 102) + 19;
        $("#number").html("<h2>" + randomnumber + "</h2>");
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        lime = Math.floor(Math.random() * 12) + 1;
    }
    else if (score > randomnumber){
        alert("You lose!");
        losses++;
        $("#wins").html("Wins: " + wins + "<br>" + "Losses: " + losses);
        score = 0;
        $("#scorer").text(score);
        randomnumber = Math.floor(Math.random() * 102) + 19;
        $("#number").html("<h2>" + randomnumber + "</h2>");
        ruby = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        lime = Math.floor(Math.random() * 12) + 1;
    }
});