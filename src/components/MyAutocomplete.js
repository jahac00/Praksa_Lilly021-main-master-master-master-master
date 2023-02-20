import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const commonSx = {
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
  "& .MuiAutocomplete-option": {
    color: "white",
    "&:hover": {
      backgroundColor: "red",
    },
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
};

const MyAutocomplete = ({ options, value, onChange, label, sx }) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          sx={{
            ...commonSx,
            "& .MuiOutlinedInput-input": { color: "white" },
            ...sx,
          }}
        />
      )}
      sx={{ ...commonSx, outline: "none", ...sx, margin: "20px 0 20px 20px" }}
    />
  );
};

export default MyAutocomplete;
