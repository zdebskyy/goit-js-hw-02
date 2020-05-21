
 
const checkForSpam = function(message) {

  const wordsToCheck = message.toLowerCase();

  const isSpam = wordsToCheck.includes('sale') || wordsToCheck.includes('spam');

  return isSpam;
}



// const checkForSpam = function(message) {

//   let spamWords;

//   const wordsToCheck = message.toLowerCase();

//   const isSpam = wordsToCheck.includes(spamWords);

//   switch(spamWords){
//     case 'spam':
//     return isSpam;

//     case 'sale':
//     return isSpam;
//   }
  
// }



// const checkForSpam = function(message) {

//   let spamWords;

//   const wordsToCheck = message.toLowerCase();

//   const isSpam = wordsToCheck.includes(spamWords);

//   if(spamWords === 'spam' || spamWords === 'sale'){
//     return isSpam;
//   }
  
// }



console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true







// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. 
// Функция проверяет ее на содержание слов spam и sale. 
// Если нашли зарещенное слово то функция возвращает true, 
// если запрещенных слов нет функция возвращает false. 
// Слова в строке могут быть в произвольном регистре.