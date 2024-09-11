let boxes = document.querySelectorAll('.box')
let reset = document.querySelector('#reset-btn')

let winPatters = [
    [0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
let turnO = true;
let turnX = false;
let disableBoxes = () =>{boxes.forEach((box)=>{box.disabled = true})}
let count = 0;
let win = false;
let xMsg = document.querySelector('.msg');
boxes.forEach((box)=>{
    box.addEventListener('click', () =>{
        
        if(turnO){
            box.innerText = 'O';
            turnO = false;
            turnX = true;  
        }
        else{
            box.innerText = 'X';
            turnX = false;
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        console.log("count ", count);
        if(count === 9 && win === false){
            xMsg.innerText = "DRAW !";
        }
    })
});
// let winMsg = document.querySelector('.msg')

let winMsg = (pos1) =>{
    console.log(pos1+" Winner");
    xMsg.innerText = "Winner is "+pos1+"!!";
    // winMsg.classList.add('visibility');
}

function checkWinner()
{  

    for(let wins of winPatters)
    {   
        let pos1 = boxes[wins[0]].innerText; 
        let pos2 = boxes[wins[1]].innerText; 
        let pos3 = boxes[wins[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
            if(pos1===pos2 && pos1 === pos3)
            {
                disableBoxes();
                winMsg(pos1);
                win = true;
            }
    }
    
}
let resetGame = document.querySelector('#reset-btn');
resetGame.addEventListener('mousedown', ()=>{
    boxes.forEach((box) =>{
        box.innerText = '';
        let xMsg = document.querySelector('.msg');
        xMsg.innerText = "";
        box.disabled = false;
        count = 0;
    })
})
