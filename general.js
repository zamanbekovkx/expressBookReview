
const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log('All books:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting all books:', error.message);
  }
}

async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    console.log('Book by ISBN:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting book by ISBN:', error.message);
  }
}

async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${BASE_URL}/author/${encodeURIComponent(author)}`
    );
    console.log('Books by author:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting books by author:', error.message);
  }
}

async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${BASE_URL}/title/${encodeURIComponent(title)}`
    );
    console.log('Books by title:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting books by title:', error.message);
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
