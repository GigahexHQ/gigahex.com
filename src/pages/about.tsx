import clsx from "clsx"
import React from "react"
import seCss from "../css/section.module.css"
import PageLayout from "../theme/PageLayout/index"
import abtCss from "../css/about/about.module.css"

type IPersonCard = {
  imgBorderRadius?: string | number
  personPic?: string
  personName: string
  twitterLink?: string
  linkdinLink?: string
  personDesc?: string
  imageWidth: number | string
}

const PersonCard = (props: IPersonCard) => (
  <div className={clsx(abtCss.team__person__card, "margin-bottom--xl")}>
    <div
      className={clsx(abtCss.person__pic, "margin-bottom--sm")}
      style={{ width: props.imageWidth }}
    >
      <img
        src={props?.personPic}
        alt={props.personName}
        style={{ borderRadius: props.imgBorderRadius }}
      />
    </div>
    <div className={abtCss.person__card__body}>
      <div className={abtCss.person__info}>
        <div
          className={clsx(
            abtCss.person__name,
            "margin-right--md",
            "margin-bottom--xm",
          )}
        >
          {props.personName}
        </div>

        <div className={clsx(abtCss.person__social__icons)}>
          <span className={clsx("margin-right--sm")}>{props.linkdinLink}</span>

          <span>{props.twitterLink}</span>
        </div>
      </div>
      <div className={abtCss.person__desc}>{props.personDesc}</div>
    </div>
  </div>
)

const AboutTop = () => (
  <section className={clsx(seCss.section, seCss["section--odd"])}>
    <div className={clsx(abtCss.about__top)}>
      <h1 className={abtCss.about__title}>The magic of software</h1>
      <p className={clsx(abtCss.about__desc)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
      </p>
      <p className={abtCss.about__desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus
        dicta alias similique harum quidem rem dolore amet ab in?
      </p>
      <p className={abtCss.about__desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <a href="#" className={abtCss.about__more}>
        Read more about how we think and work
        <img
          alt="Right arrow"
          height={20}
          src="/img/pages/about/arrowRightBlack.svg"
          width={20}
        />
      </a>
    </div>
  </section>
)

const TeamList = () => (
  <section className={clsx(seCss.section, seCss["section--center"])}>
    <div className={clsx(abtCss.about__team__sec)}>
      <div
        className={clsx(
          seCss.has__divider,
          seCss.padding__bottom__3,
          seCss.margin__bottom__3,
        )}
      >
        <h1 className={clsx(abtCss.team__title, "margin-bottom--md")}>Team</h1>
        <p className={abtCss.team__desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          perspiciatis suscipit, repudiandae quam corrupti accusantium optio
          facere aperiam ducimus sequi!
        </p>
      </div>
      <div className={clsx(abtCss.team__list__container, "container")}>
        <div className={clsx("row", abtCss.team__list__row)}>
          <div className={clsx(abtCss.team__list__col)}>
            <PersonCard
              twitterLink="icon"
              linkdinLink="icon"
              imageWidth={150}
              personName="Shadab Alam"
              personDesc="Past: Designer at Microsoft, eFounders,Jour. Created GitHub issues client Gitscout"
              personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <div className={clsx(abtCss.team__list__col)}>
            <PersonCard
              twitterLink="icon"
              linkdinLink="icon"
              imageWidth={150}
              personName="Shadab Alam"
              personDesc="Past: Designer at Microsoft, eFounders,Jour. Created GitHub issues client Gitscout"
              personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <div className={clsx(abtCss.team__list__col)}>
            <PersonCard
              twitterLink="icon"
              linkdinLink="icon"
              imageWidth={150}
              personName="Shadab Alam"
              personDesc="Past: Designer at Microsoft, eFounders,Jour. Created GitHub issues client Gitscout"
              personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <div className={clsx(abtCss.team__list__col)}>
            <PersonCard
              twitterLink="icon"
              linkdinLink="icon"
              imageWidth={150}
              personName="Shadab Alam"
              personDesc="Past: Designer at Microsoft, eFounders,Jour. Created GitHub issues client Gitscout"
              personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <div className={clsx(abtCss.team__list__col)}>
            <PersonCard
              twitterLink="icon"
              linkdinLink="icon"
              imageWidth={150}
              personName="Shadab Alam"
              personDesc="Past: Designer at Microsoft, eFounders,Jour. Created GitHub issues client Gitscout"
              personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

// const Investors = () => (
//   <section
//     className={clsx(
//       seCss.section,
//       seCss["section--center"],
//       seCss["section--odd"],
//     )}
//   >
//     <div className={clsx(abtCss.about__investors__sec)}>
//       <div
//         className={clsx(
//           seCss.has__divider,
//           seCss.padding__bottom__3,
//           seCss.margin__bottom__3,
//         )}
//       >
//         <h1 className={clsx(abtCss.investor__title, "margin-bottom--none")}>
//           Our investors
//         </h1>
//       </div>
//       <div
//         className={clsx(
//           abtCss.investors__list__container,
//           "container",
//           "padding-left--none",
//           "padding-right--none",
//         )}
//       >
//         <div className={clsx("row", abtCss.investors__list__row)}>
//           <div className={clsx("col col--4")}>
//             <PersonCard
//               imageWidth={100}
//               twitterLink="#"
//               linkdinLink="#"
//               imgBorderRadius={8}
//               personName="Shad"
//               personDesc="CEO of Gigahex"
//               personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//             />
//           </div>
//           <div className={clsx("col col--4")}>
//             <PersonCard
//               imageWidth={100}
//               imgBorderRadius={8}
//               personName="Shad"
//               personDesc="CEO of Gigahex"
//               personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//             />
//           </div>
//           <div className={clsx("col col--4")}>
//             <PersonCard
//               imageWidth={100}
//               imgBorderRadius={8}
//               twitterLink="#"
//               linkdinLink="#"
//               personName="Shad"
//               personDesc="CEO of Gigahex"
//               personPic="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// )

const About = () => {
  return (
    <PageLayout canonical="/about" description="" title="About Us">
      <AboutTop />
      <TeamList />
    </PageLayout>
  )
}

export default About
