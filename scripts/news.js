import navbar from "../components/navbar.js"
import{fetchData,displayArticles} from "../components/fetch.js"

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


document.getElementById("navbar").innerHTML=navbar;

let displayDetail=document.getElementById("detailed_news");

let news=JSON.parse(localStorage.getItem("news"));

    let newsDiv=document.createElement("div");
    newsDiv.setAttribute("class","news");
    let imgDiv=document.createElement("div")
    let image=document.createElement("img");
    
    image.src=news.urlToImage;
    image.style.width="100%";
    image.style.height="100%";
    imgDiv.append(image);
    let newsDesDiv=document.createElement("div");
    newsDesDiv.style.width="80%";
    let title1=document.createElement("p");
    title1.style.fontSize="18px";
    title1.style.fontWeight="bold"
    title1.innerText=news.title;
    let publishedAt1=document.createElement("p");
    publishedAt1.innerText=news.publishedAt
    let content1=document.createElement("p");
    content1.innerText=news.content;
    let des=document.createElement("p");
    des.innerText=news.description;
    console.log(title1,publishedAt1,content1,des)
    newsDesDiv.append(image,title1,publishedAt1,content1,des);
    displayDetail.append(imgDiv,newsDesDiv) ;
