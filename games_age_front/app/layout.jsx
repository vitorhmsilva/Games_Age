import NavBar from '@components/NavBar';
import '@styles/globals.css';

export const metadata = {
  title: 'Games Age',
  description: 'Descobrindo e compartilhando suas conquistas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <main>
        <NavBar />
        {children}
      </main>
    </html>
  );
}
