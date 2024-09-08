import { useState } from "react";
import "./App.css";
import Info from"./Info/Info";

function App() {
  const days = [
    "Пятница",
    "Сегодня",
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
  ];

  const [day, setDay] = useState(1);

  function chooseDay(event) {
    if (event.target.id === "leftBtn") {
      if (day === 0) {
        setDay(days.length - 1);
      } else {
        setDay(day - 1);
      }
    } else {
      if (day === days.length - 1) {
        setDay(0);
      } else {
        setDay(day + 1);
      }
    }
    document.getElementById("customCheckbox").checked = false;
    document.getElementById("customCheckbox2").checked = false;
  }

  return (
    <>
      <div className="main">
        <div className="tracker">
          <div className="tracker__items tracker__items_medium-font">
            <p>
              Трекер приема лекарственных препаратов
            </p>
          </div>
          <div className="tracker__items tracker__items_center-with-betweens">
            <button
              onClick={chooseDay}
              className="arrow-button left-arrow"
              id="leftBtn"
            ></button>
            <p>{days[day]}</p>
            <button
              onClick={chooseDay}
              className="arrow-button right-arrow"
              id="rightBtn"
            ></button>
          </div>
          <div className="tracker__items tracker__items_grey-bg-with-border">
            <div className="my-table">
              <div className="my-table__item my-table__item_start">
                <Info showText="true" title="ЛП" firstInfo="Лекарство 1" secondInfo="Лекарство 2" showLines="true"/>
              </div>
              <div className="my-table__item my-table__item_center">
                <Info showText="true" title="Время" firstInfo="9:00 - 9:30" secondInfo="19:00 - 19:30"/>
                <Info showText="true" title="Дозировка" firstInfo="1 т." secondInfo="0,5 т."/>
                <Info showText="true" title="Примечание" firstInfo="Во время еды" secondInfo="После еды."/>
              </div>
              <div className="my-table__item my-table__item_end">
                <div className="my-table__info">
                  <p>Принято</p>
                  <div className="block-input block-input_top-indent">
                    <input
                      type="checkbox"
                      id="customCheckbox"
                      className="custom-checkbox"
                    />
                    <label htmlFor="customCheckbox"></label>
                  </div>
                  <div className="block-input block-input_bottom-indent">
                    <input
                      type="checkbox"
                      id="customCheckbox2"
                      className="custom-checkbox"
                    />
                    <label htmlFor="customCheckbox2"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
