import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.css'

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import NavBar from './components/default/NavBar';
import Home from './pages/Home';
import Animation from './pages/Animation';
import About from './pages/About';
import Contact from './pages/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/introduction',
        element: <Animation/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
])


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NavBar/>
        <RouterProvider router={router} />
        <Analytics/>
        <SpeedInsights/>
    </StrictMode>,
)
