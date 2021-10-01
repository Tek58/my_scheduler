import React, { ReactNode } from 'react'
import Header from './Header'
import styles from '../styles/Layout.module.css'

type Props = {
  children: ReactNode
}

function Layout(props: {
  children:
    | boolean
    | ReactNode
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) {
  return (
    <div>
      <Header />
      <div className={styles.container}>{props.children}</div>
    </div>
  )
}

export default Layout
