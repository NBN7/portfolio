import { Button } from "./Button";
import { Input, Textarea } from "@nextui-org/react";

export const Contact = () => {
  return (
    <div className="w-[300px] flex flex-col gap-2 justify-center items-center">
      <Input variant="faded" className="" type="text" label="Name" />
      <Input variant="faded" className="" type="email" label="Email" />
      <Textarea
        variant="faded"
        labelPlacement="outside"
        placeholder="Description"
      />
      <Button
        buttonText="Send email"
        buttonStyle="w-[300px] bg-[#242424] text-white hover:bg-[#303030] hover:transition-all hover:duration-300 p-4 rounded-lg"
      />
    </div>
  );
};
