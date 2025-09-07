import './App.css'
import WelcomeMessage from '../src/components/WelcomeMessage'
import Header from '../src/components/Header'
import MainContent from '../src/components/MainContent'
import Footer from '../src/components/Footer' 
import UserProfile  from './components/UserProfile' 

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
  )
}

export default App