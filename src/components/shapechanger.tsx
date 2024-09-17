type ShapeContent={
    shape:string
}

const ShapeChanger:React.FC<ShapeContent> =({shape})=>{
    return (
        <>
            {shape === "" ? <h1>Seleccione una</h1> : <h1>Figura Elegida: {shape}</h1>}
            <div className={`shape-container ${shape}`}></div>
        </>
    );
};
export default ShapeChanger;