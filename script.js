const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = ()=>{
    jokeContainer.classList.remove('fade');
    fetch(url)
    .then(data => data.json())
    .then(item => {
        // console.log(item.jokeContainer)
        jokeContainer.innerText = `${item.joke}`;
        jokeContainer.classList.add('fade');
    });
}
btn.addEventListener('click', getJoke);
getJoke();