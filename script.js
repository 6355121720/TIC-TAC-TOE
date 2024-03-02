let p1=document.querySelector("#p1");
let p2=document.querySelector("#p2");
let gameBox=document.querySelector("#gamebox");
let start=document.querySelector("#new");
let boxes=document.querySelectorAll(".box");
let messege=document.querySelector("#messege");
let flag=0,count=0;
gameBox.addEventListener("click",check);

start.addEventListener("click",newGame);

function newGame(){
    boxes.forEach((ele)=>{
        ele.innerHTML="";
    })
    messege.innerHTML="New Game started."
    flag=0,count=0;
    messege.style.backgroundColor="deepskyblue";
    p2.style.border="none";
    p2.style.transform="none";
    p1.style.border="3px solid black";
    p1.style.transform="scale(1.1)";
    gameBox.addEventListener("click",check);
}

function check(e){
        if(e.target.innerHTML===""){
            if(flag===0){
                e.target.innerHTML="O";
                flag=1;
                count++;
            }
            else{
                e.target.innerHTML="X";
                flag=0;
                count++;
            }
        }
        if((boxes[0].innerHTML===boxes[1].innerHTML && boxes[1].innerHTML===boxes[2].innerHTML && boxes[0].innerHTML!=="")||
        (boxes[3].innerHTML===boxes[4].innerHTML && boxes[4].innerHTML===boxes[5].innerHTML && boxes[5].innerHTML!=="")||
        (boxes[6].innerHTML===boxes[7].innerHTML && boxes[7].innerHTML===boxes[8].innerHTML && boxes[8].innerHTML!=="")||
        (boxes[0].innerHTML===boxes[3].innerHTML && boxes[3].innerHTML===boxes[6].innerHTML && boxes[6].innerHTML!=="")||
        (boxes[1].innerHTML===boxes[4].innerHTML && boxes[4].innerHTML===boxes[7].innerHTML && boxes[7].innerHTML!=="")||
        (boxes[2].innerHTML===boxes[5].innerHTML && boxes[5].innerHTML===boxes[8].innerHTML && boxes[8].innerHTML!=="")||
        (boxes[0].innerHTML===boxes[4].innerHTML && boxes[4].innerHTML===boxes[8].innerHTML && boxes[8].innerHTML!=="")||
        (boxes[2].innerHTML===boxes[4].innerHTML && boxes[4].innerHTML===boxes[6].innerHTML && boxes[6].innerHTML!=="")
        ){
            messege.innerHTML=`(${flag===0 ? "X" : "O"} won the Game.)`
            messege.style.backgroundColor="green";
            gameBox.removeEventListener("click",check);
        }
        else if(count===9){
            messege.innerHTML="Match is Draw."
        }
}

gameBox.addEventListener("click",()=>{
    setTimeout(()=>{
        if(flag===1){
            p1.style.border="none";
            p1.style.transform="none";
            p2.style.border="3px solid black";
            p2.style.transform="scale(1.1)";
        }
        else{
            p2.style.border="none";
            p2.style.transform="none";
            p1.style.border="3px solid black";
            p1.style.transform="scale(1.1)";
        }
    },100)
})