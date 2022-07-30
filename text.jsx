export var url='https://clonwordle.herokuapp.com/';
export  const Conection=()=>{
    const ws = new WebSocket('wss://ejemplosocketword.herokuapp.com/');
    ws.onopen = () => {
        console.log("holo")
        ws.send(JSON.stringify({
                  Type: 'conectado',
                  User: localStorage.getItem("user"),
                  packetcodigo:localStorage.getItem("codigo")
        })
  )}

   const Conex=()=>{
    
    
    console.log("holio")
    ws.send(JSON.stringify({
              Type: 'mantenerCon',
              User: localStorage.getItem("user")
    })
)}
    }
  
