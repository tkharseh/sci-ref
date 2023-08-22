import "./App.css";
import { ReactComponent as Logo } from "./assets/logo.svg";
import Instructions from "./components/Instructions";
import { MantineProvider } from "@mantine/core";
import { InputBox } from "./components/InputBox";
import RepositoryButton from "./components/RepositoryButton";
import { ReactComponent as PubMed } from "./assets/pubmed.svg";
import SubmitButton from "./components/SubmitButton";
import { DndListHandle } from "./components/DragAndDrop";
import OutputBox from "./components/OutputBox";

function App() {
  const dragAndDropTitles = [
    { id: "1", name: "Authors" },
    { id: "2", name: "Title" },
    { id: "3", name: "Year" },
    { id: "4", name: "Journal" },
    { id: "5", name: "Volume" },
    { id: "6", name: "Page Numbers" },
    { id: "7", name: "DOI" },
  ];
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="grid justify-items-center gap-4">
        <Logo />
        <Instructions />
        <DndListHandle data={dragAndDropTitles} />
        <RepositoryButton logo={<PubMed />} name="PubMed" />
        <InputBox />
        <SubmitButton />
        <OutputBox />
      </div>
    </MantineProvider>
  );
}

export default App;
