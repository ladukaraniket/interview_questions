What is javascript?

What is scope?
	 scope has two levels: global scope and local scope. 
	 Global scope refers to variables that are accessible anywhere 
	 	because they are declared outside of any individual functions or methods 
		— usually at the top of the file. 
	They exist in the global space, ready to be called upon at any time. 
	The first example below concerns global scope.

	Example of a globally scoped variable
	=====================================
	let dog = "good dog";
	console.log('1st dog', dog);//"good dog"
	
	function showScopeExample(){
		let dog = "bad dog";
	}
	
	showScopeExample();
	console.log('2nd dog', dog);//"good dog"

	Local scope refers to variables that are accessible within the boundaries of their function. 
	In this example, we have our initial declaration of the variable dog at the top of our file, 
		which is assigned to the string of “goodBoy.” 
	Immediately below, we console.log the dog variable.
	As expected, this first console.log prints ‘goodBoy,’ as seen on the right side of the image. 
	Then, we have a function of showScopeExample(), which reassigns our dog variable to the string of “badDog.”
	
	This function is immediately invoked, but when we console.log “dog” for the second after function call, 
		it still prints as “goodBoy.” 
	Even though the second console.log occurs after we reassign the variable inside of the function, 
		the dog variable is not currently capable of returning as “badDog.” 
	This is by design.
	
	Our re-declaration of dog inside of showScopeExample() is locally scoped. 
	The easiest way to know this is to look at its location. 
	The re-declaration lies in between opening and closing curly brackets, which act as barriers to the relevancy of these variables.
	
	
What is context?
	//Context in JavaScript is another subject of confusion. 
	//It refers primarily to the use of the keyword this. The value of this depends on where it is being invoked.
	//Invoking this in the global space will return the entire window object. 
	//This is because the window object is the starting point of all the code we write.
		console.log(this); //window
		
	//The first rule of this is that by default, it refers to the window object.
	
	//But what happens if we invoke this somewhere other than the global context? 
	//If we invoke this in the context of a new object, it will return that object, just as it returned the entire window object
	
	
	const newCotextObj = {
		invokeThisInNewContext(){return this;},
		secondFunctioInNewContext(){ return "I exist in this context too!" }
	}
	
	newCotextObj.invokeThisInNewContext()
	//{invokeThisInNewContext: ƒ, secondFunctioInNewContext: ƒ}
	
	In the example above, we’ve created a new object which we’ve named newContextObj. 
	When we invoke the method invokeThisInNewContext() it returns the entire newContextObj.
	This is the same as when it returned the window object in our first example. 
	The only difference is that the window object is a very large and complex object, 
		and our newContextObj is very small and simple. 
	The second rule of this is that when it is invoked in the context of an object, this will refer to that object.
	
	
Drawback of arrow functions?
	//Arrow functions can’t run with new
	//arrow functions can’t be used as constructors. They can’t be called with new.
	//Do not have arguments
	//They also don’t have super, but we didn’t study it yet.
	
Arrow functions VS bind?
	//There’s a subtle difference between an arrow function => and a regular function called with .bind(this):
	//.bind(this) creates a “bound version” of the function.
	//The arrow => doesn’t create any binding. 
	//The function simply doesn’t have this. 
	//The lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.


What are the basic rules of truthy and falsy values?
	false, zero and empty strings are all equivalent.
	null and undefined are equivalent to themselves and each other but nothing else.
	NaN is not equivalent to anything – including another NaN!
	Infinity is truthy – but cannot be compared to true or false!
	An empty array is truthy – yet comparing with true is false and comparing with false is true?!
	
