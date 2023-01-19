import { useEffect } from 'react'
import HeaderImage from '../../assets/header-Hero-img.jpeg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<header id='header'>
			<div className='container header__container'>
				<div className='header__profile' data-aos='fade-in'>
					<img src={HeaderImage} alt='Header Portrait' />
				</div>
				<h3 data-aos='fade-up'>Full Stack Developer</h3>
				<p data-aos='fade-up'>
					I’m Giovanni. I’m a Montreal-based frontend engineer passing one year
					of experience, currently focused on full-stack development and user
					experience. In my previous careers, I have led teams and worked with a
					lot of great people. Now I have evolved and grown my skills to being
					more tech focused by graduating a fullstack web dev bootcamp, network
					with various individuals in the tech industry, and worked in teams to
					build and deliver great applications.
				</p>
				<div className='header__cta' data-aos='fade-up'>
					<a href='#contact' className='btn primary'>
						Let's Talk
					</a>
					<a href='#portfolio' className='btn light'>
						My Work
					</a>
				</div>
				<div className='header__socials'>
					{data.map((item) => (
						<a
							key={item.id}
							href={item.link}
							target='_blank'
							rel='noopener noreferrer'
						>
							{item.icon}
						</a>
					))}
				</div>
			</div>
		</header>
	)
}

export default Header
