 const form = document.querySelector('.my-form');
 const myusername= document.querySelector('#username');

const feedback = document.querySelector('.feedback');
const submit = document.querySelector('.buton');


let pattern = /^[a-zA-Z0800@.]/
 form.addEventListener('submit', (e)=>{
 e.preventDefault(); //desactiver le refreche


 })

 myusername.addEventListener('click',(e)=>{
    let username = form.username.value

    if(pattern.test(username)){
form.setAttribute('class','success');
     feedback.textContent= "this username is valid";

    }else{
        form.setAttribute('class','error');
        feedback.textContent="*username must contain letters only and between 5 and 10 charectere"
    }
})
 
// let username="pinguCoder";
// let pattern =/^[a-zA-Z0-10]{5,10}$/;

// console.log(pattern.test(username));

// if (pattern.test(username)){
//     alert('valid');
// }else{
//     alert('invalid')
// }




let courser = document.querySelector('.courses');
document.addEventListener('mousemove', (e)=>{
courser.style.left=`${e.clientX}px`;
courser.style.top=`${e.clientY}px`;

});

 let btn= document.querySelector('.btn');
 let body= document.querySelector('body');
 let para = document.querySelector('p');
 let  title= document.querySelector('h1');
 btn.addEventListener('mousemove', ()=>{
     body.style.backgroundImage="url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
      btn.style.backgroundColor='#ca6702';
      btn.style.color='#e9d8a6';
     btn.style.border='2px dashed #e9d8a6';
     btn.style.transform="rotate(5deg)";
     para.style.color='#bb3e03';
     title.style.color='#ae2012';
 })