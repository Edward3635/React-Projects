import React from 'react'
import cl from './modal.module.scss'
import imgClose from 'img/commonIcons/close.png';
import FormCreateTrip from './FormCreateTrip/FormCreateTrip';
import Loader from 'components/Common/Loader/Loader';
import { useSelector } from 'react-redux';
import { updateSearchFilter } from '../../../redux/mainReducer';

const Modal = ({ handleModal, isLoading, setSearchInput }) => {
	let filteredTripsBySearch = useSelector(state => state.main.searchFilter);

	return (
		<div>
			<div className={cl.overlay}></div>
			<div className={cl.modal}>
				<div className={cl.upside}>
					<h3>Create trip</h3>
					<div onClick={handleModal}><img className={cl.imgClose} src={imgClose} alt="close" /></div>
				</div>
				<FormCreateTrip closeModal={handleModal} filterTripBySearch={filteredTripsBySearch} setSearchInput={setSearchInput}
					updateSearchFilter={updateSearchFilter} />
				{isLoading &&
					(<Loader />)}
			</div>

		</div>
	)
}

export default Modal