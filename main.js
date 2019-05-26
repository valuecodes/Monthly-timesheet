
for(let i=0;i<42;i++){
    // Creates each day block
    var block = document.createElement("div");   // Create a <button> element
    block.className='block';
    document.getElementsByClassName('monthSheet')[0].appendChild(block);
    
    // // create beginning
    // var beginning=document.createElement('h3');
    // beginning.innerHTML='Alku';
    // block.appendChild(beginning);

    // // create ending
    // var ending=document.createElement('h3');
    // ending.innerHTML='Loppu';
    // block.appendChild(ending);

    // create 
    var element= document.createElement('h3');
    block.appendChild(element);

    // Create day
    var dayNum=document.createElement('h3');
    dayNum.innerHTML=i+1;
    block.appendChild(dayNum);

    // create input begin
    var inputB=document.createElement('input');
    inputB.type='time';
    inputB.className = 'quantity';
    block.appendChild(inputB);

    // create input ending
    var inputE=document.createElement('input');
    inputE.type='time';
    inputE.className = 'quantity';
    block.appendChild(inputE);

    // create options
    var options=document.createElement('textbox');
    block.appendChild(options);

    // create total hours worked
    var total= document.createElement('h3');
    block.appendChild(total);

}
  