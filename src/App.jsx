import React from 'react';
import Header from './components/Header';
import AddCard from './components/AddCard';
import Cards from './components/Cards';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddCard />
        <Search />
        <Cards />
      </>
    );
  }
}

export default App;
