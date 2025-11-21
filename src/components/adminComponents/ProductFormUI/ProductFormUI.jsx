export const ProductFormUI =({
    product, 
    errors, 
    loading, 
    onChange, 
    onFileChange,
    onSubmit,
}) => {
    return (
        <section>  
            <form className= "product-form-container" onSubmit={onSubmit}>
                <h2>Formulario de Producto</h2>
                {/* Aquí van los campos del formulario */}
                <div>
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        value={product.nombre} 
                        onChange={onChange} 
                        required
                    />
                    {errors.nombre && <p className="error">{errors.nombre}</p>}
                </div>
                <div>
                    <label>Precio:</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={product.price} 
                        onChange={onChange} 
                        required
                        min="0"
                        step="0.01"
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                    </div>
                <div>
                    <label>Categoria:</label>
                    <input 
                        type="text" 
                        name="categoria" 
                        value={product.categoria} 
                        onChange={onChange} 
                        required
                    />
                    {errors.categoria && <p className="error">{errors.categoria}</p>}
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea  
                        name="descripcion" 
                        value={product.descripcion} 
                        onChange={onChange} 
                        required
                    />
                    {errors.descripcion && <p className="error">{errors.descripcion}</p>}

                </div>
                 <div>
                    <label>Imagen:</label>
                    <input 
                        type="file" 
                        name="imagen" 
                        accept="image/*"
                        onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} 
                        //required
                    />
                    {errors.imagen && <p className="error">{errors.imagen}</p>}
                </div>   

               

                <button className="btn" type="submit" disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar Producto'}
                </button>
            </form> 
        </section>
    );
}       
