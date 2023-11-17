type FakePlayerProps = {
  url: string;
  width: string;
  top: string;
  left: string;
};

export default function FakePlayer({ url, width, top, left }: FakePlayerProps) {
  return (
    <>
      <div
        className={`fakePlayer bg-red-400 absolute ${width} ${top} ${left} aspect-square rounded-xl`}
      >
        {url}
      </div>
    </>
  );
}
