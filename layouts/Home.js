import Head from 'next/head'

const Home = ({ children }) => {
  return (
    <>
      <Head>
        <title>React Obstacle Course</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Home
