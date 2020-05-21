
let input;
const numbers = [];
let total = 0;


do {
    input = prompt('Enter number')

    if(input === null){
        console.log('Canceled');
        break;
        }
      const value = Number (input)
      numbers.push(value);
      console.log(numbers);

}while(true)

 for(const number of numbers){
          total += number;      
      }
      console.log(`Total = ${total}`);