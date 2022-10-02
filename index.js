// 1. Write a ts program to find length of a string.
// var a:string="asvd"
// console.log(a.length);
// 2. Write a ts program to copy one string to another string.
// 3. Write a ts program to concatenate two strings.
// var a = (aa:string, bb:string) :string => {
//     return aa+bb;
// }
// console.log(a("abc", "def"));
// 4. Write a ts program to compare two strings.
// var c:string=""
// var a = (aa:string, bb:string) :string => {
//     if (aa==bb) {
//         var c:string= "both are equal"
//     }
//     else c= ("both are not equal")
//     return c;
// }
// console.log(a("aca", "aca"));
// 5. Write a ts program to convert lowercase string to uppercase.
// var a = (aa:string):string => aa.toUpperCase()
// console.log(a("assas"));
// 6. Write a ts program to convert uppercase string to lowercase.
// var a = (aa:string) : string => aa.toLowerCase()
// console.log(a("PAKISTAN"))
// 7. Write a ts program to toggle case of each character of a string.
// var c:string=""
// var a = (aa:string):string => {
//     for(var i=0; i<aa.length; i++) {
//         if (aa[i].toUpperCase()==aa[i]) {
//             c += aa[i].toLowerCase()
//             }
//             if(aa[i].toLowerCase()==aa[i]) {
//                 c+= aa[i].toUpperCase()
//             }
//     }
//     return c;
// }
// console.log(a("AAcdA"));
// 8. Write a ts program to find total number of alphabets, digits or special character in a string.
// var a:string="4848"
// for(var i=0;i<=126;i++) {
//     console.log(String.fromCharCode(i) ) {
//         console.log(a[i])
//     }
// }
// 9. Write a ts program to count total number of vowels and consonants in a string.
// var d:string=""
// var e:number=""
// var a = (b:string): string => {
//     for(var i=0;i<=b.length-1;i++) {
//         if (b[i] == "a" || b[i] == "e" || b[i] == "i" || b[i] == "o" ||  b[i] == "u" ) {
//             d++;
//         }
//         else (e++)
//     }
//     return (d)
// }
// console.log("Number of vowels are", a("heealloow"));
// 10. Write a ts program to count total number of words in a string.
// var a:string="Hello World This is TS"
// var b:number=0
// var aa = (c:string): number => {
//     for(var i=1;i<=c.length;i++) {
//         if(c.charCodeAt(i)==32) {
//             b++
//         }
//     }
//     return b+1;
// }
// console.log("total numbers is string are", aa("hello world this is type script"));
// 11. Write a ts program to find reverse of a string.
// var b:string=""
// var aa = (bb:string):string => {
//     for (var i=bb.length-1; i>=0;i--) {
//         b+=bb[i]
//     }
//     return b;
// }
// console.log(aa("hello world"));
// 12. Write a ts program to check whether a string is palindrome or not.
// var a:string=""
// var b:string=""
// var aa = (c:string) => {
//     for(var i=c.length-1;i>=0;i--) {
//         a+=c[i];
//         }
//         if (a==c) {
//          b=" string is palindrome"
//         }
//         else ( b=" string is not palindrome" )
//         return b;
// }
// console.log(aa("halalah"));
// 13. Write a ts program to reverse order of words in a given string
// var a:string = "hello world this is Typescript"
// var b:string = ""
// for (var i=0;i<=a.length-1;i++) {
//     if (a[i]==" " ) {
//         b += a[i]
//     }
// }
// console.log(b);
// 14. Write a ts program to find first occurrence of a character in a given string.
// var d:number=0
// var a = (b:string,findoccurn:string): number => {
//     for(var i=0;i<=b.length;i++) {
//         if (b[i]==findoccurn) {
//             d=i;
//         break  
//         }
//     }
//     return d;
// }
// console.log(("First Occurance of o is at index"), a("a quick quick brown", "o"));
// 15. Write a ts program to find last occurrence of a character in a given string.
// var c:number=0
// var a = (b:string, findindex:string): number => {
//         c=b.lastIndexOf(findindex);
//         return c;
// }
// console.log("Last occurance is ", a("hellod world", "d"));
// 16. Write a ts program to search all occurrences of a character in given string.
// var d:string=""
// var c:string=""
// var SearchAllOccurnc = (textt:string, chrctr:string) => {
//     for (var i=0;i<=textt.length-1;i++){
//         if(textt[i]==chrctr){
//             d=i.toString()
//             c += d
//         }
//     }
//     return c;
//     }
//     console.log(SearchAllOccurnc("type script is good","o"));
// 17. Write a ts program to count occurrences of a character in given string.
// var c:number=0;
// var searchOccur = (textt:string, findOccur:string) => {
//     for(var index=0;index<=textt.length;index++) {
//         if(textt[index]==findOccur) {
//             c++;
//         }
//     }
//     return c.;
// } 
// console.log("Total Occurance are",searchOccur("hellooo typescript world", "o"));
// 18. Write a ts program to find highest frequency character in a string.
// var a:string = "helloo worlld"
// var d:string = ""
// for (var i=0;i<=a.length;i++) {
//     for (var j=0;j<i;j++) {
//         if(a[i])
//     }
// }
// 19. Write a ts program to find lowest frequency character in a string.
// 20. Write a ts program to count frequency of each character in a string.
// 21. Write a ts program to remove first occurrence of a character from string.
// var newtext:string=""
// var removeOccur = (textt:string, chrc2Remove:string): string => {
//     for (var i=0;i<=textt.length-1;i++) {
//         if (textt[i]==chrc2Remove) {
//             newtext=textt.slice(i,i+1)
//         }
//     }
// return newtext;
// }
// console.log(removeOccur("hello wirld","i"));
// 22. Write a ts program to remove last occurrence of a character from string.
// 23. Write a ts program to remove all occurrences of a character from string.
// 24. Write a ts program to remove all repeated characters from a given string.
// 25. Write a ts program to replace first occurrence of a character with another in a string.
// var x:string=""
// var replaceOccurnc = (text:string,replaceThis:string,replacewith:string):string => {
//     for(var i=0;i<=text.`length;i++) {
//         if (text[i]==replaceThis) {
//             x=text.replace(text[i],replacewith)
//         }
//     }
//     return x;
// }
// console.log(replaceOccurnc("Faisalabad","a","s"));
// 26. Write a ts program to replace last occurrence of a character with another in a string.'
// var d:string=""
// var replaceOccurc = (textt:string, replacethis:string,replacewithh:string):string => {
//     for (var i=textt.length-1;i>=0;i--) {
//         if (textt[i]==replacethis) {
//             d=textt.replace(textt[i],replacewithh)
//         }
//     } 
//     return d;
// } 
// console.log(replaceOccurc("hello world ","l","i"));
// 27. Write a ts program to replace all occurrences of a character with another in a string.
// 28. Write a ts program to find first occurrence of a word in a given string.
// var c:number=0
// var a=(textt:string) :number => {
//     for (var i=0;i<=textt.length;i++) {
//         if(textt[i]==" ") {
//             c=i;
//         }
//     }
//     return c;
// }
// console.log("First occurance of word is at index", a("hello world"));
// 29. Write a ts program to find last occurrence of a word in a given string.
// 30. Write a ts program to search all occurrences of a word in given string.
// 31. Write a ts program to count occurrences of a word in a given string.
// 32. Write a ts program to remove first occurrence of a word from string.
// 33. Write a ts program to remove last occurrence of a word in given string.
// 34. Write a ts program to remove all occurrence of a word in given string.
// 35. Write a ts program to trim leading white space characters from given string.
// 36. Write a ts program to trim trailing white space characters from given string.
// 37. Write a ts program to trim both leading and trailing white space characters from given string.
// 38. Write a ts program to remove all extra blank spaces from given string.
// conditional operators programming exercises
// 1. Write a ts program to find maximum between two numbers using conditional operator.
// var a:number=9
// var b:number=4
// var c = (a>b)? "A is bigger": "B is bigger";
// console.log(c);
// 2. Write a ts program to find maximum between three numbers using conditional operator.
// var a:number=19
// var b:number=19
// var c:number=25
// var aa = (a>b && a>c)? "A is bigger":""
// var bb = (b>a && b>c)? "B is bigger" : ""
// var cc = (c>a && c>b)? "C is bigger" : ""
// console.log(aa,bb,cc);
// 3. Write a ts program to check whether a number is even or odd using conditional operator.
// var a:number = 16;
// var aa=(a%2==0)? "Number is Even" : "Number is odd"
// console.log(aa);
// 4. Write a ts program to check whether year is leap year or not using conditional operator.
// var Year:number=1128;
// var checkYear = (Year%4==0)? "It's Leap Year":"It's not a leap year"
// console.log(checkYear);
// 5. Write a ts program to check whether character is an alphabet or not using conditional operator.
// var a:any = 123;
// var aa = (a/a==1)? "It's a character":"it's an alphabet"
// console.log(aa);
// var a:any="d"
// var b=((a>="A" && a<="Z"))? "it's an alphabet" : "it's a number"
// console.log(b);
// List of switch case programming exercises
// 1. Write a ts program to print day of week name using switch case.
var b = 7;
switch (b) {
    case b = 1: {
        console.log("Saturday");
        break;
    }
    case b = 2: {
        console.log("Sunday");
        break;
    }
    case b = 3: {
        console.log("Monday");
        break;
    }
    case b = 4: {
        console.log("Tuesday");
        break;
    }
    case b = 5: {
        console.log("Wednesday");
        break;
    }
    case b = 6: {
        console.log("Thursday");
        break;
    }
    case b = 7: {
        console.log("Friday");
        break;
    }
    default: {
        console.log("Inavlid input");
    }
}
// 2. Write a ts program print total number of days in a month using switch case.
// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// 4. Write a ts program to find maximum between two numbers using switch case.
// 5. Write a ts program to check whether a number is even or odd using switch case.
// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
// 7. Write a ts program to find roots of a quadratic equation using switch case.
// 8. Write a ts program to create Simple Calculator using switch case.
