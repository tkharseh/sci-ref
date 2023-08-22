import React, { ReactNode, useState } from "react";

interface RepositoryProps {
  logo: ReactNode;
  name: string;
}

const RepositoryButton = ({ logo, name }: RepositoryProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      className="border-2 border-black p-5 rounded-lg duration-300"
      style={{ backgroundColor: selected ? "#e5e7eb" : "white" }}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      {logo}
    </button>
  );
};

export default RepositoryButton;
