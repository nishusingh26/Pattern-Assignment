
// Pattern - 1 (start printing)
console.log("----Pattern - 1 (Constant Start Printing on each line)---")
let string = "";

for(let i =0 ;i < 5; i++){
    for(let j = 0; j < 5 ;j++){
        string += "-*-" ;
    } 
    string += "\n";
}

console.log(string);

// Pattern - 2 (constant Number Printing on each line)
console.log("----Pattern - 2 (Constant Number Printing on each line)---")
let string3 = "";
 
for(let i = 1; i <= 5 ; i++){
    for(let j = 1; j <= 5; j++){
        string3 += " " + i + " ";
    }
    string3 += "\n";
}

console.log(string3);


// Pattern - 3 (Incrementing number in each line)

console.log("----Pattern - 3 (Incrementing number in each line)---")
let string2 = "";
 
for(let i = 1; i <= 5 ; i++){
    for(let j = 1; j <= 5; j++){
        string2 += " " + j + " ";
    }
    string2 += "\n";
}

console.log(string2);

//----Pattern - 4 (Constant Number Printing on each line)---
console.log("----Pattern - 4 (Constant Alphabets are Printing on each line)---");

let print = "";

for(let i = 65;i <= 69;i++) {
    for(let j= 65; j<= 69; j++){
        print = print + " " +(String.fromCharCode(i)) + " ";
    }
    print = print + '\n';
}

console.log(print);

//----Pattern - 5 (Constant Number Printing on each line)---
console.log("----Pattern - 5 ( Variable Alphabets are Printing on each line)---");

let print1 = "";
for(let i = 65;i <= 69;i++) {
    for(let j= 65; j<= 69; j++){
        print1 += " " +(String.fromCharCode(j)) + " ";
    }
    print1 += '\n';
}

console.log(print1);


//----Pattern - 6 (Constant Number Printing on each line)---
console.log("----Pattern - 6 ( Variable Alphabets are Printing on each line)---");

let print2 = "";

for(let i = 69;i >= 65;i--) {
    for(let j= 69; j >= 65; j--){
        print2 += " " +(String.fromCharCode(j)) + " ";
    }
    print2 += '\n';
}

console.log(print2);

//----Pattern - 6 (Constant Number Printing on each line)---
console.log("----Pattern - 7 ( Variable Alphabets are Printing on each line)---");

let print3 = "";

for(let i = 69;i >= 65;i--) {
    for(let j= 69; j >= 65; j--){
        print3 += " " +(String.fromCharCode(i)) + " ";
    }
    print3 += '\n';
}

console.log(print3);


// Pattern - 8 (Incrementing number in each line)

console.log("----Pattern - 8 (Incrementing number in each line)---");
let string4 = "";
 
for(let i = 0; i < 5 ; i++){
    let temp = 5;
    for(let j = 5; j >= 1; j--){
        string4 += " " + temp + " ";
        if(i!=0){
            temp--;
        }
    }
    string4 += "\n";
}

console.log(string4);

//Pattern - 9 (Printing Star)
console.log("----Pattern - 9 (Printing the stars in right angle triangle)---");

let string5 = "";

for(let i = 0; i <= 5 ; i++){
    for(let j=0; j <= i ; j++){
        string5 += '*';
    }

    string5 += '\n';
}

console.log(string5);

//Pattern - 10 (Printing Star)
console.log("----Pattern - 10 (Printing the stars in right angle triangle)---");

let string6 = "";

for(let i = 1; i <= 5 ; i++){
    for(let j = 1; j <= i ; j++){
        string6 += " " + i;
    }
    string6 += '\n';
}

console.log(string6);

//Pattern - 11 (Printing Star)
console.log("----Pattern - 11 (Printing the stars in right angle triangle)---");

let string7 = "";

for(let i = 1; i <= 5 ; i++){
    for(let j=1; j <= i ; j++){
        string7 += " " + j;
    }

    string7 += '\n';
}

console.log(string7);

//Pattern - 12 (Printing Alphabets)
console.log("----Pattern - 12 ( Variable Alphabets are Printing on each line)---");

let print4 = "";

for(let i = 65;i <= 69;i++) {
    for(let j= 65; j <= i ; j++){
        print4 += " " +(String.fromCharCode(i)) + " ";
    }
    print4 += '\n';
}

console.log(print4);

//Pattern - 13 (Printing Alphabets)
console.log("----Pattern - 13( Printing of Alphabets)---");

let print5 = "";

for(let i = 65;i <= 69;i++) {
    for(let j= 65; j <= i ; j++){
        print5 += " " +(String.fromCharCode(j)) + " ";
    }
    print5 += '\n';
}

