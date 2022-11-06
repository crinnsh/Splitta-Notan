const showAmount = document.getElementById("result");
showAmount.style.display = "none";

showSum = false;

function calculate(){
    var sum = document.getElementById('sum').value;
    var numberOfFriends = document.getElementById('numberOfFriends').value;
    var tip = document.getElementById('tip').value;

    var tippercentage = parseFloat(tip) + 1;
    var totalcost = sum * parseFloat(tippercentage);
    var total = parseFloat(totalcost) / numberOfFriends;

    console.log(total);
    console.log("calculated");

    showAmount.style.display= "block";

    var showSum = document.getElementById("result");
    showSum.innerHTML = (Math.floor(total) + " SEK");
}