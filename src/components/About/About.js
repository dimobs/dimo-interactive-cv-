import data from '../../util/util';

const About = () => {

    return (
        <>
        <h2>About Pael</h2>
        <ul>
           {data.map(i => <li>{i.name} - {i.color}</li> )}
        </ul>
        </>
    )
}

export default About;