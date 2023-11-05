function get16(str){
	let val
	console.log(str)
for(let i = 0; i < str.length; i++){
	if (val == "")
		val = str.charCodeAt(i).toString(16);
	else
		val += str.charCodeAt(i).toString(16);
}

return val.replace('undefined', '')
}