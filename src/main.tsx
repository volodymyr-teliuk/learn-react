import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import DescribingUI from './topics/01-describing-ui';
import AddingInteractivity from './topics/02-adding-interactivity';
import ManagingState from './topics/03-managing-state';
import EscapeHatches from './topics/04-escape-hatches';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index: true, element: <Home/>},
            {path: 'describing-ui', element: <DescribingUI/>},
            {path: 'adding-interactivity', element: <AddingInteractivity/>},
            {path: 'managing-state', element: <ManagingState/>},
            {path: 'escape-hatches', element: <EscapeHatches/>},
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
);