What is truthy falsy table for ==?
	true == true		//true
	true == false		//false
	true == 0		//false
	true == ''		//false
	true == null		//false
	true == undefined	//false
	true == NaN		//false
	true == Infinity	//false
	true == []		//false
	true == {}		//false
	
	false == true		//false
	false == false		//true
	false == 0		//true
	false == ''		//true
	false == '0'		//true
	false == null		//false
	false == undefined	//false
	false == NaN		//false
	false == Infinity	//false
	false == []		//true
	false == {}		//false
	
	0 == true		//false
	0 == false		//true
	0 == 0			//true
	0 == ''			//true
	0 == null		//false
	0 == undefined		//false
	0 == NaN		//false
	0 == Infinity		//false
	0 == []			//true
	0 == {}			//false
	
	'' == true		//false
	'' == false		//true
	'' == 0			//true
	'' == ''		//true
	'' == null		//false
	'' == undefined		//false
	'' == NaN		//false
	'' == Infinity		//false
	'' == []		//true
	'' == {}		//false
	
	null == true		//false
	null == false		//false
	null == 0		//false
	null == ''		//false
	null == null		//true
	null == undefined	//true
	null == NaN		//false
	null == Infinity	//false
	null == []		//false
	null == {}		//false

	undefined == true	//false
	undefined == false	//false
	undefined == 0		//false
	undefined == ''		//false
	undefined == null	//true
	undefined == undefined	//true
	undefined == NaN	//false
	undefined == Infinity	//false
	undefined == []		//false
	undefined == {}		//false
	
	NaN == true		//false
	NaN == false		//false
	NaN == 0		//false
	NaN == ''		//false
	NaN == null		//false
	NaN == undefined	//false
	NaN == NaN		//false
	NaN == Infinity		//false
	NaN == []		//false
	NaN == {}		//false
	
	Infinity == true	//false
	Infinity == false	//false
	Infinity == 0		//false
	Infinity == ''		//false
	Infinity == null	//false
	Infinity == undefined	//false
	Infinity == NaN		//false
	Infinity == Infinity	//true
	Infinity == []		//false
	Infinity == {}		//false
	
	[] == true		//false
	[] == false		//true
	[] == 0			//true
	[] == ''		//true
	[] == null		//false
	[] == undefined		//false
	[] == NaN		//false
	[] == Infinity		//false
	[] == []		//true
	[] == {}		//false
	
	{} == true		//false
	{} == false		//false
	{} == 0			//false
	{} == ''		//false
	{} == null		//false
	{} == undefined		//false
	{} == NaN		//false
	{} == Infinity		//false
	{} == []		//false
	{} == {}		//false
	

What is truthy falsy table for ===?
	true === true		//true
	true === false		//false
	true === 0		//false
	true === ''		//false
	true === null		//false
	true === undefined	//false
	true === NaN		//false
	true === Infinity	//false
	true === []		//false
	true === {}		//false
	
	false === true		//false
	false === false		//true
	false === 0		//false
	false === ''		//false
	false === '0'		//false
	false === null		//false
	false === undefined	//false
	false === NaN		//false
	false === Infinity	//false
	false === []		//false
	false === {}		//false
	
	0 === true		//false
	0 === false		//false
	0 === 0			//true
	0 === ''		//false
	0 === null		//false
	0 === undefined		//false
	0 === NaN		//false
	0 === Infinity		//false
	0 === []		//false
	0 === {}		//false
	
	'' === true		//false
	'' === false		//false
	'' === 0		//false
	'' === ''		//true
	'' === null		//false
	'' === undefined	//false
	'' === NaN		//false
	'' === Infinity		//false
	'' === []		//false
	'' === {}		//false
	
	null === true		//false
	null === false		//false
	null === 0		//false
	null === ''		//false
	null === null		//true
	null === undefined	//false
	null === NaN		//false
	null === Infinity	//false
	null === []		//false
	null === {}		//false

	undefined === true	//false
	undefined === false	//false
	undefined === 0		//false
	undefined === ''	//false
	undefined === null	//false
	undefined === undefined	//true
	undefined === NaN	//false
	undefined === Infinity	//false
	undefined === []	//false
	undefined === {}	//false
	
	NaN === true		//false
	NaN === false		//false
	NaN === 0		//false
	NaN === ''		//false
	NaN === null		//false
	NaN === undefined	//false
	NaN === NaN		//false
	NaN === Infinity	//false
	NaN === []		//false
	NaN === {}		//false
	
	Infinity === true	//false
	Infinity === false	//false
	Infinity === 0		//false
	Infinity === ''		//false
	Infinity === null	//false
	Infinity === undefined	//false
	Infinity === NaN	//false
	Infinity === Infinity	//true
	Infinity === []		//false
	Infinity === {}		//false
	
	[] === true		//false
	[] === false		//true
	[] === 0		//true
	[] === ''		//true
	[] === null		//false
	[] === undefined	//false
	[] === NaN		//false
	[] === Infinity		//false
	[] === []		//false
	[] === {}		//false
	
	{} === true		//false
	{} === false		//false
	{} === 0		//false
	{} === ''		//false
	{} === null		//false
	{} === undefined	//false
	{} === NaN		//false
	{} === Infinity		//false
	{} === []		//false
	{} === {}		//false
	
