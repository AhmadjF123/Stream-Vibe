import React from 'react'
import HomePage from './Pages/HomePage'
import MoviesShowsPage from './Pages/MoviesShowsPage'
import SubscriptionsPage from './Pages/SubscriptionsPage'
import SupportPage from './Pages/SupportPage'



import MainLayout from './Layouts/MainLayout'
import { createBrowserRouter, Router, Routes, Route } from "react-router";

import { RouterProvider } from "react-router/dom";


function App() {

   const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/movies-shows", element: <MoviesShowsPage /> },
        { path: "/subscriptions", element: <SubscriptionsPage /> },
        { path: "/support", element: <SupportPage /> },
,
        // { path: "/productdetails/:id", element: <ProductDetailsPage /> },

        // {
          // element: <ProtectedRoute />,
          // children: [
            // { path: "/profile", element: <ProfilePage /> },
            // { path: "/cart", element: <CartPage /> },
            // { path: "/wishlist", element: <WishList /> },
            // { path: "/checkout", element: <CheckoutPage /> },
          ],
        },
    // { path: "*", element: <NotFoundPage /> },
  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App