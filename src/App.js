// IMPORTING PACKAGES/MODULES
import DarkTheme from "./Theme/Dark";
import Confetti from "react-confetti";
import LightTheme from "./Theme/Light";
import React, { useEffect, useState } from "react";
import ModalRouter from "./Components/ModalRouter";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";

// IMPORTING API ENDPOINT
import getQuestions from "./API/getQuestions";
import { useRecoilState } from "recoil";
import {
  currentQuestionAtom,
  darkModeAtom,
  modalTypeAtom,
  questionsAtom,
} from "./Context/atoms";
import ContainerLayout from "./Layouts/ContainerLayout/ContainerLayout";
import LandingPage from "./Pages/LandingPage/LandingPage";

/**
 * @name App
 * @description APP COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <App /> (JSX)
 */
const App = (props) => {
  // GETTING ATOMIC CONTEXT
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  const [modalType, setModalType] = useRecoilState(modalTypeAtom);
  const [questions, setQuestions] = useRecoilState(questionsAtom);
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(currentQuestionAtom);

  // SETTING MEDIA QUERY
  const mobileMode = useMediaQuery("(max-width:750px)");

  // SETTING LOCAL STATES
  const [anchorEl, setAnchorEl] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // SETTING LOCAL VARIABLES
  const isMenuOpen = Boolean(anchorEl);
  const prevButtonVisibilityCondition = currentQuestion !== 0; // STORES CONDITION FOR VISBILITY OF NEXT BUTTON
  const containerWidth = mobileMode === true ? "92%" : "45%"; // STORES CONTAINER WIDTH
  const nextButtonVisibilityCondition =
    currentQuestion !== questions.length - 1; // STORES CONDITION FOR VISBILITY OF PREV BUTTON
  const resultButtonVisibilityCondition =
    currentQuestion === questions.length - 1; // STORES CONDITION FOR VISBILITY OF RESULT BUTTON

  // METHODS
  /**
   * @name randomize
   * @description METHOD TO RANDOMIZE ARRAY
   * @param {*} array ARRAY
   * @returns RANDOMIZED ARRAY
   */
  const randomize = (array) => {
    // STORES CURRENT & RANDOM INDEX
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      // PICKING RANDOM INDEX
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // SWAPPING
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  /**
   * @name getQuestionsData
   * @description API METHOD TO FETCH QUESTION DATA & UPDATE STATE
   * @returns undefined
   */
  const getQuestionsData = async () => {
    // FETCHING FIVE QUESTIONS
    getQuestions(5)
      .then((response) => response.json())
      .then((data) => {
        // ADDING SELECTED FIELD TO QUESTION OBJECT & SETTING STATE
        const questions = data.results.map((question) => {
          return {
            ...question,
            selected: "",
            options: randomize([
              question.correct_answer,
              ...question.incorrect_answers,
            ]),
          };
        });

        setQuestions([...questions]);
      })
      .catch((err) => {
        // TODO: SHOW SNACKBAR/TOAST
        console.error(err);
      });
  };

  /**
   * @name nextQuestion
   * @description METHOD TO SHOW NEXT QUESTION
   * @param {*} event EVENT OBJECT
   * @returns undefined
   */
  const nextQuestion = (event) => {
    event.preventDefault();
    setCurrentQuestion(currentQuestion + 1);
  };

  /**
   * @name prevQuestion
   * @description METHOD TO SHOW PREV QUESTION
   * @param {*} event EVENT OBJECT
   * @returns undefined
   */
  const prevQuestion = (event) => {
    event.preventDefault();
    setCurrentQuestion(currentQuestion - 1);
  };

  /**
   * @name openMenu
   * @description METHOD TO OPEN MENU
   * @param {*} event EVENT OBJECT
   * @returns undefined
   */
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * @name closeMenu
   * @description METHOD TO CLOSE MENU
   * @returns undefined
   */
  const closeMenu = () => {
    setAnchorEl(null);
  };

  /**
   * @name openAboutModal
   * @description METHOD TO OPEN ABOUT MODAL
   * @returns undefined
   */
  const openAboutModal = () => {
    closeMenu();
    setModalType("about");
  };

  /**
   * @name openAboutModal
   * @description METHOD TO OPEN ABOUT MODAL
   * @returns undefined
   */
  const openSelectedAnswerModal = () => {
    closeMenu();
    setModalType("selected");
  };

  /**
   * @name changeMode
   * @description METHOD TO CHANGE MODE
   * @returns undefined
   */
  const changeMode = () => {
    closeMenu();
    setDarkMode(!darkMode);
  };

  // USING useEffect TO LOAD SPLASH SCREEN AND CALL API ENDPOINTS
  useEffect(() => {
    // LOADING SPLASH SCREEN FOR 1.75 seconds
    setModalType("splash");
    window.setTimeout(() => {
      setModalType("");
    }, 1750);

    // CALLING API ENDPOINT
    getQuestionsData();
  }, []);

  return (
    <ThemeProvider theme={darkMode === true ? DarkTheme : LightTheme}>
      <CssBaseline />
      <ModalRouter />
      <ContainerLayout>
        {/* SHOWING CONFETTI WHEN THE RESULT IS SHOWN */}
        {showResult === true && <Confetti />}

        <LandingPage />
        {/* SHOWING MENU */}
        {/* {showResult === false && (
          <>
            <Menu
              id="app-menu"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={closeMenu}
            >
              <MenuItem onClick={openAboutModal}>
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText>About</ListItemText>
              </MenuItem>
              <MenuItem onClick={changeMode}>
                <ListItemIcon>
                  {darkMode === true ? <DarkMode /> : <LightMode />}
                </ListItemIcon>
                <ListItemText>
                  {darkMode === true ? "Dark mode" : "Light mode"}
                </ListItemText>
              </MenuItem>
              <MenuItem onClick={openSelectedAnswerModal}>
                <ListItemIcon>
                  <ShortText />
                </ListItemIcon>
                <ListItemText>Show selected options</ListItemText>
              </MenuItem>
            </Menu>
            <IconButton
              onClick={openMenu}
              sx={{ position: "relative", bottom: "0px", right: "0px" }}
            >
              <MenuIcon sx={{ height: "35px", width: "35px" }} />
            </IconButton>
          </>
        )} */}

        {/* CONTAINS QUESTION & RESULT CARD */}
        {/* {questions.length > 0 ? (
          <>
            <Typography variant="h4" sx={{ mb: "10px" }}>
              {" "}
              Quizzy
            </Typography>
            {showResult === false ? (
              <>
                <QuestionCard data={questions[currentQuestion]} />
                {nextButtonVisibilityCondition && (
                  <Button
                    onClick={nextQuestion}
                    variant="outlined"
                    sx={{ mb: "10px", width: containerWidth }}
                    disabled={questions[currentQuestion]["selected"] === ""}
                  >
                    <Typography variant="h6">Next</Typography>
                  </Button>
                )}
                {resultButtonVisibilityCondition && (
                  <Button
                    onClick={() => setShowResult(true)}
                    variant="outlined"
                    sx={{ mb: "10px", width: containerWidth }}
                    disabled={questions[currentQuestion]["selected"] === ""}
                  >
                    <Typography variant="h6">Show results</Typography>
                  </Button>
                )}
                {prevButtonVisibilityCondition && (
                  <Button
                    onClick={prevQuestion}
                    variant="contained"
                    sx={{ mb: "10px", width: containerWidth }}
                  >
                    <Typography variant="h6">Previous</Typography>
                  </Button>
                )}
              </>
            ) : (
              <>
                <ResultCard
                  correctAnswerCount={
                    questions.filter((question) => {
                      if (question.selected === question.correct_answer)
                        return true;
                      else return false;
                    }).length
                  }
                />
                <Button
                  onClick={() => window.location.reload()}
                  variant="contained"
                  sx={{ mb: "10px", width: containerWidth }}
                >
                  <Typography variant="h6">Start afresh</Typography>
                </Button>
              </>
            )}
          </>
        ) : (
          <Skeleton sx={{ height: "450px", width: containerWidth }} />
        )} */}
      </ContainerLayout>
    </ThemeProvider>
  );
};

export default App;