Output of below code?
	//"" == false
	//" " == false
	//0 == false
	//"0" == false
	//null == false
	//undefined == false
	//NaN == false
	
	
	//"1" == false
	//null==undefined
	//null === undefined
	
	null == false		//false
	null == true		//false
	undefined == false

	
	
	!0		//true
	!false		//true
	!null   	//true
	!undefined   	//true
	!""		//true
	!NaN		//true
	
	!" "		//false
	!-1		//false
	!+1		//false
	!Infinity	//false
	!-Infinity	//false
	!{}		//false
	![]		//false
	
	
List of falsy values in javascript?
	false
	null
	undefined
	0
	NaN
	'', "", ``(Empty template string)
	document.all
	0n: BigInt
	-0

	
Output of below?
	null()		//TypeError: null is not a function. (In 'null()', 'null' is null)
	undefined()	//TypeError: undefined is not a function. (In 'undefined()', 'undefined' is undefined)
	Object()	//{}
	Array()		//[]
	Function()	//function anonymous(){}
	function()	//SyntaxError: Function statements must have a name.
	
Output of below?
	var arr = [1,2,3,4,5];
	var [a,...r] = arr;
	console.log(a)//1
	console.log(r)//[2,3,4,5]
	console.log(arr)//[1,2,3,4,5] => no change

	var [a,,...r] = arr;
	console.log(a)//1
	console.log(r)//[3,4,5]
	console.log(arr)//[1,2,3,4,5] => no change
	
	var [a,,,,,...r] = arr;
	console.log(a)//1
	console.log(r)//[]
	console.log(arr)//[1,2,3,4,5] => no change
	
	var [a,...r1,...r2] = arr; 
	console.log(a)
	console.log(r)
	console.log(arr);
	
	Error on line -> var [a,...r1,...r2] = arr; 
	SyntaxError: Unexpected token ','. Expected a closing ']' following a rest element destructuring pattern.
	
	So below are invalid ways..
	var [a,...r1,b] = arr; 
	var [a,...r1,...r2] = arr; 

Output of below?
	var obj = {a:1,b:2,c:3,d:4,e:5}
	var {a,...rem}=obj
	console.log(a)//1
	console.log(rem)//{b: 2, c: 3, d: 4, e: 5}
	console.log(obj)//{a: 1, b: 2, c: 3, d: 4, e: 5} => no change

	var {a,,...rem}=obj;
	SyntaxError: Unexpected token ','. Expected a property name.
	
Output of below code?
	1 == '1'	//true
	1 == [1]	//true
	'1' == [1]	//true
	'1,2' == [1,2]	//true
	
	(function(){}).constructor === Function //true
	
	
What is scope in javascript?
What is context in javascript?

	
How JavaScript differs from other programming languages?
	//Other languages have “classical inheritance” 
	where the software creates a copy of the behavior from parent class into the child when we extend that class. 
	After that the parent and child classes become separate entities.
	
	//Behaviors and properties are copied when we create an object or instance of a class using a constructor. 
	//At that point both are separate entities.
	//That’s because they are not linked — it’s just a copy from one to the other.
	//Compare that to Javascript, where the child’s behavior is just a link up to the parent class’s behavior.
	
What is javascript paradigm?
	//Modern programming languages fall into two categories: 
		1. imperative (also called procedural) 
		2. declarative (also called functional).

	//Object-oriented programming(OOP), procedural programming, parallel processing are ex of the imperative programming paradigm.
	//Functional programming, logic programming, database processing are examples of the declarative programming paradigm.

Why JavaScript is a “multi-paradigm” language?
	//JavaScript supports both object-oriented programming with prototypal inheritance as well as functional programming.
	//JavaScript lets us mix both types of coding in the same project.

What is the difference between Object-oriented programming vs functional programming?
	code wise if we are going to find area
	OOP : 
		Circle c = new Circle(5)
		c.area()
		
	Functional :
		area = area_of_circle(5);
		
		
Why javascript is called dynamically typed language instead of statically typed?
	//we can hold any type in variable declaration
	//i.e. number,string,boolean,array,object,function etc.. unlike other languages
	
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
	
What is a variable?
	//variable is to hold data
	
