import React from 'react'

import { useSelector } from 'react-redux'
import style from './List.module.scss'
import Item from '../Item/Item'

export default function List({ title }) {
  const posts = useSelector((store) => store.posts)

  // console.log(posts)
  return (
    <div className={style.ListStyle}>
      <h1>{title}</h1>
      <div>
        {
          posts.map((post) =>
            <Item key={post.myId} item={post} />
          )
        }
      </div>
    </div>
  )
}
