function checkOrder(available,ordered ){
    if (ordered ===0){
        console.log ("Your order is empty");
        return;
    } if (available>ordered){
        console.log("Your order is accepted");
        return;
    }
    if (available<ordered){
        console.log("Your order is too large, we don’t have enough goods.")
}}

checkOrder (80,0);
checkOrder (80,10);
checkOrder (80,100);