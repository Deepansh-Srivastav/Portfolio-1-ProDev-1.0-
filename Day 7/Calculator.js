const clear = document.querySelector('#clear')
let display = document.querySelector('#display')
const equals = document.querySelector('#equals')
const button = document.querySelectorAll('.btn')



let typeButton = function (character) {
    display.value += character
}

let calculate = () => {
    display.value = eval(display.value)
}


const clr = () => {
    display.value = ''
}

equals.addEventListener('click',calculate )


clear.addEventListener('click', clr)

display.addEventListener('keydown',(e)=>{
    if(e.code === 'NumpadEnter'|| e.code === 'Enter' ){
        calculate()
    }
})