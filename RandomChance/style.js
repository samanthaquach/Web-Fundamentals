function playSlots(numOfQuarters){
    while(numOfQuarters > 0){
        var win = Math.floor(Math.random()*100);
        if(win == 1){
            var amountWon = Math.random()*50 + 50
            return amountWon + numOfQuarters
        }
    }
    return 0
}
