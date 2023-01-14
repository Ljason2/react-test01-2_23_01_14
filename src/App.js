import { useState } from "react";
import "./test01-2.css";
import "./data";



function ProImg(props){
    return(
        <>
        <img src={`./source/${props.color}.png`} alt="상세이미지" />
        </>
    )
}



function ProColor(props){

    function colorOption(){
        const colop=window.data.allColor;
       return colop.map((item,index)=>
         {return (<option style={{backgroundColor:"white"}}value={item}>{item}</option>)}
        )
    }
    
    function colorChange(event){
        props.hcolorChange(event.target.value)
    }

    return(
        <>
            <select name="color" id="colorSelect"
            defaultValue={props.color}
            onChange={colorChange}
            >
                {/* <option value="red">red</option> */}
                {colorOption()}
            </select>
        </>
    )
}



function App(){
    const [color,setColor]=useState('green');

   function hcolorChange(colors){
    setColor(colors)
    }


    return(
        <div id="wrap">
            <div id="image">
            <ProImg 
            color={color}
            />
            </div>

            <div id="color">
            <ProColor 
            color={color}
            hcolorChange={hcolorChange}
            />
            </div>
        </div>
    )
}

export default App;