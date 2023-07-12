import React from 'react'
import LineItem from './LineItem'

const ItemList = ( { items, handleCheck, handleDelete } ) =>
{
  return (
    <ul>
      { items.map( ( item, i ) => (
        <LineItem
          key={ i }
          item={ item }
          handleCheck={ handleCheck }
          handleDelete={ handleDelete }
        />
      ) )
      }
    </ul>
  )
}

export default ItemList
