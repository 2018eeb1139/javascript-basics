// Log from the console
// console.log("Hello world")

//variables

// let age=25
// console.log(age)

// const salary=80000
// console.log(salary)

// Data types

const name="Aman"
const language="javascript"

const total=0
const PI=3.14

const isLogged=false
const isInLove=true

let result
// console.log(result)
const res=undefined

const data=null
// console.log(data)

// objects

const person={
    firstName:"Vivek",
    lastName:"Kumar",
    age:23
}

// console.log(person.firstName)

const oddNumber=[1,3,5,7,9]
// console.log(oddNumber[3])

let a=10
a="vishwas"
a=true
// console.log(a)

// console.log(parseFloat('3.14'))
// console.log((500).toString())
// console.log(Boolean(10))

// Equality
const var1=10
const var2='10'

// console.log(var1==var2)
// console.log(var1===var2)

// if else
const num=0

if(num>0){
    // console.log("Number is Positive")
}
else if(num<0){
    // console.log("Number is negative")
}
else{
    // console.log("Number is zero")
}

// switch
const color="red"

// switch(color){
//     case "red":console.log("Color is red")
//                 break
//     case "blue":console.log("Color is blue")
//                 break
//     case "grees":console.log("Color is green")
//                 break
//     default:console.log("No color")
// }

// for loop
for (let i = 0; i < 5.; i++) {
    // console.log(i)
}

let i=-1
while (i<3) {
    // console.log(i)
    i++;
}

// array.forEach(element => {
    
// });

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const object=[23,34,45,56]
for (const iterator of object) {
    // console.log(iterator)
}

function greet(username) {
    // console.log("Good Morning "+ username)
}

greet('Vivek')

const arrowSum =(a,b)=>{
    return a+b
}

const addFive = num =>num+5

const sum=arrowSum(5,5)
// console.log(sum)

// console.log(addFive(sum))

//Scope

const myNum=100;

if(true){
    const myName="Aman"
    // console.log(myName)
    // console.log(myNum)
}

function testFn(){
    const myName="Batman"
    // console.log(myName)
    // console.log(myNum)
}

testFn()


