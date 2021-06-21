import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
import TextLoop from "react-text-loop"
// import ReactTypingEffect from "react-typing-effect"

import Button from "@theme/Button"
import PageLayout from "@theme/PageLayout"
// import FeaturesTiles from "../component/FeaturesTiles"
// import ButtonDropdown from "../theme/Button/ButtonDropdown"

import ftrClsCss from "../css/index/footerConsole.module.css"
import juCss from "../css/index/jumbotron.module.css"
import wthCss from "../css/index/watch.module.css"
import ftuCss from "../css/index/ftuCard.module.css"
import seCss from "../css/section.module.css"
import featTiles from "../css/index/featureTiles.module.css"
import YouTube from "react-youtube"

type IFeatureCard = {
  title: string
  desc: string
  icon: string
}

const FeatureCard = ({ title, desc, icon }: IFeatureCard) => {
  return (
    <div
      className={clsx(
        ftuCss.feature__card,
        "shadow--lw",
        "margin-bottom--lg",
        "padding--lg",
      )}
    >
      <div className={clsx(ftuCss.feature__card__header, "margin-bottom--md")}>
        <div className={ftuCss.feature__icon}>
          <img src={icon} alt="Features tile icon 01" width={40} height={40} />
        </div>
        <h2 className={clsx(ftuCss.feature__title, "margin-bottom--none")}>
          {title}
        </h2>
      </div>
      <p className={ftuCss.feature__desc}>{desc}</p>
    </div>
  )
}

const Top = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <section
      className={clsx(
        seCss.section,
        seCss["section--center"],
        seCss["section--odd"],
      )}
    >
      <div className={juCss.jumbotron}>
        <h1
          className={clsx(
            seCss.section__title,
            seCss["section__title--jumbotron"],
            seCss["section__title--accent"],
          )}
        >
          The Desktop App for
          <br />
          Apache{" "}
          <span className={juCss.typed__text}>
            <TextLoop interval={2500}>
              <span>Spark</span>
              <span>Hadoop</span>
            </TextLoop>{" "}
            {/* <ReactTypingEffect
              text={["Hadoop", "Spark"]}
              speed={100}
              eraseDelay={500}
              typingDelay={500}
              cursor=" "
            /> */}
          </span>
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--accent"],
            "text--center",
          )}
        >
          {siteConfig.tagline}
        </p>

        <div className={clsx(juCss.jumbotron__actionbtns)}>
          <Button
            className={clsx(juCss.actionbtn)}
            uppercase={false}
            icon={
              <img
                src="/img/pages/landing/appleIcon.svg"
                width={25}
                height={25}
                className="apple-icon"
              />
            }
            size="small"
          >
            Download for Mac
          </Button>
          <Button
            uppercase={false}
            variant="secondary"
            icon={
              <img
                src="/img/pages/landing/microSoftIcon.svg"
                width={22}
                height={22}
                className="microsoft-icon"
              />
            }
            className={`${juCss.actionbtn} disabled`}
            size="small"
          >
            Coming Soon
          </Button>
        </div>

        <div className={clsx(juCss.jumbotron__image)}>
          <img
            className="shadow--md"
            src="/img/hero-banner.png"
            alt="Langing page Image"
          />
        </div>
      </div>
    </section>
  )
}

