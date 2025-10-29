import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();

      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs.slice(0, 15)); // show first 15 books
      } else {
        setError("No results found. Try a different title.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">📚 Book Finder</h1>

      <form onSubmit={searchBooks} className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 w-72 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-600">Loading...</p>}

      {error && <p className="text-red-500 font-medium">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {books.map((book) => (
          <div
            key={book.key}
            className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition"
          >
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className="h-48 w-full object-cover rounded-md mb-3"
              />
            ) : (
              <div className="h-48 bg-gray-300 rounded-md mb-3 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <h3 className="font-semibold text-lg text-gray-800">
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
