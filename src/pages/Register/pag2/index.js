import './style.css'
import ButtonAll from '../../GlobalComponets/ButtonAll'

const tagData = [
    {
        id: 1,
        name: "Artificial Intelligence"
    },
    {
        id: 2,
        name: "Deep Learning"
    },
    {
        id: 3,
        name: "Alexa Development"
    },
    {
        id: 4,
        name: "Robotics"
    },
    {
        id: 5,
        name: "Cryptocurrency"
    },
    {
        id: 6,
        name: "Mobile Development"
    },
    {
        id: 7,
        name: "Mobile Development"
    },
    {
        id: 8,
        name: "Mobile Development"
    },
    {
        id: 9,
        name: "Mobile Development"
    },
    {
        id: 10,
        name: "Mobile Development"
    },
    {
        id: 11,
        name: "Mobile Development"
    },
    {
        id: 12,
        name: "Mobile Development"
    },
]

const Pag2 = ({ updateIndex }) => {

    return (<>
        <section className='section'>
            <div className='select-tag-section'>
            <div></div>
            <div>
            <h1 className='h1-tt'>Now tell us, what do you like most?</h1>
            <div className='tag-selections'>
                {tagData.map((tag)=>(<div type="checkbox"  className='tag-model'>{tag.name}</div>
                ))}
            </div>
            </div>
            <div className="button-area">
                <div className="content">
                    <button className='back-btn'>Back</button>
                       <button className='next-btn'>Next</button>
                </div>
            </div>
            </div>
        </section>

    </>)
}

export default Pag2;