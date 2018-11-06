
let firstDay =(new Date(year,month)).getDay();

 function daysInMonth(imonth,iyear){
     return 32- new Date(iyear,imonth,32).getDate();
 }

 let date =1;
 for(let i =0; i<6; i++){
     // creates a table row
    let row =document.createElement("tr");
    // creating indiviual cells, fliling them up.
 for(let j= 0; j <7; j++){
     if(i === 0 && j<firstDay){
         cell = document.createElement("td");
     }

 }
 }