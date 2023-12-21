console.log("--- Page 2 ---");


const cars = ['Mercedes', 'Volkswagen', 'Tesla', 'Toyota', 'Honda'];

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    if (car !== 'Tesla') {
        console.log(car);
    }
}

const ul = document.querySelector('.cars');
let htmlCode = '';
for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    if (car !== 'Tesla') {
        htmlCode += '<li>' + car + '</li>';
    }
}
ul.innerHTML = htmlCode;