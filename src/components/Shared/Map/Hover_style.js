const marker_size = 10;

const markerStyle = {
    position: 'absolute',
    width: marker_size,
    height: marker_size,
    left: -marker_size / 2,
    top: -marker_size / 2,

    border: '4px solid #f44336',
    borderRadius: "50%",
    background: '#fff',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
    cursor: 'pointer'
};

const markerStyleHover = {
    ...markerStyle,
    border: '4px solid #008000',
    color: '#f44336'
}

export { markerStyle, markerStyleHover, marker_size }; 