import React, { useState } from 'react'

const LongPulling = () => {
	const [messages, setMessages] = useState([]);
	return (
		<div className='center'>
			<div>
				<div className="form">
					<input type="text" />
					<button>Send</button>
				</div>
				<div className='messages'>
					{messages.map(msg =>
						<div className='message' key={msg.id}>{msg.message}</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default LongPulling