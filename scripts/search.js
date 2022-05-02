import navbar from "../components/navbar.js";
import {fetchData} from "../components/fetch.js";

document.getElementById("navbar").innerHTML=navbar;

document.getElementById("search_input").addEventListener("keypress", serachNwes);
function serachNwes(event){
    if(event.key==="Enter"){
    let query=document.getElementById("search_input").value;
    const url=`https://masai-mock-api.herokuapp.com/news?q=${query}`;
    
        fetchData(url).then((res)=>{
            localStorage.setItem("searchedNews", JSON.stringify(res));
            window.location.href="search.html";
        })
    }
    
}

let searchedNews=JSON.parse(localStorage.getItem("searchedNews"));
// console.log(searchedNews);
// let data=searchedNews.articles;
let displayResults=document.getElementById("results");

let displayArticles=()=>{
    // displayResults.innerHtml=null;
    searchedNews.map(({urlToImage,title,publishedAt,content,description})=>{
        console.log(urlToImage,title,publishedAt,content,description);
        let newsDiv=document.createElement("div");
        newsDiv.setAttribute("class","news");
        let imgDiv=document.createElement("div")
        imgDiv.style.width="15%";
        imgDiv.style.height="100%";
        let image=document.createElement("img");
        
        image.src=urlToImage;
        image.style.width="100%";
        image.style.height="100%";
        imgDiv.append(image);
        let newsDesDiv=document.createElement("div");
        newsDesDiv.style.width="80%";
        let title1=document.createElement("h3");
        title1.style.fontSize="18px";
        title1.style.fontWeight="bold"
        title1.innerText=title;
        let publishedAt1=document.createElement("p");
        publishedAt1.innerText=publishedAt
        let content1=document.createElement("p");
        content1.innerText=content;
        
        newsDesDiv.append(title1,publishedAt1,content1);
        newsDiv.append(imgDiv,newsDesDiv);
        let description1=description;
        newsDiv.addEventListener("click", deepDescription);
        function deepDescription(){
            let obj={
                urlToImage:image,
                title:title1,
                publishedAt:publishedAt1,
                content:content1,
                description:description1,
            }
            localStorage.setItem("news",JSON.stringify(obj));
            window.location.href="news.html";
        }
        displayResults.append(newsDiv);

        // let title=document.createElement("p");
    })
}
displayArticles();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
