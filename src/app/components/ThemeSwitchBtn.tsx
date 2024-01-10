import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi';


type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(()=>{
    setMounted(true)
  },[])
  if(!mounted) return null
  return (
    <button
      className='absolute left-[4vw]'
      {...rest}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
}
