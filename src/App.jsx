import React from "react";
import HomePage from "./Pages/HomePage";
import MoviesShowsPage from "./Pages/MoviesShowsPage";
import SubscriptionsPage from "./Pages/SubscriptionsPage";
import SupportPage from "./Pages/SupportPage";

import MainLayout from "./Layouts/MainLayout";
import { createBrowserRouter, Router, Routes, Route } from "react-router";

import { RouterProvider } from "react-router/dom";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import SerieDetailsPage from "./Pages/SerieDetailsPage";
import CategoryDetailsPage from "./Pages/CategoryDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/movies-shows", element: <MoviesShowsPage /> },
        { path: "/subscriptions", element: <SubscriptionsPage /> },
        { path: "/support", element: <SupportPage /> },
        { path: "/movie-details/:id", element: <MovieDetailsPage /> },
        { path: "/serie-details/:id", element: <SerieDetailsPage /> },
        { path: "/category-details/:mediaType/:genreId", element: <CategoryDetailsPage /> },
    
        ,
      ],
    },
    // { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
