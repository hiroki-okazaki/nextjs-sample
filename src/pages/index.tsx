import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div style={{ position: 'relative', height: '100vh' }}>
        <button
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        ></button>
        <Image
          src="/top.jpeg"
          alt="トップページ"
          priority
          fill
          style={{ zIndex: -1 }}
          // width={500}
          // height={500}
        />
        <div></div>
      </div>
      <Link href="/chat">
        <div>chat</div>
      </Link>
      <Link href="/cat">
        <div>cat</div>
      </Link>
      <Link href="/form">
        <div>form</div>
      </Link>
    </main>
  )
}
