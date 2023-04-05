import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://www.linkpicture.com/q/BARYON-3화이트-배경.jpg',
    })
  }
  chainMenus.push({ header: 'sponsors' })
  chainMenus.push({
    title: 'Persistence',
    href: 'https://persistence.one/',
    logo: 'https://blog.persistence.one/wp-content/uploads/2021/10/cropped-256_Dark-3-80x80.png',
  })
  chainMenus.push({
    title: 'Umee',
    href: 'https://app.umee.cc/',
    logo: 'https://pbs.twimg.com/profile_images/1609579320577785857/hhygMdg9_400x400.jpg',
  })
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://explorer.baryon.guru',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Testnet Explorer',
      href: 'http://testnet.ping.pub', // http://testnet.baryon.guru
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/baryon_capital',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'FAQ',
    href: 'https://github.com/ping-pub/explorer/discussions',
    icon: 'MessageSquareIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/baryon-capital',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
