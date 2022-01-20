import React from 'react'
import { SliderStickyNotes } from 'src/components/common/slider/SliderVariations'
import { Link } from 'src/components/common/link'
import { DropdownVariationDots } from 'src/components/common/dropdown/Dropdown'
import { Share } from 'src/components/common/share'
import QRCode from 'qrcode.react'
import {
  CollapsedSection,
  CollapsedSectionHeader,
  CollapsedSectionContent,
} from 'src/components/common/collapsed-section'
import css from './home.module.scss'
import ticket from './ticket.png'
import { useAccountContext } from 'src/context/account-context'
import { navigate } from '@reach/router'
import { useActiveAddress } from "src/hooks/useActiveAddress"
import { useAvatar } from 'src/hooks/useAvatar'

export const Home = (props: any) => {
  const accountContext = useAccountContext()
  const activeAddress = useActiveAddress()
  const avatar = useAvatar()
  const loggedIn = !!accountContext.account

  const disconnect = async () => {
    accountContext.logout(accountContext.account?._id)
    navigate('/app/login')
  }

  return (
    <div className="section">
      <div className="content">
        {loggedIn && 
          <div className={`${css['account']} border-bottom`}>
            <div className="font-xxl font-primary">
              <h2 className="font-primary">
                Welcome{accountContext.account?.username && <>
                ,<br/>{accountContext.account?.username}
                </>}
                {!accountContext.account?.username && <> 👋</>}
              </h2>
            </div>
            <div className={css['profile-actions']}>
              <button className="label error plain" onClick={() => navigate('/app/settings')}>SETTINGS</button>
              {!accountContext.account?.username && <button className="label error plain" onClick={() => navigate('/app/settings/username')}>ADD USERNAME</button>}
              <button className="label error plain" onClick={() => navigate('/app/settings/wallets')}>MANAGE WALLETS</button>
              <button className="label error plain" onClick={() => navigate('/app/settings/email')}>MANAGE EMAILS</button>
            </div>

            <div className={css['dropdown']}>
              <DropdownVariationDots
                value="Another thing2"
                onChange={() => {}}
                options={[
                  {
                    text: 'Settings',
                    value: 'Settings',
                    onClick: () => { navigate('/app/settings')},
                  },
                  {
                    text: 'View on Etherscan',
                    value: 'Etherscan',
                    onClick: () => { navigate('https://etherscan.io/address/' + accountContext.account?.addresses[0])},
                  },
                  {
                    text: 'Logout',
                    value: 'Logout',
                    onClick: disconnect,
                  }
                ]}
              />
            </div>
          </div>
        }

        {loggedIn && !!activeAddress && 
          <CollapsedSection>
            <CollapsedSectionHeader>
              <div className={css['wallet']}>
                <img src={avatar.url} className={css['circle']} />

                {avatar.name && <div className={css['details']}>
                  <p className={css['network']}>ETHEREUM</p>
                  <p className={css['wallet-address']}>{avatar.name}</p>
                  <p className={css['connection']}>Connected</p>
                </div>}
              </div>
            </CollapsedSectionHeader>

            <CollapsedSectionContent>
              <div> Here's some hidden content </div>
            </CollapsedSectionContent>
          </CollapsedSection>
        }

        <div className={css['slider-container']}>
          <p className={`${css['header']} font-lg bold`}>
            Devcon

            {!loggedIn &&
              <button className="label plain" onClick={() => navigate('/app/login')}>LOGIN</button>
            }
          </p>

          <SliderStickyNotes
            cards={[
              {
                title: 'Schedule',
                description: 'View & manage your devcon schedule.',
                color: 'pink',
              },
              {
                title: 'Guides',
                description: 'Access Devcon Bogota local guides.',
                color: 'yellow',
              },
              {
                title: 'Venue Map',
                description: 'Find your way around the Conference.',
                color: 'green',
              },
              {
                title: 'Speakers',
                description: 'View speakers presenting at Devcon.',
                color: 'blue',
              },
            ]}
          />
        </div>

        <CollapsedSection>
          <CollapsedSectionHeader title="Updates" />

          <CollapsedSectionContent>
            <div>Here's some hidden content</div>
          </CollapsedSectionContent>
        </CollapsedSection>

        {loggedIn && 
          <CollapsedSection>
            <CollapsedSectionHeader title="Ticket Attestation" />

            <CollapsedSectionContent>
              <div className={css['ticket-container']}>
                <div className={css['ticket']}>
                  <img src={ticket} />

                  <p className={css['ticket-type']}>Builder Ticket</p>
                  <p className={css['ticket-id']}>No 1561854</p>
                  <div className={css['qr-code']}>
                    <QRCode value="https://en.wikipedia.org/wiki/Larry" style={{ height: '100%', width: '100%' }} />
                  </div>
                </div>

                <div className={css['bottom']}>
                  <button className="label neutral plain">Manage Attestations</button>
                  <div className={css['nft']}>
                    <Link to="https://www.youtube.com/watch?v=lCcwn6bGUtU" className={css['view-nft']}>
                      View ticket NFT
                    </Link>

                    <Share url="https://www.youtube.com/watch?v=lCcwn6bGUtU" />
                  </div>
                </div>
              </div>
            </CollapsedSectionContent>
          </CollapsedSection>
        }

        <CollapsedSection>
          <CollapsedSectionHeader title="Collection" />

          <CollapsedSectionContent>
            <div>Collection</div>
          </CollapsedSectionContent>
        </CollapsedSection>
      </div>
    </div>
  )
}
