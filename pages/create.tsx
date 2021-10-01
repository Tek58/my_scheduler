import React, { useState } from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'
import styles from '../styles/Create.module.css'

function NewView() {
  const [email, setEmail] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { email }
      await fetch('/api/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <form className={styles.form_container} onSubmit={submitData}>
          <h1 className={styles.title}>Atendee</h1>

          <input
            className={styles._input}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            value={email}
          />

          <input
            className={styles._submit}
            disabled={!email}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </Layout>
  )
}

export default NewView
