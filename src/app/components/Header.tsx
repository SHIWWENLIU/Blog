"use client"
import React, { useMemo } from 'react'
import NavBar from './NavBar'
import SearchDialog from './SearchDialog'
import ThemeSwitchBtn from './ThemeSwitchBtn'
import { useWindowScroll } from 'react-use';
import { cn } from '@/lib/utils'

export default function Header() {
  const docScroll = useWindowScroll();

  const isDocHover = useMemo(() => {
    if (docScroll) return !!docScroll.y;
  }, [docScroll]);
  return (
    <div className={cn('w-full flex justify-center  sticky top-0 p-5 shadow-box',
    isDocHover &&
          'solid border-b border-black border-opacity-[0.12] bg-opacity-[98] backdrop-blur-md dark:bg-neutral-800'
      )}>
        <ThemeSwitchBtn></ThemeSwitchBtn>
        <NavBar></NavBar>
        <SearchDialog></SearchDialog>
    </div>
  )
}

