import { Link, NavLink, Outlet } from 'react-router-dom'

const topics = [
  { path: '/describing-ui', label: '1. Describing the UI' },
  { path: '/adding-interactivity', label: '2. Adding Interactivity' },
  { path: '/managing-state', label: '3. Managing State' },
  { path: '/escape-hatches', label: '4. Escape Hatches' },
]

export default function App() {
  return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b bg-white">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="font-bold text-lg">
              React Learn
            </Link>
            <nav className="flex gap-4 text-sm">
              {topics.map((t) => (
                  <NavLink
                      key={t.path}
                      to={t.path}
                      className={({ isActive }) =>
                          isActive
                              ? 'text-blue-600 font-medium'
                              : 'text-slate-600 hover:text-slate-900'
                      }
                  >
                    {t.label}
                  </NavLink>
              ))}
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-6 py-8">
          <Outlet />
        </main>
      </div>
  )
}
