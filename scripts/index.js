import navbar from "../components/navbar.js"


document.getElementById("navbar").innerHTML=navbar;

import{fetchData,displayArticles} from "../components/fetch.js"


// for search news
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

// end--->

document.getElementById('in').addEventListener("click", indiasNews);
let displayResults=document.getElementById("results");

function indiasNews(){
    displayResults.innerHTML=null;
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;
    fetchData(url).then((res)=>{
        displayArticles(res,displayResults);
        console.log(res);
    })
      
}

document.getElementById('ch').addEventListener("click", chinasnews);
function chinasnews(){
    displayResults.innerHTML=null;
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`;
    fetchData(url).then((res)=>{
        displayArticles(res,displayResults);
        
    })
      
}

document.getElementById('us').addEventListener("click", usaNews);
function usaNews(){
    displayResults.innerHTML=null;
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`;
    fetchData(url).then((res)=>{
        displayArticles(res,displayResults);
       
    })
      
}

document.getElementById('uk').addEventListener("click", ukNews);
function ukNews(){
    displayResults.innerHTML=null;
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`;
    fetchData(url).then((res)=>{
        displayArticles(res,displayResults);
    })
      
}

document.getElementById('uk').addEventListener("click", nzNews);
function nzNews(){
    displayResults.innerHTML=null;
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`;
    fetchData(url).then((res)=>{
        displayArticles(res,displayResults);;
    })
      
}
// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
