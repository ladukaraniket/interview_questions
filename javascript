What is javascript?
How many ways we can add javascript or script to a project?
	//inline,embedded,external
Which one among the above has the highest priority?
	//inline has highest..
How to add an external script to a file?
	//<script src="test.js" type="text/javascript" ></script>
	
What is the difference between == and ===?
	//== compares the value but not type
	//== compares both value and type
	if("1"==1){}
	if("1"===1){}
	
What is the difference between let and const?
	//in const once we assigned the variable once we cant reassign the variable again
	//in let once we assigned the variable we can reassign it again 
	//in bth cases we cant redeclare
	
	let l=1;
	l=2;
	console.log(l);
	
	let c=1;
	c=2;
	console.log(c);
	
	const c1; //already assigned value undefined to c1..next line we cant reassign it
	c1=1;
	
How const will behave incase of primitive types in case of objects or arrays ?
	const c = [1,2];
	c.push(3);
	console.log(c); 
	
	//Here even though it is a const it will let me change the value of variable..
	//So i will get [1,2,3]
	
	//because its a object it will let me modify it..
	//we can add or remove elements..
	//but we can not reassign it..
	i.e. 
	const c = [1,2];
	c=[1,2,3]
	console.log(c); 
	//TypeError: Attempted to assign to readonly property.
	
What is the difference betwee null and undefined?
	//Both represents empty values
	//but the difference is that when you define a variable not assign a value to it , 
		it will automatically take undefined as the value.
		Javascript does this for us. we dont have to do it..
		But null we assign ourselves.
	//manually also we can assign undefined to a variable, but we should not do it..
	//typeof undefined is undefined
	//typeof null is object
	
	
What are the data types in javascript?

What is output of below code?
	Note :- here the operation always performed from left to right..
		If we have just 2 values one is number and another is string, it converts number to string.
		And then perform the addition operation.
		
		If we have more tahn 2 values then until it reaches the first string value 
		Before reaching the string value if all the values are numbers it will just add them as numbers
		
		If i want to convert a boolean to number its very easy..
		true is 1 falseis 0.so it always takes an easy path.
		So instead of converting a number to boolean , boolean is converted to nuber.
		
		//
		
	2 + "2" 	//22
	2 + 2 + "2" 	//42
	2 + true 	//3 
	2 + true + "2"  //32
	true + "2" 	//true2
	Number('2')  	//2
	Number('hello')	//NaN
	typeof(NaN)	//number
	Boolean(1)	//true
	Boolean(0)	//false
	Boolean(5)	//true
	Boolean(-20)	//true
	Boolean("hello")//true
	Boolean("")	//false
	Boolean(undefined)//false
	Boolean(null)	//false
	if([]){} 	//true
	if({}){} 	//true



What is hoisting?

What is let,var, const?
What is a block scope?
	//let - a variable defined with let keyword will die at the end of the block is defined..
What is a function scope?
	//var - it will die at the end of the fucntion defintion.
	
What is the difference between a function scope and a block scope?? or let vs var?
	//"let" was introduced in es2015/es6
	//"let" has block scope.
	//"let" does not get hoisted
	
	//"var" is there in js from the beginning
	//"var" has function scope..
	//"var" gets hoisted at the top of the fuction
	
Give a code example to show how a let variable is not hoisted and a var variable is hoisted?
	example
	=========
	let x = function(){
		if(true){
			var v = 2;
			let l = 1;
		}
		console.log(v);
		console.log(l);
	}
	x();
	
	//2
	//ReferenceError: Can't find variable: l
	
	var v is printed as its function scoped
	let l is notprited as its block scoped - if block
	
	example
	=========
	let x = function(){
		if(true){
			console.log(v,"i");
			console.log(l,"i");
			var v = 2;
			let l = 1;
		}
		console.log(v);
		console.log(l);
	}
	x();
	
	undefined – "i" 
	< ReferenceError: Cannot access uninitialized variable.
	
	
====================================================================================================================
Expression and Operators
====================================================================================================================
What is typeof operator?
	//The typeof operator returns a string indicating the type of the unevaluated operand.

	typeof operand
	typeof(operand)
	
	console.log(typeof 42);// expected output: "number"
	console.log(typeof 'blubber');// expected output: "string"
	console.log(typeof true);// expected output: "boolean"
	console.log(typeof undeclaredVariable);// expected output: "undefined";
	typeof undefined //undefined
	typeof null//Object
	typeof "" //"string"
	typeof '' //"string"
	typeof ``//"string"
	typeof Array//"function"
	typeof Function//"function"
	typeof undefined//"undefined"
	typeof null//"object"
	typeof ehsjbf//"undefined"
	typeof []//"object"
	typeof {}//"object"
	typeof true//"boolean"
	typeof new Boolean(true)//"object"


What is void operator?
	//The void operator evaluates the given expression and then returns undefined.

	void expression;
	void(expression);
	
	void 0; //returns undefined
	void(1); //returns undefined

	void 'hello'; //undefined
	void {}; //undefined
	void []; //undefined

	void myFunction(); 
	void(myFunction());
	
	If you ask why do you need a special keyword just to return undefined instead of just returning undefined: 
	the reason is that before ES5 you could actually name a global variable undefined, like so: var undefined = "hello" 
	or var undefined = 23, and most browsers would accept it; 
	the identifier undefined was not promised to actually be undefined¹. 
	So to return the actual undefined value, the void operator is/was used. 
	Its not a very popular operator though and is seldom used.

	//just a normal function
	function test() {
	  console.log('hello');
	  return 2;
	}
	//lets call it
	console.log(test()); //output is hello followed by 2
	//now lets try with void
	console.log(void test()); //output is hello followed by undefined


	void function test() {
	  console.log('boo!');
	  // expected output: "boo!"
	};
	try {
	  test();
	} catch (e) {
	  console.log(e);
	  // expected output: ReferenceError: test is not defined
	}



What is this operator?
	//A function's this keyword behaves a little differently in JavaScript compared to other languages. 
	//It also has some differences between strict mode and non-strict mode.
	//globalThis is a keyword always points to window no matter of any context we are in..

	//In most cases, the value of this is determined by how a function is called (runtime binding).
	//ES5 introduced the bind() method to set the value of a function's this regardless of how it's called
	//ES6  introduced arrow functions which don't provide their own this binding 
		(it retains the this value of the enclosing lexical context).


	const test = {
	  prop: 42,
	  func: function() {
	    return this.prop;
	  },
	};

	console.log(test.func());
	// expected output: 42
	

	console.log(this === window); // true
	a = 37;
	console.log(window.a); // 37
	this.b = "MDN";
	console.log(window.b)  // "MDN"
	console.log(b)         // "MDN"



	









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
	//The slice() method returns a shallow copy of a portion of an array into a new array object 
	selected from begin to end (end not included) where begin and end represent the index of items in that array. 
	The original array will not be modified.

	arr.slice([begin[, end]])
	
	//begin < end otherwise it returns empty array , i.e. arr.splice(2,1) is []
	//if end not provided it will be returning an array from "begin" index till end of array
	//if end is provided it will be returning an array from "begin" index to "end-1" index of array
	//If begin is undefined, slice begins from the index 0.
	//If begin is greater than the index range of the sequence, an empty array is returned.
	//A negative index can be used, indicating an offset from the end of the sequence. 
	slice(-2) extracts the last two elements in the sequence.
	
	//If both begin and end bth are negative then begin < end otherwise it returns an empty array i.e. arr.splice(-1,-2) is []
	//if begin is -ve and we dont have end index then it will start slicing from array considering begin from last index..
		//but remember in negative indexes , index will be considered from back,.. but still slice will happen in forward direction
		[2,4,6,8,10].slice(-5) //here -1 is pointing to 10, -5 is first index i.e. 2
		//result will be from first index so complete array shallow copy will e returned
	//If both indexes are negative then indexes will be considered from back..but slice operation will happen in forward direction
		[2,4,6,8,10].slice(-5,-1) //[2,4,6,8]
		this is same as [2,4,6,8,10].slice(0,4)//[2,4,6,8]
	//If end is omitted, slice extracts through the end of the sequence (arr.length).
	//If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
	
	let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
	let citrus = fruits.slice(1, 3)

	// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
	// citrus contains ['Orange','Lemon']
	
	
