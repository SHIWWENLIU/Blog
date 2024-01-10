import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';
import Accent from './components/Accent';
import Link from 'next/link';

export default function NotFound() {
  return (
      <main>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='md:text-6xl mt-8 text-4xl dark:text-neutral-200'>
              Page Not Found
            </h1>
            <p>
            <Link
              // className='md:text-lg mt-4 dark:text-neutral-200'
              href='/'
            >
            Go Back to Home
            </Link>
            </p>
          </div>
      </main>
  );
}
