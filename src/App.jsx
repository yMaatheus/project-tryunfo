import React from 'react';
import AddCard from './components/AddCard';
import Cards from './components/Cards';
import Header from './components/Header';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <AddCard />
        <Cards />
      </>
    );
  }
}

export default App;
