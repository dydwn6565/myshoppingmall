import React, { useState } from "react";
import "./SidebarSearch.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function SidebarSearch() {
  const [clicked, setClicked] = useState(true);
  const extendButton = () => {
    
    setClicked(preValue => !preValue)
    
  };
  return (
    <div className="sidebarsearch">
    
      <table className="sidebar_table">
        
        {clicked ? (
          <>
          <th   onClick={extendButton}  className="sidebar_table_th">
          Product
         
        </th>
      <AddIcon   onClick={extendButton}  className="plus_button"/>     
          <tbody className="sidebar_table_body">
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
          </>
        ) : (
          <>
            <th   onClick={extendButton}  className="sidebar_table_th">
          Product
         
        </th>
      <RemoveIcon   onClick={extendButton}  className="remove_button"/> 
          <tbody className="sidebar_table_body clicked">
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
          </>
        )}
      </table>
      <table className="sidebar_table">
        <th onClick={extendButton} className="sidebar_table_th">
          Product
        </th>
        {clicked ? (
          <tbody className="sidebar_table_body">
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
        ) : (
          <tbody className="sidebar_table_body clicked">
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default SidebarSearch;