How many ways we can define a variable?
	//let,var and const
	
Why let and const introduced? What is the problem with var?
	
What is a valid variable name?
	//cant be a keyword
	//cant start with a number
	//only 2 special chars allowed $ and _
	
	invalid variables
	===================
	let let = 1;
	let 1h = 1;
	let #=1;
	let $_@ =1;
	
	valid variables
	===================
	let $_ = 1;
	let h1 = 1;
	let show = 1;
	
What is symbol?
	//primitive data type.
	//introduced in es6
	//creates unique values..
	let newVal = Symbol();
	console.log(newVal); //Symbol()
	console.log(typeof(newVal)); //symbol
	
	let newVal1 = Symbol();
	console.log(newVal === newVal1); //false
	
	const obj = {}
	obj[newVal] = 1;
	obj[newVal1] = 2;
	console.log(obj[newVal]);
	
	
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
	//primitive type - string,number,boolean,symbols
	//non-primitve - array,objects,classes
	
How to make type conversion?
	//any primitve data ype to string
	let num=20.20
	let numString=num.toString()
	console.log(numString)
	console.log(num.__proto__)//methods available in Number
	
	
	let un;
	let unString=un.toString()
	console.log(numString)//can not read property 'toString' of undefined 
	
	
	let bool=true;
	let boolString=bool.toString()
	console.log(numString)//"true"
	
	
	//any primitve data type to number
	let str ="hi";
	console.log(+str);//NaN
	str='10';
	console.log(+str);//1
	
	let bool =true;
	console.log(+bool);//1
	
	
	//any primitve data type to boolean
	let str ="";
	console.log(Boolean(str));//false - if length of string is = 0
	
	let str ="ab";
	console.log(Boolean(str));//true - if length of string is > 0
	
	let num =0;
	console.log(Boolean(num));//false
	num =20;
	console.log(Boolean(num));//true
	num =-20;
	console.log(Boolean(num));//true
	
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


What is global scope?
	let outer =1;
	if(true){console.log(outer);}
	
What is block scope?
What is lexical scope?

What is difference betweeen context and scope?

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
DOM Events
====================================================================================================================
What is event?
What is event.target?
What is event bubbling?
	//When an event happens on an element, it first runs the handlers on it, then on its parent, 
	then all the way up on other ancestors.
	//Almost all events bubble. except few like focus,blur,load event dont bubble
	
	Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them:
	<form onclick="alert('form')">FORM
  		<div onclick="alert('div')">DIV
    			<p onclick="alert('p')">P</p>
 	 	</div>
	</form>
	
	
How to stop bubbling?
	//A bubbling event goes from the target element straight up. 
	//Normally it goes upwards till <html>, and then to document object, and some events even reach window, 
	calling all handlers on the path.
	//But any handler may decide that the event has been fully processed and stop the bubbling.
	//The method for it is event.stopPropagation().
	
	For instance, here body.onclick doesn’t work if you click on <button>:
	
	<body onclick="alert(`the bubbling doesn't reach here`)">
  		<button onclick="event.stopPropagation()">Click me</button>
	</body>
	
What is event capturing?
What is event.stopPropagation()?
What is event.stopImmediatePropagation()?
	//If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, 
	the other ones still execute.
	//
	
What all events available in javascript?
	//click,hover,onchange,mousehover,keyup,keydown


What is useCapture?
	//The capturing and bubbling states are known by the useCapture parameter of addEventListener method
		eventTarget.addEventListener(type,listener,[,useCapture]);
	//By Default useCapture is false. It means it is in the bubbling phase.






















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



arr = [2,3,,4,undefined,,6,,]
//[2, 3, empty, 4, undefined, empty, 6, empty]
arr.forEach((v)=>{console.log(v)}) //2 3 4 undefined 6 and returns undefined


const array2 = ['a',,null,undeined,'', 'b', 'c'];
const iterator2 = array2.keys();
for (const key of iterator2) {
	 console.log(key);
}	
VM603:1 Uncaught ReferenceError: undefined is not defined
    at <anonymous>:1:27




====================================================================================================================
Object
====================================================================================================================

What is javascript object?
How many ways we can create an object in javascript?
Can we modify a const object?
	const obj = {a:1}
	obj.a = 2;
	console.log(obj);//{a:2}
	

