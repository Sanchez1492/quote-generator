const apiURL = 'https://api.quotable.io/random';

const quote = document.querySelector('blockquote')
const author = document.querySelector('span')

async function getRandomQuote () {
    const response = await fetch(apiURL)
    const data = await response.json()

    quote.innerText = data.content
    author.innerText = data.author
    console.log(data);
}

function tweet () {
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerText + ' ---- by ' + author.innerText, 'Tweet Window', 'height=300, width=600')
}

getRandomQuote()


