
const formatString = function(string) {
  console.log(string.length);
  let smallString;

  if(string.length <= 40){
    return string;
  }else {
    string.length > 40;

    smallString = string.slice(0, 40) + '...';

    return smallString;
  }
  
};

// или такой вариант сразу записаний в return)

// const formatString = function(string) {
//   console.log(string.length);

//   if(string.length <= 40){
//     return string;
//   }else {
//     string.length > 40;

//     return string.slice(0, 40) + '...';
//   }
  
// };


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',),);
