// import { AiOutlineInstagram } from 'react-icons/ai'
// import { AiOutlineTwitter } from 'react-icons/ai'
// import { AiOutlineDribbble } from 'react-icons/ai'

import { AiOutlineMedium } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

export const links = [
	{ id: 1, link: '#', title: 'Home' },
	// { id: 2, link: '#about', title: 'About' },
	// { id: 3, link: '#services', title: 'Services' },
	{ id: 4, link: '#portfolio', title: 'Portfolio' },
	{ id: 5, link: '#contact', title: 'Contact' },
]

export const socials = [
	{
		id: 1,
		link: 'https://medium.com/@techgiovanni',
		icon: <AiOutlineMedium />,
	},
	{
		id: 2,
		link: 'https://www.linkedin.com/in/techgiovanni/',
		icon: <AiFillLinkedin />,
	},
	{ id: 3, link: 'https://github.com/TechGiovanni', icon: <AiFillGithub /> },
]
