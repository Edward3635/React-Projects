import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../State/messagesReducer'
import Messages from './Messages';
import StoreContext from '../../../StoreContext';


const MessagesContainer = () => {

	return <StoreContext.Consumer>
		{
			(store) => {
				let state = store.getState(),
					onLetterMsgChange = value => store.dispatch(updateNewMessageTextActionCreator(value)),
					addMsg = () => store.dispatch(addMessageActionCreator());
				return <Messages addMsg={addMsg} updateNewMessageText={onLetterMsgChange} state={state.messagesPage} />

			}
		}
	</StoreContext.Consumer>

};

export default MessagesContainer;