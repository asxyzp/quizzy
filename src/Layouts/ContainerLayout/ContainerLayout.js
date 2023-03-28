// IMPORTING MODULES
import React from "react";

/**
 * @name ContainerLayout
 * @description LAYOUT COMPONENT FOR STORING QUIZZES
 * @returns <ContainerLayout /> (JSX)
 */
const ContainerLayout = ({ children }) => {
  return (
    <div className="xl:max-w-3xl xl:mx-auto w-full h-full px-4 md:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default ContainerLayout;
