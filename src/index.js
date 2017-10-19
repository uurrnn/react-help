import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAEKrlPyjOpY5sPQGCC_Rbdv7WxBuQZJD0'

// Create component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Put it on the page
ReactDOM.render(<App />, document.querySelector('.container'))