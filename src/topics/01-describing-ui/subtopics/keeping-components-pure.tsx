import {Example, SubtopicPage} from '../../../components/SubtopicPage';

export default function ConditionalRendering() {
    return (
        <SubtopicPage
            title="Keeping Components Pure"
            docHref="https://react.dev/learn/keeping-components-pure"
        >
            <p className="text-slate-500">Заготовка. Додай приклади тут.</p>
            <Example title="Keeping Components Pure">
                <span></span>
            </Example>

        </SubtopicPage>
    );
}
