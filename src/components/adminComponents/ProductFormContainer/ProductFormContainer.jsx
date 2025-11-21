import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI"; 
import { validateProduct } from "../../../utils/validateProduct";  
import { uploadToImgbb } from "../../../services/uploadImage";  
import { createProduct } from "../../../services/products";
import "../ProductFormContainer/ProductFormContainer.css";

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    const [product, setProduct] = useState({
        nombre: "",
        descripcion: "",
        price: "",
        categoria: "",
        
    });
    const [errors, setErrors] = useState({}); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);
        
        const newErrors = validateProduct({ ...product, file }); //, file }, !file);
        console.log("Errores de validación:", newErrors);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }
        try {
            console.log("Archivo a subir:", file);
            
            const imageUrl = await uploadToImgbb(file);
            const productData = {
                ...product,
                price: Number(product.price),
                imagen: imageUrl,
            };
            await createProduct(productData);
            // Reiniciar el formulario o mostrar un mensaje de éxito aquí
            alert("Producto creado con éxito");
            setProduct({
                nombre: "",
                descripcion: "",
                price: "",
                categoria: "",
            });
            setFile(null);
            // Lógica para manejar el envío del formulario
            console.log("Producto enviado:", productData);
        } catch (error) {
            setErrors({ general: error.message });
        } finally {
            setLoading(false);
        }
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return <ProductFormUI 
    product={product} 
    errors={errors} 
    loading={loading} 
    onChange={handleChange} 
    onFileChange={setFile} 
    onSubmit={handleSubmit} />;


};