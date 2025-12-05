import Benefits from '@/components/DevWeb/Sections/Benefits';
import Pricing from '@/components/DevWeb/Sections/Pricing';
import Process from '@/components/DevWeb/Sections/Process';
import HeroSection from '@/components/HeroSection';

import Services from '@/components/DevWeb/Sections/Services';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col mt-20 items-center justify-start bg-white">
      <HeroSection path={'dev-web'} />
      <Services />
      <Benefits />
      <Process />
      <Pricing />
    </div>
  );
}