What is Object.assign()?
	//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
	//It returns the target object.
	//it does shallow cloning..while cloning from parent. 
	//later if we modify any property in parent obj(2nd level down towards innermost child) it wont reflect in cloned object.
	//only first level nested object modification will be visible..
	
	
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
	
Can we ensure that the insertion order is saved in case of objects?
	//if keys are numbers then it will always printed in a sorted manner 
	//if keys are strings then it will be printed exactly in the same order
	
	let codes = {
  		"49": "Germany",
  		"41": "Switzerland",
  		"44": "Great Britain",
  		"first": "soumya", "last":"surajita",
  		"1": "USA"
	};
	codes
	//{1: "USA", 41: "Switzerland", 44: "Great Britain", 49: "Germany", first: "soumya", last: "surajita"}
	
	for (let code in codes) {
  		console.log(code); // 1, 41, 44, 49 , first, last
	}
	
How we can make sure the insertion order is always saved while priniting an object even if we have integer keys?
	//Use plus operator before number keys start
	//let codes = {
  		"+49": "Germany",
  		"+41": "Switzerland",
  		"+44": "Great Britain",
  		"first": "soumya", "last":"surajita",
  		"+1": "USA"
	};
	codes
	{+49: "Germany", +41: "Switzerland", +44: "Great Britain", first: "soumya", last: "surajita", +1: "USA"}
	
	
Can we declare an object with keys like null or undefined?
	//yes we can
	//As we already know, a variable cannot have a name equal to one of language-reserved words like “for”, “let”, “return” etc.
	//But for an object property, there’s no such restriction:
	
	let obj = { null :1}
	obj.null
	
	let obj = { undefined :1}
	obj.undefined

	let obj = {
  		for: 1,
  		let: 2,
  		return: 3
	};
	
What is the output of below?
	let obj = {
  		0: "test" // same as "0": "test"
	};
	// both alerts access the same property (the number 0 is converted to string "0")
	alert( obj["0"] ); // test
	alert( obj[0] ); // test (same property)

	let obj = {};
	obj.__proto__ = 5; // assign a number
	alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
	
	o.prototype=6;
	console.log(o.prototype); //6
	console.log(o); //{prototype: 6}
	
	
How to print the incremental count on each time u instantiate an object using new?
	var obj1 = new Object({cnt :0}) 
 	var obj2 = new Object(obj1)
	Object.create({b:6})
	//obj1.cnt = 5 {cnt:5}
	//obj2.cnt {cnt:5}
	
	
Why objects are called associative arrays?


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
	
How many ways we can declare a js fucntion?
	//there are 6 ways.
	//1. A regular function e.g. function show(){}
	//2. Function Expression e.g. var show = function(){}
	//3. Shorthand method definition 
		e.g. var obj = { name : "soumya", show(a,b){console.log(a+b);} }
		e.g. var obj = { name : "soumya", ["show"](a,b){console.log(a+b);} } 
		obj["show"](2,3)
		obj.show(2,3)

	//4. Arrow Function e.g. var show =() =>{}
	//5. Generator Function e.g. function* show(){}
	//6. using new Function e.g. var show = new Function(a, b, 'return a + b');

	
How many ways we can execute a function?
	//fnShow()
	//fnShow.call()
	//fnShow.apply()
	//fnShow.bind(this)()
	
