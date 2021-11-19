import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Test } from './test'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    Welcome NextJs
      <Test/>
    </div>
  )
}

export default Home
