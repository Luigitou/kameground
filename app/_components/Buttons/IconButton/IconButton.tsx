import { SVG } from '@/app/_types/SVG';

type IconButtonProps = {
  icon: SVG;
  backgroundColor: string;
};

export default function IconButton({ icon, backgroundColor }: IconButtonProps) {
  console.log(icon);

  return (
    <>
      <button
        className={`${backgroundColor} aspect-square h-full rounded-full flex align-middle justify-center items-center`}
      >
        <img src={icon.src} />
      </button>
    </>
  );
}
