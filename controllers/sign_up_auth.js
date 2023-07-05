const {Email,Password,Username,Confirm_password}=Qs.parse(window.location.search,{
    ignoreQueryPrefix: true
})

const username=document.getElementById('userName')
const email=document.getElementById("email")
const password=document.getElementById("pwd")
const confirm_password=document.getElementById('pwd2')

const signup_authentication=async (e)=>{
    e.preventDefault()
    try{
        const signin=await axios.post("https://movie-cinephile-latest.onrender.com/auth/signup_auth",{Username:username.value,Email:email.value,Password:password.value,Confirm_password:confirm_password.value})
        if(signin.data.message=="exists"){
            document.getElementById('error_msg').style.color="red"
            document.getElementById('error_msg').innerText="User Aldready exists"
        }
        if(signin.data.message){
            document.getElementById('error_msg').style.color="green"
            document.getElementById('error_msg').innerText="Successfully created the account"
            window.location.href="/auth/login"
        }
        else{
            document.getElementById('error_msg').style.color="red"
            document.getElementById('error_msg').innerText="Password is incorrect"
        }
        
    }
    catch(err){
        console.log(err)
    }
    
}
document.getElementById("button1").addEventListener("click",signup_authentication)