import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Messages = props => {

	const dialogNames = props.state.dialogData.map(el => <DialogItem id={el.id} key={el.id} name={el.name} />),
		dialogMessages = props.state.messageData.map(el => <Message msg={el.message} key={el.id} />);

	return (
		<section className='section__messages'>
			<div className='dialogs'>
				{dialogNames}
			</div>
			<div className='messages'>
				{dialogMessages}
			</div>
		</section>
	);
};

export default Messages;