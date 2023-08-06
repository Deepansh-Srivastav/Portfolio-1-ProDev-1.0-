let radio = document.querySelectorAll('.a')
let display = document.querySelector('.b')
let button = document.querySelector('.click')

button.addEventListener('click', () => {
    display.innerHTML=''
    for (let i = 0; i < radio.length; i++) {

        if (radio[i].checked) {
            for (let j = 1; j < 16; j++) {
                display.innerHTML  +=` <h3>${radio[i].value} X ${j} = ${radio[i].value*j}</h3>`
            }
            break

        }

    }
})