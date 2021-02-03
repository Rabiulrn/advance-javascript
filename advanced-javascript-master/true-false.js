//Falsy:::::::::::::::::
// false
// 0
// ""
// udenfined
// null
// NaN
//Truthy::::::::::::::
//'0', ' ' [] , {} (empty array or object is true)
let name = 12;
if(name  || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}


// const age =4;
// if(age){ //0 asle dhukbe na.//empty string thakle o false a jabe
//     console.log("condition is true");
// }
// else{
//     console.log("condition is false");
// }