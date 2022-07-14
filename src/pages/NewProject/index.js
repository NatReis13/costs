import {  useNavigate } from 'react-router-dom';
import style from "./NewProject.module.css";
import ProjectForm from "../../components/Project/Formulario/Forms/index";

function NewProject() {
  const history =  useNavigate();

  function createPost(project) {
    //initialize cost end service
    project.cost = 0;
    project.services = [];

    fetch("http:/localhost:5000/projects", {
      methot: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(project),
    }) 
    .then((resp) => resp.jason)
    .then((data) => {
      console.log(data)
      //redirect
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className={style.newprojet_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
