import { createTheme } from "@mui/material/styles";

// Color definitions
const primaryColor = "#16a34a";
const secondaryColor = "#ea580c";
const whiteColor = "#FFFFFF";
const darkBackground = "#121212";

export const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: primaryColor,
        contrastText: whiteColor,
      },
      secondary: {
        main: secondaryColor,
        contrastText: whiteColor,
      },
      background: {
        default: mode === "light" ? whiteColor : darkBackground,
        paper: mode === "light" ? whiteColor : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "rgba(0, 0, 0, 0.87)" : whiteColor,
        secondary:
          mode === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.7)",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            paddingTop: "12px",
            paddingBottom: "12px",
            fontWeight: 600,
            textTransform: "none",
            backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
            color: whiteColor,
            transition: "background-image 0.5s ease, opacity 0.5s ease",
            "&:hover": {
              backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${primaryColor})`,
              opacity: 0.8,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundColor: mode === "light" ? whiteColor : darkBackground,
            "& fieldset": {
              borderColor: "#cccccc",
              transition: "border-color 0.3s ease",
            },
            "&:hover fieldset": {
              borderColor: "#999999",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
              borderWidth: 2,
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
            },
          },
          input: {
            padding: 15,
            margin: 0,
            fontSize: 16,
            color: mode === "light" ? darkBackground : whiteColor,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            margin: "8px 0",
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            border: "2px solid #e0e0e0",
            borderRadius: "12px",
          },
          indicator: {
            height: "4px",
            borderRadius: "2px",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            fontSize: "16px",
            marginRight: "24px",
            color: "#666",
            margin: 2,
            borderRadius: "8px",
            "&.Mui-selected": {
              backgroundColor: "#E8E9EB",
            },
            "&:hover": {
              color: "#0059b2",
              opacity: 1,
            },
            "&.Mui-disabled": {
              color: "#ccc",
            },
          },
        },
      },
    },
  });
};
