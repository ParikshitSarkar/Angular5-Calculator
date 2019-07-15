import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


//currVal is the template variable which holds the result displayed on the calculator screen 
//and it is of type "any". 

  	currVal:any; 

//currVal is initialised to store an empty string value. 

  constructor() {
  	this.currVal = ''; 
  }

//currVal is passed as a string parameter into dis(), the argument is set from the on-click events 
//defined in the template. 
//dis() concatenates the parameters passed and stores it in currVal variable.  

  dis(currVal):void{

  	this.currVal += currVal; 

  }

//currVal value is passed into solve() and is executed as a logical expression by 
//the eval() to display the result of the operation.

  solve(currVal):void{


  	this.currVal = eval(this.currVal);

  }

//clr() sets the currVal to an empty string. 

  clr():void{
  	return this.currVal = ''; 
  }

//del() sets the currVal into a temporary string variable, which is used together with substr() 
//to extract the values from the tempStr array, from 0th pos to 2nd-last pos

  del():void{
 
  	var tempStr = this.currVal; 	
  	this.currVal = tempStr.substr(0, tempStr.length - 1);

  }


	
  ngOnInit() {
  }

}
