const each = (array, callback)=>{
	for(let i = 0; i < array.length; i++){
		callback(array[i]);
	}
}

each([1,2,3,4], (currentNum)=>{
	console.log(currentNum);
});
