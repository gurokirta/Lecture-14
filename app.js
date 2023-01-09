// // var myName = 'Guro';
// // var surName = 'Kirtadze';
// // var myAge = 24;

// // console.log(myName);
// // console.log(surName);
// // console.log(myName);
// // console.log(myName);

// var userName = prompt('Enter Your Name');
// var userAge = prompt('Enter Your Age');
// var userQuestion = confirm('Are You Studying Js ?');

// document.write('Hello ' + userName, ' you are ' + userAge + ' years old');

// if(userQuestion) { 
//     document.write('You Study JS')
// } else { 
//     document.write('You are not Study JS')
// }

// დავალება

var userName = prompt('შეიყვანეთ თქვენი სახელი :');
var userBirthYear = prompt('შეიყვანეთ თქვენი დაბადების წელი : ');

var userAge = 2023 - userBirthYear;


if (userAge > 21) {
    console.log('შენ შეგიძლია შეხვიდე კლუბში')
 } else { 
    console.log('შენ არ შეგიძლია კლუბში შესვლა')
 }

 if (userName==='ნინო' || userName === 'დათო') { 
    console.log('შენ ხარ VIP კლიენტი');
 } else { 
    console.log('შენ ხარ ჩვეულებრივი კლიენტი');
 };
document.write(userName + ' ' + userBirthYear + ' ' + userAge);

