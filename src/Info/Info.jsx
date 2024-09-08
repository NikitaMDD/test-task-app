import "./Info.css";

function Info(props) {
  // const {medicineStandart, medicineFirst, medicineSecond} = props;
  const { showText, title, firstInfo, showLines, secondInfo, } =
    props;

  return (
    <>
      <div className="my-table__info">
        <p>
          {showText && title}
          {showLines && <span className="span-line absolute"></span>}
        </p>
        <p>
          {firstInfo}
          <div className="for-mobile">
            <div className="span-block">
              9:00 - 9:30
            </div>
            <div className="span-block">
              1 т. 
            </div>
            <div className="span-block">
              Во время еды
            </div>
          </div>
          {showLines && (
            <span className="span-line span-line_more-indentation absolute"></span>
          )}
        </p>
        <p>
          {secondInfo}
          <div className="for-mobile">
            <div className="span-block">
              19:00 - 19:30
            </div>
            <div className="span-block">
              0,5 т. 
            </div>
            <div className="span-block">
              После еды.
            </div>
          </div>
        </p>
      </div>
    </>
  );
}

export default Info;
