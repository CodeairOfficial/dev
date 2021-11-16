import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import css from './side-events.module.scss'
import { Link, LinkList } from 'src/components/common/link'
import {
  CollapsedSection,
  CollapsedSectionContent,
  CollapsedSectionHeader,
} from 'src/components/common/collapsed-section'
import { AppSearch } from 'src/components/domain/app/app-search'
import { useSort, SortVariation, Sort } from 'src/components/common/sort'
import { Filter, FilterFoldout, NoResults, useFilter } from 'src/components/common/filter'
import { SessionCard } from 'src/components/domain/app/session'
import logo from 'src/assets/images/test-asset.svg'

const dummySessions = [
  { id: '1', title: 'Test session' },
  { id: '2', title: 'Test session 2' },
  { id: '3', title: 'Test session 3' },
]

export const SideEvents = (props: any) => {
  const [search, setSearch] = React.useState('')
  const trackFilters = ['Test session', 'Test session 2', 'Test session 3']
  const [sessions, filterState] = useFilter({
    tags: true,
    multiSelect: true,
    filters: trackFilters.map(i => {
      return {
        text: i.toString(),
        value: i.toString(),
      }
    }),
    filterFunction: (activeFilter: any) => {
      if (!activeFilter || Object.keys(activeFilter).length === 0) return dummySessions

      console.log(activeFilter, 'active filter')

      return dummySessions.filter(speaker => activeFilter[speaker.title])
    },
  })

  const sortState = useSort(
    [],
    [
      {
        title: 'Alphabetical',
        key: 'name',
        sort: SortVariation.basic,
      },
      {
        title: 'Schedule',
        key: 'days',
        sort: SortVariation.basic,
      },
      {
        title: 'Tracks',
        key: 'tracks',
        sort: SortVariation.date,
      },
    ],
    false,
    'desc'
  )

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { in: ["bogota-city.png"] } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 800, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `)

  return (
    <div className="section">
      <div className="content">
        <div className={`${css['hero']}`}>
          <div className={`${css['hero-content']}`}>
            <div className={css['image-container']}>
              <Image fluid={data.allFile.nodes[0].childImageSharp.fluid} objectFit="cover" />
            </div>

            <div className={`${css['details']}`}>
              <div>
                <img src={logo} alt="Title" />

                <div className={css['title']}>
                  <h2 className="bold font-primary font-xxl">Devcon Bogota</h2>
                  <h2 className="font-primary font-xxl">Side Events</h2>
                </div>
              </div>

              <p className="font-sm">
                <b>Note:</b> These events are not organized or endorsed by Devcon in any capacity beyond listings and
                schedule integration for ease of access.
              </p>
            </div>
          </div>
        </div>

        <div className={css['curator']}>
          <div className={css['title']}>
            <p className="bold">Curated by:</p>
            <h3 className="bold">OFFDevcon</h3>
          </div>
          <div className={`${css['submit-event']} label neutral bold`}>Submit Event</div>
        </div>

        <CollapsedSection>
          <CollapsedSectionHeader title="Additional Resources" />
          <CollapsedSectionContent>
            <LinkList>
              <Link to="https://devcon.org">EF Ecosystem Support Program</Link>
              <Link to="https://devcon.org">Grantee Roundup August 2021</Link>
              <Link to="https://devcon.org">Grantee Roundup July 2021</Link>
            </LinkList>
          </CollapsedSectionContent>
        </CollapsedSection>

        <AppSearch
          noResults={sessions.length === 0}
          search={{
            placeholder: 'Search side events...',
            onChange: setSearch,
          }}
          sortState={sortState}
          filterStates={[
            { title: 'Test', filterState },
            { title: 'Test', filterState },
            { title: 'Test', filterState },
          ]}
          className={css['search-section']}
        />

        {/* <h4 className={`app-header ${css['header']}`}>Side Events</h4> */}

        {sessions.map(session => {
          return <SessionCard key={session.id} />
        })}
      </div>
    </div>
  )
}
