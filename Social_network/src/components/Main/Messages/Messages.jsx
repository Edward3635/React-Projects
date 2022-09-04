import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Messages = props => {
	const dialogNames = props.state.dialogData.map(el => <DialogItem id={el.id} key={el.id} name={el.name} />),
		dialogMessages = props.state.messageData.map(el => <Message msg={el.message} key={el.id} />),
		newMsg = React.createRef(),

		onLetterMsgChange = () => {
			const text = newMsg.current.value;
			props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });
		},
		addMsg = () => {
			props.dispatch({ type: 'ADD-MESSAGE' });
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
						ref={newMsg} value={props.state.newMessageText} />
					<button className='btn__send-msg' onClick={addMsg}>
						<span className='test'></span></button>
				</div>
			</div>
		</section>
	);
};

export default Messages;