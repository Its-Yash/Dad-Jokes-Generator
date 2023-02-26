const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "ghXuHksgLdR3X70t4Fusbg==MRBQMnchzmSPjUJ2";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}; 

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJOKE(){

    try { 
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."; 
    const response = await fetch(apiURL, options)
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"

    jokeEl.innerText = data[0].joke;

        
    } catch (error) {
        jokeEl.innerText = "An eroor occured, try again later !";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
        console.log(error);
    }

       
}
btnEl.addEventListener("click", getJOKE);