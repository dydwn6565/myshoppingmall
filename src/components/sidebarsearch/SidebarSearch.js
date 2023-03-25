import React, { useContext, useState } from "react";
import "./SidebarSearch.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { SelectedItemContext } from "../../Context";
import { useNavigate } from "react-router-dom";

function SidebarSearch({ itemBigTitle, itemSmallTitle }) {
  const [clicked, setClicked] = useState(true);
  const { setSelectedItem } = useContext(SelectedItemContext);
  const navigate = useNavigate();
  const extendButton = () => {
    setClicked((preValue) => !preValue);
  };

  const sendItemListToItemCard = (target) => {
    navigate("/");
    setSelectedItem({
      target: target,
      itemBigTitle: itemBigTitle,
      itemSmallTitle: itemSmallTitle,
    });
  };
  return (
    <div className="sidebarsearch">
      <div className="sidebar_table">
        {clicked ? (
          <>
            <div className="sidebar_top">
              <div onClick={extendButton} className="sidebar_table_th">
                {itemBigTitle}
              </div>
              <AddIcon onClick={extendButton} className="plus_button" />
            </div>

            <div className="sidebar_table_body">
              <div className="sidebar_table_body_tr">
                {itemSmallTitle.map((item) => (
                  <div
                    className="sidebar_table_body_td"
                    onClick={() => sendItemListToItemCard(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div onClick={extendButton} className="sidebar_table_th">
              {itemBigTitle}
            </div>
            <RemoveIcon onClick={extendButton} className="remove_button" />
            <div className="sidebar_table_body clicked"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default SidebarSearch;
