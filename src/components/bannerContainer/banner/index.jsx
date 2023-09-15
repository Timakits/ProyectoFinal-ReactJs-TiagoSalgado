import "./styles.css";

const Banner = () => {
  return (
    <>
      <div className="bannerContainer">
        <div className="proverbio">
          <h2 className="frase">Hyakubun wa ikken ni shikazu</h2>
          <h2 className="frase2">
            "Verlo una vez es mejor que escucharlo 100 veces"
          </h2>
        </div>
      </div>
      <div className="arrow">
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </>
  );
};

export default Banner;
