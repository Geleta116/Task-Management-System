// const error = document.getElementById('error')

const fname = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')




form.addEventListener('submit', async function(e){
   
            e.preventDefault();
           await fetch( "http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {

            "email": email.value,
            "password": password.value,
            "name":fname.value,

        } )
    } )
    .then( res => res.json() )
        .then( res => {
            if (res.statusCode == 403){
                  alert("Email already in use")
            } else{
                  location.href = "login.html"
            }

          
            
        } )
           .catch((error) => {
            // TypeError: Failed to fetch
            error.innerText=`This Email has already been used`;
            
          });

          





  
        

        
     



})