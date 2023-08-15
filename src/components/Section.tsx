interface Props {
  children: JSX.Element;
  sectionStyle?: string;
}

export const Section = ({ children, sectionStyle }: Props) => {
  return (
    <section className={`w-full h-[100vh] ${sectionStyle}`}>{children}</section>
  );
};
