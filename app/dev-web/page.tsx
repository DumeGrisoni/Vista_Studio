import Benefits from '@/components/Benefits';

import HeroSection from '@/components/HeroSection';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import Services from '@/components/Services';

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
