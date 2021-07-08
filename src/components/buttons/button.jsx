// button components

import "./style.css";

const Button = ({ text, children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children ? children : text}
    </button>
  );
};

export default Button;
