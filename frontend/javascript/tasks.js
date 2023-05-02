

const body = document.getElementById("render");
let token = localStorage.getItem('user');
const userid= localStorage.getItem('userid');

const createTaskPage = document.getElementsByClassName("createTask")[0]
createTaskPage.addEventListener('click', function(){
    location.href = "createTask.html"
})

const logout = document.getElementsByClassName('logout')[0]
logout.addEventListener('click', function(){

    
    localStorage.removeItem('user')
    localStorage.removeItem('userid')
    location.href = "login.html"
})






token = token.slice(0,token.length)

async function display(){

const response = await fetch( `http://localhost:3000/tasks/${userid}`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      
  } )

  const data = await response.json();
    let tempTableBody = ""
    

data.forEach(dt =>{
    due = dt.dueDate.slice(0,10)
    if (dt.status == false){
        done = "notdone"
        text = "Not Done"
    }
    else{
        done = "done"
        text = "Done"
    }
      tempTableBody += `
      <div id="task">
      <div id="topic">
      <div > <h1 id="title">${dt.title}</h1></div>
      <div id="date">Due date: ${due}</div>
  </div>
  <div class="description" >
  ${dt.description}
  </div>
  
  <div class="buttons" data-status = ${dt.status} data-title = ${dt.title} data-description = ${dt.description} data-date = ${dt.dueDate} id="${dt.id}">
      <button  class="update"  onclick="updat('form${dt.id}')"> Update </button>
      <button  class="delete" onclick="deleteTask(${dt.id})">Delete</button>
      <button class= ${done} onclick="toggle(${dt.id})">${text}</button>
  </div>
  
  
  </div>

  
  
  
  <form class="hidden" style="display: hidden" id="form${dt.id}" >
  
        <label for="titleform"> Enter the Title</label>
        <input type="text"   id="${dt.id}titleform" name="titleform" placeholder="${dt.title}">

        <label for="descriptionform">Enter Description</label>
        <textarea type="text"  id="${dt.id}descriptionform" name="descriptionform" placeholder="${dt.description}"></textarea>

        <label for="dateform">Enter the Date</label>
        <input type="date" id="${dt.id}dateform"  name="dateform" placeholder="${dt.due}">

        <button type="submit" onclick = "update('${dt.id}')">Update Task</button>
      
  </form>
  
            `
      
  })


  

  


console.log(data);

body.innerHTML = tempTableBody
}

display()







async function deleteTask(id){
    
    
    await fetch(`http://localhost:3000/tasks/${id}`,
    {method:'DELETE',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}).then(res=>res.json())

    display()
}





async function toggle(id){
    let task = document.getElementById(id)
    let val = task.dataset.status
    let status;
    
    if (val == "false")
{
    status = true
}     else{
    status = false
}

await fetch(`http://localhost:3000/tasks/${id}`
   ,
    {method:'PATCH',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },body: JSON.stringify( {
       "status" : status
       } )

}).then(res=>res.json()).then(res =>{
    display()
})

}



async function update(id) {
    let task = document.getElementById(id);
    let titlevalue = document.getElementById(`${id}titleform`);
    let descriptionvalue = document.getElementById(`${id}descriptionform`);
    let datevalue = document.getElementById(`${id}dateform`);
  
    const title = titlevalue.value;
    const description = descriptionvalue.value;
    const date = datevalue.value;
  
    let prevtitle = task.dataset.title;
    let prevdescri = task.dataset.description;
    let prevdate = task.dataset.date;
  
    let curDate = date ? date : prevdate;
    let curDescr = description ? description : prevdescri;
    let curTitle = title ? title : prevtitle;
  
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          'title': curTitle,
          'description': curDescr,
          'dueDate': curDate,
        }),
      });
  
      const data = await response.json();
      console.log(data);
      // display();
    } catch (error) {
      console.error(error);
    }
  }

  function updat(id){
    
    let x = document.getElementById(id);
if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
    x.style.display = 'none';
}

       
//   if (x.style.display === "block") {
//     console.log(x.style.display)
//     x.style.display = "none";
//   } else {
//     console.log(x.style.display)
//     x.style.display = "block";
//   }

  
}
