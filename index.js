function scuberGreetingForFeet(feet){
  // Write your code here!
    let message;
  
    if (feet <= 400) {
      message = 'This one is on me!';
    } else if (feet > 2000 && feet <= 2500) {
      message = 'I will gladly take your thirty bucks.';
    } else if (feet > 2500) {
      message = 'No can do.';
    }
  
    return message;
  }
console.log(scuberGreetingForFeet(200)); 
console.log(scuberGreetingForFeet(2200)); 
console.log(scuberGreetingForFeet(2600));
  
    

  

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
console.log(ternaryCheckCity('NYC')); 
console.log(ternaryCheckCity('Los Angeles'));
console.log(ternaryCheckCity('Chicago')); 

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous')); 
console.log(switchOnCharmFromTip('average')); 
