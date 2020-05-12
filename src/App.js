import React from 'react';
import BookProvider from './context/bookcontext';
import Nav from '../src/components/navbar';
import List from './components/booklist';
import FormB from './components/bookform'

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Nav/>
        <List/>
        <FormB />
      </BookProvider>
    </div>
  )
}

export default App;
