import React from "react"
import clsx from "clsx"

import Link from "@docusaurus/Link"
import PageLayout from "@theme/PageLayout"
import ChangelogPostItem from "@theme/ChangelogPostItem"

import seCss from "../../css/section.module.css"
import { Changelog } from "../../assets/changelogs"
import styles from "./styles.module.css"
import moment from "moment"

type Props = Readonly<{
  items: Changelog[]
}>
function renderCards(allChangelogs: Changelog[]) {
  return allChangelogs.map(({ content }) => {
    const Content = (content as any) as React.ComponentType<{}>
    const { permalink, truncated } = content.metadata

    return (
      <div
        className={clsx("row", styles.changelog__item__row)}
        key={content.metadata.permalink}
      >
        <main className={clsx("col col--3")}>
          <h4 className={styles.post__date}>
            <Link
              href={permalink}
              to={permalink}
              className={clsx("padding-bottom--sm", styles.post__date)}
            >
              {moment(content.metadata.date).format("MMM D, YYYY")}
            </Link>
          </h4>
        </main>
        <main className={clsx("col col--8")}>
          <ChangelogPostItem
            key={content.metadata.permalink}
            frontMatter={content.frontMatter}
            isChangelogPage
            truncated={truncated}
            metadata={content.metadata}
          >
            <Content />
          </ChangelogPostItem>
        </main>
      </div>
    )
  })
}
function ChangelogListPage(props: Props) {
  const allChangelogs = [...props.items].sort(
    (a, b) =>
      new Date(b.content.metadata.date).getTime() -
      new Date(a.content.metadata.date).getTime(),
  )
  const description = "New Updates and imporvement to Gigahex"

  return (
    <PageLayout
      canonical="/changelog"
      description={description}
      title="Changlelog"
      wrapperClassName="changelog-wrapper"
    >
      <section className={clsx(seCss.section, seCss["section--odd"])}>
        <div className={styles.jumbotron}>
          <div className={styles.jumbotron__center}>
            <h1 className={seCss.section__title}>ChangeLog</h1>
            <p className={clsx(styles.jumbotron__subtitle)}>{description}</p>
            <div className={styles.social__links}>
              <a href="/slack" className={styles.social__link}>
                Suscribe to Updates
              </a>
              <a href="/slack" className={styles.social__link}>
                Join us on Slack Community
              </a>
              <a href="/slack" className={styles.social__link}>
                Follow us on Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="container margin-vert--lg">
        {renderCards(allChangelogs)}
      </div>
    </PageLayout>
  )
}

export default ChangelogListPage
