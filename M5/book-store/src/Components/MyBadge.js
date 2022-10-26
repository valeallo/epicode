import React from 'react'
import Badge from 'react-bootstrap/Badge';

// Crea un componente di nome MyBadge, che riceverà una stringa di testo e un colore come props. 
// Questo componente dovrà renderizzare un componente Badge di react-bootstrap contenente tali proprietà.

const MyBadge = ({color, text}) => {
  return (
    <Badge bg={color} >{text}</Badge>
  )
}

export default MyBadge