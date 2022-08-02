import { Info } from 'components/domain/app/info'
import { AppLayout } from 'components/domain/app/Layout'
import { pageHOC } from 'context/pageHOC'
import React from 'react'
import { GetSessions, GetSpeakers } from 'services/programming'
import { DEFAULT_APP_PAGE } from 'utils/constants'
import { getGlobalData } from 'services/global'
export default pageHOC((props: any) => {
  return (
    <AppLayout>
      <Info {...props} />
    </AppLayout>
  )
})

export async function getStaticProps(context: any) {
  return {
    props: {
      ...(await getGlobalData(context.locale)),
      page: DEFAULT_APP_PAGE,
      sessions: await GetSessions(),
      speakers: await GetSpeakers(),
    },
  }
}
