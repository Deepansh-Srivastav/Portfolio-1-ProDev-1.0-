let tableBody = document.querySelector('#tbody')
let button= document.querySelector('#btn')

let sno = 1

button.addEventListener('click',()=>{
sno++
let tr = document.createElement('tr')

//  <th>
let th = document.createElement('th')
th.innerText += sno;
th.innerHTML += '</th>';
// </th>
tr.appendChild(th)


// <td>
  let td1 = document.createElement('td')
  let nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.classList.add('noBorder')
  td1.append(nameInput)
  td1.innerHTML += '</td>'
  
  
  // </td>
  tr.appendChild(td1)
// <td>
  let td2 = document.createElement('td')
  let ageInput = document.createElement('input')
  ageInput.type = 'text'
  ageInput.classList.add('noBorder')
  td2.append(ageInput)
  td2.innerHTML += '</td>'
  
  
  // </td>
  tr.appendChild(td2)
// <td>
  let td3 = document.createElement('td')
  let departmentInput = document.createElement('input')
  departmentInput.type = 'text'
  departmentInput.classList.add('noBorder')
  td3.append(departmentInput)
  td3.innerHTML += '</td>'
  // </td>
  tr.appendChild(td3)
  
tableBody.appendChild(tr)


}) 