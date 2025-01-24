/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image"

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-4 z-10'>
      <Image src='/logo.png' width="60" height="60" alt='logo' />
      <span className='text-xl font-semibold text-primary-100'>
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
