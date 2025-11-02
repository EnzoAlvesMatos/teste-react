export default function CaixaSenha(propt){
    return(
        <>
        <div className="form-group caixatexto">
           <input type="password" className="form-control" id="exampleInputPassword1" placeholder={propt.nome}></input> 
        </div>
        </>
    )
}