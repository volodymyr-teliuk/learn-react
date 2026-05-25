import {Example, SubtopicPage} from '../../../components/SubtopicPage';


const baseUrl = 'https://react.dev/images/docs/scientists/';
const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src={baseUrl + person.imageId + person.imageSize + '.jpg'}
                alt={person.name}
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}


export default function JavascriptInJsx() {
    return (
        <SubtopicPage
            title="JavaScript in JSX with Curly Braces"
            docHref="https://react.dev/learn/javascript-in-jsx-with-curly-braces"
        >
            <Example title="JavaScript in JSX with Curly Braces">
                <TodoList/>
            </Example>

        </SubtopicPage>
    );
}
