let screen = document.querySelector(".screen")
let screen_bar,menubtn,reload_btn;
reload_btn=document.querySelector(".reload-btn")
screen_bar = document.querySelector(".screen-bar")
menubtn = document.querySelector(".menu-btn")
menubtn.addEventListener("click",()=>{
    screen_bar.style.display="block"
    screen.style.display="none"
    menubtn.style.display="none"
    reload_btn.style.display="none"
})
Array.from(document.getElementsByClassName("button")).forEach(e=> {
    e.addEventListener("click",(e)=>{
        switch(e.target.textContent)
        {
            case 'Click Me For Video Display':
                {
                    screen.src="./js/Display screen video/screen.html"
                }
            break;
            case 'Click Me For Tic Tac Toe':
                {
                    screen.src="./js/Tic Tac Toe/tictac.html"
                }
            break;
            case 'Click Me For Calculator':
                {
                    screen.src="./js/Calculator/calculator.html"
                }
            break;
            case 'Click Me For Gpa Calculator':
                {
                    screen.src="./js/Gpa Calculator/gpa.html"
                }
                break;
            }
            screen_bar.style.display="none";
            menubtn.style.display="block";
            reload_btn.style.display="block"
            screen.style.display="block"
    })
})
reload_btn.addEventListener("click",()=>{
    screen.src=screen.src
})