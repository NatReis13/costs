import { Link } from 'react-router-dom'

import styles from './ProjectsCard.module.css'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectsCard({ id, name, budget, category, handleRemove }) {

const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
}

    // console.log('step99', category.toLowerCase())
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>

                <span className={styles['c'+ category?.id]}></span> {category?.name}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>
                    <BsPencil />Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill />Remover
                </button> 
            </div>
        </div>
    )
}

export default ProjectsCard