import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			text: '',
			dueDate: ''
		}
	}

	addReminder(){
		
		//Date.parse((this.state.dueDate).split('T')[0])	< Date.now() ? alert('This date is in the past!') :
		Date.parse(this.state.dueDate)	< Date.now() ? alert('This date is in the past!') :
		this.props.addReminder(this.state.text, this.state.dueDate);
	}

	deleteReminder(id){
		this.props.deleteReminder(id);
	}

	clearReminders(){
		this.props.clearReminders();
	}

	renderReminders(){
		const {reminders} = this.props;
		return (
			<ul className="list-group col-sm-4">
				{
					reminders.map((reminder) => {
						return (
							<li key={reminder.id} className="list-group-item">
								<div className="list-item">
									<div>{reminder.text}</div>
									<div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
								</div>
								<div onClick={() => this.deleteReminder(reminder.id) }
								className="list-item delete-button">&#x2716;</div>
							</li>
							)
					})
				}
			</ul>
		)
	}

	render(){
		return(
			<div className="App">
				<div className="title">
					Reminder Pro
				</div>
				<div className="form-inline reminder-form">
					<div className="form-group">
						<input
							className="form-control"
							placeholder="Thing to do!"
							onChange={event => this.setState({text: event.target.value})}
						/>
						<input
							className="form-control"
							type="datetime-local"
							onChange={event => this.setState({dueDate: event.target.value})}
						/>
					</div>
					<button
						type="button"
						className="btn btn-success"
						onClick={() => this.addReminder()}
					>
						Add Reminder
					</button>
				</div>
				{ this.renderReminders() }
				<button
						type="button"
						className="btn btn-warning"
						onClick={() => this.clearReminders()}
				>
					Clear pending
				</button>
			</div>
		)
	}

}

/*
function mapDispatchToProps(dispatch){
	return bindActionCreators({addReminder}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
*/

function mapStateToProps(state) {
	return{
		reminders: state
	}
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders })(App);