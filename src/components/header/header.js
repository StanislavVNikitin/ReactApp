import styles from "./header.module.css";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

export function Header() {
  return (
    <div className={styles.header}>
      <h1> ТелеType <LocalPostOfficeIcon fontSize="large" /> </h1>
    </div>
  );
}