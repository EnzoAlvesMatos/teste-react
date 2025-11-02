export default function Check(propt) {
    return (
        <>
            <div className="check row mb-2">

                <div className="check3 col-md-6 col-sm-12">
                    <input type="checkbox" id="exampleCheck1" className="mr-1" />
                    <label htmlFor="exampleCheck1">{propt.nome}</label>
                </div>
                <div className="check2 col"><a href="#">{propt.nome2}</a></div>


            </div>
        </>
    )
}