const FeaturesCard = () => {
  return (
    <section
      className={clsx(
        ftuCss.features__sec,
        seCss.section,
        ftuCss.features__light,
        seCss["section--center"],
      )}
    >
      <div className={clsx(ftuCss.features__top__info, "text--center")}>
        <h2 className={clsx(seCss.section__title)}>
          Designed for those who work with Big data on a daily basis
        </h2>
        <p className={clsx(seCss.section__subtitle)}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          fuga, harum soluta nihil quidem at. Consequatur
        </p>
      </div>
      <div className="container">
        <div className={clsx("row", ftuCss.features__row)}>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="All Spark flavours"
              desc="Whether you are running your Apache Spark opensource or the one provided by AWS EMR, Databricks or Qubole. It just works "
              icon="/img/pages/landing/feature-tile-icon-01.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="CLI Integration"
              desc=" Gigahex comes with a CLI, which automatically configures your Spark application to publish all the metrics without the need to change the code."
              icon="/img/pages/landing/feature-tile-icon-02.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Deploy from anywhere"
              desc="Install the Gigahex agent in your laptop, On-Prem cluster or Cloud, and start deploying spark with real time monitoring."
              icon="/img/pages/landing/feature-tile-icon-03.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Peace of mind"
              desc=" Minimize the resource wastage for your applications and set alerts if resource usage exceeds the limits."
              icon="/img/pages/landing/feature-tile-icon-04.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Monitor trend"
              desc="Monitor the trend of your application runtime and resource usage and tune the configuration when required."
              icon="/img/pages/landing/feature-tile-icon-05.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Multiple deployment"
              desc="Deploy your spark applications with multiple configuration and compare the resource utilization to get the best cost to performance ratio."
              icon="/img/pages/landing/feature-tile-icon-06.svg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const FooterConsole = () => {
  return (
    <section
      className={clsx(
        seCss.section,
        seCss["section--center"],
        seCss["section--odd"],
      )}
    >
      <div
        className={clsx(
          seCss.section__footer,
          seCss["section__footer--console"],
        )}
      >
        <div
          className={clsx(ftrClsCss.footerCol, ftrClsCss.footer__console__left)}
        >
          <h2 className={ftrClsCss.flashy__title}>Download Gigahex</h2>
          <p className={clsx(ftrClsCss.flashy__content, "margin-bottom--lg")}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
            maiores ea eius minus cum adipisci, pariatur dolorum quos quidem
            maxime numquam.
          </p>
          <div className={ftrClsCss.console__actionbtns}>
            <Button
              icon={
                <img
                  src="/img/pages/landing/appleIcon.svg"
                  width="25px"
                  height="25px"
                  className="apple-icon"
                />
              }
              size="xsmall"
              variant="primary"
              uppercase={false}
              className={clsx(ftrClsCss.console__actionbtn)}
            >
              Download for Mac
            </Button>
            <Button
              icon={
                <img
                  src="/img/pages/landing/microSoftIcon.svg"
                  width={22}
                  height={22}
                  className="microsoft-icon"
                />
              }
              variant="secondary"
              className={`${ftrClsCss.console__actionbtn} disabled`}
              size="xsmall"
              uppercase={false}
            >
              Coming Soon
            </Button>
          </div>
        </div>

        <div
          className={clsx(
            ftrClsCss.footerCol,
            ftrClsCss.footer__console__right,
          )}
        >
          <div className={clsx(ftrClsCss.console__right__image)}>
            <img
              className="shadow-md"
              src="/img/hero-banner.png"
              alt="landing page image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const WatchInDemo = () => (
  <section
    className={clsx(
      seCss.section,
      seCss["section--center"],
      seCss["section--light"],
    )}
  >
    <div className={clsx(wthCss.watch__sec)}>
      <h2
        className={clsx(
          wthCss.watch__title,
          seCss.section__title,
          "text--center",
        )}
      >
        Watch it in action
      </h2>
      <div className={clsx("container", wthCss.video__container)}>
        <YouTube
          videoId="cdQAMucLugc"
          className={clsx(wthCss.ytb__video, "shadaow--md")}
          opts={{
            width: "100%",
            playerVars: {
              autoplay: 0,
            },
          }}
          onReady={(event) => event.target.pauseVideo()}
        />
      </div>
    </div>
  </section>
)

const FeaturesTiles = () => (
  <section
    className={clsx(
      seCss.section,
      seCss["section--center"],
      seCss["section--odd"],
      "padding-vert--lg",
    )}
  >
    <div className={clsx(featTiles.features__tiles__top)}>
      <div
        className={clsx(
          featTiles.features__tiles__jumbotron,
          "padding-bottom--lg",
        )}
      >
        <h2 className={clsx(seCss.section__title, "text--center")}>
          Platform that saves thousands&rsquo;s of developers hours
        </h2>

        <p className={clsx(seCss.section__subtitle, "text--center")}>
          Debugging production issues can be daunting, frustrating, timetaking
          and thats why we are hell bent to make this process dead easy.
        </p>
      </div>
    </div>
    <div className={clsx(seCss.section, featTiles.features__tiles__container)}>
      <div className={clsx(featTiles.features__tiles__row)}>
        <div
          className={clsx(featTiles.tile__item__content)}
          data-reveal-container=".split-item"
        >
          <h2 className={featTiles.feature__tile__cont__title}>
            Manage Deployment Environments
          </h2>
          <p
            className={featTiles.feature__tile__cont__desc}
            style={{ marginBottom: 20 }}
          >
            <b style={{ color: "#000" }}>Fast deployments. </b> Create complex
            deployments in few minutes. Deploy to staging, test and prod
            environments.
          </p>
          <p className={featTiles.feature__tile__cont__desc}>
            <b style={{ color: "#000" }}>Debug deployment with logs.</b> Quickly
            navigate to the logs and spark metric dashboard from deployments
            view.
          </p>
        </div>
        <div className={clsx(featTiles.tile__item__img)}>
          <div className={clsx(featTiles.tile__img__box, "shadow--md")}>
            <img
              src="/img/pages/landing/features-split-image-01.png"
              alt="Features split 01"
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          featTiles.features__tiles__row,
          featTiles.fetaure__tiles_light,
        )}
      >
        <div className={clsx(featTiles.tile__item__img)}>
          <div className={clsx(featTiles.tile__img__box, "shadow--md")}>
            <img
              src="/img/pages/landing/features-split-image-02.png"
              alt="Features split 02"
            />
          </div>
        </div>
        <div
          className={clsx(featTiles.tile__item__content)}
          data-reveal-container=".split-item"
        >
          <h2 className={featTiles.feature__tile__cont__title}>
            Monitor Resource Usage
          </h2>
          <p
            className={featTiles.feature__tile__cont__desc}
            style={{ marginBottom: 20 }}
          >
            <b style={{ color: "#000" }}>Fast debugging.</b> Quickly drill down
            to the individual job or stage thats causing the performance issue.
          </p>
          <p className={featTiles.feature__tile__cont__desc}>
            <b style={{ color: "#000" }}>Real time monitoring.</b>Get instant
            feedback and deploy the optimized code, saving your time and SLA.
          </p>
        </div>
      </div>
      <div className={clsx(featTiles.features__tiles__row)}>
        <div
          className={clsx(featTiles.tile__item__content)}
          data-reveal-container=".split-item"
        >
          <h2 className={featTiles.feature__tile__cont__title}>
            Get Performance Insights
          </h2>
          <p
            className={featTiles.feature__tile__cont__desc}
            style={{ marginBottom: 20 }}
          >
            <b style={{ color: "#000" }}>Identify resource wastage.</b> Optimize
            cluster memory and cpu based on the resource overall resource usage.
          </p>
          <p className={featTiles.feature__tile__cont__desc}>
            <b style={{ color: "#000" }}>Vital Observations.</b> Identify
            performance bottleneck, without going through hundreds of jobs and
            stages and logs.
          </p>
        </div>
        <div className={clsx(featTiles.tile__item__img)}>
          <div className={clsx(featTiles.tile__img__box, "shadow--md")}>
            <img
              src="/img/pages/landing/features-split-image-03.png"
              alt="Features split 03"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Home = () => {
  const { siteConfig } = useDocusaurusContext()
  const title = "Gigahex"

  return (
    <PageLayout
      canonical=""
      description={siteConfig.customFields.description}
      title={title}
    >
      <Top />
      <FeaturesCard />
      <FeaturesTiles />
      <WatchInDemo />
      <FooterConsole />
    </PageLayout>
  )
}

export default Home
