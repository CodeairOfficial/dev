import React, { useState } from 'react'
import css from './settings.module.scss'
import { useAccountContext } from 'context/account-context'
import { Alert } from 'components/common/alert'
import AccountFooter from '../AccountFooter'
import { Button } from 'components/common/button'
import { InputForm } from 'components/common/input-form'
import { useAvatar } from 'hooks/useAvatar'

export default function UsernameSettings() {
  const accountContext = useAccountContext()
  const currentAccount = accountContext.account
  const avatar = useAvatar()
  const [error, setError] = useState('')
  const [username, setUsername] = useState(currentAccount?.username ?? avatar.ens ? avatar.name : '')

  if (!accountContext.account) {
    return <></>
  }

  async function updateProfile() {
    if (accountContext && currentAccount) {
      const updated = await accountContext.updateAccount(currentAccount._id, {...currentAccount, username: username})
      if (updated) {
        setError('Profile successfully updated.')
      } else {
        setError('Error updating profile.')
      }
    }
  }

  return (
    <div className={css['container']}>
      <div>
        <div className="section">
          <div className="content">

            <div className={css['alert']}>
              {error && <Alert type="info" message={error} />}
            </div>

            <div className={css['form']}>
              <p className={`${css['title']} title`}>Edit Username</p>
              {avatar.ens && !currentAccount?.username && 
                <p className={css['content']}>You&apos;re using your ENS username. Updating your username on Devcon.org doesn&apos;t update your ENS name.</p>
              }

              <InputForm 
                className={css['input']} 
                placeholder="Username"
                defaultValue={username} 
                onChange={(value) => setUsername(value)} 
                onSubmit={updateProfile} />
                
              <Button className={`red`} onClick={updateProfile}>Update username</Button>
            </div>
          </div>
        </div>
      </div>

      <AccountFooter />
    </div>
  )
}