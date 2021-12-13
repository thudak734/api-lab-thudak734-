const animalBox = document.getElementById("animal-box");

const apiPromise = fetch("https://www.reddit.com/r/aww/.json")

.then((data) => data.json())
.then((data) => {


 
    for(let i=0; i<data.data.children.length; i++){


        
        let section = document.getElementById("jsreddit");


            console.log(data.data.children[0].data.title);
            console.log(data.data.children[0].data.thumbnail);
            console.log(data.data.children[0].data.permalink);
        
        const title = data.data.children[i].data.title;
        const postHeading = document.createElement("h3");
        postHeading.innerText = title;
        
        section.append(postHeading);
        
        const img = data.data.children[i].data.thumbnail;
        
        const pics = document.createElement("img");
        pics.setAttribute("src" , img);
        section.append(pics);
       
        
        let permalink = data.data.children[i].data.permalink;
        let url = "http://reddit.com" + permalink;
        console.log(url);
        
        const newLinkPara = document.createElement("p");
        const newLink = document.createElement("a");
      
        
        newLink.setAttribute("href" , url);
        newLink.target = "_blank";

        
        newLink.textContent = url;
        newLinkPara.append(newLink);
        section.append(newLinkPara);
        

 }


 });