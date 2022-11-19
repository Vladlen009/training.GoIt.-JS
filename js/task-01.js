// setInterval(timer, 1000);


// function timer() {
// 	console.log('!');
// }

// timer();



// setInterval(function() {
// 	console.log('Hay');
// }, 3000);

// const mude = [1, 2, 3];

// setTimeout(function() {
//   for(let item of mude){
//     if(item === 2){
//         console.log(item + 10);
//     }else{
//         console.log(item + 20);
//     }
//   }
// },5000); 

// let i = 1;
// setInterval(function(){
//     i++;
//     console.log(i);
// },100);

// let timerId = setInterval(function() {
// 	console.log('!')
// }, 1000);

// alert(timerId); // выведет номер таймера
// let i = 0;
// let timerId = setInterval(() => {
//     console.log(i++);
//     if(i >= 11){
//        console.log(i--);
//     }
    
// },500);


// let i = 0;

// setInterval(function plus () {
//    console.log(i++);
// },1000);

// setInterval(function minus (){
//     console.log(i--);
// },2000);


// if(i<=10) {
//     plus();
//     }else {
//         minus();
//     }

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');


// // start.addEventListener('click', function func(){
// //     let i = 0;

// //     setInterval(function(){
// //         console.log(i++);
// //     },2000);
// //     this.removeEventListener('click', func);
// // })



// let timerId; // сделаем переменную глобальной

// start.addEventListener('click', function() {
// 	let i = 0;
	
// 	timerId = setInterval(function() {
// 		console.log('i++')
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });