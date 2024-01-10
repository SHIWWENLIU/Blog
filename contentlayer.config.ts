// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { json } from 'stream/consumers'
import { visit } from 'unist-util-visit'
import GithubSlugger from 'github-slugger'
import rehypeSlug from 'rehype-slug'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    describe:{type:'string'}
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    //generate slug
    toc:{
      type:"json",
      resolve: async (doc) =>{
        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
    
        const codeExp = /```[\s\S]*?```/g;
        const slugger = new GithubSlugger();
        // console.log(Array.from(doc.body.raw.replace(codeExp,'').matchAll(regulrExp)))
        const headings = Array.from(doc.body.raw.replace(codeExp,'').matchAll(regulrExp)).map(
          ({groups},index)=>{
            
            const flag = groups?.flag;
            // console.log('flag',flag);
            const content = groups?.content;
            return {
              id:index,
              level:flag?.length == 1 ? 'one': flag?.length==2 ? 'two': flag?.length ==3? 
              'three' : flag?.length ==4 ? 'four' : "five",
              text: content,
              slug: content ? slugger.slug(content) : undefined

            }
          }
        )

        return headings;
      }
    }
  },
}))
const options = {
    theme:'github-dark'
}
export default makeSource({ 
  contentDirPath: 'posts', 
  documentTypes: [Post],
  mdx:{
    remarkPlugins:[remarkGfm],
    rehypePlugins:[
      rehypeSlug, 
      [rehypeAutoLinkHeadings,{behavior:"append"}],
      ()=>(tree)=>{
        visit(tree,(node)=>{
          if(node?.type ==="element" && node?.tagName === "pre"){
            const [codeE1] = node.children;
            if(codeE1.tagName !=="code") return;
            node.raw = codeE1.children?.[0].value;
            // console.log(node.raw)
          }
        })
      }, 
    [rehypePrettyCode, options],
    ()=>(tree)=>{
      visit(tree,(node)=>{
        if(node?.type ==="element" && node?.tagName === "figure"){
          if(!("data-rehype-pretty-code-figure" in node.properties)){
            
            return;
          }
          for(const child of node.children){
            if(child.tagName === "pre"){
              child.properties["raw"] = node.raw; 
            }
          } 
        }
      })
    },
  ],
  }

})