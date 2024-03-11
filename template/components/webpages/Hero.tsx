import React from "react";

const Hero = () => {
	return (
		<div className='hero-container hero-image'>
			<div className='hero-content'>
				<h1 className='hero-h1'>
					Welcome to Create NextJs TailwindCss Sitemap App
				</h1>
				<p className='hero-p'>
					This is an `npm` package that is tailored using NextJs and TailwindCss.
				</p>
				<ul className='list-type'>
					{/* List Items */}
					<li>
						You can use navbar and mobile-nav in your project as it is perfectly
						optimized<br /> for desktop and mobile.
					</li>
					<li>
						You can change other settings according to your own requirement.
					</li>
					<li>
						This is our first open source project, please report issues if any.
					</li>
					<li>
						In the next version we will add more features like optimised seo
						using sitemap generators,
						<br /> which will optimise your website for search engine like
						google.
					</li>
					<li>
						We are searching for developers who can help us to maintain and
						upgrade this project.
					</li>
				</ul>
				<p className='hero-p-enjoy text-center'>
					Enjoy!!! using our package in your projects 😉😎
				</p>
				<br />
				<p className='hero-p-love'>Made with ❤️ in India</p>
			</div>
		</div>
	);
};

export default Hero;
