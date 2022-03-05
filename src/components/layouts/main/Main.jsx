import React from "react";
import s from "./main.module.scss";
import MyLoader from "./MyLoader";
import Timer from "./Timer/Timer";

export default function Main({ user, timer }) {
  return (
    <div className={s.mainWrapper}>
      {user ? (
        <div className={s.main}>
          <div className={s.card}>
            <h2>
              {user === "Никитос" || user === "Ваня" ? "Дорогой" : "Дорогие"} {user}!
            </h2>

            <div className={s.text}>
              Приглашаем {user === "Никитос" || user === "Ваня" ? "тебя" : "вас"} разделить наше
              свадебное торжество,
              <p> которое состоится 4.06.2022</p>
            </div>
            <div className={s.text}>
              Церемония регистрации брака:<p> 10:30 - ЗАГС Светлоярского района</p>
            </div>
            <div className={s.text}>
              Праздничный банкет: Сбор гостей 15:00
              <div> База отдыха «Дубовая Роща»</div>
            </div>
            <div className={s.text}>
              Будем рады видеть {user === "Никитос" || user === "Ваня" ? "тебя" : "вас"} на нашем
              празднике!
            </div>
            <Timer timer={timer} />
            <div className={s.footer}>
              <p>Екатерина & Кирилл</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.loader}>
          <MyLoader />
        </div>
      )}
    </div>
  );
}
