import React from 'react'
import Page from 'components/common/layouts/page'
import { PageHero } from 'components/common/page-hero'
import themes from './themes.module.scss'
import { pageHOC } from 'context/pageHOC'
import { getGlobalData } from 'services/global'
import { GetPage } from 'services/page'
import { usePageContext } from 'context/page-context'
import { CodeOfConduct, TermsOfService } from 'components/common/layouts/footer/Legal'

export default pageHOC(function BlogsTemplate(props: any) {
  const pageContext = usePageContext()

  return (
    <Page theme={themes['news']}>
      <PageHero />

      <div className="section">
        <TermsOfService />
      </div>
    </Page>
  )
})

export async function getStaticProps(context: any) {
  const globalData = await getGlobalData(context)
  const page = await GetPage('terms-of-service', context.locale)

  return {
    props: {
      ...globalData,
      page,
    },
  }
}
