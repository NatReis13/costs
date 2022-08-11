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
    fetch("https://json-server-cost.herokuapp.com/categories", {
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
    console.log('qwe',project);
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <div>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
          handleOnChange={handleChange}
        />
      </div>

      <div>
        <Input
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
          handleOnChange={handleChange}
        />
      </div>

      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          option={categories}
          handleOnChange={handleCategory}
        />
      </div>
      <div>
       <SubmitButton text={btnText} />
      </div>
    </form>
  );
}
export default ProjectForm;
