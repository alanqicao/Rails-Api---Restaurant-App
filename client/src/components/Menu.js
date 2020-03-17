import React from 'react';
import { Icon } from 'semantic-ui-react';

const Menu =({id,name,updateMenu,deleteMenu}) =>(
  <div style ={style.flex}>
  <Button 
  icon
  color ="red"
  size ="tiny"
  onClick ={()=> deleteMenu(id)}
  style ={{marginLeft:"15px",}}
  >
    <Icon name ="trash" />
  </Button>
  </div>

)

export default Menu;