console.log(print5);

//Pattern - 14 (Printing Alphabets)
console.log("----Pattern - 14 ( Printing of Alphabets)---");

let print6 = "";

for(let i = 1;i <= 5;i++) {
    for(let j= 5; j >= i ; j--){
        print6 += " " + '*' + " ";
    }
    print6 += '\n';
}

console.log(print6);

//Pattern - 15 (Printing Alphabets)
console.log("----Pattern - 15( Printing of Alphabets)---");

let print7 = "";

for(let i = 1;i <= 5;i++) {
    for(let j= 5; j >= i ; j--){
        print7 += " " + '*' + " ";
    }
    print7 += '\n';
}

console.log(print6);

//Pattern - 16 (Printing Alphabets)
console.log("----Pattern - 16 ( Printing of Alphabets)---");

let print8 = "";

for(let i = 69;i >= 65;i--) {
    for(let j= 65; j <= i ; j++){
        print8 += " " + String.fromCharCode(j) + " ";
    }
    print8 += '\n';
}

console.log(print8);



//Pattern - 17 (Printing Alphabets)
console.log("----Pattern - 17 ( Printing of Alphabets)---");

let print9 = "";

for(let i = 1;i <= 5 ;i++) {
    for(let j= 5; j >= i ; j--){
        print9 += " " + j + " ";
    }
    print9 += '\n';
}

console.log(print9);

//Pattern - 18 (Printing Alphabets)
console.log("----Pattern - 18 ( Printing of Alphabets)---");

let print10 = "";

for(let i = 5; i >= 1 ;i--) {
    for(let j= 1; j <= i ; j++){
        print10 += " " + i + " ";
    }
    print10 += '\n';
}

console.log(print10);

//Pattern - 19 (Printing Alphabets)
console.log("----Pattern - 19 ( Printing of Alphabets)---");

let print11 = "";

for(let i = 69; i >= 65 ;i--) {
    for(let j= 65; j <= i ; j++){
        print11 += " " + String.fromCharCode(i) + " ";
    }
    print11 += '\n';
}

console.log(print11);

//Pattern - 20 (Printing Alphabets)
console.log("----Pattern - 20 ( Printing of Alphabets)---");

let print12 = "";

for(let i = 65; i <= 69 ;i++) {
    for(let j= 69; j >= i ; j--){
        print12 += " " + String.fromCharCode(j) + " ";
    }
    print12 += '\n';
}

console.log(print12);

//Pattern - 21 (Printing pyramid reverse)
console.log("----Pattern - 21 ( Printing of Triangle with star)---");

for(let i = 1 ; i<= 5; i++){

    let print13 = "";

    for(let j=1 ; j <= (5 - i);j++){
        print13 += " " ;
    }

    for(let k=1 ; k <= i; k++){
        print13 +=  " " + '*';
    }

    console.log(print13);

}


//Pattern - 22 (Printing pyramid reverse)
console.log("----Pattern - 22 ( Printing of Triangle with star)---");

for(let i = 1 ; i<= 5; i++){

    let print14 = "";
    let k=1,j=1;

    for(let z = 1 ; z <= 5;z++){
        if(j <= (5-i)){
            print14 += "  " ;
            j++;
        }else if(k<= i){
            print14 += '* ' ;
            k++;
        }
    }

    console.log(print14);
}

//Pattern - 23 (Printing Numbers reverse)
console.log("----Pattern - 23 ( Printing of Triangle with star)---");

for(let i = 1 ; i<= 5; i++){

    let print14 = "";
    let k=1,j=1;

    for(let z = 1 ; z <= 5;z++){
        if(j <= (5-i)){
            print14 += "  " ;
            j++;
        }else if(k<= i){
            print14 += i + " " ;
            k++;
        }
    }

    console.log(print14);
}


//Pattern - 24 (Printing Numbers reverse)
console.log("----Pattern - 24 ( Printing of Triangle with star)---");

for(let i = 1 ; i <= 5; i++){

    let print14 = "";
    let k = 1,j = 1;

    for(let z = 1 ; z <= 5;z++){
        if(j <= (5-i)){
            print14 += "  " ;
            j++;
        }else if(k<= i){
            print14 += k + " ";
            k++;
        }
    } 

    console.log(print14);
}

//Pattern - 25 (Printing Alphabets Pyramid Pattern)
console.log("----Pattern - 25 ( Printing of Triangle with star)---");

for(let i = 65 ; i <= 69; i++){

    let print14 = "";
    let k=65,j=1;

    for(let z = 65 ; z <= 69;z++){
        if(j <= (69-i)){
            print14 += "  " ;
            j++;
        }else if(k<= i){
            print14 += String.fromCharCode(i) + " " ;
            k++;
        }
    }

    console.log(print14);
}
 
