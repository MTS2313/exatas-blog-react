import '../styles/register.css'
import { useEffect } from 'react';

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

const Pag2 = ({ updateIndex, tags, addTag, removeTag }) => {

    useEffect(() => {
       console.log(tags)
    });


    function onTagChange(checkbox,id){
        // toggle class
        checkbox.classList.toggle('active')
        
        const addOrRemove = tags.includes(id);

        // add or remove tag from state
        if(addOrRemove == true) removeTag(id);
        else addTag(id);
    } 

    return (<>
        <section className='section'>
            <div className='select-tag-section'>
            <div></div>
            <div>
            <h1 className='h1-tt'>Now tell us <br /> what do you like most?</h1>
            <div className='tag-selections'>
                {tagData.map((tag)=>(
                    <div 
                    type="checkbox"  
                    className={"tag-model "+ (tags.includes(tag.id) && 'active')} 
                    onClick={(e) => {onTagChange(e.target, tag.id)}}>
                        {tag.name}
                    </div>
                ))}
            </div>
            </div>
            <div className="button-area">
                <div className="content">
                    <button className='back-btn' onClick={() => updateIndex(1)}>Back</button>
                       <button className='next-btn' onClick={() => updateIndex(3)}>Next</button>
                </div>
            </div>
            </div>
        </section>

    </>)
}

export default Pag2;