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


let str = " Hello Javascript world "
console.log(str)  
console.log("length()",str.length)


let trimText = str.trim();
console.log("trim():",trimText)

console.log("toUpperCase() :", str.toUpperCase())
console.log("toLowerCase() :", str.toLowerCase())
console.log("includes(): ",str.includes("Javascript"))
console.log("indexOf() :",str.indexOf("Javascript"))
console.log("slice() :",str.slice(3,5))         //(-) allow 
console.log("substring(): ",str.substring(2,7)) //not allow (-)
console.log("replace(): ",str.replace("Javascript","test"))
console.log("concat(): ",str.concat("hello ReactJS"))
console.log("split(): ",str.split(" "))

