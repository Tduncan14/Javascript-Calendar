let today = new Date();

//grabs the month

let currentMonth =today.getMonth();

// grabs the current year

let currentYear = today.getFullYear();

let selectYear = document.getElementById("year");

// grabs the element in the html

let selectMonth = document.getElementById("month");

// creating an array

let months =["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let monthAndYear=document.getElementById("monthAndYear");
// calls the function
showCalendar(currentMonth,currentYear);

function next(){
    currentYear =(currentMonth === 11) ? currentYear + 1: currentYear;
    currentMonth =(currentMonth+1) %12;
    showCalendar(currentMonth,currentYear);
}

function previous(){
    currentYear =(currentMonth === 0) ? currentYear-1: currentYear;
    currentMonth=(currentMonth === 0) ? 11:currentMonth -1; 
    showCalendar(currentMonth,currentYear);
}

function jump(){
    currentYear = parseInt(selectYear.value);
    currentMonth= parseInt(selectMonth.value);
    showCalendar(currentMonth,currentYear);
}

