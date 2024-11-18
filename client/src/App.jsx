import { Routes, Route } from 'react-router-dom';
import Path from '../paths';
import Header from './components/Header'
import Main from './components/Main';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer'
function App() {


  return (
    <>
      <Header />

      <Routes>
        <Route path={Path.Home} element={<Main />} />
        <Route path={Path.Gallery} element={<Gallery />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
