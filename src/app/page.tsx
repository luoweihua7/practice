import Image from 'next/image';

import HomeLayout from '@/layouts/default';

import '@/styles/home.css';

export default function Home() {
  return (
    <HomeLayout>
      <main className="flex flex-1 h-full items-center justify-center flex-col mt-24 md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Welcome to our homepage</h1>
          <p className="mb-6">
            A showcase site that is also a hub of rich services and detailed introductions. Here, you will discover the
            meticulous details we have crafted, all aimed at providing you with the finest user experience.
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full">Details</button>
          <button className="bg-zinc-300 text-slate-800 ml-4 px-6 py-3 rounded-full">More</button>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200 -z-10"></div>
          <Image
            alt="Shortcut link image"
            className="rounded-lg w-full h-full"
            height={300}
            src="/images/home/home.svg"
            width={400}
          />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-teal-400 -z-10"></div>
        </div>
      </main>
    </HomeLayout>
  );
}
