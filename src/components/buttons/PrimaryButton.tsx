import React from "react";

type Props = {
  text: string;
};

function PrimaryButton({ text }: Props) {
  return (
    <button className="bg-blue-700 text-white p-3 rounded-xl font-medium">
      {text}
    </button>
  );
}

export default PrimaryButton;
