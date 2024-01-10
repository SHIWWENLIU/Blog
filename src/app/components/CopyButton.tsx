"use client"

import React,{useState} from 'react'
import { MdOutlineContentCopy} from 'react-icons/md'
import {CiCircleCheck} from 'react-icons/ci'

export default function CopyButton({text}) {
    const [isCopied, setIsCopied]=useState(false);

    const copy =async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false)
        }, 3000);
    }
  return (
    <button disabled={isCopied} onClick={copy} className='inline-block'>
        {
            isCopied?
            <CiCircleCheck/>:
            <MdOutlineContentCopy/>
            
        }
    </button>
  )
}
