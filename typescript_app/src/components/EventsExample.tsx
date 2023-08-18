import React, { FC, useRef, useState } from 'react'


const EventsExample: FC = () => {

	const [value, setValue] = useState<string>('');
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => (console.log(inputRef.current?.value));

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('!');

	};
	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};
	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);

	};
	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true);
	};
	return (
		<div>
			<input className='input' value={value} onChange={changeHandler} placeholder='Control input' type="text" />
			<input className='input' ref={inputRef} placeholder='Uncontrol input' type="text" />
			<button onClick={clickHandler}>Click Here</button>
			<div draggable onDrag={dragHandler} style={{ width: 200, height: 200, background: isDrag ? 'black' : 'red' }}></div>
			<div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHandler} style={{ width: 200, height: 200, background: 'red', marginTop: 40 }}></div>
		</div>
	)
}

export default EventsExample