new Vue({

el : "#app",
data : {
    test :  "test1234",
    myChoice : null ,
    gameCount : 5,
},
methods : {
    startGame : function() {
    
        if(this.myChoice === null){
            alert("값을 선택해주세요");
        }
        else{
            //alert(this.myChoice);
            let thisCount = setInterval(()=>{
                
                this.gameCount -- ;

                if(this.gameCount === 0){
                    clearInterval(thisCount);
                }
            },1000);
     }
        
    }
}

})