What is difference between call() and apply()?
	//call() is to call a function with comma separated arguments.
		funname.call(arg1,arg2,..,argn)
	//apply() is to call a function with all arguments passed as an array.
		funname.apply([arg1,arg2,..,argn)

What is bind()?
	//Used to keep the context of “this” within another function
	//returns a new function which is actually takes care of the original function binding with this...
	
How many ways we can call a bind() method?
	//fn.bind(this,a1,a2)()
	//fn.bind(this,a1)(a2)
	//fn.bind(this)(a1,a2)
	
	Example
	o = {n:10;}
	function f(a,b){
		return this.n + a + b;
	}

	f.bind(o)(10,20);
	f.bind(o,10)(20);
	f.bind(o,10,20)();

	
	
How can we write our own custom bind() method?
	Function.prototype.mybind = function(...outer){
		var originalFn = this;
		var currObj = outer[0];
		var outerArgs = outer.slice(1);//2nd element to end...
		return function(...inner){
			originalFn.apply(currObj, [...outerArgs,...inner])
		}
	}
	
	f.mybind(o,10,20)() //35
	f.mybind(o,10)(20) //35
	f.mybind(o)(10,20) //35


What is function declaration?
	The function declaration (function statement) defines a function with the specified parameters.
	Syntax :-
	=========
	function name([param[, param,[..., param]]]) {
   		[statements]
	}
	
	Example
	=========
	function calcRectArea(width, height) {
  		return width * height;
	}
	console.log(calcRectArea(5, 6));
	// expected output: 30
	
	
What is function expression?
	 A function expression can be stored in a variable: var x = function (a, b) {return a * b};
	 After a function expression has been stored in a variable, the variable can be used as a function. ...
	 They are always invoked (called) using the variable name.
	 
What is the difference between a function declaration and a function expression?
	//function declaration is hoisted where as a function expression is never hoisted.
	
	doStuff();
	function doStuff() {}; //no error
	
	doStuff();
	const doStuff = () => {}; //error
	
Advantages of function expression over function declaration?
	There are some benefits of function expressions over statements, for example they are anonymous functions, 
	they can be used as closures, as arguments to other functions and as IIFEs.
	
Do Function Expressions have any drawbacks?
	//Typically functions created by Function Expressions are unnamed. 
	//For instance the following function is anonymous, today is just a reference to an unnamed function:
	
	var today = function() {return new Date()}
	
	//Does this really matter? 
	//Mostly it doesn’t, but as Nick Fitzgerald has pointed out debugging with anonymous functions can be frustrating. 
	//He suggests using Named Function Expressions (NFEs) as a workaround:	

	var today = function today() {return new Date()}

Do javascript supports function overloading?
	//There is no real function overloading in JavaScript since it allows to pass any number of parameters of any type. 
	//You have to check inside the function how many arguments have been passed and what type they are. 
	//The correct answer is THERE IS NO OVERLOADING IN JAVASCRIPT.
	
	function funcONE(x,y) { return x*y; }
	function funcONE(z) { return z; }
	
	The above will not show an error, but you won't get desired results. On calling,
	// prints 5
	funcONE(5);

	// prints 5, not 30
	funcONE(5,6);

	JavaScript does not support function overloading natively. 
	If we will add functions with the same name and different arguments, it considers the last defined function.
	
Do javascript supports function overriding?
	// JavaScript does support the concept of method overriding. 
	//And it does it in very strange ways. 
	//After all, it is the most misunderstood language in the programming world. 
	//JavaScript supports overriding, but not overloading.
	
	
What is a named function expression?
	var a = function bar() {
    		return 3;
	}
 
What is anonymous function?
	//A function that does not have a name..
	
What is advantages of anonymous function?

What is drawback of anonymous function?

What is arrow function?
	Arrow functions:
	1. Do not have this
	2. Do not have arguments
	3. Can’t be called with new
	4. They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance
	
What is the difference between a normal function and arrow function?
	//curly braces are not mandatory for a single return statement or a single statement
	//for zero or multiple arguments we have to use parenthesis, for one argument we can skip
	//Unlike regular functions, arrow functions do not have their own this.
	//Arguments objects are not available in arrow functions, but are available in regular functions. 
	//We cant use new operator to instantiate object using arrow function
	

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
	Higher-order functions are functions that accept a function as an argument and return a function. 
	Often, they are used to add to the functionality of a function.
	
	const withLog = (fn) => {  
		return (...args) => {  
			console.log(`calling ${fn.name}`);  
			return fn(...args);  
		};  
	};
	In the above example, we create a withLog higher-order function that takes a function 
		and returns a function that logs a message before the wrapped function runs.

	const add = (a, b) => a + b;  
	const addWithLogging = withLog(add);  
	addWithLogging(3, 4);  
	// calling add  
	
What is a pure function?
	Pure functions take some input and give a fixed output. 
	Also, they cause no side effects in the outside world.
	Ex:-
	const add = (a, b) => a + b;

Example of Pure Functions in JavaScript?
	//filter(),map(),reduce(),concat(),Object.assign()
	//All the above methods are immutable and never modifies the actual data. Hence known to be pure fucntions.
	
What is an impure function?
	const SECRET = 42;  
	const getId = (a) => SECRET * a;
	getId is not a pure function. 
	The reason being that it uses the global variable SECRET for computing the output. 
	If SECRET were to change, the getId function will return a different value for the same input. 
	Thus, it is not a pure function.

Example of impure Functions in JavaScript?
	//push(),pop(),unshift(),shift()
	//All the above methods are mutable and always modifies the actual data. 
	//Hence known to be impure functions.
	
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
	Functions are first-class objects in JavaScript, meaning they can be:
		1. stored in an array, variable, or object
		2. passed as one of the arguments to another function
		3. returned from another function
		
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
	
	
What is throttling?
	//Basically we are going to build a function called throttle.
	//This is very similar to the debounce function that we looked at the last lecture.
	//They both avoid the unnecessary action to be fired.
	//So let's look at how it works.
	//So imagine if you have a button and if I click on it multiple times in a quick succession 
	then the event associated with that button would get fired multiple times and you want to avoid that.
	//So one way of doing it is using debounce function that we looked at in last lecture.
	//Again throttle works little different so if you build a function called throttle() and add some delay to it 
	  let's say 10 seconds then what really happens -> on the first click the event would get fire.
	//So this is the event being fired.
	//And within that delay let's say 10 seconds if the user clicks on it again.
	//Then those events won't get fired.
	//But after that delay again if somebody clicks on it then it would get fired.
	//Then it would wait for another 10 seconds and it would prevent the other events are being fired.
	//So if you keep clicking on a continuously then every 10 seconds you will get like one click 
	//compared to that if you look at the debounce function which work very differently 
	//The debounce function it doesn't really execute anything on a first click.
	//It basically delays the event and as soon as the user clicks on another time on button a second time 
		it again deLay the event firing 
	//so if you keep clicking on the same button over and over nothing would get fired until the point where you actually stop.
	//And then there is a delay and then the last click would get fired.

	//So essentially in throttle the first click gets fired 
	//In the debounce that last click get fired after the delay.
	//Also here if you keep clicking on the same button over and over then there will be multiple events after each delay 
	//here if I keep clicking on it event will never fire until until I stop.
	//So a lot of time debounce is very useful because it truly avoids a lot of unnecessary events.

	//So This both functions have its own applications.
	//So let's look at how to build the throttle function.

	<button id="myid">click me</div>
	document.getElementById('myid').addEventListener("click", throttle(() => {
		console.log("clicked");
	},5000))	
	
	Now lets build our debounce function.
	const throttle = (fn,delay)=>{
		let last=0;
		return function(...args){
			const now = new Date().getTime();
			
			if(now-last < delay){
				return;
			}
			last = now;
			return fn(...args)
		}
	}
	
	
What is debouncing?
	//Imagine you are building a shopping cart where user have picked lots of items to purchase.
	//And as a last event the user is clicking on a purchase button.
	//And that point the purchase order goes to the server.
	//What if the user clicks on the purchase button twice accidentaly?
	//Does that mean the order will go twice?
	//It depends upon how you design the system
	//But you can protect that kind of behaviour using debounce function.
	//debounce function is basically if you keep clicking on the same button multiple times it would execute that event on last clcik
	//For example if you have an event on mouse move where my mouse moves from one place to another..it will keep firing the mouse move event
		And on every mouse move you don't have to fire that event.
		So what you want to do is when the mouse starts to move and as soon as the mouse end then you have to fire that event..
		
	//So that way it only happens one time on a mouse move
	//So similarly you are scrolling on something and you have an event we can use debounce function to prevent lots of events being fired..
	
	//so lets see how it actually works..
	
	<button id="myid">click me</div>
	document.getElementById('myid').addEventListener("click",()=>{
		console.log("clicked");
	})
	
	Now if i click button continuously the event will be triggered that many times..
	And "clicked" will be printed that many number of times.
	But i dont want this.
	What i want is on the last click i want the event to be fired..
	And thats the right behaviour.
	because user can accidentally click multiple times.
	
	So how do we do that?
	Lets create a debounce function..
	So instead of console.log() lets keep our debounce function.
	We will use setTimeout() to create this.
	
	<button id="myid">click me</div>
	document.getElementById('myid').addEventListener("click", debounce(e => {
		console.log("clicked");
	},2000))	
	
	Now lets build our debounce function.
	const debounce = (fn,delay)=>{
		let timeoutID;
		return function(...args){
			if(timeoutID){
				clearTimeout(timeoutID);
			}
			timeoutID = setTimeout(()=>{
				fn(...args)
			},delay)
		}
	}
	
	//Here the event is actually supposed to execute after 2 seconds as we mentioned above.
	//Before 2 secs if we clicked button n umber of times continuously then we are clearig the timer..
	//If user continues to click button even after 2 secs then also the function wont get triggered as debunce will keep on clearing the timers
	//Then last click event gets triggered after 2 seconds..
	
	
Q. Suppose we have a constructor function and we dont call it using new operator. Then what will be the output?
	function show(name){ this.name = name; this.greet = function(){ return this.name}}
	var a = new show("s");
	a //show {name: "s", greet: ƒ}
	a.greet()//s
	
	var a = show("s");
	a//undefined
	a.greet()//undefined
	
	
Q. What happens when we use in above question new show() or show()?
	//when we use -> var a = new show()
	function show(name){ 
		this = {};
		this.name = name; 
		this.greet = function(){ 
			return this.name
		}
		return this;
	}

Q. Why class structure is called syntactical sugar for prototype constructor fucntion?
	//Because class internally uses the prototype constructor fucntion only.
	//class constructor() content is same as the whole function body
	

Q. Prototype objects are fallback objects. What is the meaning?
	//When we search for a property or a method in an object, 
	and it is not available then it is searched in it's prototype object 
	and if it is not available in prototype object also then it is searched in prototype object's prototype 
	(prototype chaining till the root or end of the chain __proto__ )
	
	function Person(){ 
		this.name = "soumya";
		this.age = 28;
		this.loc = "Bangalore";
	}
	var person = new Person();
	console.log(person)
	//{ 
		this.name : "soumya",
		this.age : 28,
		this.loc : "Bangalore",
		__proto__ : {
			constructor : f Person(),
			__proto__ : {
				constructor : f Object()
				toString : f toString(),
				....
				...
			}
		}
	}

	//Suppose we are trying for person.breathe() function it is checked in the object person first,
	//If not found it is searched inside person.__proto__
	//If still not found it is searched again in person.__proto__.__proto__
	//This continues when it reaches or points to Object in js.
		i.e. __proto__ constructor should point to f Object()
		
	person.__proto__ === Person.prototype //true

