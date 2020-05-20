
What are the ES6 features?
What is arrow functin?
	It is concise way of writing a function..
	var fnShow = () => {}
	var fnShow = (a,b,c) => {}
	
	//for a single parameter parenthesis we can omit
	var fnShow = a => {}
	
	//If a function body has a single return statement we can omit the curly braces... and the return keyword also.
	var fnShow = (a,b) => a+b
	
	
How arrow function behaves differently with "this" keyword?

	1. Arrow functions does not bind its own this
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//That is the context inside arrow functions is lexically or statically defined.
	//What do we mean by that?
	//Unlike other functions, the value of this inside arrow functions is not dependent on how they are invoked 
		or how they are defined.
		It depends only on its enclosing context.
		
Code example to demonstrate the difference between a normal javascript function and an arrow function.
	var box5 = {
		color : 'green',
		position : 1,
		clickMe : function(){
			document.querySelector(".green").addEventListener('click',function(){
				var str = 'This is box number ' + this.position + ' and it is ' + this.color;
				alert(str);
			})
		}
	}
	
	box5.clickMe();
	//This is box number undefined and it is undefned
	
	
	So why it is happening? Why it is not reading the values from the object?
	that is green and 1..
	We already know the reason..
	Only in a method call the "this" points to that object..
	But in a regular function call the "this" keyword always points to the global object. 
	Here in this case it is the window object
	So within method clickMe() we have access to "this" keyword which is pointing to the object box5.
	because clickMe() method is a function attached to the object
	But then we have a callback function added using event handler...
	It is not a method..
	It is normal function call.
	So it does not point to box5 object..Rather it points to Window object.
	And obviously color and position not available in window object..
	So to fix this we create a variable self inside clickMe() method where "this" is available.
	Lets point self to this.
	And now instead of using "this" we will use self.color and self.position inside event handler method..
	So now it will print 
	//This is box number 1 and it is green
	
	
	Now lets use arrow function to fix this..
	var box5 = {
		color : 'green',
		position : 1,
		clickMe : function(){
			document.querySelector(".green").addEventListener('click',() => {
				var str = 'This is box number ' + this.position + ' and it is ' + this.color;
				alert(str);
			})
		}
	}
	
	box5.clickMe();
	
	Here this event handler method - it shares the this keyword with its surrounding 
	So its surrounding is clickMe() method.. 
	So the arrow function will hold the "this" of its lexical scope which is clickMe()
	So now it will print 
	//This is box number 1 and it is green
	
	
	Now if we change clickMe() method inside box5 object from anormal method to an arrow function..
	What will happen in this case?
	
	Now arrow function does not have its own "this".
	It will depend on its lexicaal scope which is window..
	So if we change clickMe() to an arrow function we wont be able to access the object properties any more..
	
	var box5 = {
		color : 'green',
		position : 1,
		clickMe : () => {
			document.querySelector(".green").addEventListener('click',() => {
				var str = 'This is box number ' + this.position + ' and it is ' + this.color;
				alert(str);
			})
		}
	}
	
	box5.clickMe();
	
	So now it will print 
	//This is box number undefined and it is undefined
	
	
	Note ::
	Simillarly inside any event handler, foreach() or map() filter() these will refer to window object when we try to access "this"
	
	
	2. Arrow functions does not have arguments object
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	function show(a,b,c){console.log(arguments);}
	show(1,2,3)
	Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

	show = (a,b,c) => {console.log(arguments);}
	show(1,2,3)
	VM400:1 Uncaught ReferenceError: arguments is not defined

	
	3. Arrow functions can't use super keyword
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	4. Arrow functions cant use new.target
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
	
	
What is promise?
	//ES6 feature designed to deal with asynchrnous javascript
	//it is an object - it keeps track about whether a certain event has happened already or not
	//And if did happened  then it determines what happens after the event has happened
	//It has to handle async code - like a timer finishing or database api call finished execution..
	//promise kind of implements the concept of a future value that we're expecting
	
	
	let promiseTOCleanTheRoom = new Promise((resolve,reject)=>{
		let isClean = true;
		if(isClean){
			resolve('clean');
		}else{
			reject('not clean')
		}
	})
	
	promiseTOCleanTheRoom.then((fromResolve)=>{
		 	console.log('The room is' + fromResolve)
	}).catch((fromReject)=>{
		console.log('The room is' + fromReject)
	})
	

	
How many states a promise has?	
	NOTE:::	promise has 3 states..
		1) pending
		2) resolve
		3) reject
	
	
	
Write a chaining of promises example...
	
	let promiseTOCleanTheRoom = function(){ 
		return new Promise(function(resolve,reject){
			let isClean = true;
			if(isClean){
			console.log("success >> promiseTOCleanTheRoom")
				resolve('clean');
			}else{
				reject('not clean')
				}
		})
	}
	
	let promiseTORemoveGarbage = function(p){ 
		return new Promise(function(resolve,reject){
			if(p == "clean"){
			console.log("success >> promiseTORemoveGarbage")
				resolve(p+ '**removed');
			}else{
				reject(p + 'not removed')
				}
		})
	}
	
	let promiseTOWinIceCream = function(p){ 
		return new Promise(function(resolve,reject){
			if(p == "clean**removed"){
			console.log("success >> promiseTOWinIceCream")
			
				resolve(p + '**won icecream');
			}else{
				reject(p +'not won icecream')
				}
		})
	}
	
	
	promiseTOCleanTheRoom().then(function(r1){
		return promiseTORemoveGarbage(r1);
	}).then(function(r2){ 
		return promiseTOWinIceCream(r2);
	}).then((r3)=>{
		console.log(r3);
	})
	
	
	success >> promiseTOCleanTheRoom
	success >> promiseTORemoveGarbage
	success >> promiseTOWinIceCream
	clean**removed**won icecream
	Promise {<resolved>: undefined}
	
Q. What is Promise.all() ?
	//It takes an array as argument which will hold all the promises..
	//And once all the promises finish execution then only this callback then() will be executed.
	Promise.all([promiseTOCleanTheRoom(),promiseTORemoveGarbage("clean"),promiseTOWinIceCream("clean**removed")]).then(function(){
		console.log('all are finished')
	});
	
	success >> promiseTOCleanTheRoom
	success >> promiseTORemoveGarbage
	success >> promiseTOWinIceCream
	all are finished
	Promise {<resolved>: undefined}
	
Q. What is Promise.race() ?
	//It takes an array as argument which will hold all the promises..
	//And once one of the promises above finish execution then only this callback then() will be executed.
	Promise.race([promiseTOCleanTheRoom(),promiseTORemoveGarbage("clean"),promiseTOWinIceCream("clean**removed")]).then(function(){
		console.log('one of them is finished')
	});
	
	
