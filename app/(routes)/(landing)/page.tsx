'use client';

import { Sphere } from '@assets/images';
import { StyledTitle } from '@components/Texts';
import { BasicButton } from '@components/Buttons';

export default function Home() {
  return (
    <div
      className={
        'grow bg-cover flex align-middle justify-center gap-12 flex-col'
      }
      style={{ backgroundImage: `url(${Sphere.src})` }}
    >
      <div className={'flex align-middle justify-center'}>
        <StyledTitle text={['Play.', 'Clip.', 'Share.']} />
      </div>
      <div className={'flex align-middle justify-center'}>
        <BasicButton
          text={'Discover'}
          backgroundColor={'bg-white'}
          textColor={'text-black'}
          action={() => console.log('test')}
        />
      </div>
    </div>
  );
}
