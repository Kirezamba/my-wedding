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
                Приглашаем на нашу свадьбу, которая состоится 4.06.2022 в 16:00 на турбазе «Дубовая
                роща»
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
