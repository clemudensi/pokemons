import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Pokemons } from '@/module';
import { Container } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="A list of Pokemons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container width="w-4/5">
        <Pokemons/>
      </Container>
    </>
  )
}
