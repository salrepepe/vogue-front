import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light", // можно потом переключать на dark

    primary: {
      main: "#111827", // тёмный почти чёрный (как Nike / Apple стиль)
    },

    secondary: {
      main: "#f2f2f2", // акцент (оранжевый)
    },

    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },
  },

  typography: {
    fontFamily: "Kinetika",
    h1: { fontWeight: 700 },
    h2: {
      fontSize: 30,
      "@media (max-width:768px)": {
        fontSize: 18,
      },
    },
    h3: { fontSize: 30 },
    h4: { fontSize: 16 },
    h5: { fontSize: 14 },
    h6: { fontSize: 12 },
    button: { textTransform: "none" },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          boxShadow: "none",

          "&.MuiButton-sizeLarge": {
            padding: "13px",
          },

          "&.MuiButton-sizeMedium": {
            padding: "15px 34px",
            "@media (max-width:768px)": {
              padding: "8px 15px",
            },
          },

          // "&.MuiButton-sizeSmall": {
          //   padding: "11px 35px",
          // },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "&.MuiFormControl-root": {
            borderRadius: "100px",
          },
        },
      },
    },
  },
});
