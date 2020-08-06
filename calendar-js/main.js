'use strict';
console.clear;
{
  const today =new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  function getCalenderHead(){
    const dates =[];
    
    const d =new Date(year,month,0).getDate();
    const n = new Date(year, month, 1).getDay();
    for(let i =0; i < n; i++){
      dates.unshift({
        date:d-i,
        isToday:false,
        isDisabled:true,
      })
    }
    return dates;
    // console.log(dates);


  }
  function getCalendertail(){
    const dates =[];
    for(let i=1; i< 7-new Date(year,month+1,0).getDay();i++ ){
      dates.push({
        date:i,
        isToday:false,
        isDisabled:true,
      })
    }
    return dates;
    // console.log(dates);
  }

  function getCalenderBody(){
    const dates =[];
    const lastDate = new Date(year,month +1, 0).getDate();
    
      for(let i =1;i <=lastDate;i++){
        dates.push({
          date:i,
          isToday: false,
          isDisabled: false,
        } );
      }
      if(year === today.getFullYear()&& month === today.getMonth()){

        dates[today.getDay()-1].isToday =true;
      }
      // console.log(dates);
      return dates;
    }
  function clearCalendar(){
    const tbody = document.querySelector('tbody');
    while(tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }
  function rendertitle(){
    const title = `${year}/${String(month+1).padStart(3,'0')}`;
    document.getElementById('title').textContent =title;
  }
  function renderWeeks(){
    const dates = [
      ...getCalenderHead(),
      ...getCalenderBody(),
     ... getCalendertail(),
    ];
    const weeks =[];
    const weekCount = dates.length/7;
    for (let i =0; i < weekCount; i++){
      weeks.push(dates.splice(0,7))
    }
    weeks.forEach(week =>{
      const tr = document.createElement('tr');
  
      week.forEach(a =>{
        const td =document.createElement('td');
        
        td.textContent = a.date;
        if(a.isToday){
          td.classList.add('today');
        }
        if(a.isDisabled){
          td.classList.add('disabled')
        }
        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr);
    });
    console.log(weeks);
  }
  
  function createCalender(){
    clearCalendar();
    rendertitle();
    renderWeeks();
  }
            document.getElementById('prev').addEventListener('click',()=>{
              month--;
              if(month <0){
                year--;
                month =11
              }
              createCalender();
            });
            
    
  document.getElementById('next').addEventListener('click',()=>{
    month++;
    if(month > 11){
      year++;
      month =0
    }
    createCalender();
  });
    document.getElementById('today').addEventListener('click',()=>{
      year = today.getFullYear();
      month =today.getMonth();
      
      createCalender();
  });
  createCalender();
 



}
