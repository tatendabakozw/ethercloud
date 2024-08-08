import React from "react";

type Props = {
  label?: string;
  placeholder: string;
  value: string | number;
  setValue: (e: any) => void;
};

function PrimaryInput(props: Props) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {props.label && (
        <p className="text-zinc-600 font-mdeium text-sm">{props.label}</p>
      )}
      <input
        placeholder={props.placeholder}
        type="text"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className="border border-zinc-200/50 p-3 rounded-xl w-full"
      />
    </div>
  );
}

export default PrimaryInput;
