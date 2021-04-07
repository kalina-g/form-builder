import { useContext } from "react";
import { FormBuilderContext } from "../contexts/FormBuilderContext";

const useFormBuilderContext = () => {
  const [state, setState] = useContext(FormBuilderContext);

  const toggleResponsiveMode = (mode) => {
    setState((state) => ({ ...state, responsiveMode: mode }));
  };

  const selectTheme = (theme) => {
    setState((state) => ({ ...state, selectedTheme: theme }));
  };

  return {
    responsiveMode: state.responsiveMode || null,
    toggleResponsiveMode,
    selectedTheme: state.selectedTheme || null,
    selectTheme,
  };
};

export default useFormBuilderContext;
