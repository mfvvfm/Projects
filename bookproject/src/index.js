import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
// setup vars
const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_ML2_.jpg',
    title: 'I Love You To The Moon And Back',
    author: 'Amelia Hepworth',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_ML2_.jpg',
    title: 'Our Class Is A Family',
    author: 'Shannon Olsen',
  },
  {
    img: 'https://m.media-amazon.com/images/I/412fh8yzImL._SY346_.jpg',
    title: 'The Vanishing Half: A Novel',
    author: 'Brit Bennett',
  },
]

//functions
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book
        return <Book book={book}></Book>
      })}
    </section>
  )
}
//deconstructoring props
const Book = (props) => {
  const { img, title, author } = props.book

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
