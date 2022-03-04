import React from "react";
import LoginForm from "./components/layouts/login/LoginForm";
import Main from "./components/layouts/main/Main";
import { Route, useHistory } from "react-router-dom";
import s from "./app.module.scss";
import { useInterval } from "./utils/useInterval";
import { useFormik } from "formik";

function App() {
  const [user, setUser] = React.useState("");
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: "",
    },
    onSubmit: (values) => {
      console.log(values.login);
      users.forEach((user) => {
        if (user.login === values.login) {
          setUser(user.name);
          history.push("/main");
        }
      });
    },
    validate: (values) => {
      let errors = {};
      if (!values.login) {
        errors.login = "Поле обязательно для заполнения";
      } else if (!logins.includes(values.login)) {
        errors.login = "Введите корректный логин";
      }
      return errors;
    },
  });
  const [timer, setTimer] = React.useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const timerCallback = () => {
    const countdownDate = new Date("June 04 2022 15:00:00").getTime();
    const now = new Date().getTime();
    const diff = countdownDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if (diff > 0) {
      setTimer({ days: days, hours: hours, minutes: minutes, seconds: seconds });
    } else {
      setTimer({ months: "00", days: "00", hours: "00", minutes: "00", seconds: "00" });
    }
  };
  useInterval(timerCallback, 1000);
  const users = [
    { login: "Kravchenki", name: "Катя & Дима" },
    { login: "Andrey_Liza", name: "Лиза & Андрей" },
    { login: "Whale", name: "Никитос" },
    { login: "Zabolotniy", name: "Никитос" },
    { login: "Sergey_Lera", name: "Лера & Сережа" },
    { login: "Diman_Anna", name: "Аня & Дима" },
    { login: "Artem_Tanya", name: "Таня & Артем" },
    { login: "Arkasha_Nazeli", name: "Назели & Аркаша" },
    { login: "Max_Sasha", name: "Саша & Максим" },
  ];
  const logins = users.map((user) => user.login);

  return (
    <>
      <Route exact path="/main" render={() => <Main user={user} timer={timer} />} />
      <Route
        exact
        path="/"
        render={() => (
          <LoginForm
            onSubmit={formik.handleSubmit}
            value={formik.values.login}
            errors={formik.errors.login}
            onChange={formik.handleChange}
          />
        )}
      />
    </>
  );
}

export default App;