//Pattern - 26 (Printing Alphabets Pyramid Pattern)
console.log("----Pattern - 26 ( Printing of Triangle with star)---");

for(let i = 65 ; i <= 69; i++){

    let print14 = "";
    let k=65,j=1;

    for(let z = 65 ; z <= 69;z++){
        if(j <= (69-i)){
            print14 += "  " ;
            j++;
        }else if(k<= i){
            print14 += String.fromCharCode(k) + " " ;
            k++;
        }
    }

    console.log(print14);
}



// Printing Pyramid Structure
console.log("Printing Pyramid Structure");

let str1 = '';
for(let i=0; i<5 ;i++){
    for(let j= -5; j<5; j++){
        if( j >= -i && j<= i){
            str1 += '*';
        }else{
            str1 += ' ';
        }

    }
    str1 += '\n';
}

console.log(str1);


// Printing Pyramid Structure
console.log("Printing Pyramid Structure of Numbers");

let str2 = '';
for(let i=1; i<=5 ;i++){
    for(let j= -5; j<=5; j++){
        if( j > -i && j< i){
            str2 += i;
        }else{
            str2 += ' ';
        }
    }
    str2 += '\n';
}

console.log(str2);


console.log("Printing the Pyramid Structure with double Numbers");

let str3 = '';
let temp = 1;
for(let i=1; i<= 5; i++){
    for(let j=-5; j<= 5; j++){
        if( j> -i && j< i){
            str3 += temp;
        }else{
            str3 += ' ';
        }
    }
    temp+=2;
    str3 += '\n';
}

console.log(str3);

console.log("Printing the Pyramid Structure with Alphabets ");

let str4 = '';
temp = 65;

for(let i=1; i<= 5; i++){
    for(let j=-5; j<= 5; j++){
        if( j > -i && j < i){
            str4 += String.fromCharCode(temp);
        }else{
            str4 += ' ';
        }
    }
    temp++;
    str4 += '\n';
}

console.log(str4);


console.log("Printing the Pyramid Structure with Doubled Alphabets ");

let str5 = '';
temp = 65;

for(let i=1; i<= 5; i++){
    for(let j=-5; j<= 5; j++){
        if( j > -i && j < i){
            str5 += String.fromCharCode(temp);
        }else{
            str5 += ' ';
        }
    }
    temp+=2;
    str5 += '\n';
}

console.log(str5);

console.log("Printing the incremented Numbers in a Row ");

let str6 = '';

for(i=1;i<=5;i++){
    let k = 1;
    for(j=-5;j<=5;j++){
        if( j> -i && j < i){
            str6 += k;
            k++;
        }else{
            str6 += ' ';
        }  
    }
    str6 +=' \n';  
}

console.log(str6);


console.log("Printing the decremented Numbers in a Row ");

let str7 = '';
let k = 1;

for(let i = 1; i <= 5; i++){   
    for(let j = -5; j <= 5 ; j++ ){
        if( j > -i && j < i){ 
                str7 += k;
                k--;
        }else{
            str7 += ' ';
        }
    }
    k = k + 2*i + 1;
    if( k % 2 == 0){
        k = k + 1;
     } 
    str7 += '\n';
}

console.log(str7);


console.log("Printing the decremented Alphabets in a Row ");

let str8 = '';
let z = 65;

for(let i = 1; i <= 5; i++){   
    for(let j = -5; j <= 5 ; j++ ){
        if( j > -i && j < i){ 
            str8 += String.fromCharCode(z);
                z--;
        }else{
            str8 += ' ';
        }
    }
    z = z + 2*i + 1;
    if( z % 2 == 0){
        z = z + 1;
     } 
     str8 += '\n';
}

console.log(str8);

console.log("Printing the incremented Alphbets in a Row ");

let str9 = '';

for(i=1;i<=5;i++){
    let k = 65;
    for(j=-5;j<=5;j++){
        if( j> -i && j < i){
            str9 += String.fromCharCode(k);
            k++;
        }else{
            str9 += ' ';
        }  
    }
    str9 +=' \n';  
}

console.log(str9);

console.log('Printing the Mirror Patterns');

let str10 = '';
let var1 = 1;
let var2 = 1;

for(i=1;i<=5;i++){
    for(j=-5;j<=5;j++){
        if( j> -i && j < i){
            str10 += var2 - var1;
            var2--;
        }else{
            str10 += ' ';
        }  
    }
    str10 +=' \n'; 
    var2 +=2; 
}

console.log(str10);