import React from 'react';
import ReactDOM from 'react-dom'; // Use to call ReactDOM.findDOMNode() method.

/*
 * "Demo2" class with React component API.
 */
class Demo2 extends React.Component {
	constructor() {
		super();

		this.state = {
			data : []
		}

		this.buttonSetStateHandler = this.buttonSetStateHandler.bind(this);
		this.randomForceUpdateHandler = this.randomForceUpdateHandler.bind(this);
		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	};

	/*
	 * setState() method is used for updating the state of the component. 
	 * This method will not replace the state but only add changes to original state.
	 */
	buttonSetStateHandler() {
		var myItemArray = this.state.data;
		var item = "item" + myItemArray.length + ",   ";
		myItemArray.push (item);
		this.setState({data: myItemArray});
	};

	/*
	 * forceUpdate() function is just a way to force a re-render of the component and its children.
	 * It does not mutate the state at all.
	 */
	randomForceUpdateHandler() {
		this.forceUpdate();
	}

	/*
	 *
	 */
	findDomNodeHandler() {
		var myDiv = document.getElementById('root');
		ReactDOM.findDOMNode(myDiv).style.color = 'red';
   }

	render() {
		return (
			<div>
				<button onClick={this.buttonSetStateHandler}>Add Item</button>
				<h4>Item List : {this.state.data}</h4>
				<button onClick = {this.randomForceUpdateHandler}>Generate Random Number</button>
				<h4>Random number: {Math.random()}</h4>
				<button onClick = {this.findDomNodeHandler}>Change red color for 'root' div</button>
			</div>
		);
	}
}

export default Demo2;