
import React from 'react';
//import SearchBar from './components/SearchBar';
//import Banner from './components/Banner';
//import BookList from './components/BookList';
//import BottomNavBar from './components/BottomNavBar';
//import './styles.css';



function App() {
 const books = [
    { title: 'The Goldfinch', cover: 'https://m.media-amazon.com/images/I/81QxwwBNU9L._SL1500_.jpg' },
    { title: 'The Secret History', cover: 'https://m.media-amazon.com/images/I/71HcEbK3pEL._SL1500_.jpg' },
    { title: 'Pride and Prejudice', cover: 'https://m.media-amazon.com/images/I/81NLDvyAHrL._SL1500_.jpg' },
  ];

  return (
    <div>
      <SearchBar />
      <Banner />
      <h2 style={{ marginLeft: '20px' }}>Discover</h2>
      <BookList title="Currently Reading" books={books} />
      <BookList title="Recommended" books={books} />
      <BookList title="Popular" books={books} />
      <BottomNavBar />
    </div>
  )
}

export default App
