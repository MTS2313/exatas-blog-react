import './style.css'

function FilledButton(props) {
    return <>
        <button className="btn btn-filled">
            <p>{props.text}</p>
        </button>
    </>
}
export default FilledButton