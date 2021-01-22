//Kilometer to meter converting function

function kilometerToMeter(kilometer){
    if (typeof(kilometer) !== 'number' || kilometer < 0 ){
        return "Distance value should be a positive number"
    }
    else{
        var meter = kilometer * 1000 ;
        return meter 
    }
}


//budget calculating function

function budgetCalculator(numOfWatch = 0, numOfPhone = 0, numOfLaptop = 0){
   if (typeof(numOfWatch) !== "number" || typeof(numOfPhone) !== "number" || typeof(numOfLaptop) !== "number" ){
    return "Please enter  number's of product" ;

   } else if (numOfWatch < 0 || numOfPhone < 0 || numOfLaptop < 0) {
    return " Enter a positive number " ;

   } else {

       var watchCost = numOfWatch * 50 ;
       var phoneCost = numOfPhone * 100 ;
       var laptopCost = numOfLaptop * 500 ;
       var totalCost = watchCost + phoneCost + laptopCost ;
       return totalCost ;
   }
}


// Hotel cost calculating function

function hotelCost(days){
    var  cost = 0 ;
    if(isNaN(days) || days < 0){
        return 'please enter a valid number'
    }
    if(days <= 10){
        cost = days * 100 ;

    } else if( days <= 20){
        var tenDaysCost = 10 * 100 ;
        var remainingCost = (days - 10) * 80 ;
        cost = tenDaysCost + remainingCost ;
         
    } else{
        var tenDaysCost = 10 * 100 ;
        var secondTenDaysCost = 10 * 80 ;
        var remainingCost = (days - 20) * 50 ;
        cost = tenDaysCost + secondTenDaysCost + remainingCost ; 
    }
    return cost ;
}


// Finding largest name form a array


function megaFriend(array){
    var largest ;
    var length = 0 ;
    if (array.length == 0) {
        return 'This array is empty'
    
    } else if(Array.isArray(array) ){ 

         for(let i = 0; i < array.length; i++){
              var elementLength = array[i].length;

           if(elementLength > length ){
               length = elementLength;
               largest = array[i];
           }
        } 
     } else{
         return ' Please enter an array' ; 
       }
    return largest ;
}
