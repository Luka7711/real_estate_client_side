import { markerStyle, markerStyleHover } from './Hover_style';


export default function MarkerHover({ hover, text }) {

    const style= hover ? markerStyle : markerStyleHover;

    return (
        <div className='hint' style={style}>
            <div> {text} </div>
            <div style={{width: 80}} className="hint__content">
                Click me
            </div>
        </div>
    )
}
