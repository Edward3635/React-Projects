import React from 'react'
import Card from './Card/Card'
import Pagination from '../../Shorts/Pagination/Pagination';

const Section3 = ({ cl }) => {
	const contents = [`I just bought new ones to replace my 1990's pair. In the past 5 years I have bought several other pairs of original shorts. As is often the case, original is best. I appreciate that this excellent product is still available - not aways so in the field of clothing.

By Richard Watson - Posted on 7/10/21`,
		`I have been wearing your shorts for over 20 years! They last forever, don’t wear our, they fit perfectly!

		By Pete Grillo - Posted on 7/8/21`,
		`Shorts should be shorts. Anything with an inseam longer then 5 inches are cut-offs.

I have been wearing Sportif Original Shorts for many years because they are comfortable, fit great, and last a long time.

I do wish they would bring back some of the original colors.

By Bernard Snowmane - Posted on 5/17/21`,
		`I found a few pairs of my grandpas from the ‘90s and wore them for years before finally finding the website and pulling the trigger on a pair of my own. They are fricking badass. Definitely size up. I typically wear a 32 in shorts but am way more pleased with 34s from sportif.

By Christian - Posted on 5/6/21`,
		`Had a pair of the Original Every Ones Favorite shorts about 35 years ago that lasted forever until a airline lost them for me. Took me until 2021 to find the line again online, Baught a new pair feels just like I remember!!! I will purchase more again and again!!!

By Lk - Posted on 5/1/21`,
		`Great product, great value

By Pete Grillo - Posted on 4/29/21`]

	const cards = [...Array(6).fill(0).map((value, index) => value + index)].map((value) =>
		<Card key={value} content={contents[value]} />);

	return (
		<section className={cl.section3}>
			<div>
				<h3>REVIEWS</h3>
				<div className={cl.grid}>
					{cards}
				</div>
				<Pagination />
			</div>
		</section>
	)
}

export default Section3