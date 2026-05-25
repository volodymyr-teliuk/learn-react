import { NavLink, Outlet } from 'react-router-dom'

const subtopics = [
    { path: 'your-first-component', label: '1. Your First Component' },
    { path: 'importing-exporting', label: '2. Importing and Exporting' },
    { path: 'writing-markup-with-jsx', label: '3. Writing Markup with JSX' },
    { path: 'javascript-in-jsx', label: '4. JavaScript in JSX' },
    { path: 'passing-props', label: '5. Passing Props' },
    { path: 'conditional-rendering', label: '6. Conditional Rendering' },
    { path: 'rendering-lists', label: '7. Rendering Lists' },
    { path: 'keeping-components-pure', label: '8. Keeping Components Pure' },
]

export default function DescribingUILayout() {
    return (
        <div className="grid grid-cols-[240px_1fr] gap-8">
            <aside className="border-r pr-4">
                <h2 className="text-lg font-semibold mb-3">Describing the UI</h2>
                <nav className="flex flex-col gap-1 text-sm">
                    {subtopics.map((s) => (
                        <NavLink
                            key={s.path}
                            to={s.path}
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-600 font-medium'
                                    : 'text-slate-600 hover:text-slate-900'
                            }
                        >
                            {s.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>
            <section>
                <Outlet />
            </section>
        </div>
    )
}
