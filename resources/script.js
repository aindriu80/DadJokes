const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

// Using Async Await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const result = await fetch('https://icanhazdadjoke.com/', config)

  const data = await result.json()

  jokeEl.innerHTML = data.joke
}
