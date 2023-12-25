const hour9 = document.querySelector('#hour-9')
const hour10 = document.querySelector('#hour-10')
const hour11 = document.querySelector('#hour-11')
const hour12 = document.querySelector('#hour-12')
const hour1 = document.querySelector('#hour-1')
const hour2 = document.querySelector('#hour-2')
const hour3 = document.querySelector('#hour-3')
const hour4 = document.querySelector('#hour-4')
const currentDay = document.querySelector('#currentDay')
const hour9Save = document.querySelector('#hour-9-save')
const hour10Save = document.querySelector('#hour-10-save')
const hour11Save = document.querySelector('#hour-11-save')
const hour12Save = document.querySelector('#hour-12-save')
const hour1Save = document.querySelector('#hour-1-save')
const hour2Save = document.querySelector('#hour-2-save')
const hour3Save = document.querySelector('#hour-3-save')
const hour4Save = document.querySelector('#hour-4-save')
const hour9Events = document.querySelector('#hour-9-events')
const hour10Events = document.querySelector('#hour-10-events')
const hour11Events = document.querySelector('#hour-11-events')
const hour12Events = document.querySelector('#hour-12-events')
const hour1Events = document.querySelector('#hour-1-events')
const hour2Events = document.querySelector('#hour-2-events')
const hour3Events = document.querySelector('#hour-3-events')
const hour4Events = document.querySelector('#hour-4-events')
const hours = [hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4]
const events = [hour9Events, hour10Events, hour11Events, hour12Events, hour1Events, hour2Events, hour3Events, hour4Events]
const currentHour = dayjs().hour()

//GET file:///C:/Users/gscia/bootcamp/Daily-Planner/path/to/dayjs/dayjs.min.js net::ERR_FILE_NOT_FOUND

const formatPage = () => {
    currentDay.innerText = dayjs().format('MM/DD/YYYY')
    let hour = 9
    for(i in hours){
        events[i].innerText = localStorage.getItem(events[i].id)
        if(hour < currentHour){
            hours[i].setAttribute('class', 'row time-block past')
        }else if(hour === currentHour){
            hours[i].setAttribute('class', 'row time-block present')
        }else{
            hours[i].setAttribute('class', 'row time-block future')
        }
        hour++
    }
}

formatPage()

const createEvent = (id) => {
    if(id === 'hour-9-events'){
        localStorage.setItem(id, hour9Events.value)
    }else if(id === 'hour-10-events'){
        localStorage.setItem(id, hour10Events.value)
    }else if(id === 'hour-11-events'){
        localStorage.setItem(id, hour11Events.value)
    }else if(id === 'hour-12-events'){
        localStorage.setItem(id, hour12Events.value)
    }else if(id === 'hour-1-events'){
        localStorage.setItem(id, hour1Events.value)
    }else if(id === 'hour-2-events'){
        localStorage.setItem(id, hour2Events.value)
    }else if(id === 'hour-3-events'){
        localStorage.setItem(id, hour3Events.value)
    }else{
        localStorage.setItem(id, hour4Events.value)
    }
}

const createEvent9 = () =>{
    createEvent('hour-9-events')
}

const createEvent10 = () =>{
    createEvent('hour-10-events')
}

const createEvent11 = () =>{
    createEvent('hour-11-events')
}

const createEvent12 = () =>{
    createEvent('hour-12-events')
}

const createEvent1 = () =>{
    createEvent('hour-1-events')
}

const createEvent2 = () =>{
    createEvent('hour-2-events')
}

const createEvent3 = () =>{
    createEvent('hour-3-events')
}

const createEvent4 = () =>{
    createEvent('hour-4-events')
}

hour9Save.addEventListener('click', createEvent9)
hour10Save.addEventListener('click', createEvent10)
hour11Save.addEventListener('click', createEvent11)
hour12Save.addEventListener('click', createEvent12)
hour1Save.addEventListener('click', createEvent1)
hour2Save.addEventListener('click', createEvent2)
hour3Save.addEventListener('click', createEvent3)
hour4Save.addEventListener('click', createEvent4)