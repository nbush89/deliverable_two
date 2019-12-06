var vacationType = prompt("What kind of vacation would you like to go on, musical, tropical or adventurous?");
var groupSize = prompt("How many people are in your group?");

if (vacationType === "musical") {
    if (groupSize <= 2) {
        let result = "Since you're going on a " + vacationType + " vacation with a group of " + groupSize + ", you should go to New Orleans on First Class. It's still warm this time of year, bring shorts and good walking shoes.";
        alert(result);
    }
    else if (groupSize >= 3 && groupSize <= 5) {
        result = "Since you're going on a " + vacationType + " vacation with a group of " + groupSize + " people, you should go to New Orleans by helicopter. It's still warm this time of year, bring shorts and good walking shoes.";
        alert(result);
    }
    else if (groupSize >= 6) {
        result = "Since you're going on a " + vacationType + " vacation with a group of " + groupSize + " people, you should go to New Orleans and charter a flight there. It's still warm this time of year, bring shorts and good walking shoes.";
        alert(result);
    }
}
else if (vacationType === "tropical") {
    if (groupSize <= 2) {
        let result = "Since you're going on a " + vacationType + " vacation with a group of " + groupSize + ", you should go on a beach vacation to Mexico on First Class. It's still hot this time of year, don't forget to bring the sunscreen!";
        alert(result);
    }
    else if (groupSize >= 3 && groupSize <= 5) {
        result = "Since you're going on a " + vacationType + " vacation with a group of " + groupSize + " people, you should go on a beach vacation to Mexico taking a helicopter there. It's still hot this time of year, don't forget to bring the sunscreen!";
        alert(result);
    }
    else if (groupSize >= 6) {
        result = "Since you're going on a " + vacationType + " vacation with a group of " + groupSize + " people, you should go on a beach vacation to Mexico and charter a flight there. It's still hot this time of year, don't forget to bring the sunscreen!";
        alert(result);
    }
}
else if (vacationType === "adventurous") {
    if (groupSize <= 2) {
        let result = "Since you're going on an " + vacationType + " vacation with a group of " + groupSize + ", you should go white water rafting at The Grand Canyon taking First Class to get there. Visit in the Spring or Fall for the most comfortable temperatures, and don't forget your water shoes!.";
        alert(result);
    }
    else if (groupSize >= 3 && groupSize <= 5) {
        result = "Since you're going on an " + vacationType + " vacation with a group of " + groupSize + " people, you should go white water rafting at The Grand Canyon taking a helicopter there. Visit in the Spring or Fall for the most comfortable temperatures, and don't forget your water shoes!.";
        alert(result);
    }
    else if (groupSize >= 6) {
        result = "Since you're going on an " + vacationType + " vacation with a group of " + groupSize + " people, you should go white water rafting at The Grand Canyon and charter a flight there. Visit in the Spring or Fall for the most comfortable temperatures, and don't forget your water shoes!.";
        alert(result);
    }
}
else {
    result = "That is not a valid choice, please try again.";
    alert(result);
}
console.log(result);