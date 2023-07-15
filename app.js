var initialPrice=document.querySelector("#initial-price");
var stocksQuantity=document.querySelector("#stocks-quantity");
var currentPrice=document.querySelector("#current-price");
var submitBtn=document.querySelector("#submit-btn");
var outputBox=document.querySelector("#output-box");

submitBtn.addEventListener('click',submitHandler)

function submitHandler(){
var ip = Number(initialPrice.value) ;
var qty = Number(stocksQuantity.value) ;
var curr = Number(currentPrice.value) ;

calculateProfitAndLoss(ip,qty,curr);


}


function calculateProfitAndLoss(initial,quantity,current){
  
    if(initial > current){
     var loss = (initial - current) * quantity;
     var lossPercentage = (loss / initial) * 100;
     outputBox.style.color='red';
     showOutput('Sorry the loss is' +' '+ loss +' '+ 'and the percent is' +' '+ lossPercentage +'%');
    }else if(current > initial){
      var profit = (current - initial) * quantity ;
      var profitPercentage =(profit / initial) * 100 ;
      outputBox.style.color = 'green';
     showOutput('Congrats! The profit is' +' '+ profit +' '+ 'and the percent is' +' '+ profitPercentage +'%');
    }else{
      outputBox.style.color = 'blue';
     showOutput("No pain no gain and no gain no pain");
    }
}
 function showOutput(message){  
     
  // switch(status){
  //   case "PROFIT" :
  //   outputBox.innerHTML = message;
  //   break;
  //   case "LOSE" :
  //   outputBox.innerHTML = message;
  //   default :
  //   break;

  // }
    outputBox.innerHTML = message;

 }
