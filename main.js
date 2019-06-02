let dayN=1;
for(let i=0;i<42;i++){
    // Creates each day block
    var block = document.createElement("div");   // Create a <button> element
    block.className='block';
    document.getElementsByClassName('monthSheet')[0].appendChild(block);
    
    let startDay=1;
    

    if(i>=startDay && i<31){

        var element= document.createElement('h3');
        block.appendChild(element);

        // Create day
        var dayNum=document.createElement('h3');
        dayNum.innerHTML=dayN;
        block.appendChild(dayNum);

        // create input begin
        var inputB=document.createElement('input');
        inputB.type='time';
        inputB.className = 'quantity';
        inputB.id='start'+i;
        block.appendChild(inputB);

        // create input ending
        var inputE=document.createElement('input');
        inputE.type='time';
        inputE.className = 'quantity';
        inputE.id='end'+i;
        block.appendChild(inputE);

        // create options
        var options=document.createElement('textbox');
        block.appendChild(options);

        // create total hours worked
        // var total= document.createElement('h3');
        // total.className='dayTotal';
        // block.appendChild(total);

        dayN++;
    }else{
        block.className='empty'
    }
   

}

for(let a=0;a<6;a++){
    // Create summary week block
    console.log(a);
    var sBlock = document.createElement("div");
    sBlock.className='sBlock';
    let summary= document.getElementsByClassName('summary')
    summary[0].appendChild(sBlock);

    // Divide total to buttons and summary 
    let buttons = document.createElement('div');
    buttons.className='sButtons';
    let total = document.createElement('div');
    total.className='sTotal';
    total.id='week'+a;
    sBlock.appendChild(buttons);
    sBlock.appendChild(total);

    // Create Buttons
    let copyFirstDay=document.createElement('div');
    copyFirstDay.className='quickButtons';
    copyFirstDay.id='weekq'+a;
    copyFirstDay.textContent='Kopio';
    let resetWeek=document.createElement('div');
    resetWeek.className='quickButtons';
    resetWeek.id='weekq'+a;
    resetWeek.textContent='Reset';
    buttons.appendChild(copyFirstDay);
    buttons.appendChild(resetWeek);

}

// Default time
document.getElementById('start1').value='10:30';
document.getElementById('end1').value='15:00';


function refresh(){

    let totalHours=0;
    let totalMinutes=0;

    for(let i=1;i<6;i++){
        let start=document.getElementById('start'+i).value;
        let end=document.getElementById('end'+i).value;

        let hoursStart=start.slice(0,2);
        let minutesStart=start.slice(3,5);

        let hoursEnd=end.slice(0,2);
        let minutesEnd=end.slice(3,5);
        
        let hoursWorked=hoursEnd-hoursStart;
        let minutesWorked=minutesEnd-minutesStart;

        if(minutesWorked<0){
            hoursWorked--;
            minutesWorked=60+minutesWorked;
        }
        totalHours+=hoursWorked;
        totalMinutes+=minutesWorked;
    }
    if(totalMinutes>=60){
        totalHours+=Math.floor(totalMinutes/60);
        totalMinutes=totalMinutes%60;
    }

    if(totalMinutes==0){
        totalMinutes='00';
    }

    document.getElementById('week0').textContent=totalHours+':'+totalMinutes+'H';
    console.log('Hours: '+totalHours+' Minutes: '+totalMinutes);
}

// Copy Week
let week=document.getElementById('weekq0');

week.addEventListener('click',function(){
        for(var i=1;i<5;i++){
            document.getElementById('start'+i).value = document.getElementById('start1').value;
            document.getElementById('end'+i).value = document.getElementById('end1').value;
    }
    
})

let week2=document.getElementById('weekq1');

week2.addEventListener('click',function(){
        for(var i=7;i<12;i++){
            document.getElementById('start'+i).value = document.getElementById('start1').value;
            document.getElementById('end'+i).value = document.getElementById('end1').value;;
    }
    
})

let week3=document.getElementById('weekq2');

week3.addEventListener('click',function(){
        for(var i=14;i<19;i++){
            document.getElementById('start'+i).value = document.getElementById('start1').value;
            document.getElementById('end'+i).value = document.getElementById('end1').value;;
    }
    
})
