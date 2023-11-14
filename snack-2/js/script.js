/* let listItemElement = document.createElement('li')
let ulElement = document.querySelector('ul')

for (let i=1; i<=6; i++){
    console.log(`inserito nuovo`)
    listItemElement.innerHTML = i
    ulElement.appendChild(listItemElement)
}

 */

for (let i=1; i<=6; i++){
    console.log(i)
    
    if(i%2 != 0){
        document.querySelector('ul').innerHTML += `<li class=" cl-green"> ${i}</li>`
    } else{
        document.querySelector('ul').innerHTML += `<li class=" cl-yellow"> ${i}</li>`
    }
}

