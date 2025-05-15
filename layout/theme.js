import { createTheme } from "@mui/material/styles";

// Color definitions
const primaryColor = "#16a34a";
const secondaryColor = "#ea580c";
const whiteColor = "#FFFFFF";
const darkBackground = "#121212";
const grayBackground = "#E8E9EB";

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
      MuiContainer: {
        styleOverrides: {
          root: {
            minWidth: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 0,
          },
        },
        defaultProps: {
          maxWidth: false,
          disableGutters: true,
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxSizing: "border-box",
          },
        },
        defaultProps: {
          elevation: 6,
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: 12,
            boxSizing: "border-box",
            marginTop: 32,
            marginBottom: 32,
          },
        },
      },
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
      MuiSelect: {
        styleOverrides: {
          select: {
            backgroundColor: mode === "light" ? whiteColor : darkBackground,
            borderRadius: 12,
            "&:focus": {
              backgroundColor: "#f0f0f0",
            },
          },
          icon: {
            color: "#555",
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
              backgroundColor: grayBackground,
            },
            "&:hover": {
              color: secondaryColor,
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
