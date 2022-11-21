// JavaScript program to find the
// Modulus of a Complex Number

// Function to find modulus
// of a complex number
function findModulo(s){
	let l = s.length;
	let i, modulus = 0;

	// Storing the index of '+'
	if (s.indexOf('+')< l) {
		i = s.indexOf('+');
	}
	// Storing the index of '-'
	else {
		i = s.indexOf('-');
	}

	// Finding the real part
	// of the complex number
	let real = s.substring(0, i);

	// Finding the imaginary part
	// of the complex number
	let imaginary = s.substring(i + 1, l - 1);

	let x = parseInt(real);
	let y = parseInt(imaginary);

	console.log(Math.sqrt(x*x + y*y));
}

// Driver code
let s = "3+4i";
findModulo(s);

// The code is contributed by Gautam goel (gautamgoel962)

// const nums = {real:'a', img: 'b'} 

// function create() {
    
// }