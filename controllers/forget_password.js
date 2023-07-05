/*const {Password}=Qs.parse(window.location.search,{
    ignoreQueryPrefix: true
})
const pass=document.getElementById("pwd_change").value
const change_password=async (e)=>{
    e.preventDefault()
    try{
        const change=await axios.post("https://movie-cinephile-latest.onrender.com/auth/change_pass",{Password:pass})
        if(login.data.success){
            document.getElementById('error_msg').innerText="Password is successfully changed";
        }
        else{
            document.getElementById('error_msg').innerText="Please confirm password correctly";
        }
    }
    catch(err){
        console.log(err);
    }
}

document.getElementById("button3").addEventListener("click",change_password)*/