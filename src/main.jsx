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
import { GlobalProvider } from './context/globalContext';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/projects',
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
        <GlobalProvider>
            <NavBar/>
            <RouterProvider router={router} />
        </GlobalProvider>
        <Analytics/>
        <SpeedInsights/>
    </StrictMode>,
)
