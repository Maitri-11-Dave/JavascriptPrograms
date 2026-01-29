// String method
//length()
//trim()
//toupperCase()
//toLowerCase()
//include()
//indexOf()
//slice()
//substring()
//replace()
//concat()
//split()


// let str = " Hello Javascript world "
// console.log(str)  
// console.log("length()",str.length)


// let trimText = str.trim();
// console.log("trim():",trimText)

// console.log("toUpperCase() :", str.toUpperCase())
// console.log("toLowerCase() :", str.toLowerCase())
// console.log("includes(): ",str.includes("Javascript"))
// console.log("indexOf() :",str.indexOf("Javascript"))
// console.log("slice() :",str.slice(3,5))         //(-) allow 
// console.log("substring(): ",str.substring(2,7)) //not allow (-)
// console.log("replace(): ",str.replace("Javascript","test"))
// console.log("concat(): ",str.concat("hello ReactJS"))
// console.log("split(): ",str.split(" "))         //give in differnt string




//array method 
//length()
//push()
//pop()
//unshift()
//shift()
//concat()
//includes()
//indexOf()
//splice()
//slice()
//join()
//delete()
//map()
//filter()
//find()
//forEach()
//Sort()
//reverse()
//flat()
//


// let arr = ['one','two','three',5,{Name: 'name'}]
// console.log("Default array: ",arr)
// console.log("length(): ",arr.length)        //devide by 2 (then devide with 2 part)

// console.log("push(): ",arr.push("new added element"))   //arr.push("new added element in last")
// console.log("array after push :", arr)

// arr.pop();                                       //remove last element
// console.log('array after pop : ',arr)

// arr.unshift("first elemet added")
// console.log('array after unshift : ',arr)       //add into first

// arr.shift("first elemet added")
// console.log('array after shift : ',arr)         //remove first element

// let newarr  = ["str 1", "str2"];
// let mixedarr = arr.concat(newarr)
// console.log("default array after concat :", arr)
// console.log("array  aftre concat :", mixedarr)


// console.log("include: ",arr.includes("three"))
// // if(arr.includes("two")){
// //     logic
// // }

// console.log("indexOf(): ",arr.indexOf("two"))

// console.log("slice(): ",arr.slice(2,3))
// console.log("splice(): ",arr.splice(2,4))   //add old array

// console.log("join(): ",arr.join(", "))

// delete arr[4]
// console.log(arr)



// console.log("array iteration method: ")
// let numbers = [1,2,3,4,5]

// console.log("map: ",numbers.map(num =>num * 2 ))            //use looping statement
// console.log("after map old array :",numbers)

// console.log("filter :",numbers.filter(num => num > 3))
// console.log("after map old array :",numbers)            //when use loop with condition


// console.log("forEach :")
// numbers.forEach(num => console.log(num))

// let num = [2,5,3,6,1]
// console.log("sort(): ",num.sort())                  //shorting

// console.log("reverse(): ",num.reverse())

let nestedArray = [1,2,[3,4],[5,6]]
console.log("default nested array : ",nestedArray)
let flatArray = nestedArray.flat()
console.log("flatArray(): ", flatArray)