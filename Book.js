import React from "react";

export default function Book({ book }) {
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <img
        src={coverImage}
        alt={book.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-3 text-lg font-semibold text-gray-800">{book.title}</h2>
      <p className="text-sm text-gray-500">
        {book.author_name?.[0] || "Unknown Author"}
      </p>
    </div>
  );
}
