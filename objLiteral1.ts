let firstName = "ross";
let lastname = "geller";

let person = {
    firstName,
    lastname
}

console.log(person);

const newp = (firstName:string, lastname: string,age:number) =>{
    return{
        firstName,
        lastname,
        fullName: firstName + ' ' + lastname,
        isSenior(){
            return age>65;
        }
    }
}

let anotherP = newp('chandler','bing',65);

console.log(anotherP);