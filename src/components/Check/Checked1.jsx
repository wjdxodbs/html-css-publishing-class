import "./Checked1.css";

const Checked1 = () => {
  return (
    <div className="checked1">
      <input type="checkbox" id="trigger" />
      <label htmlFor="trigger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="sidebar"></div>
    </div>
  );
};

export default Checked1;
