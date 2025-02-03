export const TitlePageBreak = (props: { title: string }) => {
  return (
    <div className="flex flex-row items-center w-full">
      <span className="w-full border border-gray-500 rounded"></span>
      <h1 className="text-3xl text-center mx-12 text-nowrap tracking-wider">
        {props.title}
        <span className="text-[#d1716b] font-extrabold"> .</span>
      </h1>
      <span className="w-full border border-gray-500 rounded"></span>
    </div>
  );
};
