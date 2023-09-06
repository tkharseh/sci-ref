import React from "react";
import axios from "axios";
interface SubmitButtonProps {
  value: string;
  selectedRepository: string;
  order: string[];
  setLoading: any;
  setOutput: any;
}
const SubmitButton = ({
  setLoading,
  value,
  selectedRepository,
  order,
  setOutput
}: SubmitButtonProps) => {
  const handleOnClick = () => {
    setLoading(true)
    const payload = {
      order: order,
      repository: selectedRepository,
      url: value,
    };
    axios.post(`/data`, payload).then((res) => {
      const data = res.data;
      setOutput(data)
      setLoading(false)
    });
  };

  return (
    <button
      onClick={handleOnClick}
      className="flex justify-center items-center bg-[#31EB2D] hover:bg-[#3fb83d] text-white font-bold py-4 px-4 rounded w-20 h-10 text-lg duration-300"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
