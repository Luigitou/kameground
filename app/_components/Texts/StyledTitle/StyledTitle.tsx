import './outlinedTextEffect.css';

type StyledTitleProps = {
  text: string[];
  color?: string;
  className?: string;
};

export default function StyledTitle({
  text,
  color,
  className,
}: StyledTitleProps) {
  return (
    <>
      <h1
        className={`${className} font-bold text-9xl text-center cursor-default ${color}`}
      >
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
