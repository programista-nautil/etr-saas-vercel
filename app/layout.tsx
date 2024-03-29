import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
	title: 'ETR - Łatwy Tekst',
	description: 'Twoje narzędzie do tworzenia łatwego tekstu',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClientProviders>
			<html lang='pl'>
				<body className='flex flex-col min-h-screen'>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
						<Header />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClientProviders>
	)
}
