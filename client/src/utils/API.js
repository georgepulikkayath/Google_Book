import axios from "axios";
import APIKEY from "../config/keys";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
 
  searchBooks: (query) => {

    return axios.get(URL + query );
  },
  
  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  },
  
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  } 
};