// // you have written 182 character, you have -42 characters left;

let a = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. magnis dis parturient montes, nascetur ridiculus mus. Donec qu";
let b = 140;

if(a.length > 140){
    let c = 140 - a.length;
    console.log("You have written " + a.length +" characters. You have " + c + " Character left");
}
else if(a.length <= 140){
    console.log("Your character count matched the requirements. !");
}


// let a = prompt("Enter your character");
// let b = a.length;
// alert("You have writter " + b + " character. You have " + (140 - b) + " character left"); 