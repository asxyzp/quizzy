// IMPORTING PACKAGES/MODULES
import React from "react";
import { Modal, Box, Typography, useMediaQuery } from "@mui/material";
import { useRecoilState } from "recoil";
import { modalTypeAtom, questionsAtom } from "../../Context/atoms";

/**
 * @name Selected
 * @description SELECTED ANSWERS MODAL COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <Selected /> (JSX)
 */
const Selected = (props) => {
  // GETTING ATOMIC CONTEXT
  const [modalType, setModalType] = useRecoilState(modalTypeAtom);
  const [questions] = useRecoilState(questionsAtom);

  // SETTING MEDIA QUERY
  const mobileMode = useMediaQuery("(max-width:750px)");

  // SETTING LOCAL VARIABLES
  const containerWidth = mobileMode === true ? "92%" : "45%"; // STORES CONTAINER WIDTH

  // METHODS
  /**
   * @name closeModal
   * @description METHOD TO CLOSE MODAL
   * @returns undefined
   */
  const closeModal = () => {
    setModalType("");
  };

  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={modalType === "selected"}
      onClose={closeModal}
    >
      <Box
        sx={{
          width: containerWidth,
          mx: "auto",
          bgcolor: "background.paper",
          p: "10px",
          borderRadius: "4px",
        }}
      >
        <Typography
          component="div"
          variant="h6"
          sx={{
            width: "100%",
            textAlign: "center",
            mb: "15px",
            color: "primary.main",
            fontWeight: "bolder",
          }}
        >
          Selected answers
        </Typography>
        {questions.filter((question) => {
          if (question.selected !== "") return true;
          else return false;
        }).length > 0 ? (
          questions
            .filter((question) => {
              if (question.selected !== "") return true;
              else return false;
            })
            .map((question) => {
              return (
                <>
                  <Box
                    sx={{
                      width: "85%",
                      mx: "auto",
                      textAlign: "center",
                      mb: "5px",
                    }}
                    dangerouslySetInnerHTML={{ __html: question.question }}
                  />
                  <Typography
                    component="div"
                    variant="body"
                    sx={{ width: "100%", mb: "15px", textAlign: "center" }}
                  >
                    {" "}
                    <Box sx={{ display: "inline", fontWeight: "bold" }}>
                      Your answer:
                    </Box>{" "}
                    {question.selected}{" "}
                  </Typography>
                </>
              );
            })
        ) : (
          <Box sx={{ textAlign: "center" }}>Answer a few questions!</Box>
        )}
      </Box>
    </Modal>
  );
};

export default Selected;
