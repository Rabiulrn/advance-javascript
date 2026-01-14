let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    //console.log(bonus);
    if(result > 9){
        var mood = "happy"; //hoesting hobe
                            //var use korle uporer dike utheye rwkhe dey.
                            //let or const use korle scope (if,for,fn etc scop) er baire accesable na
        mood = "fishy";     
        mood = 'funky';
        mood = "cranky"
        //console.log(mood);
    }
    let day = "friday"; ////akhane var use korleo undefine dekhabe,karon
                        ////sudhu variable pabe but value pabe na.
    console.log(day);
                        
    
    return result;
}

const output = sum(3, 7);
//console.log(bonus);
//console.log(output);
