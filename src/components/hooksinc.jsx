import React ,{useState}from 'react'

export default function Hooksinc() {  // should use destructured arrays 
    const [count,inCount] = useState(0);

  
    return (
        <div>
            <button onClick = {()=>inCount(count+1)}>INC</button> <br /><br />
            <button onClick = {()=>inCount(count-1)}>DEC</button><br /><br />
            <button onClick = {()=>{inCount(0); if(count == 0) {alert("Already Cleared") 
        
        // swal({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success",
        //     button: "Aww yiss!",
        //   });
        
        }}}>CLR</button>
            <h1>Count : {count}</h1>
        </div>
    )
}
