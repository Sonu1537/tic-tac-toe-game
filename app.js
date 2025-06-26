let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-button");
let NewGameBtn=document.querySelector("#new-button");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turnO=true;//playerX,playerO;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
 const resetGame = () => {
    turnO = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
        turnO=false;
        }
        else{
              box.innerText="X";  
              turnO=true;
             }
             box.disabled= true;

             checkWinner();
    });
});

const showWinner=(winner) =>{
     msg.innerText = `Congratulations! The winner is ${winner}`; 
      msgContainer.classList.remove("hide");
      boxes.forEach((box) => box.disabled = true);

}
  const checkWinner= () => {
    for ( let pattern of winPatterns){
            console.log(pattern[0],pattern[1],pattern[2]);

            console.log(boxes[pattern[0]].innerText,
                boxes[pattern[1]].innerText,
                boxes[pattern[2]].innerText);

    let pos1val=boxes[pattern[0]].innerText
    let pos2val=boxes[pattern[1]].innerText
    let pos3val=boxes[pattern[2]].innerText
if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if(pos1val==pos2val  && pos2val==pos3val){
              console.log("Winner",pos1val);
              showWinner(pos1val);
         }
      }
    
    }
  };
  
resetBtn.addEventListener("click", resetGame);
NewGameBtn.addEventListener("click", resetGame);
