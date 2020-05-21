

const logItems = function(array) {
    
    for(const arr of array){
        
       const index = array.indexOf(arr)+1;

       console.log(`${index} - ${arr}`);
   
    } 
   
  }

  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);