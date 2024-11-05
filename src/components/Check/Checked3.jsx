import "./Checked3.css";

const Checked3 = () => {
  return (
    <div className="checked3">
      <input type="radio" name="menu" id="tab1" />
      <input type="radio" name="menu" id="tab2" />
      <input type="radio" name="menu" id="tab3" />
      <div className="content slide1">
        <img
          src="https://velog.velcdn.com/images/eunbinn/post/4af15500-60f7-4f04-b08f-b65bd3690cf7/image.webp"
          alt=""
        />
      </div>
      <div className="content slide2">
        <img
          src="https://velog.velcdn.com/images/leehyunho2001/post/01446c86-bfdb-4b9f-bbcc-2505b5d52cbd/image.png"
          alt=""
        />
      </div>
      <div className="content slide3">
        <img
          src="https://velog.velcdn.com/images/eotkd4791/post/8a74e661-cd5b-4a84-805f-da0c0193b48b/image.webp"
          alt=""
        />
      </div>
      <div className="btn">
        <label htmlFor="tab1" />
        <label htmlFor="tab2" />
        <label htmlFor="tab3" />
      </div>
    </div>
  );
};

export default Checked3;
