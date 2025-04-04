// დავალება 1. 
//დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და
// დააბრუნებს რომელიც მეტია იმ რიცხვს , 
// თუ რიცხვები ტოლია დააბრუნებს 0 -ს.

/*
function returnNumber(m,n){

if (m>n){
    return m;
} else if (n>m) {
    return n;
} else {
    return 0;
}
}
*/

//console.log(returnNumber(9,11)); // როცა m<n, დაიბეჭდა N
//console.log(returnNumber(19,9)); // როცა m>n, დაიბეჭდა m
//console.log(returnNumber(3,3)); // როცა m=n, დაიბეჭდა 0.


//დავალება 2. 
//დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), 
// დააბრუნეთ რიცხვების ჯამი.

/*
function numberSum(x,y){
    return x+y;
}
*/
// console.log(numberSum(9,1));


//დავალება 3.
//დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს
//(ფუნქციას არ აქვს პარამეტრი)
/*
function printName(){
    console.log("ნინო ბენიძე");

}
*/



//დავალება 4. 
// დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname
// დააბრუნეთ სრული სახელი და დაბეჭდეთ 
// (ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ).

/*
function printName(firstname, lastname){
    return firstname +" "+ lastname;
}

const Name=printName('ნინო', 'ბენიძე')
console.log(Name);
*/



//დავალება 5.
//Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) 
//და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი.
// ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, 
// დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით 
// რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს.
//  გამოიყენეთ თქვენთვის სასურველი ციკლი).

/*
function increaseNumbers(n){
    let outcome=1;
    for (let i=1; i<=n; i++)
    {
        outcome *=i;
    }
    return outcome;
}

*/
//console.log(increaseNumbers(3));
//console.log(increaseNumbers(9));



//დავალება 6.
//დაბეჭდეთ  სტუდენტის სრული სახელი 
//(სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)

const student={
    firstname:"ნინო",
    lastname:"ბენიძე",
    age: 27,
    scores:[4,7,5,3,2],
    fullName(){
        return this.firstname+" "+this.lastname;
    
    }
}
    

//console.log(student.fullName());   // სრული სახელი დაიბეჭდება

// დავალება 7. 
// Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) 
// და ფუნქცია დააბრუნებს  ქულების ჯამს
/*
function scoresSum(scores){
    let sum=0;
    for (let element of scores){
        sum+=element;
    }
    return sum;
}

console.log("ჯამი",scoresSum(student.scores));

*/


//დავალება 8.
//დაბეჭდეთ სტუდენტის სახელი და ასაკი.

//console.log(student.fullName()+" "+student.age);
