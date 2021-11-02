import React,{useState} from 'react';
const Op = ["+", "-", "*", "/"," %"];
var index ; 
function Button() {
 
    const [Cal, setCal] = useState("");
    const [num, setNum] = useState("");
    const [Symbol, setSym] = useState("");
    const val=(event)=>{
       setCal(Cal+ event.target.value);
    }
    const dot=(event)=>{
       if(!(Cal.includes(".")))
       {
         setCal(Cal+ event.target.value);
       }
       
      
   }
     const sum=(event)=>{ 
        setNum(Cal);
        setCal("");
        setSym(event.target.value);
       index = Op.indexOf(event.target.name);
     
     }
     const equal=()=>{
      var tmp=num;
      setSym("");
      setNum("");
      

        if(index === 0)
        {setCal(()=>{
         var a = parseFloat(tmp);
         var b = parseFloat(Cal);
            return (a + b);
        });}
        if(index === 1)
        {setCal(()=>{
           var a = parseFloat(tmp);
           var b = parseFloat(Cal);
            return (a - b);
        });}
        if(index === 2)
        {setCal(()=>{
           var a = parseFloat(tmp);
           var b = parseFloat(Cal);
            return (Number(a) * Number(b));
        });}
        if(index === 3)
        {setCal(()=>{
           var a = parseFloat(tmp);
           var b = parseFloat(Cal);
            return (a / b);
        });}
        if(index === 4)
        {setCal(()=>{
           var a = parseFloat(tmp);
           var b = parseFloat(Cal);
            return (a % b);
        });}
     } 
     const Clear=(event)=>{ 
        setCal("");
        setSym("");
     }
     const AC=(event)=>{ 
        setCal("");
        setNum("");
        setSym("");
     }

    return (
        <div className="Box " >
        <div className="Inputb"><h1> {num} {Symbol} {Cal}</h1></div>
       <br/>
    <button value="1" className="B1"  onClick={val}>1</button>
    <button value="2" className="B1"  onClick={val}>2</button>
    <button value="3" className="B1"  onClick={val}>3</button>
    <button value="+"  name="+" className="B2"  onClick={sum}>+</button>
    <button value="4" className="B1"  onClick={val}>4</button>
    <button value="5" className="B1"  onClick={val}>5</button>
    <button value="6" className="B1"  onClick={val}>6</button>
    <button value="-"   name="-" className="B2"  onClick={sum}>-</button>
    <button value="7" className="B1"  onClick={val}>7</button>
    <button value="8" className="B1"  onClick={val}>8</button>
    <button value="9" className="B1"  onClick={val}>9</button>
    <button value="*"  name="*" className="B2"  onClick={sum}>*</button>
    <button value="C"  className="B2"  onClick={Clear}>C</button>
    <button value="0" className="B1"  onClick={val}>0</button>
    <button value="AC"  className="B2" onClick={AC}>AC</button>
    <button value="/"  name="/" className="B2"  onClick={sum}>/</button>
    <button value="." className="B1"  onClick={dot}>.</button>
    <button value=""  className="B3"  onClick={equal}>=</button>
    <button value="%"  name="%" className="B2"  onClick={sum}>%</button>
    </div>
    )
}
export default Button;
