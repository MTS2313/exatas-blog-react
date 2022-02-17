import React from "react";
import Pag1 from './pag1/index'
import Pag2 from './pag2/index'
import Pag3 from './pag3/index'
import NavBar from '../Home/NavBar/nav_bar'
import EndBar from '../GlobalComponets/EndBar'
import ProgressBar from './ProgressBar/index'
import "./styles/LoginTapOne.css"

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            // FORM DATA
            form: {
                email: null,
                fullname: null,
                password: null,
                tags: [],
                authors: []
            },
            // PAG INDEX
            pagIndex: 1

        }

        this.updateIndex = this.updateIndex.bind(this);
        this.selectLayout = this.selectLayout.bind(this);
        this.addTag = this.addTag.bind(this);
        this.removeTag = this.removeTag.bind(this);        
        this.addAuthor = this.addAuthor.bind(this);
        this.removeAuthor = this.removeAuthor.bind(this);

    }

    componentDidMount(){

    }

    // -------------------> UPDATE INDEX 
    updateIndex(index){
        this.setState((prevState) => {
            prevState.pagIndex = index;
            return prevState;
        })
    }

    // -------------------> ADD TAG
    addTag(id){ 
        this.setState((prevState) => {
            prevState.form.tags.push(id);
            return prevState;
        })
    }

    // -------------------> REMOVE TAG
    removeTag(id){
        this.setState((prevState) => {
            // remove tag that contains id passed
            let tags = prevState.form.tags;
            const newTags = tags.filter((tag) => tag != id);
            
            prevState.form.tags = newTags

            return prevState;
        })
    }    

    // -------------------> ADD AUTHOR
    addAuthor(id){ 

        this.setState((prevState) => {
            prevState.form.authors.push(id);
            return prevState;
        })
    }

    // -------------------> REMOVE AUTHOR
    removeAuthor(id){
        this.setState((prevState) => {
            // remove tag that contains id passed
            let authors = prevState.form.authors;
            const newAuthors = authors.filter((author) => author != id);
            
            prevState.form.authors = newAuthors

            return prevState;
        })

    }
    
    // -------------------> SELECT LAYOUT 
    selectLayout(){
        switch(this.state.pagIndex){
            case 1:
                return <Pag1 updateIndex={this.updateIndex} form={this.state.form} />   
            case 2:
                return <Pag2 
                    updateIndex={this.updateIndex} 
                    tags={this.state.form.tags} 
                    addTag={this.addTag} 
                    removeTag={this.removeTag} />
            case 3:
                return <Pag3 
                    updateIndex={this.updateIndex} 
                    authors={this.state.form.authors}
                    addAuthor={this.addAuthor}
                    removeAuthor={this.removeAuthor} />
        }
    }
    render() {



        return(
        <>
                <header id="menubar">
                    <NavBar />
                </header>
                <section className="section_login">
                    <ProgressBar index={this.state.pagIndex} />
                    

                    {
                    // ------------> SELECT LAYOUT
                    this.selectLayout()
                    
                    }

                </section>
                <section className="page_rodape">
                    <EndBar />
                </section>
        </>
        )


    }

}

export default Register;