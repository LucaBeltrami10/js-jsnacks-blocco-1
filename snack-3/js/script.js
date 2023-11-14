
for (let i=0; i<=10; i++){
    console.log(i)
    document.querySelector('ul').innerHTML += `<li> ${i * 2}</li>`
}