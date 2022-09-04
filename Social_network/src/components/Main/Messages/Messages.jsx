import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../State/messagesReducer'


const Messages = props => {

	const dialogNames = props.state.dialogData.map(el => <DialogItem id={el.id} key={el.id} name={el.name} />),
		dialogMessages = props.state.messageData.map(el => <Message msg={el.message} key={el.id} />),

		onLetterMsgChange = e => props.dispatch(updateNewMessageTextActionCreator(e.target.value)),
		addMsg = () => props.dispatch(addMessageActionCreator());

	return (
		<section className='section__messages'>
			<div className='dialogs'>
				{dialogNames}
			</div>
			<div className='messages'>
				<div>
					{dialogMessages}
				</div>
				<div className='send__msg-wrapper'>
					<textarea className='text__area-msg' onChange={onLetterMsgChange} value={props.state.newMessageText} />
					<button className='btn__send-msg' onClick={addMsg}>
						<span className='test'></span></button>
				</div>
			</div>
		</section>
	);
};

export default Messages;