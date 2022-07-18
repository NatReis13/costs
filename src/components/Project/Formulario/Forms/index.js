import { useEffect, useState } from "react";

import styles from "./Form.module.css";

import Input from "../input";
import Select from "../Select";
import SubmitButton from "../SubmitButton";
import { Link } from "react-router-dom";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
       
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    // console.log('step1',e.target.value)
    // console.log('step2',e.target)
    // console.log('step3',e.target.selectedIndex)
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  // useEffect(() => {console.log('step4',project)},[project] )

  return (
    <form onSubmit={submit} className={styles.form}>
      <div>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
          handleOnChage={handleChange}
          value={project.name ? project.name : ""}
        />
      </div>

      <div>
        <Input
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
          handleOnChage={handleChange}
          value={project.budget}
        />
      </div>

      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          option={categories}
          handleOnChage={handleCategory}
          value={project.category ? project.category.id : ""}
        />
      </div>
      <div>
       <SubmitButton text={btnText} />
      </div>
    </form>
  );
}
export default ProjectForm;
