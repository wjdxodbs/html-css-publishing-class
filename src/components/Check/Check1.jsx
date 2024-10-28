import "./Check1.css";

const Check1 = () => {
  return (
    <div className="check1">
      <h1>SOFTWARE SKILLS</h1>
      <div className="item">
        <p>
          <span>HTML</span>
          <span>90%</span>
        </p>
        <div className="progress">
          <div className="progress-level" style={{ width: "90%" }} />
        </div>
      </div>
      <div className="item">
        <p>
          <span>CSS3</span>
          <span>80%</span>
        </p>
        <div className="progress">
          <div className="progress-level" style={{ width: "80%" }} />
        </div>
      </div>
      <div className="item">
        <p>
          <span>jQuery</span>
          <span>10%</span>
        </p>
        <div className="progress">
          <div className="progress-level" style={{ width: "10%" }} />
        </div>
      </div>
    </div>
  );
};

export default Check1;
