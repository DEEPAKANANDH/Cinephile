const movie=require('./movie_models')
const fs=require("fs")
const dbConnect=require("../db");
dbConnect()
//Kollyhood
const userData = [
{
        name:"Love Today",
        actor:"Pradeep",
        rating:5,
        avatar: fs.readFileSync(`../movie_images/lovetdy.jpg`),
        Genres:"Comedy/Love",
        description:"Two young lovers, who are made to exchange their phones for a day and what happens due to that",
        embed:"https://www.youtube.com/embed/FaQe8JFGdaM",
        download:"https://moviesda5.me/love-today-2022-movie-download/",
        category:"Kollyhood"
},
{
        name:"Sita Ramam",
        actor:"Dulquer Salman",
        rating:4,
        avatar: fs.readFileSync(`../movie_images/sitaa.jpg`),
        Genres:"Love/Drama",
        description:"An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them.",
        embed:"https://www.youtube.com/embed/QS2UPxj_Y9w",
        download:"https://kuttymovies1.co/kuttymovies/sita_ramam_(2022).html",
        category:"Kollyhood"
},
{
        name:"Varisu",
        actor:"Vijay",
        rating:4,
        avatar: fs.readFileSync(`../movie_images/varisu.jpg`),
        Genres:"Action/Drama",
        description:"Vijay Rajendran is a happy to-go lucky man. Things change when his father becomes terminally ill, and he is left to manage his business empire",
        embed:"https://www.youtube.com/embed/9fux9swQ5AQ",
        download:"https://vijaysolution.com/varisu-movie-download-hd-480p-720p-review/",
        category:"Kollyhood"
},
{
        name:"KGF-2",
        actor:"Yash",
        rating:5,
        avatar: fs.readFileSync(`../movie_images/kgf-2.jpg`),
        Genres:"Action/Crime",
        description:"In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order.",
        embed:"https://www.youtube.com/embed/tLeTx5OdjZs",
        download:"https://moviesda5.me/movie/page/73701/",
        category:"Kollyhood"
},
{
        name:"Thiruchitrambalam",
        actor:"Dhanush",
        rating:5,
        avatar: fs.readFileSync(`../movie_images/thiruchitrambalam.jpg`),
        Genres:"Drama/Love",
        description:"Thiruchitrambalam lives with his father and grandfather. He blames the former for the loss of his mother and sister and is not on good terms with the latter.",
        embed:"https://www.youtube.com/embed/tNnPHz1u3RM",
        download:"https://moviesda5.me/movie/page/75998/",
        category:"Kollyhood"
},
//Mollyhood
{
        name:"Hridhayam",
        actor:"Pranav",
        rating:"5",
        avatar: fs.readFileSync(`../movie_images/hridhayamm.webp`),
        Genres:"Love/Romance",
        description:"The emotional journey of Arun, his carefree bachelor days in engineering college, and how he matures through various phases of life.",
        embed:"https://www.youtube.com/embed/C2FU7fj0IQc",
        download:"https://hdhub4u.city/hridayam-2022-a5/",
        category:"Mollyhood"
},
{
        name:"Oru Adaar Love",
        actor:"Roshan",
        rating:3,
        avatar: fs.readFileSync(`../movie_images/oal3.jpg`),
        Genres:"Love/Drama",
        description:"The movie depicts the life and times of a group of schoolmates who are best buddies. As they journey through the most memorable times of their lives",
        embed:"https://www.youtube.com/embed/pC2yUlN2kMU",
        download:"https://moviesda5.me/oru-adaar-love-movie-download/",
        category:"Mollyhood"
},
{
        name:"Anantham",
        actor:"Thomas Mathew",
        rating:5,
        avatar: fs.readFileSync(`../movie_images/anantham.jpg`),
        Genres:"Love/Friendship",
        description:"Aanandam follows the life of 7 second year engineering students as they embark on their very first college tour",
        embed:"https://www.youtube.com/embed/9B1SDMwQRXk",
        download:"https://filmyone.com/tag/aanandam-malayalam-movie-tamil-dubbed-download-in-isaimini/",
        category:"Mollyhood"
},
{
        name:"Vaasi",
        actor:"Tovino Thomos",
        rating:4,
        avatar: fs.readFileSync(`../movie_images/vaasi.jpg`),
        Genres:"Crime",
        description:"A courtroom drama in which two talented self made lawyers are determined to win a case where they are on opposing sides.",
        embed:"https://www.youtube.com/embed/Hm5Io4NcJSc",
        download:"https://hdhub4u.city/vaashi-2022-malayalam/",
        category:"Mollyhood"
},
{
        name:"Oh My Darling",
        actor:"Melvin",
        rating:"3",
        avatar: fs.readFileSync(`../movie_images/omd.jpg`),
        Genres:"Love/Romance",
        description:"Love has many faces, but Joel and Jenny love with earnestness, but when their love is tested in the fire of adversity, it has to overcome that. ",
        embed:"https://www.youtube.com/embed/xpwyACkIk6A",
        download:"https://m.isaimini.com.mx/file/4618/oh-my-darling-2023-tamil-full-movie-web-dl-mp4.html",
        category:"Mollyhood"
},
//Bollyhood
{
        name:"The Kerala Story",
        actor:"Adah Sharma",
        rating:5,
        avatar: fs.readFileSync(`../movie_images/the kerala story.avif`),
        Genres:"Crime/Thriller",
        description:"A converted Muslim woman Fatima Ba narrates her ordeal of how she once wanted to become a nurse",
        embed:"https://www.youtube.com/embed/3Jk3vquJDGs",
        download:"https://viralstudy.in/the-kerala-story-movie-download/",
        category:"Bollyhood"
        
},
{
        name:"Pathaan",
        actor:"Sharuk khan",
        rating:3,
        avatar: fs.readFileSync(`../movie_images/pathaaan.webp`),
        Genres:"Action/Thriller",
        description:"An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country.",
        embed:"https://www.youtube.com/embed/vqu4z34wENw",
        download:"https://sarkariresultraj.in/download-pathan-movie-hd-direct-link-1080p-720p-300-mb-480p/",
        category:"Bollyhood"
},
{
        name:"Zara Hatke Zara Batchke",
        actor:"Vicky Kowshal",
        rating:4,
        avatar: fs.readFileSync(`../movie_images/zara hatke.jpg`),
        Genres:"Love/Action",
        description:"Kapil and Somya are a happily married couple from Indore who live in a joint family and decide to get a divorce one fine day",
        embed:"https://www.youtube.com/embed/ziK8HzNk04A",
        download:"https://pagaliworld.com/movie/zara-hatke-zara-bachke-2023-full-hd-hindi-movie-download-720p-1080p-filmyzilla/",
        category:"Bollyhood"

},
{
        name:"Bloody Daddy",
        actor:"Shahid Kapoor",
        rating:4,
        avatar: fs.readFileSync(`../movie_images/bloody daddy.webp`),
        Genres:"Crime/Action",
        description:"A messed up, tenacious man faces off against cops and crime lords to save the one relationship that matters to him.",
        embed:"https://www.youtube.com/embed/ZwOeTu6ciP8",
        download:"https://www.sarkarisresults.com/2023/04/bloody-daddy-novie-download.html",
        category:"Bollyhood"
},
{
        name:"Tu Jhoothi Main Makkaar",
        actor:"Ranbir kapoor",
        rating:3,
        avatar: fs.readFileSync(`../movie_images/makkar.webp`),
        Genres:"Action/Drama",
        description:"Madness ensues when a 'player' in the world of romantic relationships finds a girl who's a worthy opponent, that believes love is a battle of wits",
        embed:"https://www.youtube.com/embed/JzGGF4JPFIQ",
        download:"https://www.pagalmp3status.com/movies/tu-jhoothi-main-makkar-movie/",
        category:"Bollyhood"
},
//Hollyhood
{
        name:"The Conjuring-3",
        actor:"Lorraine Warren",
        rating:4,
        avatar: fs.readFileSync(`../movie_images/conjuring.jpg`),
        Genres:"Thriller",
        description:"The Warrens investigate a murder that may be linked to a demonic possession",
        embed:"https://www.youtube.com/embed/eKYmp4FGy70",
        download:"https://isaidub3.co/movie/the-conjuring-3-2021-tamil-dubbed-movie/",
        category:"Hollyhood"
},
{
        name:"Jungle Cruise",
        actor:"Frank Wolff",
        rating:3,
        avatar: fs.readFileSync(`../movie_images/junglecruise.jpeg`),
        Genres:"Adventures/Comedy",
        description:"Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals",
        embed:"https://www.youtube.com/embed/f_HvoipFcA8",
        download:"https://naijalord.com.ng/download-jungle-cruise-2021/",
        category:"Hollyhood"
},
{
        name:"Venom",
        actor:"Tom Hardy",
        rating:4,
        avatar: fs.readFileSync(`../movie_images/venom.jpg`),
        Genres:"Thriller/Action",
        description:"Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage ",
        embed:"https://www.youtube.com/embed/-FmWuCgJmxo",
        download:"https://bollyflix.loan/venom-2018-dual-audios-hindi-english-movie/",
        category:"Hollyhood"
},
{
        name:"Spider-Man: No Way Home",
        actor:"Tom Holland",
        rating:4,
        avatar: fs.readFileSync(`../movie_images/spidermannoway.png`),
        Genres:"Action/Love",
        description:"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear",
        embed:"https://www.youtube.com/embed/JfVOs4VSpmA",
        download:"https://worldparliament2019.com/spider-man-no-way-home-movie-download-2/",
        category:"Hollyhood"
},
{
        name:"Godzilla vs Kong",
        actor:"Alexander",
        rating:3,
        avatar: fs.readFileSync(`../movie_images/gvk.jpg`),
        Genres:"Thriller",
        description:"The greatest icons in motion picture history against each other--the fearsome Godzilla and the mighty Kong--with humanity caught in the balance.",
        embed:"https://www.youtube.com/embed/odM92ap8_c0",
        download:"https://letmethink.in/godzilla-vs-kong-tamil-dubbed-movie-download-tamilrockers-720p-1080p/",
        category:"Hollyhood"
},
//Tollyhood
{
        name:"Dasara",
        actor:"Nani",
        rating:3,
        avatar: fs.readFileSync(`../movie_images/dhasara2.jpg`),
        Genres:"Action/Drama",
        description:"Set in the backdrop of Singareni coal mines near Godavarikhani of Telangana.",
        embed:"https://www.youtube.com/embed/GP6DRJwGjcE",
        download:"https://www.hindi-blog.com/2023/04/dasara-2023-multi-audio-full-movie-480p.html",
        category:"Tollyhood"
},
{
        name:"Bahubali-2",
        actor:"Prabhas",
        rating:4,
        avatar: fs.readFileSync(`../movie_images/bahubali.jpg`),
        Genres:"Action",
        description:"When Shiva, the son of Baahubali, learns about his heritage, he begins to look for answers",
        embed:"https://www.youtube.com/embed/qD-6d8Wo3do",
        download:"https://movieloversworld.com/baahubali-2-the-conclusion/",
        category:"Tollyhood"
},
{
        name:"Rathe shyam",
        actor:"Prabhas",
        rating:5,
        avatar: fs.readFileSync(`../movie_images/Ratheshyam.jpeg`),
        Genres:"Love/Action",
        description:"In 1976, Vikramaditya, a palmist and disciple of Paramahamsa, predicts to Indian Prime Minsiter Indira Gandhi that soon she will declare emergency in the country",
        embed:"https://www.youtube.com/embed/ZAP6q_Zv-4g",
        download:"https://m.isaimini.com.mx/movie/1796/radhe-shyam-(2022)-tamil-full-movie.html",
        category:"Tollyhood"
},
{
        name:"Sarkaru Vaari Patta",
        actor:"Mahesh Babu",
        rating:5,
        avatar: fs.readFileSync(`../movie_images/svp.jpg`),
        Genres:"Drama/Action",
        description:"After being conned by the woman he loves, a finance agent arrives in India from USA to retrieve his money from the woman's father who is a powerful MP and industrialist.",
        embed:"https://www.youtube.com/embed/tVr9v3o7iHY",
        download:"https://dhamakamusic.net/filelist/11631/sarkaru_vaari_paata_%282022%29_/new2old/1.html",
        category:"Tollyhood"
},
{
        name:"RRR",
        actor:"Ramcharan",
        rating:5,
        avatar: fs.readFileSync(`../movie_images/RRR.jpg`),
        Genres:"Action",
        description:"A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s",
        embed:"https://www.youtube.com/embed/NgBoMJy386M",
        download:"https://sarkariresultraj.in/rrr-movie-download-japanese-filmyzilla-480p-720p-1080p/",
        category:"Tollyhood"
}
]
async function insert(userData){
        try{
            for(let i in userData){
                var movie_data=new movie(userData[i]);
                await movie_data.save()
            }
            console.log("successfully inserted")
        }
        catch(err){
                console.log(err)
        }
}
insert(userData)
