import React from 'react';

/*
 * "Demo1" class with state/props data.
 */
class Demo1 extends React.Component {

	constructor() {
		super();

		/* Mutable */
		this.state = {
			data:
			[
				{"id":1, "name":"Julia", "age":"3"},
				{"id":2, "name":"Happy", "age":"3.5"},
				{"id":3, "name":"Blue", "age":"1"}
			]
		}
	}

	render() {
      return (
         <div>
            <Header />
            <table>
            	<thead>Dog List</thead>
            	<tbody>
            		{this.state.data.map(
            			(dog,i) => <TableRow key={i} data={dog} />
            		)}
            	</tbody>
            </table>
            <Footer headerProp="My Home @copyright 2017" />
         </div>
      );
   }
}

/*
 * "Header" class sample
 */
class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Tutorial 1 - Show the data in the table.</h1>
				<br/>
			</div>
		)
	}
}

/*
 * "Footer" class with props value (immutable) 
 */
class Footer extends React.Component {
	render() {
		return (
			<h2>{this.props.headerProp}</h2>
		)
	}
}

/*
 * "TableRow" class with props value (immutable)
 */
class TableRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}

export default Demo1;