What is splice() method?
	//The splice() method changes the contents of an array by removing or replacing existing elements 
	and/or adding new elements in place.
	//return value is the array of deleted elements
	//If no elements are removed, an empty array is returned.
	//If only one element is removed, an array of one element is returned.


	
	let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
		//second and third argument both are optional
		
	//If only one argument is passed i.e. start means from start index it will splice all the elements till end of array
	[2,4,6,8,10].splice(2) //[6,8,10]
	
	//If only one argument is passed but negative then it will start couted from back..
	i.e. start means from start index it will splice all the elements till end of array
	[2,4,6,8,10].splice(-2)//here -1 is 10,-2 is 8, so from 3rd index till end of array

	//If 2 arguments passed and both are positive..
		start is counted from begining of array starting with index as 0..
		deletedcount will be including from start index..till deleted count is reached
	//if deleted count is greater than length of array then till last element it will be sliced starting from start index.	
		[2,4,6,8,10].splice(2,4)
		(3) [6, 8, 10]
	
	let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
	let removed = myFish.splice(2, 0, 'drum')
	// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
	// removed is [], no elements removed
	

	let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
	let removed = myFish.splice(2, 0, 'drum', 'guitar')
	// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"] 
	// removed is [], no elements removed
	
	let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
	let removed = myFish.splice(3, 1)
	// removed is ["mandarin"]
	// myFish is ["angel", "clown", "drum", "sturgeon"]
	
	let myFish = ['angel', 'clown', 'drum', 'sturgeon']
	let removed = myFish.splice(2, 1, 'trumpet')
	// myFish is ["angel", "clown", "trumpet", "sturgeon"]
	// removed is ["drum"]
	
	let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
	let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')
	// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
	// removed is ["angel", "clown"]
	

	let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
	let removed = myFish.splice(2, 2)
	// myFish is ["parrot", "anemone", "sturgeon"] 
	// removed is ["blue", "trumpet"]
	
	let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
	let removed = myFish.splice(-2, 1)
	// myFish is ["angel", "clown", "sturgeon"] 
	// removed is ["mandarin"]
	
	let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
	let removed = myFish.splice(2)
	// myFish is ["angel", "clown"]
	// removed is ["mandarin", "sturgeon"]
	
What is the difference between slice() and splice()?
		//slice() returns a new array where as splice() modifies the existing array
		//slice() can return few elements from array where as splice() can returns few elements from array & can add items toarray
		//slice() takes 2 arguments..begin and end and splice() takes 3 arguments begin, deletedcount, items to be added 
		
What is some() mehod?
	//The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
	//returns true or false a boolean
	//Calling this method on an empty array returns false for any condition!
	
	
	arr.some(callback(element[, index[, array]])[, thisArg])
	
	const array = [1, 2, 3, 4, 5];
	// checks whether an element is even
	const even = (element) => element % 2 === 0;
	console.log(array.find(even));
	// expected output: true
	
What is every() method?
	//The every() method tests whether all elements in the array pass the test implemented by the provided function. 
	//returns true or false a boolean
	//Calling this method on an empty array will return true for any condition!
	
	arr.every(callback(element[, index[, array]])[, thisArg])
	
	const isBelowThreshold = (currentValue) => currentValue < 40;
	const array1 = [1, 30, 39, 29, 10, 13];
	console.log(array1.every(isBelowThreshold));
	// expected output: true
	

What is keys() method?
	//The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
	//return value is an iterator object
	//Key iterator doesn't ignore holes in sparse array

	arr.keys()
	
	const array1 = ['a', 'b', 'c'];
	const iterator = array1.keys();
	for (const key of iterator) {
	  console.log(key);
	}
	
	var arr = ['a', , 'c'];
	var sparseKeys = Object.keys(arr);
	var denseKeys = [...arr.keys()];
	console.log(sparseKeys); // ['0', '2']
	console.log(denseKeys);  // [0, 1, 2]
	
What is values() method?
	//The values() method returns a new Array Iterator object that contains the values for each index in the array.
	//return value is an iterator object
	//Value iterator doesn't ignore holes in sparse array

	arr.values()
	
	const array1 = ['a', 'b', 'c'];
	const iterator = array1.values();
	for (const value of iterator) {
	  console.log(value);
	}

	// expected output: "a"
	// expected output: "b"
	// expected output: "c"
	
	
	var arr = ['a', , 'c'];
	var iter = arr.values();
	for(var i of iter){console.log(i);}
	// a
	// undefined
	// c
	

	
What is entries() method?
	//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
	//returns a new Array iterator object.

	array.entries()
	
	const a = ['a', 'b', 'c'];
	for (const [index, element] of a.entries()){console.log(index, element);}
	// 0 'a' 
	// 1 'b' 
	// 2 'c'

What is concat() method?
	//The concat() method is used to merge two or more arrays. 
	//This method does not change the existing arrays, but instead returns a new array.
	//returns a new array

	const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])


	const array1 = ['a', 'b', 'c'];
	const array2 = ['d', 'e', 'f'];
	const array3 = array1.concat(array2);

	console.log(array3);
	// expected output: Array ["a", "b", "c", "d", "e", "f"]
	

	//we can take elements directly while concating...
	var a = [1,2]
	var b = [4,5]
	var c = [7,8,9]
	a.concat(b,0,3,c)
	//[1, 2, 4, 5, 0, 3, 7, 8, 9]


	//Concatenating nested arrays will be added as is..
	const num1 = [[1]];
	const num2 = [2, [3]];
	const numbers = num1.concat(num2);
	console.log(numbers);
	// results in [[1], 2, [3]]


	//it never modifies the original array, but if original arrays modified even after concat operation, 
		that will be reflected in concated array
	
	const num1 = [[1]];
	const num2 = [2, [3]];
	const numbers = num1.concat(num2);
	console.log(numbers);
	// results in [[1], 2, [3]]
	// modify the first element of num1
	num1[0].push(4);
	console.log(numbers);
	// results in [[1, 4], 2, [3]]



What is Array.from() method?
	//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
	
		Array.from(arrayLike [, mapFn [, thisArg]])
	
	//Array.from() lets you create Arrays from:
		array-like objects (objects with a length property and indexed elements); or
		iterable objects (objects such as Map and Set).
	
	console.log(Array.from('foo'));
	// expected output: Array ["f", "o", "o"]
	console.log(Array.from([1, 2, 3], x => x + x));
	// expected output: Array [2, 4, 6]
	

	Array.from('foo'); 
	// [ "f", "o", "o" ]
	
	const set = new Set(['foo', 'bar', 'baz', 'foo']);
	Array.from(set);
	// [ "foo", "bar", "baz" ]
	
What is Array.of() method?
	//The Array.of() method creates a new Array instance from a variable number of arguments, 
		regardless of number or type of the arguments.
	//returns a new array
	
		Array.of(element0[, element1[, ...[, elementN]]])
		

	Array.of(1);         // [1]
	Array.of(1, 2, 3);   // [1, 2, 3]
	Array.of(undefined); // [undefined]
	
	Array.of(7);       // [7] 
	Array.of(1, 2, 3); // [1, 2, 3]

	Array(7);          // array of 7 empty slots
	Array(1, 2, 3);    // [1, 2, 3]
	
	
	
What is Array.isArray() method?
	//The Array.isArray() method determines whether the passed value is an Array.
	//returns true if the value is an Array; otherwise, false.

	Array.isArray(value)
	
	Array.isArray([1, 2, 3]);  // true
	Array.isArray({foo: 123}); // false
	Array.isArray('foobar');   // false
	Array.isArray(undefined);  // false

	// all following calls return true
	Array.isArray([]);
	Array.isArray([1]);
	Array.isArray(new Array());
	Array.isArray(new Array('a', 'b', 'c', 'd'));
	Array.isArray(new Array(3));
	// Little known fact: Array.prototype itself is an array:
	Array.isArray(Array.prototype); 

	// all following calls return false
	Array.isArray();
	Array.isArray({});
	Array.isArray(null);
	Array.isArray(undefined);
	Array.isArray(17);
	Array.isArray('Array');
	Array.isArray(true);
	Array.isArray(false);
	Array.isArray(new Uint8Array(32));
	Array.isArray({ __proto__: Array.prototype });
	
	
	
What is flat() method?
	//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
	//The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
	//Return value is A new array with the sub-array elements concatenated into it.


	var newArray = arr.flat([depth]);
	
	
	const arr1 = [1, 2, [3, 4]];
	arr1.flat(); 
	// [1, 2, 3, 4]

	const arr2 = [1, 2, [3, 4, [5, 6]]];
	arr2.flat();
	// [1, 2, 3, 4, [5, 6]]

	const arr3 = [1, 2, [3, 4, [5, 6]]];
	arr3.flat(2);
	// [1, 2, 3, 4, 5, 6]

	const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
	arr4.flat(Infinity);
	// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	
	
	//The flat method removes empty slots in arrays
	const arr5 = [1, 2, , 4, 5];
	arr5.flat();
	// [1, 2, 4, 5]
	
	
