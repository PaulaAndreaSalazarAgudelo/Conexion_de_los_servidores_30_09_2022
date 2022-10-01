addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("https://paulaandreasalazaragudelo.000webhostapp.com/Conexion_de_los_servidores_30_09_2022/api.php");
    let data = await peticion.text();
    document.body.innerHTML = `<h1 style="background: red; color: #fff; font-family: Arial, Helvetica, sans-serif; padding: 10px; border-radius: 5px;">${data}</h1>`;
})