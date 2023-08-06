let name = document.querySelector('#name')
let age = document.querySelector('#age')
const agree = document.querySelector('#agree')
const disagree = document.querySelector('#disagree')
const clear = document.querySelector('#clear')
let greet = document.querySelector('.greeting')

agree.addEventListener('click',()=>{
    greet.innerText= `Welcome Mr. ${name.value} you are ${age.value} years old`
    
})
disagree.addEventListener('click',()=>{
    greet.innerText= `You Disagreed!`
})
clear.addEventListener('click',()=>{
    greet.innerText= ``
    age.value = ''
    name.value = ''
})
