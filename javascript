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


How to check of a variable is of type array?
	//arr instanceof Array -> true or false
	//Array.isArray(arr)-> true or false

All methods of array?
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

















====================================================================================================================
String
====================================================================================================================




====================================================================================================================
Functions
====================================================================================================================




====================================================================================================================
Events
====================================================================================================================




====================================================================================================================
Array
====================================================================================================================













