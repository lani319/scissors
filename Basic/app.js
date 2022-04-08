new Vue({

el : "#app",
data : {
    test :  "test1234",
    myChoice : null ,
    comChoice : null,
    count : 3,
    winner : null,
    
},
watch : {
    count : function(newVal){
        if (newVal === 0){
            let rNum = Math.floor( ( Math.random() * 10 ) );
            
            if(rNum > 0 && rNum < 4){
                this.comChoice = "scissor";
            }else if (rNum > 4 && rNum < 7){
                this.comChoice = "rock";
            }else {
                this.comChoice = "paper";
            }

            //승패 결정
            if(this.myChoice == this.comChoice) {
                this.winner = "draw";

            } else if (this.myChoice == "scissor" && this.comChoice == "paper"){
                this.winner = "me";
            } else if (this.myChoice == "scissor" && this.comChoice == "rock"){
                this.winner = "com";
            } else if (this.myChoice == "rock" && this.comChoice == "scissor"){
                this.winner = "me";
            } else if (this.myChoice == "rock" && this.comChoice == "paper"){
                this.winner = "com";
            } else if (this.myChoice == "paper" && this.comChoice == "rock"){
                this.winner = "me";
            } else if (this.myChoice == "paper" && this.comChoice == "scissor"){
                this.winner = "com";
            } else { 
                this.winner = "error";
            }
            console.log(this.winner);
        }
    }
},
methods : {
    startGame : function() {
    
        if(this.myChoice === null){
            alert("값을 선택해주세요");
        }
        else{
            //alert(this.myChoice);
            let thisCount = setInterval(()=>{
                
                this.count -- ;

                if(this.count === 0){
                    clearInterval(thisCount);
                }
            },1000);

            this.count = 3;
     }
        
    }
}

})