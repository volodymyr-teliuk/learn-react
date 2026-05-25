import {Example, SubtopicPage} from '../../../components/SubtopicPage';

function Item({name, isPacked}: { name: string, isPacked: boolean }) {
    // let itemContent: ReactNode | null;
    // if (isPacked) {
    //     itemContent = (
    //         <del>
    //             {name + ' ✅'}
    //         </del>
    //     );
    // } else {
    //     itemContent = name;
    // }
    return (
        <li className="item">
            {name} {isPacked ? '✅' : '❌'}
        </li>
    );
}

function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}


export default function ConditionalRendering() {
    return (
        <SubtopicPage
            title="Conditional Rendering"
            docHref="https://react.dev/learn/conditional-rendering"
        >
            <Example title="Conditional Rendering">
                <PackingList></PackingList>
            </Example>

        </SubtopicPage>
    );
}
