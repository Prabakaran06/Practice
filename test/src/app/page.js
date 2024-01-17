import Image from 'next/image'
import styles from './page.module.css'
import Button from './components/Button.js'

export default function Home() {
  return (
    <main className={styles.main}>
      Hi      
      <Button />
    </main>
  )
}
