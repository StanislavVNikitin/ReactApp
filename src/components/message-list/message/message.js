import classNames from "classnames";
import styles from "./message.module.css";

export const Message = ({message}) => {
    return (
                <div className={classNames(styles.message, {
                    [styles.currentMessage]: message.author !== "Bot",
                  })}>
                    <h2>{message.author}:</h2>
                    <h3>{message.message}</h3>
                    <p>30.05.2022</p>
                </div>

    );
};
