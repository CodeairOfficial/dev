import React from 'react'
import { Meetup } from 'src/types/Meetup';
import css from './events.module.scss'

interface MeetupOverviewProps {
  data: Array<Meetup>
}

export function MeetupOverview(props: MeetupOverviewProps) {

  const renderDomainName = (url: string) => { 
    return url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
  }

  return (
    <div className={css['events']}>
      {props.data.map((event: Meetup) => {
        return (
          <div className={css['event']}>
            <a className={css['link']} href={event.url}>
              <div>
                <p className={css['date']}>{event.location}</p>
                <p className={css['title']}>{event.title}</p>

                <a className={css['url']} target={event.url}>{renderDomainName(event.url)}</a>
              </div>
              <div className={css['image-column']}>
                <img src={event.imageUrl} alt={event.title} />
              </div>
            </a>
          </div>
        )
      })}
    </div>
  )
}
