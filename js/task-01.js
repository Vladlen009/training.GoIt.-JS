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
   
                    //   --------------------------------------Function---------------------------------


// function func() {
// 	for(let i = 1; i <= 100; i++){
//         console.log(i);
//     }
// }

// func();


// function func(nums, hams, fac){
//     let sym = nums + hams + fac;
//     if(sym < 0){
//         console.log(sym, "+++");
//     } if(sym > 0){
//         console.log(sym, "---");
//     } 
    
// }

// func(5, 3, -10);
// func(2, 5, 10);
// func(10, 2, -100);

// function func(num1, num2, num3) {
    
//     console.log(num1 + num2 + num3);
// }

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// func(param1, param2, param3);

// function func(num = 5) {
// 	console.log(num * num);
// }

// func(2);
// func(3);
// func();


// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }

// func(2, 3);
// func(3);
// func();

// function kub(num){
//     return num**2;
// }

// function map(num1){
//     return Math. sqrt(num1);
// }


// let sa = kub(map(9))
// console.log(sa);

// function func(num) {
// 	let res;
	
// 	if (num >= 0) {
// 		res = Math.sqrt(num);
// 	} else {
// 		res = 0;
// 	}
	
// 	return res;
// }

// console.log(func(9));


// function func(num) {
// 	if (num >= 0) {
// 		return 'Hay', (Math.sqrt(num));
// 	} else {
// 		return 0;
// 	}
// }

// console.log(func(9));


// function func(num1, num2) {
// 	if (num1 > 0 && num2 > 0) {
// 		return (num1 * num2);
// 	} else {
// 		return (num1 - num2);
// 	}
	
	
// }

// console.log(func(6, 4));

// function isPositive(arr) {
	
// 	for (let elem of arr) {
// 		if (elem % 2 === 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

function func(a, b) {
	return a != b
}

func(1, 2);