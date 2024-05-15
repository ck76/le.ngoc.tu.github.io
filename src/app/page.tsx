import Image from 'next/image';
import Timer from '@/components/Timer';
import background from '../../public/background.jpg';

export default function Home() {
  return (
      <div className="relative w-full h-screen">
        <Image
            src={background}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Timer startDate={new Date('2023-05-23T00:00:00')} />
        </div>
      </div>
  );
}
