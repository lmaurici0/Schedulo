import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../AuthPage/AuthPage.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schemaLogin = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  senha: yup.string().required("Senha obrigatória"),
});

const schemaCadastro = yup.object().shape({
  nomeUsuario: yup.string().required("Nome de usuário obrigatório"),
  nome: yup.string().required("Nome obrigatório"),
  pais: yup.string().required("País obrigatório"),
  genero: yup.string().required("Gênero obrigatório"),
  tipoUsuario: yup.string().required("Tipo obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  senha: yup
    .string()
    .min(4, "Senha mínima de 4 caracteres")
    .required("Senha obrigatória"),
});

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(isLogin ? schemaLogin : schemaCadastro),
  });

  const toggleMode = () => {
    setIsLogin(!isLogin);
    reset();
  };

  const onSubmit = async (data) => {
    try {
      if (isLogin) {
        const payload = {
          email: data.email,
          password: data.senha, // backend espera 'password'
        };
        console.log("Enviando payload login:", JSON.stringify(payload));

        const res = await fetch("http://localhost:8080/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const errorBody = await res.text();
          throw new Error(errorBody || "Credenciais inválidas");
        }

        toast.success("Login realizado com sucesso!", {
          style: {
            fontFamily: "Poppins",
            fontSize: "1rem",
            backgroundColor: "#45BF86",
          },
          autoClose: 1500,
          onClose: () => {
            setIsExiting(true);
            setTimeout(() => navigate("/home"), 600);
          },
        });
      } else {
        const payload = {
          username: data.nomeUsuario,
          email: data.email,
          password: data.senha,
          phone: "", // coloque aqui se tiver input phone
          gender: data.genero,
          function: data.tipoUsuario,
        };
        console.log("Enviando payload cadastro:", JSON.stringify(payload));

        const res = await fetch("http://localhost:8080/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const errorBody = await res.text();
          throw new Error(errorBody || "Erro ao cadastrar");
        }

        toast.success("Cadastro realizado com sucesso!", {
          style: {
            fontFamily: "Poppins",
            fontSize: "1rem",
            backgroundColor: "#45BF86",
          },
          autoClose: 2000,
        });
        setIsLogin(true);
        reset();
      }
    } catch (err) {
      toast.error(err.message || "Erro ao processar solicitação", {
        style: {
          fontFamily: "Poppins",
          fontSize: "1rem",
          backgroundColor: "#FF5C5C",
        },
      });
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <div
        className={`${styles.container} ${isLogin ? styles.loginMode : ""} ${
          isExiting ? styles.fadeOut : ""
        }`}
      >
        <div className={styles.leftSection}>
          <div>
            <h2>Bem-vindo à</h2>
            <h1>Schedulo</h1>
            <p>Sua hospedagem, sua escolha.</p>
          </div>
          <div>
            <button onClick={toggleMode} className={styles.signInButton}>
              {isLogin ? "Cadastrar" : "Entrar"}
            </button>
          </div>
        </div>

        <div className={styles.rightSection}>
          <h2>{isLogin ? "Login" : "Cadastro"}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {!isLogin && (
              <>
                <div className={styles.formGroupRow}>
                  <div className={styles.formGroup}>
                    <label>Nome de Usuário</label>
                    <input
                      className={styles.inputField}
                      {...register("nomeUsuario")}
                    />
                    {errors.nomeUsuario && (
                      <p className={styles.errorMsg}>
                        {errors.nomeUsuario.message}
                      </p>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                      className={styles.inputField}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className={styles.errorMsg}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className={styles.formGroupRow}>
                  <div className={styles.formGroup}>
                    <label>Nome</label>
                    <input className={styles.inputField} {...register("nome")} />
                    {errors.nome && (
                      <p className={styles.errorMsg}>{errors.nome.message}</p>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label>País</label>
                    <input className={styles.inputField} {...register("pais")} />
                    {errors.pais && (
                      <p className={styles.errorMsg}>{errors.pais.message}</p>
                    )}
                  </div>
                </div>

                <div className={styles.formGroupRow}>
                  <div className={styles.formGroup}>
                    <label>Gênero</label>
                    <select
                      className={styles.inputField}
                      {...register("genero")}
                    >
                      <option value="">Selecione</option>
                      <option value="MALE">Masculino</option>
                      <option value="FEMALE">Feminino</option>
                      <option value="OTHER">Outro</option>
                    </select>
                    {errors.genero && (
                      <p className={styles.errorMsg}>{errors.genero.message}</p>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label>Tipo de Usuário</label>
                    <select
                      className={styles.inputField}
                      {...register("tipoUsuario")}
                    >
                      <option value="">Selecione</option>
                      <option value="LOCADOR">Locador</option>
                      <option value="LOCATARIO">Locatário</option>
                    </select>
                    {errors.tipoUsuario && (
                      <p className={styles.errorMsg}>
                        {errors.tipoUsuario.message}
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}

            {isLogin && (
              <div className={styles.formGroup}>
                <label>Email</label>
                <input className={styles.inputField} {...register("email")} />
                {errors.email && (
                  <p className={styles.errorMsg}>{errors.email.message}</p>
                )}
              </div>
            )}

            <div className={styles.formGroup}>
              <label>Senha</label>
              <input
                type="password"
                className={styles.inputField}
                {...register("senha")}
              />
              {errors.senha && (
                <p className={styles.errorMsg}>{errors.senha.message}</p>
              )}
            </div>

            <button type="submit" className={styles.signUpButton}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
