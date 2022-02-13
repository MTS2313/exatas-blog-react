import {ReactComponent as UserIcon} from '../../../assets/svg/user.svg'
import {ReactComponent as PasswordIcon} from '../../../assets/svg/password.svg'
import {ReactComponent as EmailIcon} from '../../../assets/svg/email.svg'

const Pag1 = ({updateIndex,form}) => {


    return (<>
            
            <div className="content_login">
        <span className="text_top_content">
          <h2>Let´s create your account</h2>
          <p>Sign up to get the most out of exatas.</p>
        </span>
        <span className="input_content">
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

        </span>
            <button onClick={() => updateIndex(2)}>next</button>
      </div>

        </>
    )
}

export default Pag1;