import React, { ReactNode, useState } from "react";

interface RepositoryProps {
  id: string;
  logo: ReactNode;
  selectedRepository: any;
  setSelectedRepository: any;
}

const RepositoryButton = ({ id, logo, selectedRepository, setSelectedRepository }: RepositoryProps) => {

  return (
    <button
      className="border-2 border-black p-5 rounded-lg duration-300"
      style={{ backgroundColor: selectedRepository === id ? "#e5e7eb" : "white" }}
      onClick={() => {
        setSelectedRepository(id);
      }}
    >
      {logo}
    </button>
  );
};

export default RepositoryButton;
