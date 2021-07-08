// skeleton component

import "./index.css";

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="image" />
      <div className="skeleton-flex">
        <div className="text" style={{ width: "40%" }} />
        <div className="text" style={{ width: "40%" }} />
      </div>
      <div className="desc" />
      <div className="text" />
    </div>
  );
};

export default Skeleton;
