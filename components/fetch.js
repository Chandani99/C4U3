

let fetchData=async (url)=>{
  try{
      let res=await fetch(url);
      let data= await res.json();
      let articles=data.articles;
      return articles;
  }catch(error){
      console.log (error);
  }
}

let displayArticles=(articles, displayResults)=>{
    // displayResults.innerHtml=null;
    articles.map(({urlToImage,title,publishedAt,content,description})=>{
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
        let description1=description;
        newsDesDiv.append(title1,publishedAt1,content1);
        newsDiv.append(imgDiv,newsDesDiv);
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

export{fetchData,displayArticles};