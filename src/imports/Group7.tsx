function Frame() {
  return <div className="absolute bg-gradient-to-b from-70% from-[rgba(30,30,30,0)] h-[741px] left-0 to-[#1d1d27] top-0 w-[1280px]" />;
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}