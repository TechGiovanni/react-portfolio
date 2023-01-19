import { useState } from 'react'
import CategoryButton from './CategoryButton'

const ProjectsCategories = ({ categories, onFilterProjects }) => {
	const [activeCategory, setActiveCategory] = useState('all')

	const changeCategoryHandler = (activeCat) => {
		setActiveCategory(activeCat)
		onFilterProjects(activeCat)
	}

	return (
		<div className='portfolio__categories'>
			{categories.map((category) => {
				console.log('categories', category)

				return (
					<CategoryButton
						key={category}
						category={category}
						onChangeCategory={() => changeCategoryHandler(category)}
						className={`btn cat__btn ${
							activeCategory === category ? 'primary' : 'white'
						}`}
					/>
				)
			})}
		</div>
	)
}

export default ProjectsCategories
