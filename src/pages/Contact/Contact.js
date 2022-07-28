import styles from '../Contact/Contact.module.css'
import { FaWhatsapp, FaInstagram} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
    return (
        <div className={styles.contact}>
            <div >
                <FaWhatsapp className={styles.icons} /> <p>(77)-9 9999-9999</p>

            </div >

            <div>

                <FaInstagram className={styles.icons}  /> <p>Costs_PJ</p>
            </div>
            <div>
                <AiOutlineMail className={styles.icons} /> <p>Costs@email.com</p>
            </div>

        </div>


    )

}

export default Contact
