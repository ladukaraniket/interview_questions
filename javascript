What is javascript?
How many ways we can add javascript or script to a project?
	//inline,embedded,external
Which one among the above has the highest priority?
	//inline has highest..
How to add an external script to a file?
	//<script src="test.js" type="text/javascript" ></script>
	
What are the data types in javascript?


====================================================================================================================
Array
====================================================================================================================
What is an array in javascript?
	//JavaScript arrays are used to store multiple values in a single variable.
How many ways we can create array in javascript?
	//array literal. i.e. arr = [1,2,3]
	//array new operator i.e. arr = new Array(1,2,3) 
What is the difference between new Array(10) vs new Array(10,20)?
	//new Array(10) will create 10 undefined elements in array 		[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
	//new Array(10,20) will create array with 2 elements [10,20]
How to check if a variable is an array?
	//Array.isArray(arr)
What is the output of typeof(arr)?
	//object
How to check length of an array?
	//arr.length
How to empty an array in javascript?
	//arr.length = 0
	//arr = []
How to check euality of two arrays?

What all methods provided by array library?
	//push(),pop(),shift(),unshift()
	//map(),filter(),reduce(),reduceRight()
	//forEach()
	//indexOf(),lastIndexOf()
	//sort(),reverse()
	//find(),findIndex()
	//slice(),splice()
	//some(),every()
	//keys(),values(),every()
	//concat()
	//from(),of(),isArray()
	//flat(),flatMap()
	//toLocaleString(),toSource(), toString()
	//join()
	//fill()
	//copyWithin()

What are array mutating methods?
	//the array methods which modifies the original array..
	//reverse(),sort(),push(),pop(),shift(),unshift().................
	
What are array non-mutating methods?
	//the array methods which does not modify the origina array..
	//map(),fiter(),some(),every().....................
	
How to traverse through an array?
	//for(),forEach(),map(),
	
How to check if array includes a specific element?
	//arr.includes(ele)
	
How to flatten one array?
How to push elements to an array?
	//push(),unshift()
	
How to remove elements from an array?
	//pop(),shift()
	
What is the difference between push() and unshift()?
	//push() adds element to end of array
	//unshift() adds elements to beginning of array
	//push() and unshift() always returns the length of array
	//arr.push(element1[, ...[, elementN]])
	

What is the difference between pop() and shift()?
	//pop() removes element from end of array
	//shift() removes elements from beginning of array
	//pop() and shift() always returns the element removed from array
	

	
What is array map() method?
	//map() method takes a function as an argument and that is used to traverse through all elements in array
	//map() returns a new array..
	//map() method calling function takes 3 arguments currentElement, index, and current array..
	//[1,2,3,4,5].map((v,i,arr)=>{console.log(v);}) //[undefined,undefined,undefined,undefined,undefined]
	//[1,2,3,4,5].map((v,i,arr)=>{console.log(v); return v+i; }) //[1, 3, 5, 7, 9]
	
	
What is array filter() method?
	//filter() method takes a function as an argument and that is used to filter elements from array
	//filter() returns a new array..
	//filter() method calling function takes 3 arguments currentElement, index, and current array..
	//[1,2,3,4,5].filter((v,i,arr)=>{console.log(v);}) //[] if no condition provided then returns empty array
	//[1,2,3,4,5].filter((v,i,arr)=>{console.log(v); return v == 2; }) //[false, true, false, false, false]
	
What is array reduce() method?
	//reduce() method takes a function as an argument and that is operated on individual elements in array
	//reduce() returns a single value.
	//reduce() method calling function takes 4 arguments accumulator,currentElement, index and current array..
	//By default accumulator will be the first element of array if no initialValue provided..
	//And value will be start from second index
	arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
	
	//if initialValue is provided then accumulator will be same as initialValue and value will be considered from first index.
	//[1,2,3,4,5].reduce((a,v,i,arr)=>{console.log(v,a);}) //return is undefined
		 //if we do not perform any oeration inside reduce() after first iteration accumulator value will be undefined..
		 //hence result will be undefined
	//[1,2,3,4,5].filter((a,v,i,arr)=>{console.log(v); return v+a; }) //15
	
