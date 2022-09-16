import React from 'react';
import { useDispatch } from 'react-redux';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Messages = props => {

	const dispatch = useDispatch(),
		dialogNames =
			props.messagesPage.dialogData.map(el => <DialogItem id={el.id} key={el.id} name={el.name} />),
		dialogMessages = props.messagesPage.messageData.map(el => <Message msg={el.message} key={el.id} />),

		onAddMsg = () => dispatch(props.addMessage()),
		onLetterMsgChange = e => dispatch(props.updateNewMessageText(e.target.value)),
		onEnterPress = e => {
			if (e.key === 'Enter' && e.shiftKey) return;
			if (e.key === 'Enter') e.preventDefault();
			if (e.key === 'Enter' && e.target.value.replace(/^\s+|\s+$/g, "")) dispatch(props.addMessage());
		};


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
					<textarea className='text__area-msg' onChange={onLetterMsgChange} onKeyPress={onEnterPress}
						value={props.messagesPage.newMessageText} />
					<button className='btn__send-msg' onClick={onAddMsg}>
						<span className='test'></span></button>
				</div>
			</div>
		</section>
	);
};

export default Messages;