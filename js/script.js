const url = "https://www.tropico.one/wp-json/wp/v2/media";
const container = document.querySelector(".image-carousel");

let length = 3;
let offset = 0;


async function makeApiCall() {
    try{
        const response = await fetch(url +
            `?per_page=${length}&offset=${offset}`
            );
        const json = await response.json();

        console.log(json);

        container.innerHTML = "";

        json.forEach((posts) => {

            container.innerHTML += 

            `
                <div class="blog-card">
                    <img src="${posts.source_url}" alt="${posts.alt_text}">
                    <h3 class="blog-title">${posts.title.rendered}</h3>
                    
                    <p class="bold align-center">Date: ${posts.date}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis tempore est optio ipsa assumenda. 
                    Debitis, velit veritatis perferendis qui at enim optio.</p>  
                </div> 
            `;

        });
        

    }
    catch (error) {
        console.log(error);
    }
}

makeApiCall();