function largestNumber() {
	let a = document.getElementById("demo1").value;
	let b = document.getElementById("demo2").value;
	let c = document.getElementById("demo3").value;

	let x = Number(a);
	let y = Number(b);
	let z =  Number(c);
	if(x>y && x>z){
		alert(x);
	}
	else if(y>x && y>z){
		alert(y);
	}
	else{
		alert(z);
	}
				
}