import './App.css'
import useAxios from './hooks/UseAxios'

function App() {
  const [data] = useAxios("www.google.de", "get")
  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export default App
