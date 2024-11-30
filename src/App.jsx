import './App.css'
import Revenue from './components/Revenue'


function App() {

  return (
    <>
      <div className='grid grid-cols-4'>
        <Revenue title={"Amount Pending"} orderCount={13} amount={"13123341"}/>
      </div>
    </>
  )
}

export default App
