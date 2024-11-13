import styles from "./stylemodule/card.module.css";

const Card = ({ children, name }) => {
    return (
        <div className={`${styles.card} ${styles[`card--${name}`]}`}>
            {children}
        </div>
    );
};

export default Card;