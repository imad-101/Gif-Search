const img = document.querySelector('img');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click' , ()=>{
    fetch( `https://api.giphy.com/v1/gifs/translate?api_key=GzQicqgo3goxUbvkoq1HhrO5pWYHno8M&s=${input.value}`)
.then(Response =>{
    return Response.json()
})
.then(Response =>{
    img.src = Response.data.images.original.url
})
.catch(error =>{
    alert('There is some error')
})

input.value = ""

})
