import { styled } from "@mui/material/styles";
import { Autocomplete } from "@mui/material";

const AutocompleteSx = styled(Autocomplete)(
  {
    width: 300,
    "& .MuiAutocomplete-input": {
      color: "white",
      "&:hover": {
        borderColor: "red",
      },
      "&.Mui-focused": {
        color: "red",
        borderColor: "red",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiAutocomplete-paper": {
      backgroundColor: "#363636",
      color: "white",
    },
    "& .MuiAutocomplete-option": {
      color: "white",
    },
    "& .MuiAutocomplete-option.Mui-selected": {
      backgroundColor: "red",
    },
    "& .MuiAutocomplete-inputRoot": {
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "red",
      },
    },
    "& .MuiFormLabel-root": {
      color: "white",
      "&.Mui-focused": {
        color: "red",
      },
    },
    "& .MuiChip-root": {
      backgroundColor: "#333333",
      color: "white",
    },
  },
  { marginLeft: "20px", marginTop: "20px", marginBottom: "20px" }
);

export default AutocompleteSx;
