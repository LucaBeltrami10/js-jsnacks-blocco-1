let listItemElement = document.createElement('li')

for (let i=1; i<=6; i++){
    console.log(`inserito nuovo li ${listItemElement}`)
    listItemElement.innerHTML = i
    document.querySelector('ul').appendChild(listItemElement)
}