type BasicButtonProps = {
  text: string;
  backgroundColor: string;
  textColor?: string;
  action?: () => void;
};

export default function BasicButton({
  text,
  backgroundColor,
  textColor,
  action,
}: BasicButtonProps) {
  return (
    <>
      <button
        className={`${backgroundColor} ${textColor} px-12 py-4 rounded-full text-lg`}
        onClick={action}
      >
        <span className={'leading-none'}>{text}</span>
      </button>
    </>
  );
}
