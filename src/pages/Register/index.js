import React from "react";
import Pag1 from './pag1'
import Pag2 from './pag2'
import Pag3 from './pag3'
import NavBar from '../Home/NavBar/nav_bar'
import EndBar from '../GlobalComponets/EndBar'
import "./Styles/LoginTapOne.css"

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
    
    // -------------------> SELECT LAYOUT 
    selectLayout(){
        switch(this.state.pagIndex){
            case 1:
                return <Pag1 updateIndex={this.updateIndex} form={this.state.form} />   
            case 2:
                return <Pag2 updateIndex={this.updateIndex} form={this.state.form} />
            case 3:
                return <Pag3 updateIndex={this.updateIndex} form={this.state.form} />
        }
    }
    render() {



        return(
        <>
                <section className="section_login">
                    <header id="menubar">
                        <NavBar />
                    </header>
                    
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