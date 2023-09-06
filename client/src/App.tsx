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
import { ModalsProvider } from "@mantine/modals";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const dragAndDropTitles = [
    { id: "1", name: "Authors" },
    { id: "2", name: "Title" },
    { id: "3", name: "Year" },
    { id: "4", name: "Journal" },
    { id: "5", name: "Volume:Page Numbers" },
    { id: "6", name: "DOI" },
  ];

  const repositories = [{ id: "pubmed", name: "PubMed", logo: <PubMed /> }];

  const [value, setValue] = useState("");
  const [selectedRepository, setSelectedRepository] = useState('');
  const [order, setOrder] = useState([]);

  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider modals={{ demonstration: Modal /* ...other modals */ }}>
        <div className="grid justify-items-center gap-4">
          <Logo />
          <Instructions />
          <DndListHandle setOrder={setOrder} data={dragAndDropTitles} />
          <h1 className="font-sans text-black-600 font-bold">
            Select a repository
          </h1>
          {repositories.map((repository) => {
            return (
              <RepositoryButton
                id={repository.id}
                logo={repository.logo}
                selectedRepository={selectedRepository}
                setSelectedRepository={setSelectedRepository}
              />
            );
          })}
          <h1 className="font-sans text-black-600 font-bold pt-9">
            Enter a URL
          </h1>
          <InputBox value={value} setValue={setValue} />
          <SubmitButton setLoading={setLoading} value={value} selectedRepository={selectedRepository} order={order} setOutput={setOutput}/>
          <OutputBox output={output} loading={loading}  />
        </div>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
