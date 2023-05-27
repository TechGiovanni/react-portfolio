import { useEffect } from 'react'
import HeaderImage from '../../assets/DSC02271-min-(1).jpeg'
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
				<h3 data-aos='fade-up'> </h3>
				<p data-aos='fade-up'>
					Hi there 👋, I'm Giovanni Reid. 
				<br></br>
				I’m a Montreal-based Web developer and IT Support/Analyst. 
					<br></br>
					In my previous career, I have worked in both large and small teams in various dealerships as an auto mechanic. 
					<br></br>
					Now I have grown my skills to being tech focused. 
					I've graduated a fullstack web dev. boot-camp, networked
					with various individuals in the tech industry, and worked in teams to
					build and deliver great applications.
					<br></br>
					Currently I am Studying for the Comptia A+ Certification.
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
