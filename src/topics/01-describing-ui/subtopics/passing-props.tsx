import {Example, SubtopicPage} from '../../../components/SubtopicPage';
import {getImageUrl} from '../../../utils/get-image-url.ts';
import type {ReactNode} from 'react';

type ProfileType = {
    firstName: string;
    lastName: string;
    image: {
        id: string;
        size: number;
    };
    profession: string;
    awards: string[];
    discovered: string;
}

const profiles: ProfileType[] = [
    {
        firstName: 'Maria',
        lastName: 'Skłodowska-Curie',
        image: {
            id: 'szV5sdG',
            size: 70,
        },
        profession: 'physicist and chemist',
        awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
        discovered: 'polonium (chemical element)'
    },
    {
        firstName: 'Katsuko',
        lastName: 'Saruhashi',
        image: {
            id: 'YfeOqp2',
            size: 100,
        },
        profession: 'geochemist',
        awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
        discovered: 'a method for measuring carbon dioxide in seawater'
    }
];

function Profile({person, children}: { person: ProfileType, children: ReactNode }) {
    return (
        <section className="profile">
            <h2>{person.firstName + ' ' + person.lastName}</h2>
            <img
                className="avatar"
                src={getImageUrl(person.image.id + (person.image.size < 90 ? 's' : 'b'))}
                alt="Maria Skłodowska-Curie"
                width={person.image.size}
                height={person.image.size}
            />
            {children}
            <ul>
                <li>
                    <b>Profession: </b>
                    {person.profession}
                </li>
                <li>
                    <b>Awards: {person.awards.length} </b>
                    ({person.awards.join(', ')})
                </li>
                <li>
                    <b>Discovered: </b>
                    {person.discovered}
                </li>
            </ul>
        </section>
    );
}

function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile person={profiles[0]}>
                <span>Children</span>
            </Profile>
            <Profile person={profiles[1]}>
                <span>Children</span>
            </Profile>
        </div>
    );
}


export default function PassingProps() {
    return (
        <SubtopicPage
            title="Passing Props to a Component"
            docHref="https://react.dev/learn/passing-props-to-a-component"
        >
            <Example title="Passing Props to a Component">
                <Gallery/>
            </Example>

        </SubtopicPage>
    );
}
