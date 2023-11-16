type StyledTitleProps = {
  text: string[];
};

export default function StyledTitle({ text }: StyledTitleProps) {
  return (
    <>
      <h1 className={'font-bold text-9xl text-center cursor-default'}>
        {text.map((word, index) => (
          <span key={index}>
            {word}
            <br />
          </span>
        ))}
      </h1>
    </>
  );
}
