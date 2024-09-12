 let btn = document.querySelectorAll(".box");
 let reset = document.querySelector("#reset");
 let replay= document.querySelector("#new");
 let con = document.querySelector(".winner");
 let mgs = document.querySelector("#win");
 let turn = false;
 let count = 0;
 const win= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
 ];

btn.forEach((b) => {
    b.addEventListener("click", () =>{
        if(turn){
            b.innerText = "O";
            turn = false;
        } else {
            b.innerText = "X";
            turn = true;
        }
        b.disabled = true;
        count++;
        check();
        draw();
    });

});
const check = ()=>{
        for (let par of win){
            let p1 = btn[par[0]].innerText;
            let p2 = btn[par[1]].innerText;
            let p3 = btn[par[2]].innerText;
            
            if(p1 != "" && p2 != "" && p3 != "")
            {
                if(p1===p2 && p2===p3)
                    {
                        console.log("winner",p1);
                        Show(p1);
                    }
            }
        };
};
function Show(win)
{
mgs.innerText = "Winner: " + win;
con.classList.remove("hide");
dis();
}
function resetgame(){
    turn = false;
    en();
    con.classList.add("hide");
    count = 0;
}
const dis = ()=>{
for(let b of btn ){
    b.disabled = true;
}
};
const en = ()=>{
    for(let b of btn ){
        b.disabled = false;
        b.innerText = "";
    }
    };

reset.addEventListener("click", resetgame);
replay.addEventListener("click",resetgame);

function draw (){
    if (count === 9){
        mgs.innerText = "Draw!";
        con.classList.remove("hide");
        dis();
    }
}