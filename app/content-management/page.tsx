import HeroSection from '@/components/HeroSection';
import React from 'react';

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col mt-20 items-center justify-start bg-white">
      <HeroSection path={'content-management'} />
    </div>
  );
};

export default page;
