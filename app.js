let navn = prompt("Hva er navnet ditt?");
console.log("Hei " + navn);

let tall1 = prompt("tall 1")
let tall2 = prompt("tall 2")
console.log(tall1 + tall2)
console.log(tall1 * tall2)
console.log(tall1 - tall2)
console.log(tall1 / tall2)

let alder = prompt("Hvor gammel er du?")
if (alder < 18) {
    console.log("Ingen øl på deg")
}   
else {
    console.log("Du er gammel nok til å kjøpe øl")
}   

let alder2 = prompt("Hvor gammel er du?")

if (alder2 < 18) {
    console.log("Du kjøper barnebillett")
}   
else if (alder2 > 67) {
    console.log("Du skal kjøpe honørbillett")
}   
else {
    console.log("Du kjøper voksenbillett")
}