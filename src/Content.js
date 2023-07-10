import React, { useState } from "react";

function Content()
{
  // eslint-disable-next-line no-unused-vars
  const [ name, setName ] = useState( "Dave" );

  // eslint-disable-next-line no-unused-vars
  const [ count, setCount ] = useState( 0 )

  // eslint-disable-next-line no-lone-blocks
  {/*const handleNameChange = () =>
  {
    const names = [ "Bob", "Dave", "Bill", ]
    const int = Math.floor( Math.random() * 3 )
    return setName( names[ int ] )
  }

  const handleClick = () =>
  {
    setCount( count + 1 )
    console.log( "Clicked It Count", count )
  }
  const handleClick1 = ( name ) =>
  {
    console.log( `${ name } Was Clicked` )
  }
  const handleClick2 = ( e ) =>
  {
    console.log( `${ e.target.innerText } Was Clicked` )
  }*/}

  return (
    <main>
      {/*} <p onDoubleClick={ handleClick }>
        Hello { name }!
      </p>
      <button onClick={ handleNameChange }>Change Name</button>
      <button onClick={ handleClick }>Count</button>
      <button onClick={ () => handleClick1( 'Dave' ) }>Dave - Click It </button>
  <button onClick={ ( e ) => handleClick2( e ) }>Event - Click It </button>*/}
    </main>
  )
}

export default Content;
