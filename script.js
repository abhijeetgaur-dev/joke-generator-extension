const fetchRandomJoke = async () => {
    try {
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
        });
        
        const data = await res.json();
        console.log(data);

        const joke = document.querySelector("#joke-body");
            joke.innerHTML = data.joke;

    } catch (error) {
        console.error("Error fetching joke:", error);
    }
};

window.addEventListener("load", () => {
    fetchRandomJoke();
});

const clickMe = document.querySelector("#generate-new-joke")

clickMe.addEventListener("click" , ()=>{
    fetchRandomJoke();
})