// IMPORTING PACKAGES/MODULES
import React from "react";
import About from "./About";
import Splash from "./Splash";
import Selected from "./Selected";
import { modalTypeAtom } from "../Context/atoms";
import { useRecoilState } from "recoil";

/**
 * @name ModalRouter
 * @description MODAL ROUTER COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <ModalRouter />
 */
const ModalRouter = (props) => {
  // GETTING ATOMIC CONTEXT
  const [modalType] = useRecoilState(modalTypeAtom);

  // RETURNING MODAL COMPONENT BASED ON MODAL TYPE
  if (modalType === "splash") return <Splash />;
  else if (modalType === "about") return <About />;
  else if (modalType === "selected") return <Selected />;
  else return <></>;
};

export default ModalRouter;
