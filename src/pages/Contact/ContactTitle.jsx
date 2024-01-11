import { styles } from "../../styles.js";
import { contactTitle } from "../../data/index.js";

const ContactTitle = () => (
  <div>
    <p className={styles.sectionSubText}>{contactTitle.subtitle}</p>
    <h3 className={styles.sectionHeadText}>{contactTitle.title}</h3>
  </div>
);

export default ContactTitle;
