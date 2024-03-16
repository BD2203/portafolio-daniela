const products = [
    {title:"Pastel de Chocolate",  url:"https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_250,h_250/https://www.recetasjudias.com/wp-content/uploads/2015/07/Pastel-de-Chocolate-2-300x300.jpg", description:"Un clásico irresistible que te hará volver por más."},
    {title:"Galletas de Avena", url:"https://www.laurafuentes.soy/wp-content/uploads/2016/08/magic-cookies-RC-300x300.jpg", description:"Perfectas para acompañar tu café o té de la tarde."},
    {title:"Tarta de Frutas", url:"https://media.mykaramelli.com/galeria/recetas/tarta-de-frutas_468_3_300x300.jpg", description:"Una explosión de sabor y frescura en cada bocado."},
  ];

  const testimonios = [
    {description:"¡Los postres de Con Dulzura son increíbles! Siempre son frescos y deliciosos. Definitivamente los recomendaría a todos mis amigos y familiares.", name: "- María G."},
    {description:"¡Los postres de Con Dulzura son una verdadera delicia! Siempre frescos y llenos de sabor. Sin duda, los recomendaría a cualquier amante de los postres. ¡Simplemente irresistibles!", name: "- Laura M."},
    {description:"Me encanta la variedad de postres que ofrece Con Dulzura. Cada bocado es una explosión de sabores deliciosos. Definitivamente, una experiencia culinaria que vale la pena repetir una y otra vez.", name: "- Carlos R."},
];

const handlerBarsContext = {
    "/index.html": {
        "title": "Home",
        products: products,
        testimonios: testimonios
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;