let myDivision = document.querySelector('div')
Array.from(myDivision.children).forEach(element=>{
   element.classList.add('myclass')
 })
console.log(myDivision.nextElementSibling)