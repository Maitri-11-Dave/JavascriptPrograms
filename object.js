// object is collectin of any type of data

// const person = {
//     name : 'maitri',
//     age : '20',
//     hobbies : ['reading','listen music'],
//     greet :function(){
//         console.log("hello")
//     }
// }

//access value fro object

// console.log(person.name)
//console.log(erson['name])

//adding or modifying the data of obj

// person.job = "devloper"
// person.salary = 50000
// console.log(person)


// delete person.salary
// console.log(person)

//nested object
// const person1 = {
//     name : 'Maitri',
//     age: 20,
//     address:{
//         city : "junagadh",
//         zipcode : '362220',
//         street: "125 main st."
//     }
// }
// console.log(person1)
// console.log(person1?.address?.city)
// console.log(Object.keys(person1))
// console.log(Object.values(person1))
// console.log(Object.entries(person1))


// const user = {
//     name : 'Maitri',
//     rol : "admin",
//     designation : "devloper",
//     age: 20,
//     address:{
//         city : "junagadh",
//         zipcode : '362220',
//         street: "125 main st."
//     }
// }
// // const {name,age,rol} = user
// // console.log(name,age,rol)

// // const {name : ProfileName, age : ProfileAge} = user         //Rename
// // console.log(ProfileName,ProfileAge)

// const {name,age,rol,state = "Gujrat"} = user
// console.log(name,age,rol,state)

// const array = [1,2,3]
// const moreElement = [...array,4,5,6]
// console.log(moreElement)

// const originakArray = [1,2,3]
// const copiedArray = [...originakArray]
// console.log(copiedArray)

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const mergedArray = [...arr1,...arr2]
// console.log(mergedArray)


//spread opt. in obj

const user1 = {
    name : "user1",
    city : "junagadh"
}
// console.log(user1)

// const newObj = {
//     ...user1,
//     role : "Devloper"
// }
// console.log(newObj)

//copy obj
const user2 = user1
console.log(user2)

