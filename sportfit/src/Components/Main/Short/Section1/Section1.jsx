import React, { useState } from 'react'
import frontBigImg from '../../../../img/front_big_short.png';
import backBigImg from '../../../../img/back_big_short.png';
import frontSmallImg from '../../../../img/front_small_short.png';
import backSmallImg from '../../../../img/back_small_short.png';
import star from '../../../../img/Star.svg';
import itemColors from '../../../../img/item_colors.png';
import facebook from '../../../../img/facebook.svg';
import twitter from '../../../../img/twitter.svg';
import pinterest from '../../../../img/pinterest.svg';
import link from '../../../../img/link.svg';
import shipping from '../../../../img/free_shipping.svg';
import returns from '../../../../img/free_returns.svg';

const Section1 = ({ cl, setItemsNumber }) => {
	const stars = [...Array(5)].map((_, index) =>
		<li key={index}><img src={star} className={cl.star} alt='star' /></li>);
	const [currentImg, setCurrentImg] = useState(1);
	const handler = (index) => setCurrentImg(index);

	let itemsNumber = parseInt(localStorage.getItem('ItemsNumber')) || 0;
	const handleClick = () => {
		itemsNumber++;
		setItemsNumber(itemsNumber);
		localStorage.setItem('ItemsNumber', itemsNumber.toString())
	};

	return (
		<section className={cl.section1}>
			<div className={cl.product}>
				<div className={cl.productImg}>
					<div className={cl.mainImg}>
						<img src={currentImg === 1 ? frontBigImg : backBigImg} alt="front short" />
					</div>
					<ul className={cl.imgList}>
						<li className={`${cl.firstImg} ${currentImg === 1 ? cl.currentImg : null}`}
							onClick={() => handler(1)}>
							<img src={frontSmallImg} alt="front short" />
						</li>
						<li className={`${cl.secondImg} ${currentImg === 2 ? cl.currentImg : null}`}
							onClick={() => handler(2)}>
							<img src={backSmallImg} alt="back short" />
						</li>
					</ul>
				</div>
				<div className={cl.productInfo}>
					<h3>Sportif's Original Short <span className={cl.productIndex}>ITEM # 670170</span></h3>
					<div className={cl.stars}>
						<ul className={cl.starsList}>{stars}
							<li>93 REVIEWS</li> </ul>
					</div>
					<div className={cl.price}>As low as <span>$67.00</span> </div>
					<div className={cl.color}>
						<div className={cl.colorTitle}>COLOR:</div>
						<div><img src={itemColors} alt="colors" /></div>
					</div>
					<div className={cl.size}>
						<div className={cl.sizeTitle}>SIZE:</div>
						<ul className={cl.sizeList}>
							<li><button>30</button></li>
							<li><button>32</button></li>
							<li><button>34</button></li>
							<li><button>36</button></li>
							<li><button>38</button></li>
							<li><button>40</button></li>
							<li><button>42</button></li>
							<li><button>44</button></li>
							<li><button>46</button></li>
						</ul>
					</div>
					<div className={cl.btns}>
						<button className={cl.addToBag} onClick={handleClick}>ADD TO BAG</button>
						<button className={cl.addToWish}>ADD TO WISHLIST</button>
					</div>
					<ul className={cl.links}>
						<li><a href='https://www.facebook.com/'><img src={facebook} alt="facebook" /></a></li>
						<li><a href='https://twitter.com/?lang=ru'><img src={twitter} alt="twitter" /></a></li>
						<li><a href='https://ru.pinterest.com/'><img src={pinterest} alt="pinterest" /></a></li>
						<li><a href='https://www.linkedin.com/'><img src={link} alt="link" /></a></li>
					</ul>
					<div className={cl.shopping}>
						<div className={cl.shoppingTitle}>- Worry Free Shopping -</div>
						<div className={cl.underline}></div>
						<div className={cl.shoppingInfo}>
							<div className={cl.shipping}>
								<img src={shipping} alt="shipping" />
								<div className={cl.shippingText}>FREE PRIORITY SHIPPING ON ORDERS $99+*</div>
							</div>
							<div className={cl.returns}>
								<img src={returns} alt="returns" />
								<div>FREE RETURNS & EXCHANGES*</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section1