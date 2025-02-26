
/*console.dir(document.children[0].children[1].childNodes[3].childNodes)
console.dir(window)
*/
const elem=document.children[0].children[1].childNodes[3]
elem.style.backgroundColor="blue"
/*const elem2=document.children[0].children[1].childNodes[3].childNodes[1]
elem2.style.backgroundColor="yellow"
*/

const divChildren= Array.from(document.querySelectorAll("div div"))

divChildren.forEach((ele)=>{
    console.log(ele)
    ele.style.backgroundColor="yellow"
})

const mappings={
    invitation:"You are invited for event",
    reminder:"You are reminded for event",
    notice:"You have a notice for event",
    message:"You are message for event",
}
const common=document.querySelectorAll("div div")
const invite=common[0].getElementsByTagName("p")
console.log(common)
const reminder=common[1].getElementsByTagName("p")
const notice=common[2].getElementsByTagName("p")
const message=common[3].getElementsByTagName("p")
invite[0].innerHTML=mappings["invitation"]
reminder[0].innerHTML=mappings["reminder"]
notice[0].innerHTML=mappings["notice"]
message[0].innerHTML=mappings["message"]

const rootElement= document.querySelector("body")
const newChild= document.createElement("div")
newChild.innerHTML=`<h1> Hi </h1> <p> Hello</p>`
rootElement.appendChild(newChild)
