const form = document.getElementById('form')
const title = document.getElementById('title')
const description = document.getElementById('description')
const date= document.getElementById('date')
const display = document.getElementsByClassName("displayTask")[0]

display.addEventListener('click', function(){
      location.href = "tasks.html"
})
let token = localStorage.getItem('user');
token = token.slice(0,token.length)

form.addEventListener('submit', async function(e){
   
      e.preventDefault();
     await fetch( "http://localhost:3000/tasks", {
  method: 'POST',
  headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify( {

      "title": title.value,
      "description": description.value,
      "dueDate":date.value,

  } )
} )
.then( res => res.json())
.then( res =>{
      console.log(res)
      location.href = "tasks.html"
})
  

    






  

  




})