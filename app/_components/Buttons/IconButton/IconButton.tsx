import { SVG } from '@/app/_types/SVG';

type IconButtonProps = {
  icon: SVG;
  backgroundColor: string;
  optionalText?: string;
};

export default function IconButton({
  icon,
  backgroundColor,
  optionalText,
}: IconButtonProps) {
  return (
    <>
      <button
        className={`${backgroundColor} rounded-full h-[40px] w-[40px] relative overflow-hidden hover:w-[120px] transition-all duration-300 ease-in-out`}
      >
        <div
          className={` h-full aspect-square  flex items-center justify-center`}
        >
          <img src={icon.src} className={''} />
        </div>

        {optionalText && (
          <span
            className={
              'font-sk-mono font-bold absolute left-0 top-0 h-[40px] ml-[45px] flex items-center'
            }
          >
            {optionalText}
          </span>
        )}
      </button>
    </>
  );
}
