 const accessKey="XSsbkN7x4dg-5pj9wGH9XZovmYQUV423tVzZP3xFhPs";
 //const formEl =document.querySelector("form");
 const formEl=document.getElementById("hitesh");
 const inputEl=document.getElementById("search-input");
 const searchResults=document.querySelector(".search-results");
 const showMore= document.getElementById("show-more-button");

 let inputData="";
 let page=1;
 async function searchImages(){
    inputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=
    ${inputData}&client_id=${accessKey}`;

    const response =await fetch(url);
    const data= await response.json();

    const results= data.results;

    if(page===1)
    {
        searchResults.innerHTML="";
    }
    results.map((result) =>{
        const nak=document.getElementById('naks');
        const imageWrapper=document.createElement('div');
        imageWrapper.classList.add('search-result');
        const image=document.createElement('img');
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement('a');
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;
        const downloadLink = document.createElement('a');
        downloadLink.href = result.links.html;  // Set the link to the image URL
        downloadLink.download = '';
        downloadLink.textContent="download";
        downloadLink.style.color = "blue";
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(downloadLink);
        nak.appendChild(imageWrapper);
    });

    page++;
    if(page>1)
    {
        showMore.style.display="block";
    }
 }

 formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchImages();
 })
 showMore.addEventListener("click",(event)=>{
    searchImages();
 })