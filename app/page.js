import Link from 'next/link';
import Navigations from './components/Navigations';

export default function Home() {
  return (
    <div>
      <h1 className='text-[30px] font-[700]'>Welcome to Wild oasis</h1>
      <Link href='/cabins' className='hover:underline'>
        Explore luxury cabins
      </Link>
    </div>
  );
}