Q. __proto__ ?
	//is present in every object in js
	//no matter how we have created it
	//constructor function, new Objects, Object literals, arrays etc
	
	










































====================================================================================================================
Inheritance
====================================================================================================================
How to achieve inheritance in ES5?
	function Person(fName, lName) {
  		this.firstName = fName;
  		this.lastName = lName;
	}

	Person.prototype.getFullName = function () {
  		return this.firstName + ' ' + this.lastName;
	}

	function Employee(fName, lName, eId) {
  		Person.call(this, fName, lName);
  		this.empId = eId;
	}
	Employee.prototype = Object.create(Person.prototype);

How to create a static method in es5?
	function MyClass() {
  		this.myAttribute = "foo";
	}
	MyClass.prototype.myMethod = function () { return "bar"; };
	MyClass.myStaticMethod = function () { return "baz"; };
	MyClass.myStaticMethod;


How to create private variables in js?
	In its current state, there is no “direct” way to create a private variable in JavaScript. 
	In other languages, you can use the private keyword

	// Define "a" in global scope
	var a = 123;

	// Define "b" in function scope
	(function() {
  		console.log(b); //=> Returns "undefined" instead of an error due to hoisting.
  		var b = 456;
	})();

	console.log(a); // => 123
	console.log(b); // Throws "ReferenceError" exception, because "b" cannot be accessed from outside the function scope.



What is factory pattern?
	var peopleFactory = fucntion(name,age,state){
		var temp = {}
		//var temp = new Object();
		temp.age = age;
		temp.name = name;
		temp.state = state;
		
		temp.printPerson = private variables in js
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
	In reality, the only true difference between prototype and __proto__ is that 
	the prototype is a property of a class constructor, while the __proto__ is a property of a class instance. 
	
	__proto__
	============
	//is present in every object in javascript
	//no matter how we have created it
	//constructor function, new Objects, Object literals, arrays etc
	
	prototype
	============
	//prototype sounds similar but does something totally different.
	//prototype does not exist on every object
	//it exists on function objects because javascript is a prototype based language
	//We use constructor functions to build the objects 
		and whatever we have set here - on prototype will be assigned as a prototype 
		to any object that is built on based of this constructor function.
		
	//exists for all the objects which is created using new operator 
	
	
What is console.dir()
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
