import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Routers from "./routes/Routers"

const Layout = () => {
  return (
    <>
        <Header/>
        <main>
            <Routers/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout