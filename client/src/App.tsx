import "./App.css";
import { ReactComponent as Logo } from "./assets/logo.svg";
import Instructions from "./components/Instructions";
import { MantineProvider } from "@mantine/core";
import { FloatingLabelInput } from "./components/FloatingLabelInput";
import RepositoryButton from "./components/RepositoryButton";
import { ReactComponent as PubMed } from "./assets/pubmed.svg";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="grid justify-items-center">
        <Logo />
        <Instructions />
        <RepositoryButton logo={<PubMed />} name="PubMed" />
        <FloatingLabelInput />
      </div>
    </MantineProvider>
  );
}

export default App;
