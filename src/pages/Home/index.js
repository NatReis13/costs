import styles from "./styles.module.css";
import savings from "../../assest/img/boneco.svg";
import LinkButton from "../../components/LinkButton";

function Home() {
  return (
    <section className={styles.homer_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar os seu projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  );
}

export default Home;
