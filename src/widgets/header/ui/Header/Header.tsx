import Link from 'next/link'
import Image from 'next/image'

import { CurrentOnlineNumber } from '@/entities/stats'
import { UserEntry } from '@/entities/auth'
import { Logo, SocialNetworksLinksList } from '@/shared/ui'
import { LatestOpenCases } from '@/widgets/cases'

import { NavList } from '../NavList/NavList'

import classes from './Header.module.scss'

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.topLine}>
        <div className={classes.logo}>
          <Logo withShadow />
        </div>

        <div className={classes.latestOpenCases}>
          <LatestOpenCases />
        </div>

        <div className={classes.currentOnlineNumber}>
          <CurrentOnlineNumber />
        </div>
      </div>

      <div className={classes.bottomLine}>
        <NavList />

        <div className={classes.bottomRight}>
          <Link href='/crash-rocket' className={classes.crashRocketLink}>
            <Image src='/img/crash-rocket-bg.png' alt='Фон' priority fill />
            <Image src='/img/crash-rocket-girl.png' alt='Девочка' priority fill />

            <span>
              Краш <br /> Ракета
            </span>
          </Link>

          <div className={classes.socialNetworksList}>
            <SocialNetworksLinksList />
          </div>

          <div className={classes.userEntry}>
            <UserEntry />
          </div>
        </div>
      </div>
    </header>
  )
}
