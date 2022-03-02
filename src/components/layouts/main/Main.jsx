import React from "react";
import s from "./main.module.scss";
import MyLoader from "./MyLoader";
import Timer from "./Timer/Timer";

export default function Main({ user, timer }) {
  return (
    <div className={s.mainWrapper}>
      {user ? (
        <div className={`container-sm ${s.nopadding}`}>
          <div className={s.main}>
            <div className={s.card}>
              <h2>
                {user === "Никитос" ? "Дорогой" : "Дорогие"} {user}!
              </h2>

              <p className={s.text}>
                Приглашаем {user === "Никитос" ? "тебя" : "вас"} разделить наше свадебное торжество,
                <p> которое состоится 4.06.2022</p>
              </p>
              <p className={s.text}>
                Церемония регистрации брака:<p> 10:30 - ЗАГС Светлоярского района</p>
              </p>
              <p className={s.text}>
                Праздничный банкет:
                <p>
                  Сбор гостей 15:00 <p>База отдыха «Дубовая Роща»</p>
                </p>
              </p>
              <p className={s.text}>
                Будем рады видеть {user === "Никитос" ? "тебя" : "вас"} на нашем празднике!
              </p>
              <Timer timer={timer} />
              <div className={s.footer}>
                <p>Екатерина & Кирилл</p>
              </div>
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
