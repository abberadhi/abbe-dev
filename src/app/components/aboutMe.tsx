import Image from "next/image";
import mePicture from "@public/photo_2.jpg";
import { TitlePageBreak } from "./title-page-break";

export const AboutMe = () => {
  return (
    <article className="px-12 bg-transparent mx-auto lg:px-8">
      <TitlePageBreak title="About me"></TitlePageBreak>
      <div className="max-w-4xl my-12 mx-auto flex flex-col md:items-start align-center justify-center md:flex-row">
        <div className="flex-1 flex justify-center">
          <Image
            src={mePicture}
            alt="Picture of the author"
            placeholder="blur"
            width={250}
            height={250}
            className="rounded border-2 border-[#d1716b]"
          />
        </div>
        <div className="text-lg flex-1 flex mt-4 md:mt-0">
          <p>
            I’m Abbas Radhi, a developer from Sweden with a degree in Software
            Development and over two years of experience. I’ve worked on both
            frontend and backend development and enjoy solving problems and
            learning new things. I’m always eager to grow and contribute to
            meaningful projects.
          </p>
        </div>
      </div>
    </article>
  );
};
