import React from "react";
import s from "./loginForm.module.scss";

export default function LoginForm({ onSubmit, onChange, value, errors }) {
  return (
    <div className={s.login}>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="login" className="form-label">
              Введите логин
            </label>
            <input
              onChange={onChange}
              type="text"
              value={value}
              className={`form-control ${errors && "is-invalid"}`}
              id="login"
              name="login"
            />
            {errors && <div className="invalid-feedback">{errors}</div>}
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
