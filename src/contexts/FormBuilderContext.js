import React, { useState, createContext } from "react";

import { getThemeById } from "../services/themeService";

export const FormBuilderContext = createContext();

const FormBuilderContextProvider = (props) => {
  const [state, setState] = useState({
    responsiveMode: "desktop",
    selectedTheme: getThemeById(1),
  });

  return (
    <FormBuilderContext.Provider value={[state, setState]}>
      {props.children}
    </FormBuilderContext.Provider>
  );
};

export default FormBuilderContextProvider;
