import {
  Menu,
  StarBorder,
  StarHalf,
  Star,
  Book,
  Movie,
  Tune,
  MusicNote,
  TheaterComedy,
  Tv,
  SportsEsports,
  Inventory,
  Science,
  Computer,
  Calculate,
  AutoFixHigh,
  SportsBaseball,
  Terrain,
  Gavel,
  Palette,
  Stars,
  Pets,
  DirectionsCar,
  LibraryBooks,
  Camera,
  ConfirmationNumber,
  Looks5,
  LooksOne,
  EmojiEvents,
} from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ButtonRadio from "../../Components/ButtonRadio";

/**
 * @name LandingPage
 * @description LANDING PAGE COMPONENT
 * @returns <LandingPage /> (JSX)
 */
const LandingPage = () => {
  // SETTING LOCAL STATE
  const [mode, setMode] = useState("easy");
  const [category, setCategory] = useState("10");

  // METHODS
  /**
   * @name setQuizMode
   * @description METHOD TO SET QUIZ MODE
   * @param {*} value MODE VALUE
   * @returns {undefined} undefined
   */
  const setQuizMode = (value) => setMode(value);

  /**
   * @name setQuizCategory
   * @description METHOD TO SET QUIZ CATEGORY
   * @param {*} value CATEGORY VALUE
   * @returns {undefined} undefined
   */
  const setQuizCategory = (value) => setCategory(value);

  // SETTING LOCAL VARIABLE
  // STORING OPTIONS FOR MODE
  const modeOptions = [
    {
      value: "easy",
      label: "Easy",
      icon: <StarBorder />,
    },
    {
      value: "medium",
      label: "Medium",
      icon: <StarHalf />,
    },
    {
      value: "hard",
      label: "Hard",
      icon: <Star />,
    },
  ];

  // STORING OPTIONS FOR CATEGORY
  const categoryOptions = [
    {
      value: "10",
      label: "Books",
      icon: <Book />,
    },
    {
      value: "11",
      label: "Film",
      icon: <Movie />,
    },
    {
      value: "12",
      label: "Music",
      icon: <MusicNote />,
    },
    {
      value: "13",
      label: "Musicals & Theatres",
      icon: <TheaterComedy />,
    },
    {
      value: "14",
      label: "Television",
      icon: <Tv />,
    },
    {
      value: "15",
      label: "Video Games",
      icon: <SportsEsports />,
    },
    {
      value: "16",
      label: "Board Games",
      icon: <Inventory />,
    },
    {
      value: "17",
      label: "Science & Nature",
      icon: <Science />,
    },
    {
      value: "18",
      label: "Computers",
      icon: <Computer />,
    },
    {
      value: "19",
      label: "Mathematics",
      icon: <Calculate />,
    },
    {
      value: "20",
      label: "Mythology",
      icon: <AutoFixHigh />,
    },
    {
      value: "21",
      label: "Sports",
      icon: <SportsBaseball />,
    },
    {
      value: "22",
      label: "Geography",
      icon: <Terrain />,
    },
    {
      value: "23",
      label: "History",
      icon: <Book />,
    },
    {
      value: "24",
      label: "Politics",
      icon: <Gavel />,
    },
    {
      value: "25",
      label: "Art",
      icon: <Palette />,
    },
    {
      value: "26",
      label: "Celebrities",
      icon: <Stars />,
    },
    {
      value: "27",
      label: "Animals",
      icon: <Pets />,
    },
    {
      value: "28",
      label: "Vehicles",
      icon: <DirectionsCar />,
    },
    {
      value: "29",
      label: "Comics",
      icon: <LibraryBooks />,
    },
    {
      value: "30",
      label: "Gadgets",
      icon: <Camera />,
    },
  ];

  return (
    <div className="h-full">
      <div className="flex flex-row justify-between align-middle py-3">
        <Typography variant="h4" className="font-black">
          Quizzy
        </Typography>
        <div className="flex flex-row align-middle w-fit">
          <IconButton className="border rounded-lg p-0 m-0">
            <Menu fontSize="medium" />
          </IconButton>
        </div>
      </div>
      <div className="pt-3">
        {/* TODO: FIX THE IMAGE SIZING */}
        <img
          src="https://image.lexica.art/full_jpg/b1e47dc1-89a5-41d8-b0e0-6618f67c3b02"
          className="w-full h-full md:h-1/6 lg:h-1/8 rounded-lg object-cover"
          alt="Quizzy the bot"
        />
        <p className="mt-4 text-lg">
          Choose a mode and choose from more than a dozen topics to get started
          with the quiz.
        </p>
        <ButtonRadio
          label="Select mode:"
          options={modeOptions}
          defaultOption="easy"
          optionState={mode}
          setOptionState={setQuizMode}
        />
        <ButtonRadio
          label="Select category:"
          options={categoryOptions}
          defaultOption=""
          optionState={category}
          setOptionState={setQuizCategory}
        />

        <p className="mt-4 font-black text-xl">Rules:</p>
        <div className="flex flex-row mb-5">
          <Looks5 fontSize="small" sx={{ display: "block", mr: "5px" }} />
          <div>You get 5 questions on your selected topic</div>
        </div>
        <div className="flex flex-row mb-5">
          <LooksOne fontSize="small" sx={{ display: "block", mr: "5px" }} />
          <div className="ml-4">
            You've one minute to answer these questions
          </div>
        </div>
        <div className="flex flex-row mb-5">
          <EmojiEvents fontSize="small" sx={{ display: "block", mr: "5px" }} />
          <div className="ml-4">
            You pass if you get 3 out of 5 questions correctly
          </div>
        </div>
        <Box sx={{ mb: "10px" }}></Box>

        <div className="block my-6">
          <Button
            variant="contained"
            color="primary"
            className="w-full mb-6 pb-6"
            size="large"
          >
            {" "}
            Start Quiz{" "}
          </Button>
        </div>

        <Box sx={{ pb: "20px" }}></Box>
      </div>
    </div>
  );
};

export default LandingPage;
