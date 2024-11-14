const inputText = document.querySelector('#inputText');
const addbtn = document.querySelector('#addbtn');
const taskList = document.querySelector('#taskList');


addbtn.addEventListener('click', function(){
  const taskItem = document.createElement('li');
  const taskText = document.createElement('span');
  
  const endTaskbtn = document.createElement('button');
  const deletebtn = document.createElement('button');
  
  endTaskbtn.textContent = 'End Task'
  deletebtn.textContent ='Remove'

  taskText.textContent = inputText.value;
  
  taskItem.appendChild(taskText);
  taskItem.appendChild(endTaskbtn);
  taskItem.appendChild(deletebtn);
  taskList.appendChild(taskItem);

  inputText.value ='';

  endTaskbtn.addEventListener('click', function() {
    taskText.style.textDecoration='underline'
    taskText.style.color='green'
    taskItem.removeChild(deletebtn)
  })

  deletebtn.addEventListener('click', function(){
    taskList.removeChild(taskItem);
  })
})

