interface Props {
  buttonStyle?: string;
  buttonText: string;
  href?: string;
}

export const Button = ({ buttonStyle, buttonText, href }: Props) => {
  return (
    <button
      className={`p-4 rounded-lg bg-[#282828] text-white hover:bg-black hover:transition-all hover:duration-300 ${buttonStyle}`}
    >
      <a href={href}>{buttonText}</a>
    </button>
  );
};
