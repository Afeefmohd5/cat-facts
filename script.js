const button = document.getElementById('btn')
const output = document.getElementById('output')

async function fetchApi() {
    const response = await fetch('https://gist.githubusercontent.com/aetheryx/0ec1e3bb0b370a075d2080c6f673d294/raw/3bcb85a291e7897a9ae6147a202a484c221ec347/facts.json')

    const catData = await response.json()

    // console.log(catData);

    catData.forEach((catFact) => {
        button.addEventListener("click", () => {
            let random = Math.floor(Math.random() * catData.length)
            output.textContent = catData[random]
        })
    })
}


fetchApi()
// let quote=["When you have a dream,you've got to grab it and never let go.","You can be everything. You can be the infinite amount of things that people are.","You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens","Spread love everywhere you go","You are never too old to set another goal or to dream a new dream","You define your own life. Don't let other people write your script","Success is not final, failure is not fatal"]

