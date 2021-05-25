import React from "react"
import clsx from "clsx"
import { MDXProvider } from "@mdx-js/react"

import MDXComponents from "@theme/MDXComponents"

import type { Tutorial } from "../../assets/tutorials"
import styles from "./styles.module.css"

type Props = Readonly<{
  children?: React.ReactNode
  frontMatter: Tutorial["content"]["frontMatter"]
  isExternal?: boolean
  truncated?: string
  isChangelogPage?: boolean
  metadata: Tutorial["content"]["metadata"]
}>

function ChangelogPostItem({
  children,
  frontMatter,
  isChangelogPage = false,
}: Props) {
  const { title } = frontMatter

  if (isChangelogPage) {
    return (
      <div className={clsx(styles.article)}>
        <span className={clsx(styles.article__content)}>
          <header>
            <h1 className={clsx("margin-bottom--sm", styles.title)}>{title}</h1>
          </header>

          <section className="markdown">
            <MDXProvider components={MDXComponents}>{children}</MDXProvider>
          </section>
        </span>
      </div>
    )
  }

  return (
    <article className="margin-bottom--xl">
      <header>
        <h1 className="margin-bottom--sm">{title}</h1>
      </header>

      <section className="markdown">
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </section>
    </article>
  )
}

export default ChangelogPostItem
