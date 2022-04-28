for(var i = 0; i < 10; i++){
    function x(i){
        return () =>{
            console.log(i)
        } 

    }
    setTimeout(x(i), 1000);

}