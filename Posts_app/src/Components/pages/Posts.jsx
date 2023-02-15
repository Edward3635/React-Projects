import React, { useEffect, useRef, useState } from 'react';
import CreatePostForm from '../../Components/CreatePostForm';
import PostList from '../../Components/PostList';
import PostFilter from '../../Components/PostFilter';
import MyModal from '../../Components/UI/myModal/MyModal';
import MyButton from '../../Components/UI/button/MyButton';
import { usePosts } from '../../hooks/usePosts';
import postService from '../../API/PostService';
import Loader from '../../Components/UI/loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import { getPageCount } from '../../utils/pages';
import Pagination from '../../Components/UI/pagination/Pagination';
import { useObserver } from '../../hooks/useObserver'
import MySelect from '../UI/select/MySelect';

function Posts() {
	const sortOptions = [
		{ value: 'id', name: 'Sort by post number' },
		{ value: 'title', name: 'Sort by title' },
		{ value: 'body', name: 'Sort by description' }
	],
		[posts, setPosts] = useState([]),
		[filter, setFilter] = useState({ sort: 'id', query: '' }),
		[modal, setModal] = useState(false),
		[totalPages, setTotalPages] = useState(0),
		[limit, setLimit] = useState(10),
		[page, setPage] = useState(1),

		[fetchPosts, isPostsLoading, postError] = useFetching(async () => {
			const response = await postService.getAll(limit, page);
			setPosts([...posts, ...response.data]);
			const totalCount = response.headers['x-total-count'];
			setTotalPages(getPageCount(totalCount, limit));
		}),
		sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query),
		lastElement = useRef(),


		addNewPost = newPost => {
			posts.length ? newPost.id = posts[posts.length - 1].id + 1 : newPost.id = 1;
			setPosts([...posts, { ...newPost }]);
			setModal(false);
		},

		removeCurrentPost = postId => setPosts(posts.filter(post => post.id !== postId)),

		changePage = page => { setPage(page) };

	useObserver(lastElement, page < totalPages, isPostsLoading, () => { setPage(page + 1) });
	useEffect(() => { fetchPosts() }, [page, limit]);
	return (
		<div className='App'>
			<MyButton onClick={() => setModal(true)} style={{ marginTop: '30px' }}>Create Post</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<CreatePostForm addNewPost={addNewPost} turnBack={() => setModal(false)} />
			</MyModal>
			<div className='border__line'></div>
			<PostFilter filter={filter} setFilter={setFilter} sortOptions={sortOptions} />
			<MySelect value={limit} onChange={value => setLimit(value)} defaultValue='10' options={
				[{ value: 5, name: 5 }, { value: 10, name: 10 }, { value: 25, name: 25 }, { value: -1, name: 'Show all' }]} />
			{postError &&
				<h1 style={{ textAlign: 'center', margin: 10 }}> Some error has occured - {postError.message}</h1>}
			<PostList title={'JS Post List'} posts={sortedAndSearchedPosts} removeCurrentPost={removeCurrentPost} />
			<div ref={lastElement}></div>
			{isPostsLoading &&
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>}
			<Pagination page={page} totalPages={totalPages} changePage={changePage} />

		</div>
	);
}

export default Posts;
