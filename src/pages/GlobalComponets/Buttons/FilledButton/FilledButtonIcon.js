import './style.css'

function FilledButtonWithIcon(props) {
    return <>
        <button className="btn btn-filled">
            <p>{props.text}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z" fill="white" />
            </svg>

        </button>
    </>
}
export default FilledButtonWithIcon