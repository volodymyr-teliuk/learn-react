import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'

import DescribingUI from './topics/01-describing-ui'
import YourFirstComponent from './topics/01-describing-ui/subtopics/your-first-component'
import ImportingExporting from './topics/01-describing-ui/subtopics/importing-exporting'
import WritingMarkupWithJsx from './topics/01-describing-ui/subtopics/writing-markup-with-jsx'
import JavascriptInJsx from './topics/01-describing-ui/subtopics/javascript-in-jsx'
import PassingProps from './topics/01-describing-ui/subtopics/passing-props'
import ConditionalRendering from './topics/01-describing-ui/subtopics/conditional-rendering'
import RenderingLists from './topics/01-describing-ui/subtopics/rendering-lists'
import KeepingComponentsPure from './topics/01-describing-ui/subtopics/keeping-components-pure'

import AddingInteractivity from './topics/02-adding-interactivity'
import ManagingState from './topics/03-managing-state'
import EscapeHatches from './topics/04-escape-hatches'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            {
                path: 'describing-ui',
                element: <DescribingUI />,
                children: [
                    { index: true, element: <YourFirstComponent /> },
                    { path: 'your-first-component', element: <YourFirstComponent /> },
                    { path: 'importing-exporting', element: <ImportingExporting /> },
                    { path: 'writing-markup-with-jsx', element: <WritingMarkupWithJsx /> },
                    { path: 'javascript-in-jsx', element: <JavascriptInJsx /> },
                    { path: 'passing-props', element: <PassingProps /> },
                    { path: 'conditional-rendering', element: <ConditionalRendering /> },
                    { path: 'rendering-lists', element: <RenderingLists /> },
                    { path: 'keeping-components-pure', element: <KeepingComponentsPure /> },
                ],
            },
            { path: 'adding-interactivity', element: <AddingInteractivity /> },
            { path: 'managing-state', element: <ManagingState /> },
            { path: 'escape-hatches', element: <EscapeHatches /> },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
