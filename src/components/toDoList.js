import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

const ToDoList = ({ data, icon }) => {
  return (
    <List>
      {data.map((ele, idx) => (
        <ListItem>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={ele} />
        </ListItem>
      ))}
    </List>
  );
};

export default ToDoList;
