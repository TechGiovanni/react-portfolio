import AboutImage from '../../assets/IM6.jpeg'
import CV from '../../assets/GIOVANNI_REID_Resume_5.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
	return (
		<section id='about' data-aos='fade-in'>
			<div className='container about__container'>
				<div className='about__left'>
					<div className='about__portrait'>
						<img src={AboutImage} alt='About me' />
					</div>
				</div>
				<div className='about__right'>
					<h2>About Me</h2>
					<div className='about__cards'>
						{data.map((item) => (
							<Card key={item.id} className='about__card'>
								<span className='about__card-icon'>{item.icon}</span>
								<h5>{item.title}</h5>
								<small>{item.desc}</small>
							</Card>
						))}
					</div>
					<p>
						Highly motivated and passionate web developer with experience in
						full-stack web development. Building and learning the inner workings
						of things that peeks my interest have always been my passion. Being
						in the web development industry for up to 1 year now and I'm always
						motivated to do more!
					</p>
					<p>
						My top priority is to give as much and more to your business in any
						way that I can too contribute and help the team. Implementing
						industry-standard design and develop the functionalities you need to
						improve the website/app. Get in touch with me today with my links
						below. let's get started! Check out my resume below!
					</p>
					<a href={CV} download className='btn primary'>
						Download CV <HiDownload />
					</a>
				</div>
			</div>
		</section>
	)
}

export default About
