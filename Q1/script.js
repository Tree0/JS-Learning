function addNumber() {
	let a = document.getElementById("demo1").value;
	let b = document.getElementById("demo2").value;
	let c = document.getElementById("demo3").value;
	let d = document.getElementById("demo4").value;
	let e = document.getElementById("demo5").value;
	let f = Number(a) + Number(b) + Number(c) + Number(d) + Number(e);
	alert(f);
}