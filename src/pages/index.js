import fs from 'fs'
import path from 'path'

import parse from '@/lib/mdx'
import MdxPage from '@/components/MDX'
import EmailSignup from '@/components/EmailSignup'


export default function Page({ source, frontMatter, title }) {
  return (
    <div className='max-w-[640px] mx-auto relative'>
      <EmailSignup />
      <MdxPage source={source} frontMatter={frontMatter} />
    </div>
  )
}

const CONTENT_PATH = path.join(process.cwd(), 'src/content/')

export const getStaticProps = async ({ }) => {
  const mdxPath = path.join(CONTENT_PATH, `whitepaper.mdx`)
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
