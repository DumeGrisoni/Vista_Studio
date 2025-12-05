import Benefits from '@/components/DevWeb/Sections/Benefits';
import Pricing from '@/components/DevWeb/Sections/Pricing';
import Process from '@/components/DevWeb/Sections/Process';
import HeroSection from '@/components/HeroSection';

import Services from '@/components/DevWeb/Sections/Services';
import Projects from '@/components/DevWeb/Sections/Projects';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full min-w-full flex-col mt-20 items-center justify-start bg-white overflow-hidden">
      <HeroSection path={'dev-web'} />
      <Services />
      <Benefits />
      <Process />
      <Projects />
      <Pricing />
    </div>
  );
}
