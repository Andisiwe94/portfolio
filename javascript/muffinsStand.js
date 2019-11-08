// create days of week array
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satursday", "Sunday"];

// define types of weather
var weather = ["Sunny", "PartlySunny", "PartlyCloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

// set min and max temps
var maxTemp = 110;
var minTemp = 32;

// cost (to you) of a muffins 
var muffinsCost = 0.5;

// array for storing daily temps
var dailyTemp = [];

// listen for order
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

// make the week's weather
generateWeather();

/**
generates weather for the week
**/
function generateWeather() {
    var weatherToday;
    var tempToday;
    for (var i = 0; i < days.length; i++) {
        weatherToday = weather[Math.floor(Math.random() * weather.length)];
        tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        dailyTemp[i] = tempToday;
        document.getElementById("7DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

/**
calculates muffinss sold
**/
function openTheStand() {
    var muffinsSold = 0; // daily
    var totalMuffins = 0; // weekly
    var MuffinsLeft = 0; // left to sell

    // clear out previous results
    resetForm();

    // get input
    var numMuffins = Number(document.getElementById("numMuffins").value);
    var muffinsPrice = Number(document.getElementById("muffinsPrice").value);


    for (var i = 0; i < days.length; i++) {

        // muffins sold depends on temp and price
        muffinsSold = Math.floor(dailyTemp[i] / muffinsPrice);

        // how many muffins do we have now?
        muffinsLeft = numMuffins - totalMuffins;

        // we can't sell more than we have
        if (muffinsSold > muffinsLeft) {
            muffinsSold = muffinsLeft;
        }

        // increase the weekly total
        totalMuffins = muffinsSold + totalMuffins;

        // display daily total
        document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + muffinsSold + " muffins.</p>";

    }

    displayResults(numMuffins, muffinsPrice, totalMuffins);

}

/**
calculates results and displays a report
**/
function displayResults(weeklyInventory, muffinsPrice, weeklySales) {
    // calculate results
    var revenue = weeklySales * muffinsPrice;
    var expense = weeklyInventory * muffinsCost;
    var leftOver = weeklyInventory - weeklySales;
    var profit = revenue - expense;

    // print out the weekly report
    document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " muffins this week.</p>";
    document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " muffins left over.</p>";
    document.getElementById("result").innerHTML += "<p>Each muffins costs you $" + muffinsCost + ". Your profit was $" + profit + ".";
}

/**
resets the game so that a new order can be placed
**/
function resetForm() {
    document.getElementById("result").innerHTML = "";

}