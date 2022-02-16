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
    }
]

const Pag3 = ({updateIndex, authors, addAuthor, removeAuthor}) => {

    const [searchText, setSearchText] = useState(null);

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
                    {authorsData.map(({imageUrl, fullname, role, id}) => {

                        // if searchText is filled
                        if(searchText){
                            let searchTextLowerCase = searchText.toLowerCase()
                            if(fullname.toLowerCase().includes(searchTextLowerCase) || role.toLowerCase().includes(searchTextLowerCase)){
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
                            }
                                
                        else{
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
                </div>
            </div>
         </div>
    </>)
}

export default Pag3;