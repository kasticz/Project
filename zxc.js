
function dec2FactString(nb) {
    let alph = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    let num = nb;
    let res = `0`;
    let del = 2;
    while(num > 0){  
        if(num % del > 9){
            res += alph.indexOf(num % del - 10)
        } else{
            res += num % del
        }
        num = Math.floor(num / del);
        del++;
        if(del > 20){
            break;
        }
    }
    return res.split(``).reverse().join(``);
}
function factString2Dec(str) {
    let alph = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    let res;
    if(+str[0] == str[0]){
     res = +str[0];
    }else{
        res = alph.indexOf(str[0]) + 10
    }
    for(let i = 1; i < str.length - 1;i++){
        res = (res * (str.length - i))
        if(str[i] == +str[i]){
            res += +str[i]  
        }else{
            res += alph.indexOf(str[i]) + 10;
        }      
    }
    return res;
}



console.log(factString2Dec(`341010`))
console.log(dec2FactString(463))

