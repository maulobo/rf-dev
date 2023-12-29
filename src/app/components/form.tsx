"use client";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import style from "./form.module.scss";
import { sendContactForm } from "../lib/api";
import "./footer.scss";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Form(): JSX.Element {
  const initialForm: FormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [data, setData] = useState<FormData>(initialForm);
  const [activeFields, setActiveFields] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    validateActiveFields();
  }, [data, activeFields]);

  const messages = {
    required: "This field is required.",
    email: "Invalid email address.",
    minimum: "This field must be at least 10 characters long",
  };

  let validationSchema = Yup.object().shape({
    name: Yup.string().required(messages.required),
    message: Yup.string().required(messages.required),
    email: Yup.string().required(messages.required).email(messages.email),
    phone: Yup.string()
      .trim()
      .transform((value) => (value === "" ? undefined : value))
      .required(messages.required)
      .min(10, messages.minimum),
  });

  function allowOnlyNumbers(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.which < 48 || event.which > 57) {
      event.preventDefault();
    }
  }

  function markAsActive(event: React.ChangeEvent<HTMLInputElement>) {
    if (!activeFields.includes(event.target.name)) {
      setActiveFields([...activeFields, event.target.name]);
    }
  }

  function updateData(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (formSubmitted) {
      return;
    }

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function validateActiveFields() {
    let validationErrors: Record<string, string> = {};
    try {
      validationSchema.validateSync(data, { abortEarly: false });
      setErrors({});
    } catch (validationError) {
      validationError.inner.map((error: Yup.ValidationError) => {
        validationErrors[error.path] = error.message;
      });
      const activeFieldErrors = Object.keys(validationErrors)
        .filter((key) => activeFields.includes(key))
        .reduce((accumulator, key) => {
          if (!accumulator[key]) {
            accumulator[key] = validationErrors[key];
          }
          return accumulator;
        }, {} as Record<string, string>);
      setErrors(activeFieldErrors);
    }
  }

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formErrors: Record<string, string> = {};
    try {
      validationSchema.validateSync(data, { abortEarly: false });
      setErrors({});
      setSending(true);
      sendContactForm(data)
        .then(() => {
          setSending(false);
          setResponse("Form submitted successfully!");
          setData(initialForm);
          setErrors({});
          setFormSubmitted(true);
        })
        .catch((error) => {
          setSending(false);
        });
    } catch (validationError) {
      setFormSubmitted(false);
      validationError.inner.map((error: Yup.ValidationError) => {
        formErrors[error.path] = error.message;
      });
      setErrors(formErrors);
      const activeFields = Object.keys(formErrors);
      setActiveFields(activeFields);
    }
  }

  return (
    <div className="form-container">
      <h2>Conectate</h2>
      <p className=" px-16 text-center ">
        Escribinos tus consulta y comunicate con nuestros asesores
      </p>
      <form className={style.form} onSubmit={enviarFormulario}>
        <input
          className={style.casilla}
          type="text"
          id="nombre"
          name="nombre"
          onKeyUp={marcarComoActivo}
          onBlur={marcarComoActivo}
          onChange={actualizarDatos}
          value={datos.nombre}
          placeholder="Apellido y nombre "
        />
        {errores.nombre ? (
          <div className={style.invalid}>{errores.nombre}</div>
        ) : null}

        <input
          type="email"
          className={style.casilla}
          id="email"
          name="email"
          onKeyUp={marcarComoActivo}
          onBlur={marcarComoActivo}
          onChange={actualizarDatos}
          value={datos.email}
          placeholder="Email"
        />
        {errores.email ? (
          <div className={style.invalid}>{errores.email}</div>
        ) : null}

        <div className="mb-3">
          <input
            type="text"
            className={style.casilla}
            maxLength="10"
            id="telefono"
            name="telefono"
            onKeyPress={permitirSoloNumeros}
            onKeyUp={marcarComoActivo}
            onBlur={marcarComoActivo}
            onChange={actualizarDatos}
            value={datos.telefono}
            placeholder="Número de Teléfono"
          />
          {errores.telefono ? (
            <div className={style.invalid}>{errores.telefono}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            type="text"
            style={{ height: "70px" }}
            as="textarea"
            className={` form-control ${
              errores.mensaje ? "is-invalid" : ""
            } border-r-4`}
            id="mensaje"
            name="mensaje"
            onKeyUp={marcarComoActivo}
            onBlur={marcarComoActivo}
            onChange={actualizarDatos}
            value={datos.mensaje}
            placeholder="Mensaje... "
          />
          {errores.mensaje ? (
            <div className="invalid-feedback">{errores.mensaje}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <button
            onClick={enviarFormulario}
            disabled={enviando}
            type="submit"
            className={style.botnForm}
          >
            Enviar
          </button>
        </div>
        {respuesta && <div className={style.respuesta}>{respuesta}</div>}
      </form>
    </div>
  );
}
