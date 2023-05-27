import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
	const [projects, setProjects] = useState(data)

	// Get all the categories
	const categories = data.map((item) => item.category)
	// console.log(categories)

	// '...new set(data)' removes duplicated from an array, and return an array
	const uniqueCategories = ['all', ...new Set(categories)]
	// console.log(uniqueCategories)

	const filterProjectsHandler = (category) => {
		if (category === 'all') {
			setProjects(data)
			return
		}

		const filterProjects = data.filter(
			(project) => project.category === category
		)
		setProjects(filterProjects)
	}

	return (
		<section id='portfolio'>
			<h2>Recent Projects</h2>
			<p>
				Check out some of the projects I recently worked on.
				<span className='recent__projects_p'>
					<strong>** Heroku Apps</strong> may render slower than usual as the
					dyno's will be sleeping <strong>zzz **</strong>.
				</span>
				
			</p>

			<div className='container portfolio__container'>
				<ProjectsCategories
					categories={uniqueCategories}
					onFilterProjects={filterProjectsHandler}
				/>
				<Projects projects={projects} />
			</div>
		</section>
	)
}

export default Portfolio
