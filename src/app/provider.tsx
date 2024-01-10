'use client'
import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

export default function Provider({children}:{children:React.ReactNode}) {
  return (
    <NextUIProvider>
        <ThemeProvider attribute='class'>
        {children}
        </ThemeProvider>
    </NextUIProvider>
  )
}
