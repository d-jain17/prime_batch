const handleChange=(e)=>{
    console.log("change "+ e.target.value)
}
const handleKeyDown=(e)=>{
    console.log("down " +e.target.value)
}
const handleKeyUp=(e)=>{
    console.log("up "+ e.target.value)
}
const rootElement = document.getElementById("parent")
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
const data=[
    { name: 'Anuj', city: 'Delhi', email: 'ahda@gmail.com' },
    { name: 'eije', city: 'noida', email: 'idfid@gmail.com' },
    { name: 'edhfd', city: 'bombay', email: 'owiew@gmail.com' },
    { name: 'jdfjd', city: 'Delhi', email: 'ojdskn@gmail.com' }
]
const deleteCard = (e,id) => {
    console.log(e.target.parentElement)
    e.target.parentElement.remove();
    console.log("id"+id)
    console.log(data)
    data.splice(id,1)
    showCards(data)
}
const selectElement=document.getElementsByTagName("select")
const cities=data.map((elem)=>elem.city)
const showOptions=()=>{
    cities.forEach((city)=>{
        const newOption= document.createElement("option")
        newOption.value=city
        newOption.innerText=city
        selectElement.appendChild(newOption)
    })
}
const handleFormSubmit=(e)=>{
    e.preventDefault()
    const isEmailExists= data.some((elem)=>{
        return elem.email== e.target.email.value
    })
    if (isEmailExists){
        alert("email already exists")
    }
    const newElem={
        name:e.target.name.value,
        email:e.target.email.value,
        city:e.target.city.value,
    }
    data.push(newElem)
    showCards(data)
}
const handleSelect = (e) => {
    const selectCity = e.target.value;
    const newData = data.filter((elem) => {
        if (elem.city === selectCity) return true;
        return false;
    })
    showCards(newData)
}