import { allPosts } from 'contentlayer/generated'
import TocLayout from '@/app/components/TocLayout'
import RenderMdx from '@/app/components/RenderMdx'
import ReadingProgress from '@/app/components/ReadingProgress'
import BackToTop from '@/app/components/BackToTop'

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
  const post = allPosts.find((post) => post._raw.flattenedPath === decodeURI(slugpath))
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <>
      <ReadingProgress />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='w-full grid grid-cols-12 py-12 gap-x-12'>
          <div className='hidden lg:block lg:col-span-3'>
            <div className='sticky top-[10vh] max-h-[80vh] overflow-auto rounded-lg bg-gray-50 dark:bg-gray-800/50 p-6'>
              <TocLayout post={post}></TocLayout>
            </div>
          </div>
          <article className='col-span-12 lg:col-span-9 min-h-[100vh] prose prose-lg dark:prose-invert max-w-none'>
            <header className='mb-8'>
              <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
              {post.date && (
                <time className='text-gray-500 dark:text-gray-400'>
                  {new Date(post.date).toLocaleDateString('zh-CN')}
                </time>
              )}
            </header>
            <RenderMdx post={post}></RenderMdx>
          </article>
        </div>
      </div>
      <BackToTop />
    </>
  )
}

export default PostLayout