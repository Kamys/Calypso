import React, {Component} from 'react';
import * as classNames from "classnames";

/**
 * Use for get data.
 */
class InputData extends Component {

	constructor(props) {
		super(props);
	}

	static defaultProps = {
		type: 'text'
	};

	render() {
		return (
			<div>
				<input
					value={this.props.value}
					onChange={e => this.props.onChangeValue(e.target.value)}
					name={this.props.id}
					id={this.props.id}
					type={this.props.type}/>
				<label className={classNames({active: this.props.value.length > 0})}
					   form={this.props.id}>{this.props.labelText}</label>
			</div>
		);
	}
}

export default InputData;
