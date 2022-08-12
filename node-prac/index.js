// Require http header
var http = require('http');

// Create server
http.createServer(function (req, res) {

	// HTTP Status: 200 : OK
	// Content Type: text/html
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	// Send the response body as "Hello World!"
	res.end('Hello World!');

}).listen(8080);
//Node.js REPL (READ, EVAL, PRINT, LOOP)

/*
Read : It reads the inputs from users and parses it into JavaScript data structure. It is then stored to memory.
Eval : The parsed JavaScript data structure is evaluated for the results.
Print : The result is printed after the evaluation.
Loop : Loops the input command. To come out of NODE REPL, press ctrl+c twice
*/

/*

NPM (Node Package Manager) is the default package manager for Node.js 
and is written entirely in Javascript. 
*/


/*

Node.js Modules
In Node.js, Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. 
Modules can be a single file or a collection of multiples files/folders. 
The reason programmers are heavily reliant on modules is because of their re-usability as well as the ability to break down a complex piece of code into manageable chunks.

Modules are of three types:

Core Modules
local Modules
Third-party Modules

Core Modules: Node.js has many built-in modules that are part of the platform and comes with Node.js installation. These modules can be loaded into the program by using the require function.

Syntax:

var module = require('module_name');
The require() function will return a JavaScript type depending on what the particular module returns. 
The following example demonstrates how to use the Node.js Http module to create a web server.


Local Modules: Unlike built-in and external modules, local modules are created locally in your Node.js application. 
Let’s create a simple calculating module that calculates various operations. 
Create a calc.js file that has the following code:
exports.add = function (x, y) {
	return x + y;
};
	
exports.sub = function (x, y) {
	return x - y;
};
	
exports.mult = function (x, y) {
	return x * y;
};
	
exports.div = function (x, y) {
	return x / y;
};
Third-party modules: Third-party modules are modules that are available online using the Node Package Manager(NPM). 
These modules can be installed in the project folder or globally. Some of the popular third-party modules are mongoose, express, angular, and react.

Example:

npm install express
npm install mongoose
npm install -g @angular/cli



Node.js comes with different predefined modules (e.g. http, fs, path, etc.) that we use and scale our project. 
We can define modules locally as Local Module. 
It consists different functions declared inside a JavaScript object and we reuse them according to the requirement. 
We can also package it and distribute it using NPM.

Defining local module: Local module must be written in a separate JavaScript file.
In the separate file, we can declare a JavaScript object with different properties and methods.



*/