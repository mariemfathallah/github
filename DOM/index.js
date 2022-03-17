


// //Array methods : filter 
// let ages = [5,25 ,50, 10,7,58];
// []
// let filtredAges =  ages.filter(age=>age >= 25)

// console.log(`${filtredAges}` ,"le tableaux principale:", `${ages}`);
// //Array methods : filter


console.log('**********---------------------------**************')
 
//sort the number
let ages = [5, 2, 25 ,50, 10,7,58];
let result = ages.sort((a,b)=>{
  if(a<b){
    return -1
  }else if(b<a){
    return 1
  }else{
    return 0
  }
});


console.log(ages)
//sortting the string 
let persons = ['anwer','amani','marwa','med amine','ala','youssri']
persons.sort();
console.log(persons)