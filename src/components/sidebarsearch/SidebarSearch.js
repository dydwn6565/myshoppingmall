import React, { useContext, useState } from "react";
import "./SidebarSearch.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { SelectedItemContext } from "../../Context";

function SidebarSearch({ itemBigTitle, itemSmallTitle }) {
  const [clicked, setClicked] = useState(true);
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);
  const extendButton = () => {
    setClicked((preValue) => !preValue);
  };

  const sendItemListToItemCard = () => {
    console.log(itemSmallTitle);
    setSelectedItem({
      itemBigTitle: itemBigTitle,
      itemSmallTitle: itemSmallTitle,
    });
  };
  return (
    <div className="sidebarsearch">
      <table className="sidebar_table">
        {clicked ? (
          <>
            <th onClick={extendButton} className="sidebar_table_th">
              {itemBigTitle}
            </th>

            <AddIcon onClick={extendButton} className="plus_button" />
            <tbody className="sidebar_table_body">
              <tr className="sidebar_table_body_tr">
                {itemSmallTitle.map((item) => (
                  <td
                    className="sidebar_table_body_td"
                    onClick={() => sendItemListToItemCard()}
                  >
                    {item}
                  </td>
                ))}
              </tr>
            </tbody>
          </>
        ) : (
          <>
            <th onClick={extendButton} className="sidebar_table_th">
              {itemBigTitle}
            </th>
            <RemoveIcon onClick={extendButton} className="remove_button" />
            <tbody className="sidebar_table_body clicked"></tbody>
          </>
        )}
      </table>
    </div>
  );
}

export default SidebarSearch;
