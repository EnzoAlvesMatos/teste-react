export default function Botao(props){
return(
    <>
    <div>
        <button className="BotaoEstilo" style={{backgroundColor:  props.background || "blue", color: props.Color || "black"  }} >{props.children}  </button>
    </div>
    </>
)
}