let listItemElement = document.createElement('li')

for (let i=1; i<=6; i++){
    listItemElement.innerHTML = i
    document.querySelector('ul').appendChild(listItemElement)
}