What is flatMap() method?
	//The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. \
	It is identical to a map() followed by a flat() of depth 1, but flatMap() is often quite useful, 
		as merging both into one method is slightly more efficient.

		var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
		    // return element for new_array
		}[, thisArg])



	//return value is A new array with each element being the result of the callback function and flattened to a depth of 1.

	//map() vs flatMap()
	let arr1 = [1, 2, 3, 4];
	arr1.map(x => [x * 2]); 
	// [[2], [4], [6], [8]]
	arr1.flatMap(x => [x * 2]);
	// [2, 4, 6, 8]
	// only one level is flattened
	arr1.flatMap(x => [[x * 2]]);
	// [[2], [4], [6], [8]]



What is join() method?
	//The join() method creates and returns a new string by concatenating all of the elements in an array 
	(or an array-like object), separated by commas or a specified separator string. 
	If the array has only one item, then that item will be returned without using the separator.
	
	//Return value is A string with all array elements joined. If arr.length is 0, the empty string is returned.
	
	arr.join([separator])
	
	//If an element is undefined, null or an empty array [], it is converted to an empty string.
	var a = ['Wind', 'Water', 'Fire'];
	a.join();      // 'Wind,Water,Fire'
	a.join(', ');  // 'Wind, Water, Fire'
	a.join(' + '); // 'Wind + Water + Fire'
	a.join('');    // 'WindWaterFire'
	
	
	
