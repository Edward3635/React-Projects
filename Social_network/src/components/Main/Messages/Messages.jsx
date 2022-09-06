import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Messages = props => {

	const dialogNames = props.state.dialogData.map(el => <DialogItem id={el.id} key={el.id} name={el.name} />),
		dialogMessages = props.state.messageData.map(el => <Message msg={el.message} key={el.id} />),

		onAddMsg = () => props.addMsg(),
		onLetterMsgChange = e => {
			let value = e.target.value
			props.updateNewMessageText(value)
			window.onkeypress = (e) => {
				if (e.key === 'Enter' && e.shiftKey) return;
				if (e.key === 'Enter') e.preventDefault();
				if (e.key === 'Enter' && e.target.value.replace(/^\s+|\s+$/g, "")) props.addMsg();
			};
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
					<textarea className='text__area-msg' onChange={onLetterMsgChange}
						value={props.state.newMessageText} />
					<button className='btn__send-msg' onClick={onAddMsg}>
						<span className='test'></span></button>
				</div>
			</div>
		</section>
	);
};

export default Messages;