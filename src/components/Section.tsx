interface Props {
  children: JSX.Element;
  sectionStyle?: string;
  sectionId: string
}

export const Section = ({ children, sectionStyle, sectionId }: Props) => {
  return (
    <section id={sectionId} className={`w-full h-[100vh] p-2 overflow-hidden ${sectionStyle}`}>
      {children}
    </section>
  );
};
