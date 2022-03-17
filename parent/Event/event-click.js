


// let items = document.querySelectorAll('li')
// items.forEach(item=>{
//     item.addEventListener('click', (e)=>{
// e.target.add('html');

//     })
// })
// let btn = document.querySelector('button')
// const ul = document.querySelector('ul')
// console.log(ul)
// ul.addEventListener('click', ()=>{
//     console.log('im a ul ')
// })
// const ul = document.querySelector('ul')
// ul.addEventListener('click', ()=>{
//     const li = document.createElement('li');
//   li.textContent="do something!";
//     ul.prepend(li)
// })
// let color = document.querySelector('button')
// color.addEventListener('click', ()=>{
// let li = document.getElementsByTagName('li')
//   for(i=0; i<li.length;  i++){  
//     li[0].style.color='red';
//     li[1].style.color='green';
//     li[2].style.color='blue';
// }
// color.addEventListener('click',()=>{
//     alert('your course svelt ')
// })
// let title = document.querySelector('h1')
// title.addEventListener('click', ()=>{
//     alert('dont change me' );
// })
// })

// let btn = document.querySelector('button');
// const ul = document.querySelector('ul');
// ul.addEventListener('click', e => {
// //    e.target.remove();
// })

// const content = document.querySelector('.content');
// const zone = document.querySelector('.zone');
// const bord = document.querySelector('.bord');
//  content.addEventListener('copy', ()=>{
//      alert('please my content is copyright')
//  })
// zone.addEventListener('mousemove', (e)=>{
// bord.innerText=`X:${e.pageX}-Y: ${e.pageY}` 
// })
// let items = document.queryselectorall('li');
//  items.foreach(item=>{
//      item.addeventlistener('click', (e)=>{
//         console.log('im a li')
//        e.stoppropagation();
//      })

//  })

    const root = document.querySelector('.container');
    const hex = document.querySelector('.hex');
    const bg= document.querySelector('.bg');
    root.addEventListener('mousemove' ,(e)=>{
       bg.style.left =`${e.clientX}px`;
       bg.style.top =`${e.clientY}px`;
    })
 