import React from 'react'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__block'>

				<div>
					<ul>
						<li><h5>ORDERING ONLINE</h5></li>
						<li><a href='https://www.google.com/account/about/'>Account Login</a></li>
						<li><a href='https://www.uscompliance.com/about-us/our-guarantee/'>Our Guarantee</a></li>
						<li><a href='https://www.self.com/gallery/essential-stretches-slideshow'>Sportif Stretch Guide</a></li>
						<li><a href='https://endlessrose.com/pages/size-guide'>Size Chart & Sizing Information</a></li>
						<li><a href='https://www.ingemat.com/Section_hemming_technology-289'>Hemming Information</a></li>
						<li><a href='https://orderpay.com/'>Ordering & Payment</a></li>
						<li><a href='allaboutlearningpress.com/shipping-information/'>Shipping Information</a></li>
						<li><a href='https://returns.shopvitality.com/#/'>Returns</a></li>
					</ul>
				</div>

				<div>
					<ul>
						<li><h5>ABOUT SPORTIF</h5></li>
						<li><a href='https://www.un.org/en/coronavirus'>COVID-19 Response</a></li>
						<li><a href='https://www.history.com/'>History</a></li>
						<li><a href='https://www.hogwartslegacy.com/en-us'>Legacy</a></li>
						<li><a href='https://en.wikipedia.org/wiki/Good_Sam_(TV_series)'>Good Sam Program</a></li>
						<li><a href='https://safety.google/security-privacy/'>Privacy & Security</a></li>
						<li><a href='https://www.termsfeed.com/blog/sample-terms-and-conditions-template/'>Terms & Conditions</a></li>
						<li><a href='https://careers.un.org/lbw/Home.aspx'>Careers</a></li>
					</ul>
				</div>

				<div>
					<ul>
						<li><h5>QUICK LINKS</h5></li>
						<li><a href='https://deltahost.ua/chto-takoe-faq-i-zachem-on-nuzhen-na-sajte.html'>FAQs</a></li>
						<li><a href='https://shopcatalog.com/'>Shop Online Catalog</a></li>
						<li><a href='https://blog.hubspot.com/service/best-contact-us-pages'>Contact Us</a></li>
					</ul>
				</div>

				<div className='getToKnow'>
					<ul className='footer__list4'>
						<li><h5>GET TO KNOW US</h5></li>
						<li><a href='https://www.theguardian.com/email-newsletters'>Sign up for our weekly newsletter and get a 10% off coupon by email for your first order!</a></li>
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