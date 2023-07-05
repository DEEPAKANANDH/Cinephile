const searchButton = document.getElementById("search")

const {Category}=Qs.parse(window.location.search,{
    ignoreQueryPrefix: true
})

function submission(){
    document.getElementById('movie').submit()
}
const start = async ()=>{
    const movie=await axios.post("http://localhost:3000/api/imdb/movie_page",{Category})
    console.log(movie)
}
start()



