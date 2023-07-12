import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from "./Footer";

function App()
{

  const [ items, setItems ] = useState( [
    {
      id: 1,
      checked: false,
      item: "Blah"
    },
    {
      id: 2,
      checked: false,
      item: "Blah Blah"
    },
    {
      id: 3,
      checked: false,
      item: "Blah Blah Blah"
    }
  ] );

  const handleCheck = ( id ) =>
  {
    const listItems = items.map( ( item ) => item.id === id ? { ...item, checked: !item.checked } : item )
    setItems( listItems )
    localStorage.setItem( 'genericlist', JSON.stringify( listItems ) )
  }

  const handleDelete = ( id ) =>
  {
    const listItems = items.filter( ( item ) => item.id !== id )
    setItems( listItems )
    localStorage.setItem( 'genericlist', JSON.stringify( listItems ) )
  }

  return (
    <div className="App">
      <Header /*title="Generic List"*/ />
      <Content
        items={ items }
        handleCheck={ handleCheck }
        handleDelete={ handleDelete } />
      <Footer length={ items.length } />
    </div>
  );
}

export default App;
