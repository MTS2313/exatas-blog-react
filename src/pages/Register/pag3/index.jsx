import '../styles/register.css';
import AuthorCard from './authorCard';
import { useEffect, useState } from 'react';

const authorsData = [
    {
        id:0,
        imageUrl: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg',
        fullname: 'Rafael C. Martins',
        role: 'Dev Full Stack',
        selected: false
    },
    {
        id:1,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU',
        fullname: 'Gust. Carvalho',
        role: 'cara do designer',
        selected: true
    },    
    {
        id:2,
        imageUrl: 'https://www.postplanner.com/hs-fs/hub/513577/file-2886416984-png/blog-files/facebook-profile-pic-vs-cover-photo-sq.png?width=250&height=250&name=facebook-profile-pic-vs-cover-photo-sq.png',
        fullname: 'Matheus Augusto',
        role: 'Dev full bisteca',
        selected: true
    },
    {
        id:3,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDnkndWV6_6v_dks3oYlvJZwW6CQiCsV6Uw&usqp=CAU',
        fullname: 'Paniagua',
        role: 'Biologo',
        selected: false
    },
    {
        id:4,
        imageUrl: 'https://www.trickscity.com/wp-content/uploads/2018/02/whatsapp-dp-girls.jpg',
        fullname: 'Murilao enrolado',
        role: 'loja informática',
        selected: true
    },
    {
        id:5,
        imageUrl: 'https://media.istockphoto.com/photos/this-vacation-is-just-what-we-needed-picture-id639579050?b=1&k=20&m=639579050&s=170667a&w=0&h=eXDg8mhdvjn5jBxd5g3c1tt6D_ts9sVjtpF-FUBTq34=',
        fullname: 'Damiste',
        role: 'Biologo',
        selected: false
    },
    {
        id:6,
        imageUrl: 'https://i.pinimg.com/736x/f6/e4/52/f6e452ba617b998e920a8a204ce1b74a.jpg',
        fullname: 'Wolverine',
        role: 'loja informática',
        selected: true
    },
    {
        id:7,
        imageUrl: 'https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=',
        fullname: 'Pedraun',
        role: 'Biologo',
        selected: false
    },
    {
        id:8,
        imageUrl: 'https://image.shutterstock.com/mosaic_250/2780032/1667439913/stock-photo-headshot-portrait-of-smiling-millennial-male-employee-talk-on-video-call-or-web-conference-in-1667439913.jpg',
        fullname: 'hello kit',
        role: 'loja informática',
        selected: true
    }
]

const Pag3 = ({updateIndex, authors, addAuthor, removeAuthor}) => {

    const [searchText, setSearchText] = useState(null);
    const [showMoreCount, setShowMore] = useState(1);


    useEffect(() => {
        console.log(authors)
    });

    // ----------------------- ON AUTHOR CHANGE -----------------------
    function onAuthorChange(checkbox,id){
        console.log(checkbox, id)
        // toggle class
        checkbox.classList.toggle('active')
        
        const addOrRemove = authors.includes(id);

        // add or remove tag from state
        if(addOrRemove == true) removeAuthor(id);
        else addAuthor(id);
    } 
    // ----------------------- ON INPUT CHANGE -----------------------
    function onSearchInput(text){
        setSearchText(text)
    }

    let authorsToDisplay = [];
    let displayShowMore = false;
    let authorsPerSection = 8; 
    let authorsLimitDisplay = authorsPerSection * showMoreCount;
    // map search
    if(searchText){
        authorsToDisplay = authorsData.filter(({role,fullname}) => {
            let searchTextLowerCase = searchText.toLowerCase()
            if(fullname.toLowerCase().includes(searchTextLowerCase) || role.toLowerCase().includes(searchTextLowerCase)){
                return true;
            }else return false;
        }) 
    }
    else authorsToDisplay = authorsData;



    // check if display show more
    if(authorsToDisplay.length > authorsLimitDisplay ){
        displayShowMore = true;
    }


    return (
    <>
         <div className='container'>
            {/* /------------------------------------- ROW TITLE ------------------------------------- */}
            <div className="row">
                <h1 className='h1-tt'>Do you want to follow <br/> some authors?</h1>
            </div>
            {/* /------------------------------------- ROW MIDDLE ------------------------------------- */}
            <div className='row row-middle'>
                <button className='btn-screen back-btn' onClick={() => updateIndex(2)}>Back</button>
                <div className='col-input-search'>
                    <label htmlFor="inputSearch">
                        <input 
                        type="text" 
                        placeholder='Search' 
                        id='inputSearch'
                        onKeyUp={(e) => onSearchInput(e.currentTarget.value)} 
                        class='input-search' />
                    </label>
                </div>
                <button className='btn-screen next-btn'>Create Account</button>
            </div>
            {/* /------------------------------------- ROW MIDDLE ------------------------------------- */}
            <div className="row row-authors">
                <div className="authors-content">
                    {authorsToDisplay.map(({imageUrl, fullname, role, id}, index) => {
                                if(index < authorsLimitDisplay){
                                    return(
                                        <AuthorCard 
                                        imageUrl={imageUrl} 
                                        fullname={fullname} 
                                        role={role} 
                                        selected={authors.includes(id) ? true : false}
                                        onAuthorChange={onAuthorChange}
                                        id={id} />
                                        )
                                    }

                    })}

                    {displayShowMore && (
                        <div className='col-btn-showmore'>
                            <button onClick={() => {setShowMore(showMoreCount + 1)}}>Show More</button>
                        </div>
                    )}
                </div>
            </div>
         </div>
    </>)
}

export default Pag3;