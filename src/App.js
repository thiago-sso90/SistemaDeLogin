import React  from 'react'
import { AuthProvider } from './contexts/auth'
import RouteApp from './routes'
import GlobalStyle from './style/globa'


const App = () => {

  return (
    <AuthProvider>
      <RouteApp/>
      <GlobalStyle/>
    </AuthProvider>   
 
  )
}

export default App