What is array reduceRight() method?
	//reduceRight() method takes a function as an argument and that is operated on individual elements in array from right to left
	//reduceRight() returns a single value.
	//reduceRight() method calling function takes 4 arguments accumulator,currentElement, index and current array..
	//By default accumulator will be the last element of array if no initialValue provided..
	//And value will be start from seond last index
	arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
	
	//if initialValue is provided then accumulator will be same as initialValue and value will be considered from last index.
	//[1,2,3,4,5].reduceRight((a,v,i,arr)=>{console.log(v,a);}) //return is undefined
		 //if we do not perform any oeration inside reduce() after first iteration accumulator value will be undefined..
		 //hence result will be undefined
	//[1,2,3,4,5].filter((a,v,i,arr)=>{console.log(v); return v+a; }) //15
	
What is array forEach() method?
	//forEach() operates on each element on array and does not return anything
	//return is undefined..
	arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
	
What is the limitation of forEach()?
	1. 	//There is no way to stop or break a forEach() loop other than by throwing an exception. 
		//Early termination may be accomplished with:
		A simple for() loop
		A for...of / for...in loops
		Array.prototype.every()
		Array.prototype.some()
		Array.prototype.find()
		Array.prototype.findIndex()

	2. forEach expects a synchronous function
		forEach does not wait for promises. 
		Kindly make sure you are aware of the implications while using promises(or async functions) as forEach callback. 
		
		let ratings = [5, 4, 5];
		let sum = 0;
		let sumFunction = async function (a, b){ return a + b; }
		ratings.forEach(async function(rating) { sum = await sumFunction(sum, rating); })
		console.log(sum);
		// Naively expected output: 14
		// Actual output: 0	
	
	3. No operation for uninitialized values (sparse arrays)
		let numCallbackRuns = 0
		[1,3,,7].forEach((element) => {
		  console.log(element)
		  numCallbackRuns++
		})
		console.log("numCallbackRuns: ", numCallbackRuns); 
		//1
		//3
		//7
		// numCallbackRuns: 3
		// comment: as you can see the missing value between 3 and 7 didn't invoke callback function.
		
	
What is array indexOf() method?
		//The indexOf() method returns the first index at which a given element can be found in the array, 
		//or -1 if it is not present.., which means the array will not be searched
		//the element will be searched from 0th index by default if no formIndex is specified
			arr.indexOf(searchElement[, fromIndex])
		
		//fromIndex is positive (valid values of formIndex : 0 to length-1)
			//if fromIndex > arr.length then it will return -1 , array wont be searched
			//if fromIndex < arr.length then it will the exact index if element is found
		
		//fromIndex is negative(valid values of formIndex : -1 to -length)
			//if fromIndex < arr.length then element will be searched from formIndex to end of array..
				//where -1 as is last index, -arr.length is 0th index... searched in forward direction.. ->
			//if fromIndex > arr.length(ignore case) then formIndex will be considered always from 0th index..
			
		var arr = [1,2,3,4,5,1];
		arr.indexOf(1,0); //0
		arr.indexOf(1,5); //5
		arr.indexOf(1,8); //-1
		
		arr.indexOf(1,-1); //5
		arr.indexOf(1,-6); //0
		arr.indexOf(1,-8); //0
		
What is array lastIndexOf() method?
		//The lastIndexOf() method returns the last index at which a given element can be found in the array, 
		//or -1 if it is not present., which means the array will not be searched
		//the element will be searched from last index by default if no formIndex is specified
			arr.indexOf(searchElement[, fromIndex])
		
		//fromIndex is positive (valid values of formIndex : length-1 to 0)
			//if fromIndex >= arr.length then the whole array will be searched from backward direction<-
			//if fromIndex < arr.length then it will start searching from the exact fromIndex(backward) towards 0th index <-
		
		//fromIndex is negative(valid values of formIndex : -length to -1)
			//if fromIndex < arr.length then element will be searched from formIndex to first index of array..
				//where -1 as is last index, -array.length is 0th index... searched in backward direction.. <-
			//if fromIndex > arr.length(ignore case) then it will return -1 , array wont be searched
			
		var arr = [2, 5, 9, 2];
		arr.lastIndexOf(2);     // 3
		arr.lastIndexOf(7);     // -1
		arr.lastIndexOf(2, 3);  // 3
		arr.lastIndexOf(2, 2);  // 0
		arr.lastIndexOf(2, -2); // 0
		arr.lastIndexOf(2, -1); // 3
		
