import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'


const components = {
  Head,
}

export default function MdxPage({ children, source, frontMatter }) {
  return (
    <article >
      <header>
        <div className="mb-6">
          <h1 className='text-4xl font-bold mb-8 prose'>{frontMatter.title}</h1>
          {frontMatter.author && (
            <div className="-mt-6"><p className="opacity-60 pl-1">{frontMatter.author}</p></div>
          )}
          {frontMatter.description && (
            <p className="description">{frontMatter.description}</p>
          )}
        </div>
      </header>
      <section className='prose'>
        <MDXRemote {...source} components={components} />
      </section>
    </article>
  )
}
