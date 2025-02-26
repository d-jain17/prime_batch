// console.log("start")
// const handleInnerCall=()=>{
//     console.log("Step Y")
// }
// const handleCall=()=>{
//     console.log("Step m")
//     handleInnerCall()
//     console.log("step N")
// }
// setTimeout(handleCall,10000)
// console.log("end")

// console.log("a")
// const handleCall=()=>{
//     console.log("H")
// }

// setTimeout(()=>{
//     console.log("N")
//     setTimeout(()=>{
//         console.log("P")
//     },0)
//     handleCall()
//     console.log("B")
// },5000)
// console.log("C")

const res= fetch("https://dummyjson.com/products")
res.then((a)=>{
    console.log("a",a)
    const pr=a.json()
    pr.then((data)=>{
        //console.log(data)
        showUI(data)
    })
}).catch((b)=>{
    console.log("b",b)
})
const root= document.getElementById("parent")
function showUI(data){
    console.log("data",data)
    for(i=0;i<30;i++){
    const card= document.createElement("div")
    card.className="card"
    card.innerHTML=`
    <h1>${data.products[i].id}</h1>
    <h2>${data.products[i].title}</h2>
    `
    root.appendChild(card)
    }
}