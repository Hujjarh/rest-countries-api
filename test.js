let list = document.querySelector('.list')
let cardImage = document.querySelector('.cardImage')

fetch("data.json").then((response)=>response.json())
.then((data)=>{
    data.forEach((value) => {
        let card = document.createElement('div')

        card.innerHTML = `
            <img src ="${value.flags.png}" width=/>
            <p>${value.region}</p>
            <p>${value.name}</p>
        `
        list.appendChild(card)
    });
    
})