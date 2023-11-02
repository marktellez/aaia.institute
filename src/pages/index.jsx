import fs from 'fs'
import path from 'path'

import parse from '@/lib/mdx'
import MdxPage from '@/components/MDX'


export default function Page({ source, frontMatter }) {
  return (
    <>
      <div className='w-full bg-purple-500 hover:bg-purple-600 text-white py-4 -mt-16'>
        <div className=" container mx-auto flex items-center gap-2 ">
          Support our research, earn profit sharing! <a href="/funding" className="drop-shadow rounded-md py-1 px-4 bg-white text-purple-500 hover:text-purple-700 text-sm">click here</a>

        </div>
      </div>

      <div className="container mx-auto">
        <MdxPage source={source} frontMatter={frontMatter} />
      </div>

    </>
  )
}

const CONTENT_PATH = path.join(process.cwd(), 'src/content/')

export const getStaticProps = async ({ }) => {
  const mdxPath = path.join(CONTENT_PATH, `proposal.md`)
  const postFilePath = fs.existsSync(mdxPath) ? mdxPath : mdxPath.slice(0, -1)
  const source = fs.readFileSync(postFilePath)

  const { mdxSource, frontMatter } = await parse(source)

  return {
    props: {
      source: mdxSource,
      frontMatter: frontMatter,
      title: frontMatter.title || ''
    },
  }
}
