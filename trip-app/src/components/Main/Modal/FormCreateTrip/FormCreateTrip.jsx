import React from 'react'
import { useForm } from 'react-hook-form';
import cl from '../modal.module.scss'
import { useDispatch } from 'react-redux';
import { addTrip } from '../../../../redux/mainReducer';
import locations from 'fake_data/locations';
import { generateMaxDate } from 'utils/utils';

const FormCreateTrip = ({ closeModal, updateSearchFilter, filterTripBySearch, setSearchInput }) => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const dispatch = useDispatch();
	let startDateValue = watch("startDate");

	const validateDateRange = (endDateValue) => {
		const startDate = new Date(startDateValue);
		const endDate = new Date(endDateValue);
		if (endDate < startDate) {
			return 'End date must be after start date';
		}
		return true;
	};

	const onSubmit = (data) => {
		if (filterTripBySearch) {
			dispatch(updateSearchFilter(null))
			setSearchInput('')
		}
		dispatch(addTrip(data));
	}

	return (
		<form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={cl.inputsContainer}>
				<div>
					<label className={cl.required}>City:</label>
					<select className={cl.input} id="city" {...register("city")} required>
						<option value="">Please select a city</option>
						{locations.map((location) => (
							<option key={location.city} value={location.city}>{location.city}</option>))}
					</select>
				</div>
				<div>
					<label className={cl.required}>Start date:</label>
					<input className={cl.input} type="date" id="startDate" {...register("startDate")} min={new Date().toISOString().split('T')[0]} max={generateMaxDate()} required />
				</div>
				<div>
					<label className={cl.required}>End date:</label>
					<input className={cl.input} type="date" id="endDate" {...register("endDate",
						{ validate: validateDateRange })} min={new Date().toISOString().split('T')[0]} max={generateMaxDate()} required />
					{<p className={errors.endDate ? cl.showError : cl.hideError}>{errors.endDate?.message || 'error'}</p>}
				</div>
			</div>
			<div className={cl.downside}>
				<button className={cl.cancel} onClick={closeModal}>Cancel</button>
				<button className={cl.submit} type="submit">Save</button>
			</div>
		</form>
	)
}

export default FormCreateTrip