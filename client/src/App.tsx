import "./App.css";
import { ReactComponent as Logo } from "./assets/logo.svg";
import Instructions from "./components/Instructions";
import { MantineProvider } from "@mantine/core";
import SubmitButton from "./components/SubmitButton";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="grid justify-items-center">
        <Logo />
        <Instructions />
        <SubmitButton />
      </div>
    </MantineProvider>
  );
}

export default App;
