import React, { useState } from "react";

import { Box, Button, TextField, Typography, Paper } from "@mui/material";

import { useLoginAdminMutation } from "../../app/api/api";

import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginAdmin, { isLoading }] = useLoginAdminMutation();

  const submit = async () => {
    try {
      const data = await loginAdmin({
        login,
        password,
      }).unwrap();

      localStorage.setItem("adminToken", data.token);

      navigate("/admin");
    } catch (error) {
      console.log(error);

      alert(error?.data?.message || "Ошибка входа");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <Paper
        sx={{
          width: 400,
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
          }}
        >
          Админ панель
        </Typography>

        <TextField
          fullWidth
          label="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          sx={{
            mb: 2,
          }}
        />

        <TextField
          fullWidth
          label="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mb: 3,
          }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={submit}
          disabled={isLoading}
        >
          {isLoading ? "Вход..." : "Войти"}
        </Button>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
