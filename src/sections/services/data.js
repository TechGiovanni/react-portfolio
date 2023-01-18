import { SiAdobexd } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiFillAppstore } from 'react-icons/ai'

const data = [
	{
		id: 1,
		icon: <SiAdobexd />,
		title: 'UI/UX Design',
		desc: 'My designs are modern and intuitive. I use industry-standard rules to make sure your users have fun using your product.',
	},
	{
		id: 2,
		icon: <RiReactjsLine />,
		title: 'Frontend Development',
		desc: 'Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop.',
	},
	// {
	// 	id: 3,
	// 	icon: <AiFillAppstore />,
	// 	title: 'Methdoology',
	// 	desc: 'Apply agile methodology.',
	// },
	{
		id: 4,
		icon: <FaServer />,
		title: 'Backend Development',
		desc: 'The security of your business/product is taken seriously right from the start of the project. Implementing the best security practices for storing keys, certificates, environment variables, HTTPS for a fully secure website/app.',
	},
]

export default data
