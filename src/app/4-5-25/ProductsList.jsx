import React from 'react'


function ProductsList({ product, key }) {

    const styles = {

        card: {
            width: "320px",
            border: "1px solid #ddd",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.39)",
            overflow: "hidden",
            margin: "20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: "#fff",
            transition: "transform 0.3s",
        },
        image: {
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderBottom: "1px solid #eee",
        },
        content: {
            padding: "16px",
        },
        name: {
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "8px",
            color: "#333",
        },
        description: {
            fontSize: "14px",
            color: "#555",
            marginBottom: "10px",
        },
        price: {
            fontSize: "16px",
            fontWeight: "bold",
            color: "#e91e63",
            marginBottom: "6px",
        },
        category: {
            fontSize: "13px",
            color: "#666",
            marginBottom: "4px",
        },
        rating: {
            fontSize: "14px",
            color: "#ffa000",
            marginBottom: "8px",
        }
    };


    return (
        <div key={product.id}>
            <div style={styles.card}>
                <img src={product.imageUrl} alt={product.name} style={styles.image} />
                <div style={styles.content}>
                    <h2 style={styles.name}>{product.name}</h2>
                    <p style={styles.description}>{product.description}</p>
                    <p style={styles.price}>💰 ${product.price.toFixed(2)}</p>
                    <p style={styles.category}>📦 {product.category}</p>
                    <p style={styles.rating}>⭐ {product.rating} / 5</p>
                    <p style={{ color: product.inStock ? "green" : "red" }}>
                        {product.inStock ? "In Stock ✅" : "Out of Stock ❌"}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ProductsList
