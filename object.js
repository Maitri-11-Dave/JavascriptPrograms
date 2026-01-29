// object is collectin of any type of data

const person = {
    name : 'maitri',
    age : '20',
    hobbies : ['reading','listen music'],
    greet :function(){
        console.log("hello")
    }
}

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
const person1 = {
    name : 'Maitri',
    age: 20,
    address:{
        city : "junagadh",
        zipcode : '362220',
        street: "125 main st."
    }
}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))


