import { useCallback, useContext } from "react";
import { FormBuilderContext } from "../contexts/FormBuilderContext";

const useFormBuilderContext = () => {
  const [state, setState] = useContext(FormBuilderContext);

  const toggleResponsiveMode = (mode) => {
    setState((state) => ({ ...state, responsiveMode: mode }));
  };

  const selectTheme = (theme) => {
    setState((state) => ({ ...state, selectedTheme: theme }));
  };

  const setAppWrapEl = (node) => {
    setState((state) => ({ ...state, appWrapEl: node }));
  };

  return {
    responsiveMode: state.responsiveMode || null,
    toggleResponsiveMode,
    selectedTheme: state.selectedTheme || null,
    selectTheme,
    setAppWrapEl: useCallback(setAppWrapEl, [setState]),
    appWrapEl: state.appWrapEl || null,
  };
};

export default useFormBuilderContext;
