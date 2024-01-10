import React from 'react'
import CopyButton from './CopyButton'


export default function Pre({children,raw, ...props}) {
  // console.log(raw)
  const lang = props['data-language']
  return (
    <pre {...props} className='flex flex-col'>
      <div className='flex justify-between'>
        {lang}
        <CopyButton text={raw}/>
      </div>
      {children}
    </pre>
    
  )
}
