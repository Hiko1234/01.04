import React from 'react'
// import costum styles
import s from './Number.module.css';

export const Number = ({number}) => {
  return (
    <>
        <h1 className={s.title}>Number - {number}</h1>
    </>
  )
}

export default Number