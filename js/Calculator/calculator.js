
let string
function aclear(){
    question.innerHTML="";
}
// For Result
function result(){
    string=question.innerHTML
    console.log(string)
    string=eval(string);
    answer.innerHTML=string
    store()
    question.innerHTML=string
}
function ans()
{
    question.innerHTML=string;
}
function del(){
    question.innerHTML=question.innerHTML.slice(0,-1)
}
//store history
function store(){
    document.getElementById("history-value").innerHTML += `<li> ${question.innerHTML+ " = " + string} </li>`
}
// for getting values
function main(){
    document.querySelectorAll("#btn").forEach(button=>
        {
            button.addEventListener("click",(e)=>
                {
                question.innerHTML=question.innerHTML+e.target.value;
            })
        }
        )
}
main()