import './scss/app.scss';

//FLOOR
let floor = 3;
const maxFloor = 27;
const floorSelect = document.querySelector('.floor__select')

while (floor <= maxFloor) {
    floorSelect.innerHTML += `<option value=${floor}>${floor}</option>`;
    floor++;
}

//ROOM
let room = 1;
const maxRoom = 10
const roomSelect = document.querySelector('.room__select')

while (room <= maxRoom) {
    roomSelect.innerHTML += `<option value=${room}>${room}</option>`;
    room++
}

//DATE
let nowDate = new Date()
let year = nowDate.getFullYear()
let month = nowDate.getMonth() + 1
let day = nowDate.getDate()

if (day < 10) day = `0${day}`
if (month < 10) month = `0${month}`

let dayInfo = `${year}-${month}-${day}`

const dataInput = document.querySelector('.data__input')
dataInput.min = dayInfo
dataInput.value = dayInfo

//TIME
const timeInput = document.querySelector('.time__input')
let time = 9;
let lastInterval = 21;
while (time <= lastInterval) {
    timeInput.innerHTML += `<option>${time}:00 - ${time + 1}:00</option>`
    time++;
}


//SUBMIT
const btn = document.querySelector('.submit')
const form = document.querySelector('.booking__form')
form.addEventListener('submit', handleFormSubmit)

function getFormData(formNode) {
    let dataObj = {}
    Array.from(formNode).filter(item => !!item.name)
        .forEach(el => {
            dataObj[el.name] = el.value
        })
    let data = JSON.stringify(dataObj)
    console.log(data)
}


function handleFormSubmit(event) {
    event.preventDefault()
    getFormData(form)
}

btn.addEventListener('submit', submitForm)
function submitForm() {
    console.log(roomSelect.value)
}