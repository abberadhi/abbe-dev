import Image from "next/image";
import creatorPicture from "@public/photo_1.jpg";
import linkedInLogo from "@public/icons/linkedin.svg";
import githubLogo from "@public/icons/github.svg";

export const Header = () => {
  return (
    <header className="md:h-[60vh] h-screen flex flex-col justify-between items-center bg-[url('/header-bg.jpg')] bg-[80%_100%] bg-no-repeat bg-cover p-2">
      <div className="flex-1 flex flex-col justify-center items-center gap-6 w-full max-w-md">
        <div>
          <h1 className="text-4xl text-center">Abbas Radhi</h1>
          <p className="text-center">Software Developer</p>
        </div>
        <div className="user-image bg-white rounded-full border-2 border-[#d1716b]">
          <Image
            src={creatorPicture}
            alt="Picture of the author"
            placeholder="blur"
            width={180}
            height={180}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex mt-4">
        <Image
          src={linkedInLogo}
          alt="LinkedIn"
          className="invert"
          width={50}
          height={50}
        />
        <Image
          src={githubLogo}
          alt="GitHub"
          className="invert"
          width={40}
          height={40}
        />
      </div>
    </header>
  );
};
