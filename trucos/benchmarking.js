console.time('todo');
let suma = 0;
console.time('bucle');
for (let i = 0; i < 100000; i++) {
  suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle2');
for (let j = 0; j < 100000; j++) {
  suma2 += 1;
}
console.timeEnd('bucle2');

console.time('asincrono');
console.log('Inicio del proceso asíncrono');
asincrona()
  .then( () => {
    console.timeEnd('asincrono');
  });

console.timeEnd('todo');

function asincrona() {
  return new Promise ( (resolve) => {
    setTimeout(function () {
      console.log('Termina el proceso asíncrono');
      resolve();
    })
  })
}