import "./App.css";

import FormBuilder from "./pages/formBuilder/FormBuilder";
import FormBuilderContextProvider from "./contexts/FormBuilderContext";

function App() {
  return (
    <div className="App">
      <FormBuilderContextProvider>
        <FormBuilder />
      </FormBuilderContextProvider>
    </div>
  );
}

export default App;
