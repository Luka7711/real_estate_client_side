import Icon from "../Shared/Icons";


const iconContainer = {
    margin: '0 auto',
    fontSize: '1.3rem'
}

const arrowBtn = {
    color: 'white'
}


export default function SlideBtn({
      icon,
      style,
      btnVal,
      handleSlide
    }) {
    return (
        <div style={style} onClick={() => handleSlide(btnVal)}>
            <div style={iconContainer}>
                <Icon icon={icon} style={arrowBtn}/>
            </div>
        </div>
    )
}