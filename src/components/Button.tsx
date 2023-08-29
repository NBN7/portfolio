interface Props {
  buttonStyle?: string;
  buttonText: string | JSX.Element;
  href?: string;
}

export const Button = ({ buttonStyle, buttonText, href }: Props) => {
  return (
    <a href={href} target="_blank">
      <button className={buttonStyle}>{buttonText}</button>
    </a>
  );
};
