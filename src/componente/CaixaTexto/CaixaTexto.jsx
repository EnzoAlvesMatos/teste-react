export default function CaixaTexto(propt){
    return(
        <>
        
            <div className="form-group caixatexto">
             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={propt.nome}></input>
             </div>
        </>
    )
}