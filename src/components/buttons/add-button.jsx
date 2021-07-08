// add button components

import "./style.css";
import { Plus } from "react-feather";

const AddButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="add-button">
      <Plus color="white" size={50}/>
    </button>
  );
};

export default AddButton;
