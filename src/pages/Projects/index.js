import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import Message from "../../components/layout/Message";
import Container from "../../components/layout/Container/Container";
import Loading from "../../components/layout/Load";
import LinkButton from "../../components/LinkButton/index"
import ProjectsCard from "../../components/Project/ProjectsCard";

import styles from "./Projects.module.css"

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message

    }

    useEffect(() => {
        setTimeout(() =>{
        fetch('https://json-server-cost.herokuapp.com/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'applicatio/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(`step111`, data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        },300)
    }, [])

function removeProject(id) {
fetch(`https://json-server-cost.herokuapp.com/projects/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then((resp) => resp.json())
.then((data) =>{
    setProjects(projects.filter((project) => project.id !== id))
    //message
})
.catch((err) => console.log(err))

}

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectsCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project?.category}
                            key={project.id}
                            handleRemove={removeProject}

                        />
                        ))}
                        {!removeLoading && <Loading/>}
                        {removeLoading && projects.length === 0 && (
                            <p>Não há projetos cadastrados!</p>
                        )}
            </Container>
        </div>
    )
}

export default Projects;