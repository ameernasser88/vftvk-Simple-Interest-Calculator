



function compute()
{
    var principal = document.getElementById("principal");
var years = document.getElementById("years");
var rate = document.getElementById("rate");
    

    var interest = principal.value * years.value * rate.value / 100;
    yearInFuture = new Date().getFullYear() + parseInt(years.value);
    result = document.getElementById("result")
    result.innerHTML = "<p>If you deposit <mark>"
                        + principal.value
                         +"</mark>,<br>an interest rate of <mark>"
                          + rate.value + "%</mark>.<br>You will receive an amount of <mark>"
                          +interest+"</mark>,<br>in the year <mark>"
                          +yearInFuture+"</mark></p>";
    
}
        


function updateSliderValue(){
    var rate = document.getElementById("rate");

document.getElementById("rateValue").innerText = rate.value + "%"
}