import React, { Component } from "react";
const Home = React.lazy(()=> import("./Hello"));
const Product =React.lazy(()=> import("./Product"));
const Registrasi =React.lazy(()=> import("./Registrasi"));

const routes = [

    {path :"/",Component : Home},
    {path :"/product",Component : Product},
    {path :"/register",Component : Registrasi}
]
export default routes;
