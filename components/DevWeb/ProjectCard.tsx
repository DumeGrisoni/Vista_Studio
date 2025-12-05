import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallBack';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  bg: string;
  littleImg: string;
}

export function ProjectCard({
  title,
  description,
  category,
  image,
  bg,
  link,
  littleImg,
}: ProjectCardProps) {
  return (
    <div className="relative group border  border-noir/20 rounded-lg overflow-hidden bg-white transition-all shadow-lg  ">
      <div className="w-full h-full bg-noir/10 absolute top-0 left-0 hidden md:block" />
      <Image
        src={bg as string}
        alt={title}
        width={550}
        height={50}
        objectFit="cover"
        className="w-full h-[90%] rounded-lg  hidden md:block"
      />

      <div className="z-10 block md:absolute md:top-40 md:left-32 ">
        <ImageWithFallback
          src={image as string}
          alt={title}
          className="w-full"
        />
      </div>

      <p className="text-noir mt-6 mb-3 md:text-white text-center  md:text-2xl font-light  md:absolute top-0 left-10">
        {category.toUpperCase()}
      </p>
      <Image
        src={littleImg as string}
        alt={title}
        width={110}
        height={50}
        objectFit="contain"
        className="absolute top-55 right-10 z-30 hidden md:block"
      />
      <p className="text-noir md:text-white text-sm md:text-base font-semibold z-20 text-center w-full md:text-left md:w-[50%] leading-relaxed md:absolute top-20 left-15  ">
        {description}
      </p>
      <Link
        href={link}
        target="_blank"
        className="mt-auto md:absolute bottom-5 left-10"
      >
        <button className="flex items-center gap-2 md:ml-0 ml-[10%] md-my-0 my-6 px-2 py-1 border rounded border-noir md:border-white hover:gap-3 hover:scale-101 transition-all cursor-pointer">
          <span className="text-sm md:text-base text-noir md:text-white">
            Visiter
          </span>
          <ExternalLink className="w-4 h-4 text-noir md:text-white" />
        </button>
      </Link>
    </div>
    // <div className="group border flex flex-col  border-noir/20 rounded-lg overflow-hidden  transition-all bg-white shadow-md  ">
    //   <div className=" w-full overflow-hidden bg-white">
    //     <ImageWithFallback src={image as string} alt={title} />
    //   </div>
    //   <div className="p-6 space-y-4 flex justify-between flex-col md:flex-row items-center ">
    //     <div className="space-y-2">
    //       <p className="text-sm text-noir/60 uppercase tracking-wider">
    //         {category}
    //       </p>
    //       <h3 className=" text-sm md:text-xl">{title}</h3>
    //       <p className="text-noir/70 leading-relaxed">{description}</p>
    //     </div>
    //
    //   </div>
    // </div>
  );
}
