import styles from "./stylemodule/card.module.css";

const Button = ({ children, name }) => {
    return (
        <div className={`${styles.card} ${styles[`button--${name}`]}`}>
            {children}
        </div>
    );
};

export default Button;