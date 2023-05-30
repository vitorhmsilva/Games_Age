import NavBar from '@components/NavBar'
import '@styles/globals.css'
import Provider from "@components/Provider";

export const metadata = {
  title: 'Games Age',
  description: 'Descobrindo e compartilhando suas conquistas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body>
        <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

          <main>
            <NavBar />
            {children}
          </main>
        </Provider>
      </body>
    </html >
  )
}
