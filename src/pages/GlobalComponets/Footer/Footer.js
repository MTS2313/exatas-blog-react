import Facebook from './icons/facebook.png'
import Instagram from './icons/instagram.png'
import Twitter from './icons/twitter.png'
import Reddit from './icons/reddit.png'
import Github from './icons/github.png'
import Exatas from './icons/exatas.png'
import './style.css'

const services = [
    {
        name: 'Web Design',
        link: ''
    },
    {
        name: 'Mobile Design',
        link: ''
    },
    {
        name: 'Mobile Development',
        link: ''
    },
    {
        name: 'Web Development',
        link: ''
    }
]
const navs = [
    {
        name: 'Home',
        link: ''
    },
    {
        name: 'Blog',
        link: ''
    },
    {
        name: 'About-us',
        link: ''
    },
    {
        name: 'Help',
        link: ''
    },
    {
        name: 'Login',
        link: ''
    },
    {
        name: 'Create account',
        link: ''
    },
]

function Footer() {
    return <>
        <footer className="footer">
            <div className='footer-1'>
                <div className='exatas-dev'>
                    <img src={Exatas} />
                    <p className='exatas-text'>Exatas</p>
                    <p className='dev-text'>Dev</p>
                </div>

                <p className='footer-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis tempus turpis. Praesent et finibus elit, nec tincidunt risus. Praesent ultrices ullamcorper commodo. Pellentesque quis enim egestas, accumsan lacus vitae, aliquam tortor. Integer semper ultricies magna, in fermentum mi semper quis.</p>
                <div className="social">
                    <img src={Facebook} />
                    <img src={Instagram} />
                    <img src={Twitter} />
                    <img src={Reddit} />
                    <img src={Github} />
                </div>
            </div>
            <div className='footer-2'>
                <h1>Services</h1>
                <ul>
                    {
                        services.map(
                            (linkServices) => (
                                <li>
                                    <a href={linkServices.link}>
                                        {linkServices.name}
                                    </a>
                                </li>
                            )

                        )
                    }
                </ul>
            </div>
            <div className='footer-3'>
                <h1>Navigation</h1>
                <ul>
                    {
                        navs.map(
                            (nav) => (
                                <li>
                                    <a href={nav.link}>
                                        {nav.name}
                                    </a>
                                </li>
                            )

                        )
                    }
                </ul>
            </div>
            <div className='footer-4'>
                <h1>Talk to us</h1>
                <form>
                    <input className='mail-input' type={'mail'} placeholder='Your email'/>
                    <div className='message-input'>
                        <textarea />
                        <input type={'submit'} className='sent-button' placeholder=''/>
                    </div>
                </form>
            </div>
        </footer>
    </>
}

export default Footer