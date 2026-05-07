import {Link} from 'react-router-dom';

const topics = [
    {path: '/describing-ui', label: '1. Describing the UI'},
    {path: '/adding-interactivity', label: '2. Adding Interactivity'},
    {path: '/managing-state', label: '3. Managing State'},
    {path: '/escape-hatches', label: '4. Escape Hatches'},
];

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">React Learn — практика</h1>
            <p className="mb-4 text-slate-700">
                Один проект на всі розділи{' '}
                <a
                    className="text-blue-600 underline"
                    href="https://react.dev/learn"
                    target="_blank"
                    rel="noreferrer"
                >
                    react.dev/learn
                </a>
                . Обери розділ зверху або зі списку нижче.
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
                {topics.map((t) => (
                    <li key={t.path}>
                        <Link className="text-blue-600 hover:underline" to={t.path}>
                            {t.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
