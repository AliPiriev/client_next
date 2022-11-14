const LightModeBtn = (props) => {

    return (
        <button
            style={{background: 'red', position: 'absolute', right: '16px', padding: '5px'}}
            onClick={() => {
            props.state(true);
        }}> 
            LIGHT MODE TEST
        </button>
    );
};

export default LightModeBtn;