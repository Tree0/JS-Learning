function pattern2(){
	let n = parseInt(prompt("Please enter number of Rows"));
	if(name != null) {
		for(let i = 1; i<=n; i++){
			for(let j = 1; j<=n; j++){
				if(j<=n-i){
				document.write("&nbsp;&nbsp;&nbsp;");
				}
				else{
				document.write("*&nbsp;");
				}
			}
			document.write("</br>");
		}
	}
}
		

