import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS }from '../constants';

export const addReminder = (text, dueDate) => {
	const action ={
		type: ADD_REMINDER,
		dueDate,
		text
	}
	console.log('action in addReminder', action);
	return action;
}

export const deleteReminder = (id) => {
	const action = {
		type: DELETE_REMINDER,
		id
	}
	console.log('deleting in acionts', action);
	return action;
}

export const clearReminders = () => {
	return {
		type:CLEAR_REMINDERS
	}
}