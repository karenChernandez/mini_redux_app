import React from 'react';
import {connect} from 'react-redux';
import {getMusic} from '../../redux/musicAisle';



function Component1(props){
    
console.log('What is PROPS?', props)


    return(
        <div>
            <h1>This is Component1!</h1>
            <button onClick={()=>props.getMusic()}>Add</button>

        </div>
    )
}
//This is my global state being send to PROPS
const mapStateToProps=state=>{
    console.log('What is STATE?', state)
    return{
        myMusic:state.musicAisle.music
    }
}
//This is my global Function being send to PROPScd 
const mapDispatchToProps={
    getMusic
}


export default connect(mapStateToProps, mapDispatchToProps)(Component1);