import React from 'react';

class Demo3 extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			info: 'Information Show Here...'
		}

		this.updateState = this.updateState.bind(this);
	};

	updateState(e){
		this.setState({
			info: e.target.value
		});
	}

	render(){
		return(
			<div>
				<h2> Call inside Demo3</h2>
				<input type="text" value={this.state.info} onChange={this.updateState} />
				<h4>{this.state.info}</h4>

				<h2> Call outside another Demo3_Child</h2>
				<Demo3_Child childinfo={this.state.info} childUpdateState={this.updateState} />
			</div>
		);
	}

}

class Demo3_Child extends React.Component {
	render(){
		return(
			<div>
				<input type="text" value={this.props.childinfo} onChange={this.props.childUpdateState} />
				<h4>{this.props.childinfo}</h4>
			</div>
		);
	}
}

export default Demo3;