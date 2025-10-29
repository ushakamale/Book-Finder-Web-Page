# Book-Finder-Web-Page

# User Persona
Name: Alex  
Occupation: College Student  
Need: Alex wants an easy way to search for books by title and view basic information like cover image and author details.

# Project Overview
The Book Finder App allows users to search for books by entering a title.  
It fetches data from the "Open Library API" and displays the results in a simple and user-friendly interface.


# Tech Stack
Framework: React  
Styling: Tailwind CSS  
API: Open Library Search API (`https://openlibrary.org/search.json?title={bookTitle}`)  
State Management: React’s built-in `useState` and `useEffect` hooks  


# Features
1.Search books by title  
2.Display book cover, title, and author name  
3.Responsive and clean design  
4.Error handling for invalid searches (e.g: shows “No results found”)  


# How It Works
1. The user types a book title in the search bar.  
2. On clicking **Search**, the app fetches book data using the Open Library API.  
3. Results are displayed as cards showing cover image, book title, and author.  
