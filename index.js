let engTrans01 = ["They are the best teams", "They are the best teams", "The main event"];
let engTrans11 = ["The Master", "The best", "The great teams", "The champions."];
let engTrans21 = ["A big meeting", "A great sporting event", "The main event."];
let engTrans31 = ["The Master", "The best", "The great teams", "The champions."];
let engTrans41 = ["They are the best teams", "They are the best teams", "These are the champions."];
let engTrans51 = ["The Master", "The best", "The champions."];
let all = [engTrans01, engTrans11, engTrans21, engTrans31, engTrans41, engTrans51];
let sub_Div = document.getElementById("sub_Div");
let translateBtn = document.getElementById("translateBtn");

translateBtn.addEventListener("click", changeT);


function changeT(){
    sub_Div.innerHTML = all;
    
}








