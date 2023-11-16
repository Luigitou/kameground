'use client';

import { IconButton } from '@components/Buttons';
import { Discord } from '@assets/images';

export default function Home() {
  return (
    <>
      <header
        className={
          'text-white px-6 py-6 flex flex-row items-center justify-between gap-8'
        }
      >
        <h1 className={'font-sk font-bold text-3xl'}>Kameground</h1>
        <nav className={'flex flex-grow items-center justify-end h-full'}>
          <IconButton
            icon={Discord}
            backgroundColor={'bg-[#5452DC]'}
            optionalText={'Discord'}
          />
        </nav>
      </header>
      <div id={'headerSeparator'} className={'flex flex-row flex-nowrap'}>
        <span
          className={
            'h-0.5 w-6/12 bg-gradient-to-r from-[#FFFFFF55] via-black via-30% to-[#FFFFFF55]'
          }
        ></span>
        <span
          className={
            'h-0.5 w-6/12 bg-gradient-to-r from-[#FFFFFF55] via-black via-60% to-[#FFFFFF55]'
          }
        ></span>
      </div>
    </>
  );
}
