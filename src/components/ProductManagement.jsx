import { useState } from 'react'
function ProductManagement({ products, onUpdate }) {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        stock: '',
        description: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
            onUpdate()
        } catch (error) {
            console.error('Error adding product:', error)
        }
    }

    return (
        <div className="product-management">
            <h2>Product Management</h2>
            {/* Add form and product list */}
        </div>
    )
}

export default ProductManagement 