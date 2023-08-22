import React, { Component, ReactNode, useState } from "react";

interface RepositoryProps {
  logo: ReactNode;
  name: string;
}

const RepositoryButton = ({ logo, name }: RepositoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={`border-2 border-black hover:bg-gray-200 p-10 rounded-lg duration-300 bg-${
        selected ? "gray-200" : "white"
      }`}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      {logo}
    </button>
  );
};

export default RepositoryButton;
