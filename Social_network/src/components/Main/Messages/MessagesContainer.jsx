import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../State/messagesReducer'
import Messages from './Messages';


const MessagesContainer = props => {
	const state = props.store.getState(),
		onLetterMsgChange = value => props.store.dispatch(updateNewMessageTextActionCreator(value)),
		addMsg = () => props.store.dispatch(addMessageActionCreator());

	return <Messages addMsg={addMsg} updateNewMessageText={onLetterMsgChange} state={state.messagesPage} />;
};

export default MessagesContainer;