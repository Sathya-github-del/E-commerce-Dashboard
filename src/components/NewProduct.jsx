import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NewProduct.css'

function NewProduct() {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: Add API call to save product
        console.log('Saving product:', product)
        navigate('/products') // Redirect back to products page after submit
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="new-product-page">
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="primary-button">Save Product</button>
                    <button
                        type="button"
                        className="secondary-button"
                        onClick={() => navigate('/products')}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewProduct
