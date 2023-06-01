import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../Features/API/APISlice';

import cl from '../../Style/Category.module.css';
import Products from '../Products/Products';

const Category = () => {
	const { id } = useParams();

	const defaultValues = {
		title: '',
		price_min: 0,
		price_max: 0,
	};

	const defaultParams = {
		categoryId: id,
		...defaultValues
	};

	const [values, setValues] = useState(defaultValues);
	const [params, setParams] = useState(defaultParams);

	useEffect(() => {
		if (!id) return;
		setParams({ ...defaultParams, categoryId: id });
	}, [id]);

	const { data, isLoading, isSuccess } = useGetProductsQuery(params);
	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};
	const handleSubmut = (e) => {
		e.preventDefault();
		setParams({ ...params, ...values })
	};

	return (
		<section className={cl.wrapper}>
			<h2 className={cl.title}>Shoes</h2>
			<form className={cl.filter} onSubmit={handleSubmut}>
				<div className={cl.filter}>
					<input type="text" name='title' placeholder='Product name' value={values.title}
						onChange={handleChange} />
				</div>

				<div className={cl.filter}>
					<input type="number" name='price_min' placeholder='0' value={values.price_min}
						onChange={handleChange} />
				</div>

				<div className={cl.filter}>
					<input type="number" name='price_max' placeholder='0' value={values.price_max}
						onChange={handleChange} />
				</div>
				<button type='submit' hidden />
			</form>

			{isLoading ? <div className="preloader">Loading...</div> :
				!isSuccess || !data.length ? (
					<div className={cl.back}>
						<span>No results</span>
						<button>Reset</button>
					</div>
				) :
					<Products title='' products={data} style={{ padding: 0 }} amount={data.length} />
			}
		</section>
	)
}

export default Category