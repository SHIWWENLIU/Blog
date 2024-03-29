import React from 'react'
import Link from 'next/link'
import {  format, parseISO } from 'date-fns'

const PostCard = ({ posts, params }) => {
    const postPerPage = 4
    let bakPosts = []
    if (Object.keys(params).length === 0) {
        const start = 0
        const end = 4
        bakPosts = posts.slice(start,end)
    }else{
        const start = postPerPage * (parseInt(params['page']) - 1)
        const end = start + postPerPage
        bakPosts = posts.slice(start,end)
    }

    return (
        <div className=''>
            {
                bakPosts.map((post, idx) => (
                    <div className="mb-8" key={idx}>
                        <h2 className="mb-1 text-xl">
                            <Link href={post.url} className="">
                                {post.title}
                            </Link>
                        </h2>
                        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
                            {format(parseISO(post.date), 'LLLL d, yyyy')}
                        </time>
                        <div>{post.describe}</div>
                    </div>
                ))}
        </div>
    )
}

export default PostCard