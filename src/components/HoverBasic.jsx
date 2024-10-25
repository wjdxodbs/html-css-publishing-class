import "./HoverBasic.css";

const HoverBasic = () => {
  return (
    <div className="hover-basic">
      <button className="dropdown-btn">Real Estate Type</button>
      <div className="dropdown-submenu">
        <a href="#none">All</a>
        <a href="#none">One room</a>
        <a href="#none">1.5 rooms</a>
        <a href="#none">Two Room</a>
        <a href="#none">Three Room</a>
        <a href="#none">Officetel</a>
        <a href="#none">Apartment</a>
      </div>
    </div>
  );
};

export default HoverBasic;
