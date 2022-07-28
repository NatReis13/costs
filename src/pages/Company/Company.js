
import styles from '../Company/Company.module.css'
import savings from "../../assest/img/boneco.svg";

function Company() {
  return (
    <div className={styles.company} >

      <div>
        <img src={savings} alt="Costs" className={styles.img1}/>
      </div>
      <div>
        <p>
          Como surgiu a empresa?<br /> Quando?<br /> Por qual motivação? <br />
          Porque eu deveria adquirir seu produto/serviço?<br />
          O que difere sua empresa das concorrentes?<br />
          Qual a missão da empresa (objetivo para o presente)?<br />
          Qual é a visão da empresa (onde quero chegar)?<br />
          Quais são os valores (comprometimento, qualidade)?
        </p>
      </div>

    </div>

  )
}

export default Company;