What is fill() method?
	The fill() method changes all elements in an array to a static value, 
		from a start index (default 0) to an end index (default array.length).
	 It returns the modified array.

	 arr.fill(value[, start[, end]])

	 const array1 = [1, 2, 3, 4];

	 // fill with 0 from position 2 until position 4
	 console.log(array1.fill(0, 2, 4));
	 // expected output: [1, 2, 0, 0]

	 // fill with 5 from position 1
	 console.log(array1.fill(5, 1));
	 // expected output: [1, 5, 5, 5]

	 console.log(array1.fill(6));
	 // expected output: [6, 6, 6, 6]
	 
	 console.log(array1.fill());
	 //expected output: [undefined, undefined, undefined, undefined]


	 //If start is negative, it is treated as array.length + start.
	 //If end is negative, it is treated as array.length + end.
	 
	 [1, 2, 3].fill(4)                // [4, 4, 4]
	 [1, 2, 3].fill(4, 1)             // [1, 4, 4]
	 [1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
	 [1, 2, 3].fill(4, 1, 1)          // [1, 2, 3]
	 [1, 2, 3].fill(4, 3, 3)          // [1, 2, 3]
	 [1, 2, 3].fill(4, -3, -2)        // [4, 2, 3]
	 [1, 2, 3].fill(4, NaN, NaN)      // [1, 2, 3]
	 [1, 2, 3].fill(4, 3, 5)          // [1, 2, 3]
	 Array(3).fill(4)                 // [4, 4, 4]
	 [].fill.call({ length: 3 }, 4)   // {0: 4, 1: 4, 2: 4, length: 3}

	 // A single object, referenced by each slot of the array:
	 let arr = Array(3).fill({}) // [{}, {}, {}]
	 arr[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


What is copyWithin()?
	//The copyWithin() method shallow copies part of an array to another location in the same array 
	and returns it without modifying its length.
	//returns the modified array
	
	arr.copyWithin(target[, start[, end]])
	
	
	.....to be continued..
	
	
What is includes()?
	//The includes() method determines whether an array includes a certain value among its entries, 
	//returning true or false as appropriate.
	//If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.
	
	arr.includes(valueToFind[, fromIndex])
	
	
	[1, 2, 3].includes(2)      // true
	[1, 2, 3].includes(4)      // false
	[1, 2, 3].includes(3, 3)   // false
	[1, 2, 3].includes(3, -1)  // true
	[1, 2, NaN].includes(NaN)  // true

	let arr = ['a', 'b', 'c']
	arr.includes('c', 3)    // false
	arr.includes('c', 100)  // false
	
	//If fromIndex is -ve then it will be added to the array length. 
	//Even after that if the computedVaue is <= -1 * arr.length, the entire array will be searched.
	
	// array length is 3
	// fromIndex is -100
	// computed index is 3 + (-100) = -97
	-97 <= 3, so entire array will be searched

	let arr = ['a', 'b', 'c']

	arr.includes('a', -100) // true
	arr.includes('b', -100) // true
	arr.includes('c', -100) // true
	arr.includes('a', -2)   // false
	
	
What is toString() method?
	//The toString() method returns a string representing the specified array and its elements.
	//Return value is A string representing the elements of the array.

	arr.toString()
	
	const array1 = [1, 2, 'a', '1a'];
	console.log(array1.toString());
	// expected output: "1,2,a,1a"

How we can loop an iterator object?
	//using for..of loop
	//using next()

The array iterator object is one use or temporary object. What do you understand by this ?
	var arr = ['a', 'b', 'c', 'd', 'e'];
 	var iterator = arr.values();
 	for (let letter of iterator) {
 		console.log(letter); 
	} //"a" "b" "c" "d" "e"
	for (let letter of iterator) {
		console.log(letter);
	} // undefined 

	reason: When next().done=true  or  currentIndex>length the for..of loop ends.
	
	
	
If the values in the array changed the array iterator object values change too.Example...
	//Value: there are no values stored in the array Iterator object; 
	//instead it stores the address of the array used in its creation and so depends on the values stored in that array.
	var arr = ['a', 'b', 'c', 'd', 'e']; 
	var iterator = arr.values();
	console.log(iterator);        // Array Iterator {  }
	iterator.next().value;        // "a"
	arr[1]='n';                 
	iterator.next().value;        //  "n"


Wht is built-in iterable?
	String, Array, TypedArray, Map, and Set are all built-in iterables,
		 because each of their prototype objects implements an @@iterator method.

	
How to merge 2 arrays?
	//arr1 = ['a','b']
	//arr2 = ['c','d']
	//Array.prototype.push.apply(arr1, arr2)
	//arr1 will be updated to ['a','b','c','d']
	//equivalent to arr1.push('c', 'd')
	
How to check whether a value exists in an array?
	//using some(), using find(), using includes()
	
How to get second smallest from an array?
	//arr.sort((a,b)=>a-b)[1]
	
What is a sparsed array?
	//array which has holes
	
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
	//includes()








====================================================================================================================
Object
====================================================================================================================

What is javascriipt object?
How many ways we can create an object in javascript?

What is Object.assign()?
	//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
	//It returns the target object.

	Object.assign(target, ...sources)
	
	const target = { a: 1, b: 2 };
	const source = { b: 4, c: 5 };
	const returnedTarget = Object.assign(target, source);
	console.log(target);
	// expected output: Object { a: 1, b: 4, c: 5 }
	console.log(returnedTarget);
	// expected output: Object { a: 1, b: 4, c: 5 }
	
	
	const o1 = { a: 1 };
	const o2 = { b: 2 };
	const o3 = { c: 3 };
	const obj = Object.assign(o1, o2, o3);
	console.log(obj); // { a: 1, b: 2, c: 3 }
	console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.


	const o1 = { a: 1, b: 1, c: 1 };
	const o2 = { b: 2, c: 2 };
	const o3 = { c: 3 };
	const obj = Object.assign({}, o1, o2, o3);
	console.log(obj); // { a: 1, b: 2, c: 3 }


	const returnedTarget = Object.assign({}, undefined);
	console.log(returnedTarget);//{}
	const returnedTarget = Object.assign({}, null);
	console.log(returnedTarget);//{}
	
	
What is Object.create()?
	//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
	//return value is A new object with the specified prototype object and properties.

	Object.create(proto, [propertiesObject])
	
	const person = {
	  isHuman: false,
	  printIntroduction: function() {
	    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
	  }
	};
	const me = Object.create(person);
	me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
	me.isHuman = true; // inherited properties can be overwritten
	me.printIntroduction();
	// expected output: "My name is Matthew. Am I human? true"
	
	Object.create(null); //{}
	Object.create(undefined) //error
	Object.create({}); //{}
	

What is Object.defineProperty() or Object.defineProperties()?
	//The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
	
	Object.defineProperties(obj, props)
	//props is an object contains various key value properties
	configurable //defaults to false
	writable //defaults to false
	enumerable //defaults to false
	value //defaults to undefined
	
	
	const object1 = {};
	Object.defineProperties(object1, {
	  property1: {
	    value: 42,
	    writable: true
	  },
	  property2: {}
	});
	console.log(object1.property1);
	// expected output: 42
	
What do you mean by writable property in Object.defineProperty()?
	//default writable value is false if we create Object.create({},{property1 : {value:20}})
	//default writable value is true if we create Object.create({}) but dont mention any property inside , rather define outside..
	//default writable value is true if we use new Object(), literal notation {} and Object.create({})
	
	
	obj = {a :3} 
	obj.a = 5 
	obj //{a: 5}  => here writable true
	
	obj1 = new Object();
	obj1["b"] = 5
	obj1["b"] = 8
	obj1//{b: 8}  => here writable true
	
	var obj2 = Object.create({})
	obj2["c"]=4
	obj2["c"]=8
	obj2//{c: 8}  => here writable true
	
	var obj2 = Object.create({},{"D" : {value : "20"}})
	obj2["D"] = 40
	obj2//{D: "20"} => here writable false
	
	
	//writable propery if set to false can't be modified
	var obj = Object.create({},{
		property1:{
			value:2,
			writable:true,
			enumerable:true,
			configurable:true
		},
		property2:{
			value:3
		}
	})
	
	obj//{property1: 2, property2: 3}
	obj.property1 = 4
	obj.property2 = 4

	obj//{property1: 4, property2: 3}


	Object.defineProperty(object1, 'property1', {
	  value: 42,
	  writable: false
	});
	

What do you mean by enumerable property in Object.defineProperty()?
	//If we dont specify by default enumerable is false..
	//Other cases like new Object(), literal notation, or Object.create({}) without any property inside-enumerable is set to true
	//enumerable means if it can be loop through.....
	
	var o = {};
	Object.defineProperty(o, 'a', {
	  value: 1,
	  enumerable: true
	});
	Object.defineProperty(o, 'b', {
	  value: 2,
	  enumerable: false
	});
	Object.defineProperty(o, 'c', {
	  value: 3
	}); // enumerable defaults to false
	o.d = 4; // enumerable defaults to true
	         // when creating a property by setting it


	for (var i in o) {
	  console.log(i);
	}
	// logs 'a' and 'd' (in undefined order)
	
	Object.keys(o); // ['a', 'd']
	
	
	var p = { ...o }
	p.a // 1
	p.b // undefined
	p.c // undefined
	p.d // 4
	
What do you mean by configurable property in Object.defineProperty()?
	
	
	//add example...
	
	
What is Object.entries()?
	//Object.entries() returns an array whose elements are arrays corresponding to the enumerable [key, value] pairs from object. 

	Object.entries(obj)
	

	const obj = { foo: 'bar', baz: 42 };
	console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

	// array like object
	const obj = { 0: 'a', 1: 'b', 2: 'c' };
	console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

	// array like object with random key ordering
	const anObj = { 100: 'a', 2: 'b', 7: 'c' };
	console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
	
	// getFoo is property which isn't enumerable
	const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
	myObj.foo = 'bar';
	console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
	
	
	Object.entries(100); //[]
	
	// non-object argument will be coerced to an object
	console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
	
	
	// iterate through key-value gracefully
	const obj = { a: 5, b: 7, c: 9 };
	for (const [key, value] of Object.entries(obj)) {
	  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
	}

	// Or, using array extras
	Object.entries(obj).forEach(([key, value]) => {
	  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
	});
	
	
What is Object.keys()?
	//The Object.keys() method returns an array of a given object's own enumerable property names, 
		iterated in the same order that a normal loop would
		
		Object.keys(obj)
		
		
		
		const object1 = {
		  a: 'somestring',
		  b: 42,
		  c: false
		};

		console.log(Object.keys(object1));
		// expected output: Array ["a", "b", "c"]
		
		

		// simple array
		const arr = ['a', 'b', 'c'];
		console.log(Object.keys(arr)); // console: ['0', '1', '2']

		// array like object
		const obj = { 0: 'a', 1: 'b', 2: 'c' };
		console.log(Object.keys(obj)); // console: ['0', '1', '2']

		// array like object with random key ordering
		const anObj = { 100: 'a', 2: 'b', 7: 'c' };
		console.log(Object.keys(anObj)); // console: ['2', '7', '100']

		// getFoo is a property which isn't enumerable
		const myObj = Object.create({}, {
		  getFoo: {
		    value: function () { return this.foo; }
		  } 
		});
		myObj.foo = 1;
		console.log(Object.keys(myObj)); // console: ['foo']
		
		

What is Object.values()?
	The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that 	provided by a for...in loop.
	
	Object.values(obj)
	
	const object1 = {
	  a: 'somestring',
	  b: 42,
	  c: false
	};

	console.log(Object.values(object1));
	// expected output: Array ["somestring", 42, false]
	
	
	const obj = { foo: 'bar', baz: 42 };
	console.log(Object.values(obj)); // ['bar', 42]

	// Array-like object
	const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
	console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']

	// Array-like object with random key ordering
	// When using numeric keys, the values are returned in the keys' numerical order
	const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
	console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']

	// getFoo is property which isn't enumerable
	const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
	my_obj.foo = 'bar';
	console.log(Object.values(my_obj)); // ['bar']

	// non-object argument will be coerced to an object
	console.log(Object.values('foo')); // ['f', 'o', 'o']

	
	
What is Object.seal()?
	//The Object.seal() method seals an object, preventing new properties from being added to it 
	and marking all existing properties as non-configurable. 
	Values of present properties can still be changed as long as they are writable.
	
	Object.seal(obj)
	
	
	const object1 = {
	  property1: 42
	};

	Object.seal(object1);
	object1.property1 = 33;
	console.log(object1.property1);
	// expected output: 33

	delete object1.property1; // cannot delete when sealed
	console.log(object1.property1);
	// expected output: 33
	
	
	
What is Object.freeze?
	The Object.freeze() method freezes an object. 
	A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, 
	existing properties from being removed, prevents changing the enumerability, configurability, 
	or writability of existing properties, and prevents the values of existing properties from being changed. 
	In addition, freezing an object also prevents its prototype from being changed. 
	freeze() returns the same object that was passed in.
	
	Object.freeze(obj)
	
	const obj = {
	  prop: 42
	};
	Object.freeze(obj);
	obj.prop = 33;
	// Throws an error in strict mode
	console.log(obj.prop);
	// expected output: 42
	
Difference between Object.freeze() and Object.seal()?

What is Object.isFrozen()?
	//The Object.isFrozen() determines if an object is frozen.

	Object.isFrozen(obj)
	
	A Boolean indicating whether or not the given object is frozen.

	const object1 = {
	  property1: 42
	};
	console.log(Object.isFrozen(object1));
	// expected output: false
	Object.freeze(object1);
	console.log(Object.isFrozen(object1));
	// expected output: true
	
What is Object.isSealed()?
	//The Object.isSealed() method determines if an object is sealed.

	 Object.isSealed(obj)
	 
	 
	 const object1 = {
	   property1: 42
	 };
	 console.log(Object.isSealed(object1));
	 // expected output: false
	 Object.seal(object1);
	 console.log(Object.isSealed(object1));
	 // expected output: true
	 
	
What is Object.getOwnPropertyNames()?
	//The Object.getOwnPropertyNames() method returns an array of all properties 
	(including non-enumerable properties except for those which use Symbol) found directly in a given object.

	 var arr = ['a', 'b', 'c'];
	 console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() is an array method.
	 // logs ["0", "1", "2", "length"]

	 // Array-like object
	 var obj = { 0: 'a', 1: 'b', 2: 'c' };
	 console.log(Object.getOwnPropertyNames(obj).sort()); // .sort() is an array method.
	 // logs ["0", "1", "2"]
	 
	 
	 
What is Object.getOwnPropertyDescriptor()?
	//The Object.getOwnPropertyDescriptor() method returns a property descriptor for an own property 
	(that is, one directly present on an object and not in the object's prototype chain) of a given object.
	
	Object.getOwnPropertyDescriptor(obj, prop)
	const object1 = {
	  property1: 42
	};
	const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
	console.log(descriptor1.configurable);
	// expected output: true
	console.log(descriptor1.value);
	// expected output: 42
	
	var o, d;

	o = { get foo() { return 17; } };
	d = Object.getOwnPropertyDescriptor(o, 'foo');
	// d is {
	//   configurable: true,
	//   enumerable: true,
	//   get: /*the getter function*/,
	//   set: undefined
	// }

	o = { bar: 42 };
	d = Object.getOwnPropertyDescriptor(o, 'bar');
	// d is {
	//   configurable: true,
	//   enumerable: true,
	//   value: 42,
	//   writable: true
	// }
	
	o = {};
	Object.defineProperty(o, 'qux', {
	  value: 8675309,
	  writable: false,
	  enumerable: false
	});
	d = Object.getOwnPropertyDescriptor(o, 'qux');
	// d is {
	//   value: 8675309,
	//   writable: false,
	//   enumerable: false,
	//   configurable: false
	// }
	
What is  Object.getOwnPropertyDescriptors()?
	//The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.
	
	Object.getOwnPropertyDescriptors(obj)
	
	const object1 = {
	  property1: 42
	};
	const descriptors1 = Object.getOwnPropertyDescriptors(object1);
	console.log(descriptors1.property1.writable);
	// expected output: true
	console.log(descriptors1.property1.value);
	// expected output: 42


What is Object.is()?
	//The Object.is() method determines whether two values are the same value.

	Object.is(value1, value2);
	
	
	Object.is('foo', 'foo');     // true
	Object.is(window, window);   // true

	Object.is('foo', 'bar');     // false
	Object.is([], []);           // false

	var foo = { a: 1 };
	var bar = { a: 1 };
	Object.is(foo, foo);         // true
	Object.is(foo, bar);         // false

	Object.is(null, null);       // true

	// Special Cases
	Object.is(0, -0);            // false
	Object.is(-0, -0);           // true
	Object.is(NaN, 0/0);         // true
	
	
How to create an empty object in js?
	//var o = new Object()
	//var o = {}
	//var o = Object.create(null)
	
Which is efficient of creating an object?
	//using object literal i.e. var o = {}
	
How I can add elements to an object after defining it?
	//var obj = {}
	//obj.name = "soumya"
	
How I can remove elements from an object?	
	//using delete operator
	var obj = {}
	obj.name = "soumya"
	delete obj.name
	
How I can iterate elements from an object?

What is singleton objects?
	//We create only one time..and we dont create any other object from this
	var obj = { name : "soumya" }
	
What is the difference between obj.name vs obj["name"]?
	if name is stored in a variable and if we try to use like
	var n = name;
	In this case we cant use like obj.n, it will be undefined always
	But we can access using obj[n] which will give "soumya"
	
What is the difference between below 2 ways while creating objects?
	1) var Pizza = { 
		crust : "thin", 
		toppings : 3, 
		hasBacon : true, 
		howmanyToppings: function(){ 
			return this.toppings;
		}
	  }
	  
	  console.dir(Pizza)
	  Object
		crust: "thin"
		hasBacon: true
		howmanyToppings: ƒ ()
		toppings: 3
		__proto__: Object
		
	  //here we can access directly Pizza.crust or Pizza.toppings etc.. 
	   i.e. the properties from obj Pizza directly like this
	
	2) var Pizza = function(){ 
		this.crust = "thin"; 
		this.toppings = 3;
		this.hasBacon = true;
		this.howManyToppings = function(){
			return this.toppings;
		}
	   }
	   
	   console.dir(Pizza)
	   //Here in this second case we wont be able to see any public property that we just created sometimes back.
	   
	   ƒ Pizza()
	   	arguments: null
		caller: null
		length: 0
		name: "Pizza"
		prototype: {constructor: ƒ}
		__proto__: ƒ ()
		[[FunctionLocation]]: VM364:1
		[[Scopes]]: Scopes[1]
		0: Global {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
		
	  //So here we can't use like Pizza.crust or Pizza.toppings etc..
	  //Here if we have to access properties from object Pizza here, we have to create object here..
	  var PizzaA = new Pizza()
	  console.log(PizzaA.crust);
	  console.log(PizzaA.constructor);
	  console.log(PizzaA instanceof Pizza);

How to create one object from another object?
	//
====================================================================================================================
JSON
====================================================================================================================
What is json?
What is JSON.parse()?//converts a string to json
What is JSON.stringify()?//converts json to string



====================================================================================================================
Map & Set
====================================================================================================================

What is Map?
	//Creates a new Map object.
	//Using NaN as Map keys

	
	let myMap = new Map()
	let keyString = 'a string'
	let keyObj    = {}
	let keyFunc   = function() {}
	// setting the values
	myMap.set(keyString, "value associated with 'a string'")
	myMap.set(keyObj, 'value associated with keyObj')
	myMap.set(keyFunc, 'value associated with keyFunc')
	myMap.size              // 3
	// getting the values
	myMap.get(keyString)    // "value associated with 'a string'"
	myMap.get(keyObj)       // "value associated with keyObj"
	myMap.get(keyFunc)      // "value associated with keyFunc"
	myMap.get('a string')    // "value associated with 'a string'"
	                         // because keyString === 'a string'
	myMap.get({})            // undefined, because keyObj !== {}
	myMap.get(function() {}) // undefined, because keyFunc !== function () {}


	let myMap = new Map()
	myMap.set(NaN, 'not a number')
	myMap.get(NaN) 
	// "not a number"
	let otherNaN = Number('foo')
	myMap.get(otherNaN) 
	// "not a number"
	
	
	//Iterating Map with for..of
	let myMap = new Map()
	myMap.set(0, 'zero')
	myMap.set(1, 'one')
	
	for (let [key, value] of myMap) {
	  console.log(key + ' = ' + value)
	}
	// 0 = zero
	// 1 = one

	for (let key of myMap.keys()) {
	  console.log(key)
	}
	// 0
	// 1

	for (let value of myMap.values()) {
	  console.log(value)
	}
	// zero
	// one

	for (let [key, value] of myMap.entries()) {
	  console.log(key + ' = ' + value)
	}
	// 0 = zero
	// 1 = one
	
	
	//Iterating Map with forEach()
	myMap.forEach(function(value, key) {
	  console.log(key + ' = ' + value)
	})
	// 0 = zero
	// 1 = one
	
	
	
	Beware! Setting Object properties works for Map objects as well, and can cause considerable confusion.

	Therefore, this still sort-of works....

	let wrongMap = new Map()
	wrongMap['bla'] = 'blaa'
	wrongMap['bla2'] = 'blaaa2'
	console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
	...But, it does not behave as expected:
	wrongMap.has('bla')    // false
	wrongMap.delete('bla') // false
	console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
	
	
	let myMap = new Map()
	myMap.set('bla','blaa')
	myMap.set('bla2','blaa2')
	console.log(myMap)  // Map { 'bla' => 'blaa', 'bla2' => 'blaa2' }

	myMap.has('bla')    // true
	myMap.delete('bla') // true
	console.log(myMap)  // Map { 'bla2' => 'blaa2' }
	

What are the methods a Map object has?
	//get()
	//set()
	//has()
	//entries()
	//keys()
	//values()
	//forEach()
	//delete()
	//clear()
	
What is set?
	//Creates a new Set object.
	
	
What are the methods a Set object has?
	//add()
	//has()
	//entries()
	//keys()
	//values()
	//forEach()
	//delete()
	//clear()
	

====================================================================================================================
String
====================================================================================================================

What are the string methods available in js?
	//indexOf(searchStr,fromIndex)
	//lastIndexOf(searchStr,fromIndex)
	//toUpperCase()
	//toLowerCase()
	//trim()
	//trimStart()
	//trimEnd()
	//split()
	//concat()
	//sub() - d
	//substr() - d
	//substring()
	//strike() -d
	//padEnd()
	//padStart()
	
	//charAt()
	//charCodeAt()
	//slice()
	//valueOf()
	//raw()
	//replace()
	//repeat()
	//search()


How to check length of a string?
	//str.length
	
What is str.toUpperCase()?
	//The toUpperCase() method returns the calling string value converted to uppercase 
	(the value will be converted to a string if it isn't one).

	str.toUpperCase()

	const sentence = 'The quick brown fox jumps over the lazy dog.';
	console.log(sentence.toUpperCase());
	// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
	
	
	When called on null or undefined, for example, String.prototype.toUpperCase.call(undefined).
	
	
	
What is str.toLowerCase()?
	//The toLowerCase() method returns the calling string value converted to lower case.

	str.toLowerCase()

	const sentence = 'The quick brown fox jumps over the lazy dog.';
	console.log(sentence.toLowerCase());
	// expected output: "the quick brown fox jumps over the lazy dog."
	

	console.log('ALPHABET'.toLowerCase()); // 'alphabet'
	


What is str.indexOf()?
	//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, 	starting the search at fromIndex. Returns -1 if the value is not found.

	str.indexOf(searchValue [, fromIndex])
	//fromIndex default value is 0.
	//fromIndex values lower than 0, the search starts at index 0 
	//fromIndex values greater than str.length, the search starts at index str.length meaning -1 no search 
	
	
	const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
	const searchTerm = 'dog';
	const indexOfFirst = paragraph.indexOf(searchTerm);
	console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
	// expected output: "The index of the first "dog" from the beginning is 40"
	console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
	// expected output: "The index of the 2nd "dog" is 52"
	

	'hello world'.indexOf('o', -5)//4
	'hello world'.indexOf('o', 11)//-1
	
	
	imp::
	An empty string searchValue produces strange results. 
	With no fromIndex value, or any fromIndex value lower than the string's length, 
		the returned value is the same as the fromIndex value
		
	'hello world'.indexOf('') // returns 0
	'hello world'.indexOf('', 0) // returns 0
	'hello world'.indexOf('', 3) // returns 3
	'hello world'.indexOf('', 8) // returns 8
	
	However, with any fromIndex value equal to or greater than the string's length, the returned value is the string's length:

	'hello world'.indexOf('', 11) // returns 11
	'hello world'.indexOf('', 13) // returns 11
	'hello world'.indexOf('', 22) // returns 11



	'Blue Whale'.indexOf('Blue')      // returns  0
	'Blue Whale'.indexOf('Blute')     // returns -1
	'Blue Whale'.indexOf('Whale', 0)  // returns  5
	'Blue Whale'.indexOf('Whale', 5)  // returns  5
	'Blue Whale'.indexOf('Whale', 7)  // returns -1
	'Blue Whale'.indexOf('')          // returns  0
	'Blue Whale'.indexOf('', 9)       // returns  9
	'Blue Whale'.indexOf('', 10)      // returns 10
	'Blue Whale'.indexOf('', 11)      // returns 10
	'Blue Whale'.indexOf('blue')  // returns -1
	

What is str.lastIndexOf()?
	//The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, 	searching backwards from fromIndex. Returns -1 if the value is not found.

	str.lastIndexOf(searchValue[, fromIndex])
	

	const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
	const searchTerm = 'dog';
	console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
	// expected output: "The index of the first "dog" from the end is 52"
	
	
	'canal'.lastIndexOf('a');     // returns 3
	'canal'.lastIndexOf('a', 2);  // returns 1
	'canal'.lastIndexOf('a', 0);  // returns -1
	'canal'.lastIndexOf('x');     // returns -1
	'canal'.lastIndexOf('c', -5); // returns 0
	'canal'.lastIndexOf('c', 0);  // returns 0
	'canal'.lastIndexOf('');      // returns 5
	'canal'.lastIndexOf('', 2);   // returns 2
	
Difference between indexOf() and lastIndexOf()?

What is trim(),trimStart(),trimEnd()?
	//The trim() method removes whitespace from both ends of a string. 
	str.trim()
	
	const greeting = '   Hello          world!   ';
	console.log(greeting);
	// expected output: "   Hello          world!   ";
	console.log(greeting.trim());
	// expected output: "Hello          world!";
	
	
	
	
	//The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.
	str.trimEnd();
	str.trimRight();
	
	const greeting = '   Hello world!   ';
	console.log(greeting);
	// expected output: "   Hello world!   ";
	console.log(greeting.trimEnd());
	// expected output: "   Hello world!";
	
	var str = '   foo  ';
	console.log(str.length); // 8
	str = str.trimEnd();
	console.log(str.length); // 6
	console.log(str);        // '   foo'
	
	
	
	//The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
	str.trimStart();
	str.trimLeft();
	
	const greeting = '   Hello world!   ';
	console.log(greeting);
		// expected output: "   Hello world!   ";
	console.log(greeting.trimStart());
		// expected output: "Hello world!   ";
	
	var str = '   foo  ';
	console.log(str.length); // 8
	str = str.trimStart();
	console.log(str.length); // 5
	console.log(str);        // 'foo  '
	
	
	
What is str.split()?
	//The split() method divides a String into an ordered set of substrings, puts these substrings into an array, 
	//returns an array.  
	
	str.split([separator[, limit]])
	
	const str = 'The quick brown fox jumps over the lazy dog.';
	const words = str.split(' ');
	console.log(words);
	// expected output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
	const chars = str.split('');
	console.log(chars);
	// expected output: ["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", " ", "j", 			"u", "m", "p", "s", " ", "o", "v", "e", "r", " ", "t", "h", "e", " ", "l", "a", "z", "y", " ", "d", "o", "g", "."]
	const strCopy = str.split();
	console.log(strCopy);
	// expected output: Array ["The quick brown fox jumps over the lazy dog."]
	
	
	
What is str.substring()?
	//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
	
	str.substring(indexStart[, indexEnd])
	//substring() extracts characters from indexStart up to but not including indexEnd.
	
	If indexEnd is omitted, substring() extracts characters to the end of the string.
	If indexStart is equal to indexEnd, substring() returns an empty string.
	
	
	const str = 'Mozilla';
	console.log(str.substring(1, 3));
	// expected output: "oz"
	console.log(str.substring(2));
	// expected output: "zilla"
	
	If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped;
	See example below.
	
	
	
	let anyString = 'Mozilla'

	// Displays 'M'
	console.log(anyString.substring(0, 1))
	console.log(anyString.substring(1, 0))

	// Displays 'Mozill'
	console.log(anyString.substring(0, 6))

	// Displays 'lla'
	console.log(anyString.substring(4))
	console.log(anyString.substring(4, 7))
	console.log(anyString.substring(7, 4))

	// Displays 'Mozilla'
	console.log(anyString.substring(0, 7))
	console.log(anyString.substring(0, 10))
	
	Any argument value that is less than 0  is treated as 0 
	Any argument value that is greater than stringName.length is treated as stringName.length
	
	
What is the difference between substring() and substr()?
	//The arguments of substring() represent the starting and ending indexes, 
	while the arguments of substr() represent the starting index and the number of characters to include in the returned string.

	Furthermore, substr() is considered a legacy feature in ECMAScript and could be removed from future versions, 
	so it is best to avoid using it if possible.
	
Differences between substring() and slice()?
	The substring() and slice() methods are almost identical, but there are a couple of subtle differences between the two, 	especially in the way negative arguments are dealt with.
	The substring() method swaps its two arguments if indexStart is greater than indexEnd, 
		meaning that a string is still returned. 
	The slice() method returns an empty string if this is the case.
	let text = 'Mozilla'
	console.log(text.substring(5, 2))  // => "zil" 
	console.log(text.slice(5, 2))      // => ""
	
	If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
	console.log(text.substring(-5, 2))  // => "Mo"
	console.log(text.substring(-5, -2)) // => "" 
	
	slice() also treats NaN arguments as 0, 
	but when it is given negative values it counts backwards from the end of the string to 	find the indexes.
	console.log(text.slice(-5, 2))   // => ""
	console.log(text.slice(-5, -2))  // => "zil"
	
	
What is str.concat()?
	//The concat() method concatenates the string arguments to the calling string and returns a new string.
	
	str.concat(str2 [, ...strN])
	
	
	const str1 = 'Hello';
	const str2 = 'World';
	console.log(str1.concat(' ', str2));
	// expected output: "Hello World"
	console.log(str2.concat(', ', str1));
	// expected output: "World, Hello"
	
	
	//The concat() function concatenates the string arguments to the calling string and returns a new string. 
	Changes to the original string or the returned string don't affect the other.

	//If the arguments are not of the type string, they are converted to string values before concatenating.

	let hello = 'Hello, '
	console.log(hello.concat('Kevin', '. Have a nice day.'))
	// Hello, Kevin. Have a nice day.



	let greetList = ['Hello', ' ', 'Venkat', '!']
	"".concat(...greetList)  // "Hello Venkat!"

	"".concat({})    // [object Object]
	"".concat([])    // ""
	"".concat(null)  // "null"
	"".concat(true)  // "true"
	"".concat(4, 5)  // "45"
	console.log("".concat([6],[8]))//68
	
	
	It is strongly recommended that the assignment operators (+, +=) are used instead of the concat() method. 
	According to this performance test, the assignment operators are several times faster.
	
What is str.includes()?
	//The includes() method determines whether one string may be found within another string,
		 returning true or false as appropriate.
		 
	str.includes(searchString[, position])
	//The position within the string at which to begin searching for searchString. (Defaults to 0.)
	
	//The includes() method is case sensitive. 
	
	
	const str = 'To be, or not to be, that is the question.' 

	console.log(str.includes('To be'))        // true
	console.log(str.includes('question'))     // true
	console.log(str.includes('nonexistent'))  // false
	console.log(str.includes('To be', 1))     // false
	console.log(str.includes('TO BE'))        // false
	console.log(str.includes(''))             // true
	
	
What is str.padStart() and str.padEnd()?
	//The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string 	reaches the given length. 
	The padding is applied from the start of the current string.
	
	str.padStart(targetLength [, padString])
	targetLength
	The length of the resulting string once the current str has been padded. 
	If the value is less than str.length, then str is returned as-is. ex. "soumya".padStart(3,"$")//"soumya"
	
	padString Optional
	The string to pad the current str with. 
	If padString is too long to stay within the targetLength, it will be truncated from the end. 
	The default value is " " (U+0020 'SPACE'). ex. "soumya".padStart(9,"Surajita")//"Sursoumya"

	
	const str1 = '5';
	console.log(str1.padStart(3, '0'));
	// expected output: "005"
	const fullNumber = '2034399002125581';
	const last4Digits = fullNumber.slice(-4);
	const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
	console.log(maskedNumber);
	// expected output: "************5581"
	
	
	
	
	//The padEnd() method pads the current string with a given string (repeated, if needed) 
	so that the resulting string reaches a given length. The padding is applied from the end of the current string.
	
	str.padEnd(targetLength [, padString])
	
	targetLength
	The length of the resulting string once the current str has been padded. 
	If the value is lower than str.length, the current string will be returned as-is.
	ex. "soumya".padEnd(3,"$")//"soumya"
	
	padString Optional
	The string to pad the current str with. 
	If padString is too long to stay within targetLength, it will be truncated: 
	for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. 
	The default value for this parameter is " " (U+0020).
	"soumya".padEnd(9,"Surajita")//"soumyaSur"
	
	
	const str1 = 'Breaded Mushrooms';
	console.log(str1.padEnd(25, '.'));
	// expected output: "Breaded Mushrooms........"
	const str2 = '200';
	console.log(str2.padEnd(5));
	// expected output: "200  "
	
	'abc'.padEnd(10);          // "abc       "
	'abc'.padEnd(10, "foo");   // "abcfoofoof"
	'abc'.padEnd(6, "123456"); // "abc123"
	'abc'.padEnd(1);           // "abc"
	
	
	
What is str.slice()?
	//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
	
	str.slice(beginIndex[, endIndex])
	
	beginIndex
	The zero-based index at which to begin extraction. 
	If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3 it is treated as str.length - 3.)
	If beginIndex is greater than or equal to str.length, slice() returns an empty string.
	
	endIndex Optional
	The zero-based index before which to end extraction. The character at this index will not be included.
	If endIndex is omitted, slice() extracts to the end of the string. 
	If negative, it is treated as str.length + endIndex. (For example, if endIndex is -3 it is treated as str.length - 3.)
	
	const str = 'The quick brown fox jumps over the lazy dog.';
	console.log(str.slice(31));
	// expected output: "the lazy dog."
	console.log(str.slice(4, 19));
	// expected output: "quick brown fox"
	console.log(str.slice(-4));
	// expected output: "dog."
	console.log(str.slice(-9, -5));
	// expected output: "lazy"
	
	
	
What is str.replace()?
		//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
		//The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
		//If pattern is a string, only the first occurrence will be replaced.
		
		const newStr = str.replace(regexp|substr, newSubstr|function)
		
		const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
		const regex = /dog/gi;
		console.log(p.replace(regex, 'ferret'));
		// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
		console.log(p.replace('dog', 'monkey'));
		// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
		
	
	

====================================================================================================================
Functions
====================================================================================================================

What is a function?
	//block of statements 
	
What is difference between function and method?
	//method we can say is specific to a class or an object..
	//function when we use it outside using function keyword..
	
How many ways we can execute a function?
	//fnShow()
	//fnShow.call()
	//fnShow.apply()
	//fnShow.bind(this)()
	
What is difference between call() and apply()?
	//call() is to call a function with comma separated arguments.
		funname.call(arg1,arg2,..,argn)
	//apply() is to call a function with all arguments passed as an array.
		funname.call([arg1,arg2,..,argn)

What is bind()?
	//Used to keep the context of “this” within another function
	//returns a new function which is actually takes care of the original function binding with this...
	

What is function declaration?
What is function expression?
	 A function expression can be stored in a variable: var x = function (a, b) {return a * b};
	 After a function expression has been stored in a variable, the variable can be used as a function. ...
	 They are always invoked (called) using the variable name.
	 
What is the difference between a function declaration and a function expression?
	//function declaration is not hoisted where as a function expression is hoisted always.
	
What is anonymous function?
	//A function that does not have a name..
	
What is drawback of anonymous function?

What is arrow function?
	Arrow functions:
	1. Do not have this
	2. Do not have arguments
	3. Can’t be called with new
	4. They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance
	
What is the difference between a normal function and arrow function?
	//Unlike regular functions, arrow functions do not have their own this.
	//Arguments objects are not available in arrow functions, but are available in regular functions. 


Is it mandatory to have a return statement?//No
If there is no return statement then what does a fucntion return?//undefined


What is a callback function?
	A callback function is a function passed into another function as an argument,
	which is then invoked inside the outer function to complete some kind of routine or action
	
	Here is a quick example:

	function greeting(name) { alert('Hello ' + name); }
	function processUserInput(callback) {
	  var name = prompt('Please enter your name.');
	  callback(name);
	}
	processUserInput(greeting);
	
	The above example is a synchronous callback, as it is executed immediately.

	Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed 
		— these are called asynchronous callbacks. 
	A good example is the callback functions executed inside a .then() block chained onto the end of a promise 
		after that promise fulfills or rejects.
	
Why callback function are called higher order functions?
	
What is a pure function?
	
What is a closure?
	//in javascript variables defined outside of functions can be accessed inside..
	Because in javascript there is something called lexical scoping
	Which means inner variables are not accessible outside but outer variables can be accessed iside..
	
	
	var addTo = function(passed){
		var inner = 2;
		return passed + inner;
	}
	console.log(addTo(3));//5
	
	
	var passed = 3;
	var addTo = function(){
		var inner = 2;
		return passed + inner;
	}
	
	console.log(addTo()); //5
	console.dir(addTo); //5
	
	
What is lexical scoping?
	//the variables we have defined in parent or upper scope is by default or automatically available in inner scope...
	//We dont have to pass it..
	
	
	Example1
	=========
	let i =1;
	const f = () => {
		console.log(i);
	}
	f()
	
	Here if we execute this will give result as 1.
	And this is because of lexical scoping.
	we defined i in outer scope and it is available to function f() scope..

	Example2
	=========
	let f;
	if(true){
		let i=1;
		f=()=>{
			console.log(i);
		}
	}
	//console.log(i);
	console.dir(f)
	f();
	
	
	console.log(i); //it will throw error can not access..
	f(); //But still when we execute f() from outside somehow it magically able to print i value.
	Because it holds its variable inside..
	So where it is holding?
	lets print console.dir(f) outside..
	now if we expand f() thts printed on console we will see [[scopes]]
	And if we expand that we will see Block key holding value 1
	The block really similar to closure..
	
	Lets look at some real closure example..
	
	Example3
	=========
	let f = () => {
		let i  = 1;
		return ()=>{
			console.log(i)
		}
	}
	console.dir(f());
	
	
	console.dir(f()); //it will return an annonymous function
	If we expand that we will see [[scopes]]
	We will see closure (f) holding value 1
	Now if add another variable lets say j =2, lets see what happens
	
	
	Example4
	=========
	let f = () => {
		let i  = 1;
		let j  = 2;
		return ()=>{
			console.log(i);
		}
	}
	console.dir(f());
	
	Now again if we see console we will see it returns the same annonymous function.
	If we expand that we will see [[scopes]]
	We will see closure (f) holding value 1 i.e. i variable
	j variable is not closed here or added...
	why? because its not using it..
	Its because it will only add those variables to closure that it is going to use in future..
	
	
Explain how let is different from var in setTimeout()?
	Example - with let
	===================
	for(let i=0;i<3;i++){
		setTimeout(() => {
			console.log(i)
		},1000);
	}
	console.log('after the loop');
	
	i=0 f(c:i(0));
	i=1 f(c:i(1));
	i=2 f(c:i(2));
	
	//Because we are using let which is block scoped, as soon the loop ends one new for loop comes back in..
	//i does not really exists..so it has to give me a new i.
	//so it would give i which is completely new which is 1..
	//so the setTimeout functin is going to hold that i..
	//So we will get 3 different fucntions which holds 3 separate variables as closure
	//Here after every for loop i variable 
	
	
	Example - with var
	===================
	for(var i=0;i<3;i++){
		setTimeout(() => {
			console.log(i)
		},1000);
	}
	console.log('after the loop');
	
	i=0 f(c:i(0));
	
	i=0 f(c:i(1));
	i=1 f(c:i(1));
	
	i=0 f(c:i(2));
	i=1 f(c:i(2));
	i=2 f(c:i(2));
	
	//Because we are using var which is function scoped, it does not create a new variable.
	//It just changes the value of existing variable..
	//So for first iteration i value is 0 ,function will have a closure which will reference to this i
	//When i = 1 as var is function scope, it does not create anew variable..
	//so it is same variable with a different value..i.e. 1
	//Now here this will change the first iteration function closure value to 1 and second iteration closure value to 1 as well.
	//Now third iteration value of i is 3
		Here as setTimeout() is async and not executed yet.. 
		so the value of i will be updaes as 3 for all the three function closures..
		
	
	
What javascript functions are called first class objects?

What is a closure?
What is private methods?
	//closures helps us to create private methods.
	
What is IIFE?
	//Immediately invoked function expression
	//self executing anonymous function
	all are same...
	for that we need to understand what is a function expression is..we already covered that
	
	//function
	function increment(i){
		return i+1;
	}

	//function expression
	var increment = function(i){
		return i+1;
	}
	
	//...some lines of code..and after that when we need we may execute this function
	increment(i)
	//...some lines of code..

	//But sometimes there might be some requirement to execute the function as soon as u defineit..
	//we are not going to use it again..
	//so like above we dont need these 2 steps - where we define it and then we execute it..
	//so we can do that by just simply removning var assignement and wrapping with paranthesis..see below ex
	(function(i){
		return i+1;
	})(j)
	//so whatever we pass here outer arg that is j will be treated as i in inner function..
	
	//another way of writing is as follow.
	(function(i){
		return i+1;
	}(j))

	//another way of writing is below.And this we should use when there is no return from function..
	!function(){console.log(2);}(); 
	~function(){console.log(2);}(); 
	-function(){console.log(2);}(); 
	+function(){console.log(2);}(); 


Real usage of IIFE?
	1) For minifying
	(function($){
		$(this).addClass('MyClass');
	})(window.JQuery)

	//here we use $ through out the function body intead of using big word window.JQuery
	//This way it takes a global variable window.JQuery and makes it local to the fucntion body..
	
	//IIFE are closures that helps us to establish private methods..while exposing some properties for later use..
	
	2)We can write IIFE to create our own libraries..ex
	var counter = (function(){
		var i = 0;
		return{
			get : funcion(){
				return i;
			},
			set : funcion(val){
				i = val;
			},
			increment : funcion(){
				return i+1;
			}	
		}
	})();
	
	console.log(counter.get());//0
	counter.set(5);//5
	counter.increment();
	console.log(counter.get());//6

What is recursion in javascript?
	calling the same function inside of the function multiple times until a condition is satisfied
	
	let add = function(n){
		if(n<=0){
			return 0;
		}else{
			return n + add(n-1);
		}
	}
	
	console.log(add(5));
	//add(3) => 3 + add(2)
		 => 3 + 2 + add(1)
		 => 3 + 2 + 1 + add(0)
		 => 3 + 2 + 1 + 0
	
	So it will looksimilar to follow code..
	function(3){
		return 3 + fucntion(2){
			return 2 + fucntion(1){
				return 1 + fucntion(0){
					return 0;
				}
			}
		}
	}
	
What are the limitations or problems happens because of recursion?

	//Now internally this gets called by the callstack
	let add = function(n){
		if(n<=0){
			return 0;
		}else{
			return n + add(n-1);
		}
	}
	
	
	//the innermost function gets executed first because its LIFO... based on stack rule...
	function(3){
		return 3 + fucntion(2){ ====>3rd
			return 2 + fucntion(1){ ====>2nd
				return 1 + fucntion(0){ ====>1st
					return 0; 
				}
			}
		}
	}
	

	add(17944)
	VM867:1 Uncaught RangeError: Maximum call stack size exceeded

	add(10000)//50005000
	That means may be they have set a limitation of 10K inside stack.
	So recursion is not always advisable..
	
	Because in real time project this recursion call may go with a very big number..
	


























































====================================================================================================================
Inheritance
====================================================================================================================
What is factory pattern?
	var peopleFactory = fucntion(name,age,state){
		var temp = {}
		//var temp = new Object();
		temp.age = age;
		temp.name = name;
		temp.state = state;
		
		temp.printPerson = function(){
			console.log(this.name+this.age+this.state);
		}
		return temp;
	}

	//Here this peopleFactory is a function behaves like a factory
	//Whenever we are going to create a new person all we have to do is create like this
		var person1 =  peopleFactory("john",23,'CA')
		var person2 =  peopleFactory("kim",27,'SC')

	person1.printPerson()
	person2.printPerson()

What is constructor pattern?
	var peopleConstructor = function(name,age,state){
		this.name = name;
		this.age = age;
		this.state=state;
		this.printPerson = function(){
			console.log(this.name+this.age+this.state);
		}	
	}
	
	//it is also same as factory pattern but instead of creating an object inside function and then adding key value to it..
	  We directly use key values inside a fucntion..
	  because functions are also behaves like objects..
	//And instead of calling method directly we first create objects using new operator..
	//Then usingthose objects we call the method printPerson() to print to console..
	
	  var  person1 = new peopleConstructor("john",23,'CA');
	  var  person2 = new peopleConstructor("kim",27,'SC');
	  person1.printPerson();
	  person2.printPerson(); 
	

What is the problem with constructor pattern?
	//the problem with constructor pattern is everytime we create a constructor object.. it will have all of the variables or functions..
	//for example person1 will have all the properties..
	//person2 will have all the properties..
	...
	//If i create 1000 objects they all will have separate copy of the function.. which is redundant..
	//thats y prototype pattern is introduced..
	
	
What is a prototype pattern?
	var peopleProto = function(){
	
	}
	peopleProto.prototype.age = 0;
	peopleProto.prototype.name = "no name";
	peopleProto.prototype.state = "no state";
	peopleProto.prototype.printPerson = fucntion(){
		console.log(this.age + this.name + this.state);
	}
	
	var  person1 = new peopleProto();
	var  person2 = new peopleProto();
	person1.age = 23;
	person1.name = 'john';
	person1.city = 'CA';
	
	person1.printPerson();
	console.log('age' in person1);//true
	console.log(person1.hasOwnProperty('age')); //false

	//here we have created an empty object.
	//then we have used prototype to add properties to it.
	//then we have used prototype to add method to it.
	//We creating the default values for variables..and later overriding these values while creating objects..
	//so here all the properties are not added directly to the object, it is added as prototype..
	//It makes the object very light weight..
	
	

What is dynamic prototype pattern?
	var peopleDynamicProto = function(name,age,state){
		this.name = name;
		this.age = age;
		this.state=state;
		if(typeof this.printPerson !=='fucntion'){
			peopleDynamicProto.prototype.printPerson = fucntion(){
				console.log(this.age + this.name + this.state);
			}
		}	
	}
	
	var  person1 = new peopleDynamicProto('john',23,'CA');
	person1.printPerson()
	
What is the default and common property available to all the functions?
	//prototype
	
What is prototype?
	//This is the default and common property available to all the functions
	//this property by default will be empty..
	//we can add properties and methods to it..
	
	//And when we create objects from this function, it will inherit these properties thats defined in function x() prototype..
	
	var x = fucntion(j){
		this.i = 0;
		this.j = j;
	}
	x.prototype.getJ = function(){
		return this.j;
	}
	var x1 = new x(1);
	var x2 = new x(2);
	console.log(x1.getJ());
	console.log(x2.getJ());
	
	
	**Now here every object will have its own i and j variables but  they have a shared method called getJ()
	**x1 and x2 does not have its own method getJ()
	**So whenever i call x1.getJ() or x2.getJ() it looks up in the prototype chain..into its parent..
	**So it finds it and using it.
	**Now this way the objects are much smaller
	**You dont have to have all the methods inside object.
	**We can use it from the parent's prototype
	**Now when any object will call this getJ() it will search its own instance variables
	
What is a constructor?
	//Every function expression is essentially a constructor
	var x = fucntion(j){
		this.i = 0;
		this.j = j;
		
		this.getJ = function(){
			return this.j;
		}
	}
	var x1 = new x(1);
	var x2 = new x(2);
	console.log(x1.getJ());
	console.log(x2.getJ());
	
What is master Object?

What is __proto__?
	//__proto__ available for non-primitive variables..
	//Ex:- arrays,objects,functions,map,set etc..
	//__proto__ represents the master or parent object it is inherited from...
	//every variable will have many levels of __proto__ till it reaches master object i.e. Object.
	//We can also see parent class other properties..
	//for ex: if we create an array 
		arr=[1,2,3]; 
		console.dir(arr);
		//arr __proto__ is Array
		//Array __proto__ is Object
	
	//for ex: if we create a function
		var Pizza = function(){ 
			this.crust = "thin"; 
			this.toppings = 3;
			this.hasBacon = true;
			this.howManyToppings = function(){
				return this.toppings;
			}
	   	}
		//Pizza __proto__ is f()
		//f() __proto__ is Object
	
	
	
What is the difference between prototype and __proto__?

What is console.dir()
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
