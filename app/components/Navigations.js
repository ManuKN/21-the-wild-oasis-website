import Link from 'next/link';
import React from 'react';

function Navigations() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/' className='hover:underline'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/cabins' className='hover:underline'>
            Book your luxury cabins
          </Link>
        </li>
        <li>
          <Link href='/account' className='hover:underline'>
            Check your account
          </Link>
        </li>
        <li>
          <Link href='/about' className='hover:underline'>
            About You
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigations;
