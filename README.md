# Overview

This project is an app demonstrating the NativeScript framework. Written in NativeScript, the 
app explores various areas of NativeScript app development by walking user through real code 
samples paired with working examples.

# Code Example

One of the first examples of NativeScript framework within the app shows how to declare a page, 
by creating an XML file:

	<Page>
		<!-- page content goes here... -->
	</Page>
	
Assuming the XML file is named "main.xml", you can load the page as the primary app page from the
app.js file, which is executed when the app loads:

	var applicationModule = require("application");
	applicationModule.mainModule = "main";
	applicationModule.start();
	
Note the full filename "main.xml" is not used, but instead the root of the filename. NativeScript has
many conventions built into the framework, and this is the first introduced to developers, as the framework 
assumes all application pages are named *.xml; therefore, we can leave off the ".xml" when referring to pages.
	
# Motivation

This project was created to help developers learn NativeScript with an interactive example. By
running the app on a mobile device, you can see the code examples presented in the app in action 
side-by-side.

The app is currently under development.

# Installation

You can download, compile, and run the app on your own, without installing from the app store 
by following these instructions.

## Prerequisites

Before geting started, please see the [official NativeScript documentation](http://docs.nativescript.org/getting-started#install-nativescript-and-configure-your-environment "NativeScriptDocs"). 
Node.js is a prerequisite of NativeScript. On OS X, it is recommended you install nvm to manage multiple
version of Node.js. Check out the [nvm repository](https://github.com/creationix/nvm "nvm") on Github for more details. 
All code examples below assume nvm is installed, using Nodejs verison 0.12.7.

## Cloning the Repository

	git clone https://github.com/mikebranstein/NativeScriptDemoApp

## Restore Packages and Provision NativeScript Assets

The app does not include all files needed by NativeScript to build and run directly. To 
run the app, you'll need to restore the missing npm packages, install the missing NativeScript
platforms, prepare, then build. 

	nvm use 0.12.7

	cd NativeScriptDemoApp
	cd DemoApp

	npm install
	tns install
	tns prepare ios
	tns build ios
	tns run ios --emulator

# Contributors

If you are interested in contributing to the project, contact [Mike Branstein](mailto://mike.branstein@mgail.com).

# License

Copyright (c) 2015 Mike Branstein

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.