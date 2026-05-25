import { SubtopicPage, Example } from '../../../components/SubtopicPage'

function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
            width={70}
            height={70}
            className="rounded"
        />
    )
}

function Gallery() {
    return (
        <div>
            <h4 className="font-medium mb-2">Amazing scientists</h4>
            <div className="flex gap-2">
                <Profile />
                <Profile />
                <Profile />
            </div>
        </div>
    )
}

export default function YourFirstComponent() {
    return (
        <SubtopicPage
            title="Your First Component"
            docHref="https://react.dev/learn/your-first-component"
        >
            <Example title="Простий компонент і його повторне використання">
                <Gallery />
            </Example>
        </SubtopicPage>
    )
}
