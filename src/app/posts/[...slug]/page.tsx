import { allPosts } from 'contentlayer/generated'
import TocLayout from '@/app/components/TocLayout'
import RenderMdx from '@/app/components/RenderMdx'
export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath.split('/') }))

export const generateMetadata = ({ params }) => {
  const decodeSlug = decodeURI(params.slug.join("/"))
  const blog = allPosts.find(blog => blog._raw.flattenedPath === decodeSlug)
  if (!blog) {
    return;
  }
  return {
    title: blog.title,
  }
}


const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const slugpath = params.slug.join('/')
    // console.log(slugpath)
  const post = allPosts.find((post) => post._raw.flattenedPath ===decodeURI(slugpath) )
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)


  return (
    <div className='w-full grid grid-cols-12 p-10 gap-x-8'>
      {/* catalogue */}
      <div className='col-span-3 sticky top-[10vh] max-h-[50vh] overflow-auto'>
        <TocLayout post={post}></TocLayout>
      </div>
      {/* content */}
      <article className='col-span-9  min-h-[100vh]'>
        <RenderMdx post={post}></RenderMdx>
      </article>
    </div>
    
  )
}

export default PostLayout