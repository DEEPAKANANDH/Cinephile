const {Email,Password}=Qs.parse(window.location.search,{
    ignoreQueryPrefix: true
})

const email=document.getElementById("email")
const password=document.getElementById("pwd")

const login_authentication=async (e)=>{
    e.preventDefault()
    try{
        const login=await axios.post("https://movie-cinephile-latest.onrender.com/auth/login_auth",{Email:email.value,Password:password.value})
        if(login.data.success){
            document.getElementById('error_msg').style.color="green"
            document.getElementById('error_msg').innerText="Successfully Logged in"
            window.location.href="/auth/home"
        }else{
            document.getElementById('error_msg').style.color="red"
            document.getElementById('error_msg').innerText="Invalid username passsword"
        }
    }
    catch(err){
        console.log(err)
    }
    
}
document.getElementById("button2").addEventListener("click",login_authentication)