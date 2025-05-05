localStorage.removeItem('nombre');


//Actualizar un registro 
const mesesArray = JSON.parse(localStorage.getItem('Meses'));
console.log(mesesArray);
mesesArray.push('nuevo mes');
console.log(mesesArray);
localStorage.setItem('Meses', JSON.stringify(mesesArray));


localStorage.clear();