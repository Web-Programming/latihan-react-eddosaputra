import React from "react";


function Product(){
    // const products = ["Asus", "Acer", "Lenovo"];
    const products = [
        {id : "P001", nama : "Asus", harga : 8000000, deskripsi: "High performance laptop", urlFoto: require("./asus.jpeg")},
        {id : "P002", nama : "Acer", harga : 9000000, deskripsi: "Affordable and reliable", urlFoto: require("./acer.jpeg")},
        {id : "P003", nama : "Lenovo", harga : 10000000, deskripsi: "Business class laptop", urlFoto: require("./lenovo.jpeg")}
    ]
    // const displayProducts = products.map((product) => (
    //     <div key={product}>{product}</div>   
    // ));
    // return <div>{displayProducts}</div>;

    return (
        <table border="1" width="75%">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Deskripsi</th>
                    <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((product) => {
                    return (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.nama}</td>
                        <td>{product.harga}</td>
                        <td>{product.deskripsi}</td>
                        <td><img src={product.urlFoto} width="100"/></td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    )

}

export default Product;