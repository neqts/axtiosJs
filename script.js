const img1 = document.querySelector('.one')
const img2 = document.querySelector('.two')
const img3 = document.querySelector('.three')
const url ="https://dog.ceo/api/breeds/image/random"




fetch(url)
.then(res=>res.json())
.then(res=> img1.setAttribute('src',res.message))


axios.get(url)
.then(res=> img2.setAttribute('src',res.data.message))