import React from 'react'
import { SessionContainer } from 'components/Container'
import SpeakerBox from './SpeakerBox'
import { Session } from 'types'
import Image from 'next/image'
import sessionHeader from 'assets/images/session-header.png'
import styles from './SessionComponent.module.scss'
import { DateDetail, StageDetail } from 'components/Session/SessionDetails'

interface Props {
  session: Session
}

export default function SessionComponent(props: Props) {
  console.log(props.session)
  return (
    <>
      <div className={styles.header__image}>
        <Image src={sessionHeader} alt="sessionHeader" layout="responsive" />
      </div>
      <SessionContainer>
        <div className={styles.grid}>
          <div className={styles.grid__column__full}>
            {props.session.video?.type === 'youtube' && props.session.video?.id &&
              <div className={styles.iframe}>
                <iframe className={styles.responsive_iframe} src={`https://www.youtube-nocookie.com/embed/${props.session.video?.id}`} />
              </div>
            }
            <div className={styles.header}>
              <h2 className={styles.header__title}>{props.session.name}</h2>
            </div>
            <div className={styles.textBox}>
              <p>{props.session.abstract}</p>
            </div>
            <div className={styles.details}>
              <DateDetail start={props.session.start} end={props.session.end} />
              <StageDetail stage={props.session.stage} />
            </div>
          </div>
          <div className={styles.grid__column__third}>
            <div className={styles.header}>
              <h2 className={styles.header__speakerTitle}>Speakers:</h2>
            </div>

            {props.session.speakers.map((speaker) => (
              <SpeakerBox key={speaker.id} speaker={speaker} />
            ))}
          </div>
        </div>
      </SessionContainer>
    </>
  )
}
