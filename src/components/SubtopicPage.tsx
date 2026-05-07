import type { ReactNode } from 'react'

type SubtopicPageProps = {
    title: string
    docHref: string
    children: ReactNode
}

export function SubtopicPage({ title, docHref, children }: SubtopicPageProps) {
    return (
        <article>
            <header className="mb-6 pb-4 border-b">
                <h1 className="text-2xl font-bold mb-1">{title}</h1>

                href={docHref}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 hover:underline"
                >
                → react.dev
            </a>
        </header>
    <div className="space-y-6">{children}</div>
</article>
)
}

type ExampleProps = {
    title: string
    children: ReactNode
}

export function Example({ title, children }: ExampleProps) {
    return (
        <section className="border rounded-lg p-4 bg-white">
            <h3 className="text-base font-semibold mb-3 text-slate-700">{title}</h3>
            {children}
        </section>
    )
}
