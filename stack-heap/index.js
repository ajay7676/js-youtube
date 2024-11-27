// Stack (Primitive) Heap (Non Primitive)

// Stack 

let username1= "ajaychauhan";
let username2 = username1;
 username2 = "himanshu Chauhan";

 console.table([username1 , username2])

 let userOne = {
    name: "rohan" ,
    upiId: "rohan@ybl"
 }
 let userTwo = userOne;
    userTwo.upiId = "abcd@ybl"

 console.log(userOne);
 console.log(userTwo);
 