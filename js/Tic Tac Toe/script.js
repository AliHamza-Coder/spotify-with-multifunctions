let player2
let player1
let count =0
let arrwins =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let tick = `<svg class="tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M11.4743 17.3058C14.4874 14.0819 17.3962 11.8949 21.0501 8.79776C22.1437 7.87072 22.3126 6.24578 21.4547 5.09453C20.5429 3.87098 18.8103 3.62642 17.6376 4.59913C14.2907 7.37521 11.6868 10.0482 9.21679 12.9051C9.08718 13.055 9.02237 13.13 8.95511 13.1722C8.78453 13.2792 8.57138 13.2803 8.3997 13.1751C8.33199 13.1336 8.26707 13.0601 8.13722 12.9131L6.82103 11.4229C5.6201 10.0631 3.46608 10.2137 2.46339 11.7274C1.76171 12.7867 1.86569 14.1905 2.71567 15.1334L4.7796 17.4229C6.32334 19.1353 7.09521 19.9916 8.02185 19.9999C8.94849 20.0083 9.79043 19.1075 11.4743 17.3058Z" stroke="currentColor" stroke-width="1.5" />
</svg>`
let cross = `<svg class="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
document.querySelector(".start-btn").addEventListener("click",()=>{
    player2 = document.getElementById("player2").value
    player1 = document.querySelector(".player1").value
    document.querySelector(".welcome").style.top="-100%"
    document.querySelector(".welcome").style.transition="all 0.5s ease-out"
    document.querySelector(".game-players").innerHTML=`<h1>${player1} Vs ${player2} </h1>`;
    displaycurrent(count)
    document.querySelector(".tic-tac-toe-box").addEventListener("click",(e)=>{
        if(e.target.classList.contains("box")){
            if((count%2)!==0){
                e.target.innerHTML = cross
                count++;
                displaycurrent(count)
                }
                else{
                    e.target.innerHTML = tick
                    count++;
                displaycurrent(count)
            }
            checkwins();
        }
    }
    )
})
function displaycurrent(term){
    if((term%2) == 0)
    {
        document.querySelector(".current-player").innerHTML = `<h2>Current Player: ${player1}</h3>`
    }
    else
    {
        document.querySelector(".current-player").innerHTML = `<h2>Current Player: ${player2}</h3>`
    }
}
function checkwins(){
    let boxes = document.querySelectorAll(".box")
    for (const wins of arrwins) {
        let box1val= boxes[wins[0]].innerHTML
        let box2val= boxes[wins[1]].innerHTML
        let box3val= boxes[wins[2]].innerHTML
        if(box1val !="" && box2val!="" &&box3val!="")
        {
            if(box1val.length==box2val.length && box1val.length==box3val.length)
            {
                if(box1val.length==766)
                {
                    document.querySelector(".won-player").innerHTML=`<img src="leftcone.svg" alt=""><h3>Congratulations<br>${player1} You Won </h3><img class="rigth-cone" src="leftcone.svg" alt="">`
                }
                else if(box1val.length==368){
                    document.querySelector(".won-player").innerHTML=`<img src="leftcone.svg" alt=""><h3>Congratulations<br>${player2} You Won </h3><img class="rigth-cone" src="leftcone.svg" alt="">`
                }
            }
        }
    }
}
document.querySelector("#replay").addEventListener("click",()=>
    {
        let box= document.querySelectorAll(".box")
        for (let i = 0; i < box.length; i++) {
            box[i].innerHTML=""
            document.querySelector(".won-player").innerHTML=""
            count=0;
        }
    })