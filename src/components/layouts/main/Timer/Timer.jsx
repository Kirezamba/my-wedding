import React from "react";
import s from "./timer.module.scss";

export default function Timer({ timer }) {
  return (
    <div className="container-sm">
      <div className={s.timerWrapper}>
        <h4>До свадьбы осталось:</h4>
        <div className={s.timer}>
          <section>
            <p>{timer.days}</p>
            <p>
              <small>Дней</small>
            </p>
          </section>

          <span>:</span>

          <section>
            <p>{timer.hours}</p>
            <p>
              <small>Часов</small>
            </p>
          </section>

          <span>:</span>

          <section>
            <p>{timer.minutes}</p>
            <p>
              <small>Минут</small>
            </p>
          </section>

          <span>:</span>

          <section>
            <p>{timer.seconds}</p>
            <p>
              <small>Секунд</small>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
