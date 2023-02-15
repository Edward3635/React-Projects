import React from 'react'

const PostError = ({ postError, commentsError }) => {
	if (postError === commentsError) return <div className='page__post-error'>{postError}</div>

	return (
		<div className='page__post-error'>
			{postError.message ? <div style={{ marginBottom: 20 }}>{postError.message}</div> : null}
			{commentsError ? <div>{commentsError.message}</div> : null}
		</div>
	)
}

export default PostError