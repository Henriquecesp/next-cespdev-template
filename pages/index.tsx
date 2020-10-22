import Layout from 'layout'
import Head from 'next/head'
import styled from 'styled-components'

const Title = styled.h1`
  line-height: 1.15;
  font-size: 4rem;

  span {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & span:hover {
    text-decoration: underline;
  }
`

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Next CespDev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <main>
        <Title>
          Template <span>Next CespDev</span>
        </Title>

        <p className="description">
          Get started by editing <code>pages/index.tsx</code>
        </p>

      </main>
    </Layout>
  </div>
)

export default Home
