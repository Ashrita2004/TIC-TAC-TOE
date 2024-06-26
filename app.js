let boxes = document.querySelectorAll(".press");
let clickBtn = document.querySelector("#click");
let newBtn = document.querySelector("#new");
let contBtn = document.querySelector(".cont");
let msg = document.querySelector("#msg");


let turn_O =true;


const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8], 
];

boxes.forEach((press) => {
    press.addEventListener("click",()=>
    {
    console.log("CLICKED!!");
    if(turn_O == true)
    {
        press.innerText = "X";
        turn_O = false;
    }
    else
    {
        press.innerText = "O";
        turn_O = true;
    }
   
        press.disabled = true;
      

    checkWinner();
    });
});

const declareWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS, BAAJIGAAR IS ${winner}`;
    contBtn.classList.remove("hide");
    for (let press of boxes) {
        press.disabled = true;
      }
};

const checkWinner = () => {
    for(let pattern of win){
        let v1 = boxes[pattern[0]].innerText;
        let v2 = boxes[pattern[1]].innerText;
        let v3 = boxes[pattern[2]].innerText;
        
    if(v1 != "" && v2 != "" && v3 != ""){
        if(v1=== v2 && v2 === v3)
        {
            alert("WINNER : "+ v1);
            declareWinner(v1);
            for (let press of boxes) {
                press.disabled = true;
              }
            
        }
      }     
    }
  };

  newBtn.addEventListener("click", () => {
    turn_O = true;
    for (let press of boxes) {
        press.disabled = false;
        press.innerText = "";
      };
    contBtn.classList.add("hide");
});

  clickBtn.addEventListener("click", () => {
    turn_O = true;
    for (let press of boxes) {
        press.disabled = false;
        press.innerText = "";
      };
    
    contBtn.classList.add("hide");
});