What is array sort() method?
	//The sort() method sorts the elements of an array in place and returns the sorted array. 
	//The default sort order is ascending, 
	//The sort() is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
	//The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
	//modifies the actual array
	//returns same modified sorted array
	
	arr.sort([compareFunction])
	
	
	const months = ['March', 'Jan', 'Feb', 'Dec'];
	months.sort();
	console.log(months);
	
	const array1 = [1, 30, 4, 21, 100000];
	array1.sort();
	console.log(array1);
	// expected output: Array [1, 100000, 21, 30, 4]
	
How to sort integer array ascending order?
	//arr.sort((a,b)=>a-b)
	
How to sort integer array descending order?
	//arr.sort((a,b)=>b-a)
	
How to write our own sort() method in javascript?
	
	
What is array reverse() method?
	//The reverse() method reverses an array in place. 
	//The first array element becomes the last, and the last array element becomes the first.
	//modifies the actual array
	//returns same modified reversed array
	a.reverse()
	
	
	const a = [1, 2, 3];
	console.log(a); // [1, 2, 3]
	a.reverse(); 
	console.log(a); // [3, 2, 1]
	
How to reverse an array like object?
	const a = {0: 1, 1: 2, 2: 3, length: 3};
	console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}
	Array.prototype.reverse.call(a); //same syntax for using apply()
	console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}
	
What is find() method ?
	//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
	arr.find(callback(element[, index[, array]])[, thisArg])
	//return type is value of the first element in the array that satisfies the provided testing function. 
	//Otherwise, undefined is returned.
	
	[1,2,3,4,5].find((e)=>{return e > 3})
	//4
	
	//callback is invoked for every index of the array, not just those with assigned values. 
	//This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.
	
	a = [2,3,4];
	a.find((e,i,a)=>{a.unshift(9); console.log(i,e); return e > 3})
	//undefined because...
	first time arr is [2,3,4]; ele is 2 > 3 false
	before second time arr is [9,2,3,4]; ele is again 2  as its secondindex 2 > 3 false
	before third time arr is [9,9,2,3,4]; ele is again 2  as its thirdindex 2 > 3 false
	
	
What is findIndex() method ?
	//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 	//Otherwise, it returns -1, indicating that no element passed the test.
	
	arr.findIndex(callback( element[, index[, array]] )[, thisArg])
	
	[1,2,3,4,5].findIndex((e)=>{return e > 3})
	//3
	
	//Unlike other array methods such as Array.some(), callback is run even for indexes with unassigned values.
	
	
Difference between findIndex() and indexOf()?
	//findIndex() finds the first index based on function satisyying condition
	//indexOf() finds the first matching index of the searched element..
	
Difference between indexOf() and lastIndexOf()?
	//indexOf() finds the first matching index of the searched element..
	//lastIndexOf() finds the first matching index of the searched element..from backward direction


What is slice() method?

What is splice() method?







How to merge 2 arrays?
	//arr1 = ['a','b']
	//arr2 = ['c','d']
	//Array.prototype.push.apply(arr1, arr2)
	//arr1 will be updated to ['a','b','c','d']
	//equivalent to arr1.push('c', 'd')
	
	
How to get second smallest from an array?
	//arr.sort((a,b)=>a-b)[1]
	
What is a sparsed array?
	
How to find all occourences of an element using indexOf()?
		var id = arr.indexOf(ele);
		newarr=[]
	while (id != -1) {
  		newarr.push(array.indexOf(ele));
  	  	id = arr.indexOf(ele, id + 1);
	}
	
Finding if an element exists in the array or not and adding to the array if not exist?
	(arr.indexOf(ele) === -1) ? arr.push(ele) : "already exists"







	//push(),pop(),shift(),unshift() - completed
	//map(),filter(),reduce(),reduceRight()
	//forEach()
	//indexOf(),lastIndexOf()
	//sort(),reverse()
	//find(),findIndex()
	//slice(),splice()
	//some(),every()
	//keys(),values(),every()
	//concat()
	//from(),of(),isArray()
	//flat(),flatMap()
	//toLocaleString(),toSource(), toString()
	//join()
	//fill()
	//copyWithin()



























