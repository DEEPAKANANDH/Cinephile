const {Title}=Qs.parse(window.location.search,{
    ignoreQueryPrefix: true
})

const start=async ()=>{
    
        const res=await axios.post("https://movie-cinephile-latest.onrender.com/api/imdb/find",{Title})
        console.log(res)
        document.getElementById("title").innerHTML=res.data[0].name;
        //document.getElementById("typing").innerHTML=res.data[0].name;
        document.getElementById("actor").innerHTML=res.data[0].actor;
        const Buffer=res.data[0].avatar;
        const Buffer_data=res.data[0].avatar.data;
        function arrayBufferToBase64( buffer ) {
            var binary = '';
            var bytes = new Uint8Array( buffer );
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode( bytes[ i ] );
            }
            return window.btoa( binary );
        }
        movie_image.setAttribute('src', "data:image/jpg;base64," + arrayBufferToBase64(Buffer_data));
        
        const rate=parseInt(res.data[0].rating);
        document.getElementById("rating").innerHTML=rate;

        switch(rate){
            case 5:
                document.getElementById('star5').classList.add('checked')
            case 4:
                document.getElementById('star4').classList.add('checked')
            case 3:
                document.getElementById('star3').classList.add('checked')
            case 2:
                document.getElementById('star2').classList.add('checked')
            case 1:
                document.getElementById('star1').classList.add('checked')
                break;
            default:
                break;
                
        }
        document.getElementById('Genres').innerHTML=res.data[0].Genres;
        document.getElementById('Description').innerHTML=res.data[0].description;
        download_lik.setAttribute('href',res.data[0].download);
        trailer.setAttribute('src',res.data[0].embed);

}
start()
