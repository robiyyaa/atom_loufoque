let buttons=document.getElementsByTagName('button');
let question=[];
let div1=document.querySelector('#div1');
let div2=document.querySelector('#div2');
let submit=document.querySelector('#submit');
let submitForm=document.querySelector('#submitForm');
function addHidden(event){
    event.classList.add('hidden');
}
function removeHidden(event){
    event.classList.remove('hidden');
}

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',
    function clickButton(event){
        event.preventDefault();
        if(buttons[i].classList==''+i+''){
            if(i==0||i==1){
                addHidden(div1);
                question.push(i);
                removeHidden(div2);
            }
            else if(i==2||i==3){
                addHidden(div2);
                removeHidden(submit);
                question.push(i);
            }
        }
    });
}
