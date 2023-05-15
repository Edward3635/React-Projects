import React from 'react'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__block'>

				<div>
					<ul>
						<li><h5>ORDERING ONLINE</h5></li>
						<li><a href='#'>Account Login</a></li>
						<li><a href='#'>Our Guarantee</a></li>
						<li><a href='#'>Sportif Stretch Guide</a></li>
						<li><a href='#'>Size Chart & Sizing Information</a></li>
						<li><a href='#'>Hemming Information</a></li>
						<li><a href='#'>Ordering & Payment</a></li>
						<li><a href='#'>Shipping Information</a></li>
						<li><a href='#'>Returns</a></li>
					</ul>
				</div>

				<div>
					<ul>
						<li><h5>ABOUT SPORTIF</h5></li>
						<li><a href='#'>COVID-19 Response</a></li>
						<li><a href='#'>History</a></li>
						<li><a href='#'>Legacy</a></li>
						<li><a href='#'>Good Sam Program</a></li>
						<li><a href='#'>Privacy & Security</a></li>
						<li><a href='#'>Terms & Conditions</a></li>
						<li><a href='#'>Careers</a></li>
					</ul>
				</div>

				<div>
					<ul>
						<li><h5>QUICK LINKS</h5></li>
						<li><a href='#'>FAQs</a></li>
						<li><a href='#'>Shop Online Catalog</a></li>
						<li><a href='#'>Contact Us</a></li>
					</ul>
				</div>

				<div>
					<ul>
						<li><h5>GET TO KNOW US</h5></li>
						<li><a href='#'>Sign up for our weekly newsletter and get a 10% off coupon by email for your first order!</a></li>
						<li className='invisible__li'>/</li>
						<li className='footer__li-exception'>Sign Up for Our Newsletter:</li>
					</ul>
					<form className='footer__form'>
						<input type="email" className='input__email' placeholder='EMAIL ADDRESS' />
						<button className='btn__subscribe'>SUBSCRIBE</button>
					</form>
				</div>
			</div>
			<div className='underfooter'>©2021 Sportif Mailorder. All Rights Reserved.</div>
		</footer>
	)
}

export default Footer