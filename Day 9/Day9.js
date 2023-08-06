const data = [
    { name: 'Gopal', Age: 21 },
    { name: 'Ram', Age: 25 },
    { name: 'Gaurav', Age: 22 },
    { name: 'Raju', Age: 50 },
    { name: 'Neo', Age: 10 },
    { name: 'James', Age: 11 },
    { name: 'Murga', Age: 16 },
    { name: 'joy', Age: 31 }]





let createTable = function (arr) {

    let container = document.querySelector('.container')
    container.innerHTML=''
    let table = document.createElement('table')
    table.classList.add('table')
    
    let thead = document.createElement('thead')

    let headRow = document.createElement('tr')



    for (key in arr[0]) {
        let th = document.createElement('th')
        th.innerHTML += `${key} </th>`
        headRow.appendChild(th)
    }
    thead.appendChild(headRow)
    thead.innerHTML += '</thead>'
    table.appendChild(thead)


    let tbody = document.createElement('tbody')
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr')
        for (key in arr[i]) {
            let td = document.createElement('td')
            td.innerText += arr[i][key]
            td.innerHTML += '</td>'

            tr.appendChild(td)
        }
        tr.innerHTML += '</tr>'
        tbody.appendChild(tr)



    }
    tbody.innerHTML += '</tbody>'
    table.appendChild(tbody)
    table.innerHTML += '</table>'
    container.appendChild(table)
}


createTable(data)


const filter = function () {
    const a = document.querySelector('.container')

    a.innerHTML = ''
}








// task = define data in onject name and age and put that object in array

// and create the table with that data

// after that

// button age< 20   button age>20  filter lagega 

// let z = [20, 19, 1, 5, 4, 21, 25, 26, 28]




// console.log(filter20(z));
// console.log(filter20(data));

let filter30 = function (arr) {

    const container = document.querySelector('.container')
    container.innerHTML=''


    let a = []

    for (let i = 0; i < arr.length; i++) {


        if (arr[i].Age > 30) {
            a.push(arr[i])
        }

    }

    return createTable(a)
    

}
let filterLessThan20 = function (arr) {

    const container = document.querySelector('.container')
    container.innerHTML=''


    let a = []

    for (let i = 0; i < arr.length; i++) {


        if (arr[i].Age < 20) {
            a.push(arr[i])
        }

    }

    return createTable(a)
    

}


let between = function (arr) {

    const container = document.querySelector('.container')
    container.innerHTML=''


    let a = []

    for (let i = 0; i < arr.length; i++) {


        if (arr[i].Age > 20 && arr[i].Age < 27) {
            a.push(arr[i])
        }

    }

    return createTable(a)
    

}