import './style.css'

function TextButton(props) {
    return <>
        <button className="btn text-btn">
            {props.text}
        </button>
    </>
}
export default TextButton