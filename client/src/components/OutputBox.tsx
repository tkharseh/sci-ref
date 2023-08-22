import React from "react";
import { IconSettings } from "@tabler/icons-react";

const OutputBox = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-sans text-black-600 font-bold text-xl text-center max-w-4xl px-1 py-2">
          Output
        </h1>
        <button>
          <IconSettings />
        </button>
      </div>
      <div style={{width: '90vw'}} className="outline outline-gray-100 rounded-lg w-96 text-center mb-16 py-9">
        Test
      </div>
    </div>
  );
};

export default OutputBox;
