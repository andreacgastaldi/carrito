export const validateProduct = (product, fileRequired = true) => {
  const errors = {};

  if (!product.nombre || product.nombre.trim() === "") {
    errors.nombre = "El nombre es obligatorio";
  }

  if (!product.descripcion || product.descripcion.trim() === "") {
    errors.descripcion = "La descripción es obligatoria";
  }

  if (!product.price || product.price <= 0) {
    errors.price = "El precio debe ser un número mayor a 0";
  }
  if (!product.categoria || product.categoria.trim() === "") {
    errors.categoria = "La categoría es obligatoria";
  }
  if (fileRequired && !product.file) {
    errors.file = "La imagen es obligatoria";
  }
  return errors;
};