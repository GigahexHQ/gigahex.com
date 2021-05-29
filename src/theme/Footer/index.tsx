import clsx from "clsx"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"

import Button from "@theme/Button"
import useMetadataContext from "@theme/useMetadataContext"

import sectionCss from "../../css/section.module.css"
import footerStyles from "./styles.module.css"

type Props = Readonly<{
  href?: string
  label: string
  to?: string
}>

const FooterLink = ({ to, href, label, ...props }: Props) => {
  const linkHref = useBaseUrl(href ?? "", { forcePrependBaseUrl: undefined })
  const linkTo = useBaseUrl(to ?? "")

  return (
    <a
      className={footerStyles.footer__link}
      {...(href != null
        ? {
            href: linkHref,
            rel: "noopener noreferrer",
            target: "_blank",
          }
        : { href: linkTo })}
      {...props}
    >
      {label}
    </a>
  )
}

const Footer = () => {
  const { siteConfig } = useDocusaurusContext()
  const metadataContext = useMetadataContext()
  const {
    themeConfig: {
      footer: { links },
    },
  } = siteConfig

  return (
    <footer
      className={clsx(footerStyles.footer, sectionCss.section, {
        [footerStyles["footer--alt"]]: metadataContext.altFooter,
      })}
    >
      <div
        className={clsx(
          footerStyles.footer__inner,
          sectionCss["section--inner"],
        )}
      >
        <div
          className={clsx(
            footerStyles.footer__column,
            footerStyles["footer__column--left"],
          )}
        >
          <div className={clsx(footerStyles.footer__logo__container)}>
            <img
              alt="QuestDB logo"
              className={footerStyles.footer__logo}
              height={30}
              src="/img/navbar/logo-min.png"
              title="QuestDB - Fastest open source database for time series and analytics"
              width={120}
            />
            {/* <div className={clsx(footerStyles.footer__brand__name)}>
              Gigahex
            </div> */}
          </div>
          <p className={footerStyles.footer__tagline}>{siteConfig.tagline}</p>

          <Button
            className={footerStyles.footer__github}
            href={siteConfig.customFields.githubUrl}
            icon={
              <img
                alt="GitHub logo"
                height={22}
                src="/img/github.svg"
                title="GitHub"
                width={22}
              />
            }
            size="xsmall"
            uppercase={false}
            variant="primary"
          >
            Star us on GitHub
          </Button>
        </div>

        <div
          className={clsx(
            footerStyles.footer__column,
            footerStyles["footer__column--right"],
          )}
        >
          {links.map((linkItem, i) => (
            <div key={i} className={footerStyles.footer__links}>
              <ul className={footerStyles.footer__items}>
                {linkItem.title != null && (
                  <li className={footerStyles.footer__title}>
                    {linkItem.title}
                  </li>
                )}

                {linkItem.items?.map((item) => (
                  <li
                    className={footerStyles.footer__item}
                    key={item.href ?? item.to}
                  >
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={footerStyles.footer__bottom}>
        <p className={footerStyles.footer__copyright}>
          {siteConfig.customFields.copyright}
        </p>
        <ul>
          <li className={footerStyles.footer__item}>
            <a className={footerStyles.footer__link} href="/privacy-notice/">
              Privacy
            </a>
          </li>
        </ul>
        <ul>
          <li className={footerStyles.footer__item}>
            <a className={footerStyles.footer__link} href="/terms/">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
