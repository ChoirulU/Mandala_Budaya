import styles from "./stylemodule/container.module.css";

const Container = ({ children, size }) => {
    return (
        <div className={`${styles.container} ${styles[`container--${size}`]}`}>
            {children}
        </div>
    );
};

export default Container;