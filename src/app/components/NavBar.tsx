import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    const  NavItem= [
        {
            title:'Blogs',
            link:'/'
        },
        {
            title:'About',
            link:'/about'
        },
        {
            title:'Timeline',
            link:'/others'
        },
    ]
  return (
    <div>
        {
        NavItem.map(item => <Link href={item.link} key={item.link}
        className='hover:bg-orange-400 p-3 items-center justify-between
        transition-all esae duration-500'>
                {item.title}
            </Link>
        )
        }
    </div>
  )
}
