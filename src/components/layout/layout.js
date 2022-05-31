import style from "./layout.module.css";

export const Layout = ({ chats, messages, header}) => {
return(
    <div className={style.body}>
        <div className={style.header}>{header}</div>
        <div className={style.content}>
            <div className={style.chats}>{chats}</div>
            <div className={style.messages}>{messages}</div>
        </div>
    </div>
    );
};