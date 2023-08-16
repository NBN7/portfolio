interface Props {
  buttonStyle?: string;
  buttonText: string | JSX.Element;
  href?: string;
}

export const Button = ({ buttonStyle, buttonText, href }: Props) => {
  return (
    <button
      className={`p-4 rounded-lg bg-[#282828] text-white hover:transition-all hover:duration-300 ${buttonStyle}`}
    >
      <a href={href} target="_blank">
        {buttonText}
      </a>
    </button>
  );
};
