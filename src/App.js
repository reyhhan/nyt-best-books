import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';

const Footer = () => {
  return (
    <div className="footerStyle">
      <br />
      <em><b>Copyrights © New York Times Best Selling Books 2020</b></em>
      <p><small>All Rights Reserved</small></p>
    </div>
  )
}

const App = () => {
  const [list, setList] = useState([]);
  const [books, setBooks] = useState([]);
  const [show, setModal] = useState(false);
  const [details, setDetails] = useState({
    author: null, book_image: null, description: null,
    price: null, publisher: null, title: null,
    contributor: null, rank_last_week: null, buy_links: null,
  })
  const [encode, setEncode] = useState({
    list_name_encoded: "combined-print-and-e-book-fiction",
    display_name: "Combined Print & E-Book Fiction"
  })

  //fetch  the best selling book list name from api
  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${api_key}`)
      .then(response => {
        setList(response.data)
      })
  }, [])

  //fetch the books from best sellers list from api
  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/books/v3/lists/current/${encode.list_name_encoded}?api-key=${api_key}`)
      .then(response => {
        setBooks(response.data)
      })
  }, [encode.list_name_encoded])

  //proceed to amazon website to purchase on clicking Buy
  const setUrl = (url) => {
    const handler = () => {
      window.open(url)
    }
    return handler
  }

  //get the selected book details on clicking View
  //opens modal view on View Click
  const setView = (detail) => {
    const handler = () => {
      setModal(true);
      setDetails(detail)
    }
    return handler
  }
  //close modal
  const handleClose = () => setModal(false);

  return (
    <div>
      <div className="header">
        The New York Times Best Sellers
      </div>

      <div className="row">
        <div className="left">
          <ul id="myMenu">
            <h5>Categories</h5>
            {list.results?.map(list =>
              <li onClick={(() => setEncode({
                list_name_encoded: list.list_name_encoded,
                display_name: list.display_name
              }))} key={list.list_name}>{list.list_name}</li>)}
          </ul>
        </div>

        <div className="right">
          <div className="list-name-class">{encode.display_name}</div>
          <hr />
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title><i>{details.title}&nbsp;&nbsp;<small>{details.contributor}</small></i>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="left-modal">
                  {<img src={details.book_image} height="220px" width="150" alt="book" />}
                  <p className="rank-class">Rank this week &nbsp;#{details.rank_last_week}</p>
                </div>
                <div className="right-modal">
                  <p><b>Author  : {details.author} </b></p>
                  <p><b>Description</b> : {details.description}</p>
                  <p><b>Publisher</b> : {details.publisher}</p>
                  <p><b>Price</b> : ${details.price}</p>
                  <p><b>Purchase</b></p>
                  <div className="flex-modal">{details.buy_links?.map(deet =>
                    <div key={deet.name}><a href={deet.url}>{deet.name}</a></div>)}
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          <div className="flex-container">
            {books.results?.books?.map(b =>
              <div key={b.rank}>
                {<img src={b.book_image} height="190px" width="130" alt="book-pic" />}
                <p className="book-title">{b.title}</p>
                <button className="view-book" onClick={setView({
                  author: b.author,
                  book_image: b.book_image,
                  description: b.description,
                  price: b.price,
                  publisher: b.publisher,
                  title: b.title,
                  contributor: b.contributor,
                  rank_last_week: b.rank_last_week,
                  buy_links: b.buy_links,
                })}>View</button>
                <button className="buy-book" onClick={setUrl(b.amazon_product_url)}>Buy</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  )
}

export default App

