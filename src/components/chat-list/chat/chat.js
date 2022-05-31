import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import styled from "@emotion/styled";
import styles from "./chat.module.css";

const ListItemStyles = styled(ListItem)`
  &.Mui-selected {
    background-color: #2b5278;
  }
  &.Mui-selected:hover {
    background-color: #2b5278;
  }
`;

export function Chat({ title, selected, handleListItemClick }) {
  return (   
    <ListItemStyles
      className={styles.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon>
        <FaceIcon fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        </div>
    </ListItemStyles>

  );
}