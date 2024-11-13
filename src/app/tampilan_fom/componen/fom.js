import styles from "./stylemodule/fom.module.css";

const Fom = ({ children, name }) => {
    return (
        <div className={`${styles.formContainer} ${styles[`fom--${name}`]}`}>
            {children}
        </div>
    );
};

export default Fom;