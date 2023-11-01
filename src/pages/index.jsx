import fs from 'fs'
import path from 'path'

import parse from '@/lib/mdx'
import MdxPage from '@/components/MDX'


export default function Page({ source, frontMatter, title }) {
  return (
    <div className='relative container mx-auto'>
      <div className='right-24 fixed bg-purple-500 hover:bg-purple-600 text-white rounded px-3 py-1'>
        <a href="/funding">Join the profit sharing program!</a>
      </div>
      <MdxPage source={source} frontMatter={frontMatter} />
    </div>
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
