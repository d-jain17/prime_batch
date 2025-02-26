const data = [
    { id:1,name: 'Anuj', city: 'Delhi', email: 'ahda@gmail.com' },
    { id:2,name: 'eije', city: 'noida', email: 'idfid@gmail.com' },
    { id:3,name: 'edhfd', city: 'bombay', email: 'owiew@gmail.com' },
    { id:4,name: 'jdfjd', city: 'Delhi', email: 'ojdskn@gmail.com' }
]

/*const rootElement=document.getElementsByTagName("body")

data.forEach((elem)=>{
    const card=document.createElement("div")
    card.addEventListener("click",()=>{
        card.style.backgroundColor=getRandomColor()
    })
    card.className="card"
    card.innerHTML=`
    <h4> ${elem.name} </h4>
    <h6> ${elem.city} </h6>
    <p class="text"> ${elem.email} </p>
    `
    const parentDiv=document.getElementById("parent")
    parentDiv.appendChild(card)
})

const handleBgColor=()=>{
    console.log("btn clicked")
    rootElement[0].style.backgroundColor=getRandomColor()
}
const getRandomColor=()=>{
    const red=Math.random()* 255;
    const green=Math.random()* 255;
    const blue=Math.random()* 255;
    return `rgb(${red},${green},${blue})`
}
const textElement= document.querySelector(".text")
console.log(textElement)*/
const rootElement = document.getElementById("parent")
console.log(rootElement)
const showCards = (data) => {
    rootElement.innerHTML=''
    data.forEach((elem,idx) => {
        console.log('hey')
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
       
        <h4> ${elem.name} </h4>
    <h6> ${elem.city} </h6>
    <p class="text"> ${elem.email} </p>
    <button onclick="deleteCard(event,${idx})">Delete </button>
        
        `
        rootElement.appendChild(card)
    })
}
const deleteCard = (e,id) => {
    console.log(e.target.parentElement)
    e.target.parentElement.remove();
    console.log("id"+id)
    console.log(data)
    data.splice(id,1)
    showCards(data)
}
showCards(data)
const handleSelect = (e) => {
    const selectCity = e.target.value;
    const newData = data.filter((elem) => {
        if (elem.city === selectCity) return true;
        return false;
    })
    showCards(newData)
}
