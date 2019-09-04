// for (let i = 100; i >= 0; i--) {
//   if ( i % 2 === 0 && i % 10 !== 0)
//   document.write(i + '<br>')
// }

// let i = 0
// while (i < 100){
//      document.write(i + '<br>');
//      i++;
// }

//  let i = 0
//  do{
//      document.write(i + '<br>');
//      i++;
//  }while (i < 100)

// let num = parseFloat(prompt('enter number'));
// while (isNaN(num)){
//     alert('You entered not a number!');
//     num = parseFloat(promt('enter number'));
// }


let products = ['tesla x' , 'tesla s', 'bmw i3'];
products[3] = 'tesla Y';
products.push('chevy corvette', 'zaz sence');
products[4] = 'peugeot';
products.push('ural');
console.log(products.length);

// for (let i= 0; i < products.length; i++) {
//     if (products.length !== undefined){
//          console.log(products[i]);
//     }
// }

products.forEach( el => console.log(el) );



