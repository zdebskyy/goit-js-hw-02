

const findLongestWord = function(string) {

  const words = string.split(' ');

  let longestWord = '';

  for(let i = 0; i < words.length; i += 1){
    

    if (longestWord.length < words[i].length){

      longestWord = words[i];
    }

  }
  return longestWord;
  };

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  console.log(findLongestWord('Google do a roll')); // 'Google'
  console.log(findLongestWord('May the force be with you')); // 'force'

  