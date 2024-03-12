import React from 'react'
import Accent from './Accent';
import { FiMail } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { SiLinkedin,SiGithub } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className='mt-8 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-9 dark:border-gray-600'>
        <SocialLinks />
        <p className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
          © Shawn Liu - {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  )
}


function SocialLinks() {
    // const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle');
  
    // const [copy] = useCopyToClipboard();
  
    return (
      <div className='mt-2 flex space-x-4'>
        <div className='flex items-center justify-center'>
        Find me on 
        {
            socials.map((social)=>
            (<div className='mx-2'
            key={social.href}>
                <a
                target='_blank'
                rel='noopener noreferrer'
                href={social.href}
            >
                {social.text}
                </a>
                </div>)
            )
        }
        </div>
      </div>
    );
  }
  type Social = {
    href: string;
    icon: IconType;
    id: string;
    text: React.ReactNode;
  };
  const socials: Social[] = [
    {
      href: 'https://www.linkedin.com/in/shiwen-liu-170169154/',
      icon: SiLinkedin,
      id: 'Linkedin',
      text: (
        <>
        <Accent className='font-medium'>Linkedin</Accent>
        </>
      ),
    },
    {
      href: 'https://github.com/SHIWWENLIU?tab=repositories',
      icon: SiGithub,
      id: 'github',
      text: (
        <>
        <Accent className='font-medium'>Github</Accent>
        </>
      ),
    }
  ];