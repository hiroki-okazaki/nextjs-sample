import Footer from './footer'
import Header from './header'

const Layout = (props: any) => {
  return (
    <>
      <Header title={props.title} />
      <main style={{ marginTop: 60 }}>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
