//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import MainFooter from "../organisms/MainFooter"
import MainHeader from "../organisms/MainHeader"
import SiteContent from "../organisms/SiteContent"

function App() {
  
  return (
    <>
      <div className="site">
        <MainHeader/>
        <SiteContent/>
        <MainFooter/>
      </div>
    </>
  )
}

export default App
