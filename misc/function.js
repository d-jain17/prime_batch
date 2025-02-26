/*function sum(a,b){
    console.log((a+b)%10)
}
sum(2,11)
*/
/*const sumMod=(a,b)=>{
    console.log((a+b)%10)
}
sumMod(2,11)*/
/*const a= function sum(a,b){
    console.log((a+b)%10)
}
a(2,11)
*/
/*const sumMod=(a,b)=>{
    const printText=(txt)=>{
        console.log(txt)
    }
    console.log((a+b)%10)
    printText("I am bored")
}
sumMod(2,3)
printText("I am bored")*/
/*marks1= parseInt(prompt("Please enter first subject's marks"))
marks2=parseInt(prompt("Please enter second subject's marks"))
marks3=parseInt(prompt("Please enter third subject's marks"))
marks4=parseInt(prompt("Please enter fourth subject's marks"))
marks5=parseInt(prompt("Please enter fifth subject's marks"))
let percent= (marks1+marks2+marks3+marks4+marks5)/5
console.log("percentage is: " + percent);
const arr=[marks1,marks2,marks3,marks4,marks5]
console.log("highest marks are "+  Math.max(...arr))
*/

const getPercentage=(obj)=>{
    const marks= Object.values(obj);
    let totalMarks=0
    let totalSubjects=0
    const temp=(a)=>{
        totalMarks+=a;
        totalSubjects++;
    }
    marks.forEach(temp)
    
}
const highestScoring=(obj)=>{
    const marks=Object.values(obj);
    console.log("Highest marks: "+ Math.max(...marks))
}
const getGrades=(percentage)=>{
    const grades=[
        [60,"B"],
        [70,"B+"],
        [80,"A"],
        [90,"A+"],

    ]
    let grade="F"
    grades.forEach((arr)=>{
        if(arr[0]<=percentage){
            console.log("in")
            grade=arr[1]
        }
    })
    console.log("Grade: "+ grade)
}
const record={
    maths:30,
    english:10,
    hindi:20,
};
getPercentage(record)
highestScoring(record)
const marks= Object.entries(record);
console.log(marks)
getGrades(92)