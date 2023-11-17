'use client';

import { Sphere } from '@assets/images';
import { StyledTitle } from '@components/Texts';
import { BasicButton } from '@components/Buttons';
import { FakePlayer, PlayerObject } from '@components/Player';

export default function Home() {
  const fakePlayersVideo: PlayerObject[] = [
    new PlayerObject('test1', 'w-2/12', 'top-[10%]', 'left-[30%]'),
    new PlayerObject('test2', 'w-2/12', 'top-[3%]', 'left-[5%]'),
    new PlayerObject('test3', 'w-2/12', 'top-[40%]', 'left-[20%]'),
    new PlayerObject('test4', 'w-2/12', 'top-[15%]', 'left-[57%]'),
    new PlayerObject('test5', 'w-2/12', 'top-[60%]', 'left-[65%]'),
    new PlayerObject('test6', 'w-2/12', 'top-[35%]', 'left-[80%]'),
  ];

  return (
    <div
      className={
        'relative grow bg-cover flex align-middle justify-center gap-12 flex-col'
      }
      style={{ backgroundImage: `url(${Sphere.src})` }}
    >
      <div className={'flex align-middle justify-center z-0 '}>
        <StyledTitle text={['Play.', 'Clip.', 'Share.']} color={'text-white'} />
      </div>
      <div className={'flex align-middle justify-center z-20'}>
        <BasicButton
          text={'Discover'}
          backgroundColor={'bg-white'}
          textColor={'text-black'}
          action={() => console.log('test')}
        />
      </div>
      <div
        className={`absolute w-full h-full z-30 bg-gradient-to-t from-[#000000] to-60% to-transparent`}
      ></div>
      <div className={'playersGrid absolute w-full h-full z-10'}>
        {fakePlayersVideo.map((player, index) => (
          <FakePlayer
            key={index}
            url={player.getUrl()}
            width={player.getWidth()}
            top={player.getTop()}
            left={player.getLeft()}
          />
        ))}
      </div>
      <div
        className={`absolute w-full h-full flex flex-col align-middle justify-center gap-12`}
      >
        <div className={'flex align-middle justify-center z-20 '}>
          <StyledTitle
            text={['Play.', 'Clip.', 'Share.']}
            color={'text-transparent'}
            className={'outlineText'}
          />
        </div>
        <div className={'flex align-middle justify-center z-20'}>
          <BasicButton
            text={'Discover'}
            backgroundColor={'bg-white'}
            textColor={'text-black'}
            action={() => console.log('test')}
          />
        </div>
      </div>
    </div>
  );
}
