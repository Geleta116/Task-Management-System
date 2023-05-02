// const error = document.getElementById('error')


const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')


function goToSignup(){
    location.href = "signup.html"
}
form.addEventListener('submit', async function(e){
   
            e.preventDefault();
            fetch( "http://localhost:3000/auth/login", {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {

            "email": email.value,
            "password": password.value,

        } )
    } ).then( res => res.json() )
        .then( res => {
            if (res.statusCode == 403){
                alert("invalid credential")
          }else{
            
            let inMemoryToken = res.access_token;
            let userid = res.user.id;
           
            console.log(res);
            
            if (inMemoryToken){
            location.href = "tasks.html";
            localStorage.setItem(`user`, res.access_token);
            localStorage.setItem(`userid`, userid);
            
            }
            else{
            throw new Error('The user Already Exists')}}
            
        } ).catch((error) => {
            
            error.innerText=`wrong credentials`;
            
          });
      })