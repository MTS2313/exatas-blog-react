import '../styles/register.css'
import {ReactComponent as UserIcon} from '../../../assets/svg/user.svg'
import {ReactComponent as PasswordIcon} from '../../../assets/svg/password.svg'
import {ReactComponent as EmailIcon} from '../../../assets/svg/email.svg'


const Pag1 = ({updateIndex}) => {


    return (<>
            
            <div className="content_login">
        <span className="text_top_content">
          <h2 className='h1-tt'>Let´s create your account</h2>
          <p>Sign up to get the most out of exatas.</p>
        </span>
        <div className="input_content">
            {/* ///////////////////////////////////////// USERNAME*/}
          <label>
            <UserIcon />   
            <input type="text" placeholder="Username" />
          </label>          
          
          <label>
            <EmailIcon />   
            <input type="email" placeholder="Email" />
          </label>

          <label>
            <PasswordIcon />
            <input type="password" placeholder="password"/>
          </label>

        </div>
        <div className="button-area">
                <div className="content float-right">
                       <button className='next-btn' onClick={() => updateIndex(2)}>Next</button>
                </div>
            </div>
      </div>

        </>
    )
}

export default Pag1;