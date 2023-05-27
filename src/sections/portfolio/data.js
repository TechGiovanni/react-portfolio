import Image1 from '../../assets/gushyhut-thumbnail.png'
import Image2 from '../../assets/Caribou.png'
import Image3 from '../../assets/portfolio-project2.png'
import Image5 from '../../assets/portfolio-project3.png'
import Image4 from '../../assets/portfolio-project7.png'
import Image6 from '../../assets/portfolio-project5.png'
import Image7 from '../../assets/netflix.png'
// import Image8 from '../../assets/project8.jpg'
// import Image9 from '../../assets/project9.jpg'

// images are 1280 × 720
const data = [
	{
		id: 1,
		category: 'full-stack',
		image: Image1,
		title: 'Newsletter - Wordpress (FullStack CRM)',
		desc: 'Developed a wordpress Newsletter website. This allowed for SEO optimizations google adsense and social media marketing. Used various plugins and integration such as: shopify, calendry, google kit and Custom CSS.',
		demo: 'https://gushyhut.com/',
		github: '',
	},
	{
		id: 2,
		category: 'full-stack',
		image: Image2,
		title: 'Social Network  - React (FullStack)',
		desc: 'Developed a secret app for cariboux to tag areas humans are located, and be able to chat one-on-one using Nodejs, Express, Redux, Google Api, Leaflet Map Api, SocketIO, MongodB.',
		demo: 'https://caribou-client-techgiovanni.vercel.app/',
		github: 'https://github.com/TechGiovanni/gom-jabbar/tree/main/caribou-project',
	},
	{
		id: 3,
		category: 'full-stack',
		image: Image3,
		title: 'The Last Resort - Ruby on Rails (FullStack)',
		desc: 'Developed a marketplace for witches using HTML5, SASS, Active Record, Cloudinary, SQL, Javascript and Heroku. deployed on Heroku.',
		demo: 'https://the-last-resort-spell.herokuapp.com',
		github: 'https://github.com/TechGiovanni/the_last_resort',
	},
	{
		id: 4,
		category: 'frontend',
		image: Image4,
		title: 'E-commerce Clothing Shop React - (Frontend)',
		desc: 'Built the front-end using React Hooks and Implemented features such as user authentication, shopping cart functionality, animations and deployed on Netlify',
		demo: 'https://dancing-halva-1edf86.netlify.app/',
		github: 'https://github.com/TechGiovanni/React-marketplace-client',
	},
	{
		id: 5,
		category: 'full-stack',
		image: Image5,
		title: 'Last Minute Date - Ruby on rails (FullStack)',
		desc: "Developed a full-stack match meetup application using Api's, Postman, Heroku and Action Cable. Mobile first web application. deployed on Heroku.",
		demo: 'https://www.thelastminutedate.art/',
		github: 'https://github.com/TechGiovanni/the-last-minute-date',
	},
	{
		id: 6,
		category: 'frontend',
		image: Image6,
		title: 'Slack Clone - HTML & CSS (Frontend)',
		desc: 'Built web clone of the popular app slack using HTML, CSS, FlexBox and deployed using GitHub Pages',
		demo: 'https://techgiovanni.github.io/Slack-Clone/',
		github: 'https://github.com/TechGiovanni/Slack-Clone',
	},
	{
		id: 7,
		category: 'frontend',
		image: Image7,
		title: 'NetFlix Clone - React (Frontend)',
		desc: 'Built a clone of netflix to use my css abilities for an abstract design. Was able to use layout principles with react and use conditional rendering.',
		demo: 'https://netflix-clone-silk-beta.vercel.app/?',
		github: 'https://github.com/TechGiovanni/netflix-clone',
	},
]

export default data
