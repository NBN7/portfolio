import { Button } from "./Button";
import { Input, Textarea } from "@nextui-org/react";

export const Contact = () => {
  return (
    <form
      action="https://formspree.io/f/xnqkgzyd"
      method="POST"
      className="w-[300px] flex flex-col gap-2 justify-center items-center"
    >
      <Input variant="faded" type="text" label="Name" name="name" />
      <Input variant="faded" type="email" label="Email" name="email" />
      <Textarea
        variant="faded"
        labelPlacement="outside"
        placeholder="Message"
        type="text"
        name="message"
      />
      <Button
        buttonText="Send email"
        buttonStyle="w-[300px] bg-[#242424] text-white hover:bg-[#303030] hover:transition-all hover:duration-300 p-4 rounded-lg"
      />
    </form>
  );
};
