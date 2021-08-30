//taking variables from HTML world to Javascript world
var buy=document.querySelector("#buy-price");
var qty=document.querySelector("#quantity");

var cmp=document.querySelector("#currentmarketprice");

var output=document.querySelector("#output");

var calculateButton=document.querySelector("#button");

//when button is clicked calculate function is called.
calculateButton.addEventListener("click", calculate);

function calculate()
{  
    buy=Number(buy.value);
    cmp=Number(cmp.value);
    qty=Number(qty.value);
    var abs;
    var percent;
    if(cmp>buy)
    {
        var profit=cmp-buy;
        var totalProfit=profit*qty;
        var profitPercentage=(profit/buy)*100;
        output.style.color="green"; //bonus
        outputMsg(`Hurray...Total Profit is Rs.${totalProfit} and the Profit Percentage is ${profitPercentage.toFixed(2)}%`)//bonus
    }
    else if(cmp<buy)
    {   
        var loss=buy-cmp;
        abs=loss*qty;
        percent=(loss/buy)*100;
        output.style.color="red";//bonus
        outputMsg(`Unfortunately, Loss is Rs.${abs} and the percent is ${percent.toFixed(2)}%`)//bonus
    }
    else
    {
        var diff=buy-cmp;
        var abs=diff*qty;
        var percent=(diff/buy)*100;
        outputMsg(`No Profit No Loss`)
    }
}


function outputMsg(message)
{   output.innerHTML=message;
}