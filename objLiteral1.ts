let firstName = "ross";
let lastname = "geller";
let middlename = "matthew";

let person = {
    firstName,
    lastname,
    middlename
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