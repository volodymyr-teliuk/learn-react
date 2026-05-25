import {Example, SubtopicPage} from '../../../components/SubtopicPage';

function TodoList() {
    return (
        <>
            <h1>Hedy Lamarr's Todos</h1>
            <img
                src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </>
    );
}

export default function WritingMarkupWithJsx() {
    return (
        <SubtopicPage
            title="Writing Markup with JSX"
            docHref="https://react.dev/learn/writing-markup-with-jsx"
        >
            <Example title="Writing Markup with JSX">
                <TodoList/>
            </Example>

        </SubtopicPage>
    );
}
