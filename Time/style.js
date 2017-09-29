var HOUR = 8;
var MINUTE = 10;
var PERIOD = "AM"

var i = "It's ";

if(MINUTE > 30){
    i += "almost " + (HOUR + 1)
}else{
    i += "just after " + HOUR
}

if(PERIOD == "PM"){
    i += " in the evening."
}else{
    i += " in the morning."
}

console.log(i)