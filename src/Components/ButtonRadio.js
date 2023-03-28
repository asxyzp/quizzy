import {
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import React from "react";

const ButtonRadio = ({
  label,
  options,
  defaultOption,
  optionState,
  setOptionState,
}) => {
  return (
    <>
      <p className="mt-4 font-black text-xl">{label}</p>
      <FormControl
        sx={{ p: "5px" }}
        className="flex flex-row flex-wrap items-center"
      >
        <RadioGroup
          defaultValue={defaultOption}
          name="radio-buttons-group"
          sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {options.map((option) => {
            return (
              <FormControlLabel
                value={option.value}
                key={option.value}
                control={
                  <Button
                    color="primary"
                    variant={
                      optionState === option.value ? "contained" : "outlined"
                    }
                    startIcon={option.icon}
                    sx={{ m: "5px" }}
                    onClick={() => setOptionState(option.value)}
                  >
                    {option.label}
                  </Button>
                }
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default ButtonRadio;
