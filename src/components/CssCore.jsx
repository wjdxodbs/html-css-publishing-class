import "./CssCore.css";

const CssCore = () => {
  return (
    <>
      {/* <h1>CSS 핵심이론 - CSS 링크하기</h1> */}

      {/* <p>
        법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는
        바에 의하여 퇴직하게 할 수 있다.
      </p>
      <p className="center">
        대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다.
      </p>
      <p id="center">
        의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
      </p>
      <div className="center">
        국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다.
      </div> */}

      {/* <h1>형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.</h1>
      <p>
        대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다.
        <b>굵은글씨</b>
      </p> */}

      <h1>CSS 적용우선순위 - 태그</h1>
      <h1 className="text">CSS 적용우선순위 - 클래스</h1>
      <h1 id="text" style={{ color: "gold" }}>
        CSS 적용우선순위 - 아이디
      </h1>
      <h1>CSS 적용우선순위 - 인라인</h1>
      <h1>CSS 적용우선순위 - !important</h1>
    </>
  );
};

export default CssCore;
