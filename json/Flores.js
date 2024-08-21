const flowers =
    [
        {
            "_id": 1,
            "Nombre": "Rosa",
            "Imagen": "./img/rosas.jpg",
            "Precio": "2500",
            "Descripción": "Esta hermosa rosa de crochet es perfecta para cualquier ocasión. Con su delicado trabajo artesanal, añade un toque de elegancia y color a cualquier ambiente.",
            "Galeria": [
                "../img/ramoRosas.jpg",
                "../img/ramoflores2.jpg",
                "../img/ramoArmado.jpg"
            ],
            "Tiempos": "2 días",
            "Stock": "20",
            "GastoEnvio": "1000 por ramo",
            "entrega": "Entregas en Naranjo Centro o Envío Postal.",
            "Garantía del producto": "Garantía de 30 días por defectos de fabricación.",
            "Valoración": [
                {
                    "Nombre": "Ana Pérez",
                    "Rating": "★★★★★",
                    "Comentario": "Una rosa preciosa, con detalles increíbles. ¡Es un trabajo artesanal de primera calidad!"
                },
                {
                    "Nombre": "Luis González",
                    "Rating": "★★★★☆",
                    "Comentario": "Muy bonita y bien hecha, pero me hubiera gustado que fuera un poco más grande."
                }
            ],
            "Tamanno": ["Pequeña"]
        },
        {
            "_id": 2,
            "Nombre": "Tulipán",
            "Imagen": "../img/ramotulipanes.jpg",
            "Precio": "2500",
            "Descripción": "Este tulipán de crochet está hecho con atención al detalle, capturando la belleza y la simplicidad de la flor original. Ideal para decoraciones primaverales.",
            "Galeria": [
                "../img/ramotulipanes.jpg",
                "../img/tulipanesrosados.jpg",
                "../img/tulipanesmorados.jpg"
            ],
            "Tiempos": "2 días",
            "Stock": "40",
            "GastoEnvio": "1000 por ramo",
            "entrega": "Entregas en Naranjo Centro o Envío Postal.",
            "Garantía del producto": "Garantía de 30 días por defectos de fabricación.",
            "Valoración": [
                {
                    "Nombre": "Carla Rodríguez",
                    "Rating": "★★★★☆",
                    "Comentario": "El tulipán es hermoso, pero el color no era tan vibrante como esperaba."
                },
                {
                    "Nombre": "Daniela Gómez",
                    "Rating": "★★★★★",
                    "Comentario": "Me encantaron estos tulipanes, perfectos para la decoración de primavera."
                }
            ],
            "Tamanno": ["Pequeña"]
        },
        {
            "_id": 3,
            "Nombre": "Tulipán Mediano",
            "Imagen": "../img/ramomonstering.jpg",
            "Precio": "3000",
            "Descripción": "Un tulipán de crochet de tamaño mediano, perfecto para centros de mesa o como regalo especial. Su diseño realista traerá la primavera a cualquier lugar.",
            "Galeria": [
                "../img/ramomonstering.jpg",
                "../img/monsterInc1.jpg",
                "../img/monsterInc2.jpg"
            ],
            "Tiempos": "3 días",
            "Stock": "10",
            "GastoEnvio": "1000 por ramo",
            "entrega": "Entregas en Naranjo Centro o Envío Postal.",
            "Garantía del producto": "Garantía de 30 días por defectos de fabricación.",
            "Valoración": [
                {
                    "Nombre": "Mario López",
                    "Rating": "★★★★☆",
                    "Comentario": "El tulipán tiene un buen tamaño y es bastante realista. Estoy satisfecho con la compra."
                },
                {
                    "Nombre": "Sofía Hernández",
                    "Rating": "★★★★★",
                    "Comentario": "Me encanta, es perfecto para decorar la mesa del comedor."
                }
            ],
            "Tamanno": ["Mediana"]
        },
        {
            "_id": 4,
            "Nombre": "Girasol",
            "Imagen": "../img/girasol.jpg",
            "Precio": "3500",
            "Descripción": "Este girasol de crochet irradia alegría y positividad. Su vibrante color amarillo es ideal para iluminar cualquier habitación.",
            "Galeria": [
                "../img/girasol.jpg",
                "../img/ramoGirasol2.jpg",
                "../img/ramonormal.jpg"
            ],
            "Tiempos": "3 días",
            "Stock": "40",
            "GastoEnvio": "1000 por ramo",
            "entrega": "Entregas en Naranjo Centro o Envío Postal.",
            "Garantía del producto": "Garantía de 30 días por defectos de fabricación.",
            "Valoración": [
                {
                    "Nombre": "Elena Vega",
                    "Rating": "★★★★★",
                    "Comentario": "¡Este girasol es tan alegre! Le da un toque de color a mi oficina."
                },
                {
                    "Nombre": "Fernando Ruiz",
                    "Rating": "★★★★☆",
                    "Comentario": "Me gusta mucho, aunque creo que el precio es un poco alto."
                }
            ],
            "Tamanno": ["Grande"]
        },
        {
            "_id": 5,
            "Nombre": "Flor Mágica (Rapunzel)",
            "Imagen": "../img/florrapunzel.jpg",
            "Precio": "7500",
            "Descripción": "Inspirada en la flor mágica de la historia de Rapunzel, esta pieza de crochet es una obra de arte única, perfecta para los amantes de los cuentos de hadas.",
            "Galeria": [
                "../img/florrapunzel.jpg",
                "../img/rapunzel1.jpg",
                "../img/rapunzel2.jpg"
            ],
            "Tiempos": "Una semana",
            "Stock": "10",
            "GastoEnvio": "1000 por ramo",
            "entrega": "Entregas en Naranjo Centro o Envío Postal.",
            "Garantía del producto": "Garantía de 30 días por defectos de fabricación.",
            "Valoración": [
                {
                    "Nombre": "Gabriela Martínez",
                    "Rating": "★★★★★",
                    "Comentario": "Una verdadera obra de arte, se nota el esfuerzo y la dedicación en cada detalle."
                },
                {
                    "Nombre": "Ricardo Méndez",
                    "Rating": "★★★★★",
                    "Comentario": "Perfecta para los fans de Rapunzel, es absolutamente mágica."
                }
            ],
            "Tamanno": ["Grande"]
        },
        {
            "_id": 6,
            "Nombre": "Flor Spiderman",
            "Imagen": "../img/florspiderman.jpg",
            "Precio": "3000",
            "Descripción": "Una flor de crochet con un toque divertido y temático, ideal para los fans de Spiderman. Añade un toque geek a tu decoración con esta pieza única.",
            "Galeria": [
                "../img/spiderman1.jpg",
                "../img/spiderman2.jpg",
                "../img/florspiderman.jpg"
            ],
            "Tiempos": "2 días",
            "Stock": "10",
            "GastoEnvio": "1000 por ramo",
            "entrega": "Entregas en Naranjo Centro o Envío Postal.",
            "Garantía del producto": "Garantía de 30 días por defectos de fabricación.",
            "Valoración": [
                {
                    "Nombre": "Juan Carlos",
                    "Rating": "★★★★★",
                    "Comentario": "¡Me encanta! Es el complemento perfecto para mi colección de Spiderman."
                },
                {
                    "Nombre": "Lucía Ramírez",
                    "Rating": "★★★★☆",
                    "Comentario": "Muy bonita, pero pensé que sería más grande."
                }
            ],
            "Tamanno": ["Pequeña"]
        },
        {
            "_id": 7,
            "Nombre": "Flor Shrek",
            "Imagen": "../img/florshrek.jpg",
            "Precio": "3500",
            "Descripción": "Inspirada en el mundo de Shrek, esta flor de crochet es perfecta para aquellos que buscan algo original y divertido. Ideal para regalar a los fans del ogro más famoso.",
            "Galeria": [
                "../img/florshrek.jpg",
                "../img/shrek1.jpg",
                "../img/shrek2.jpg"
            ],
            "Tiempos": "3 días",
            "Stock": "30",
            "GastoEnvio": "1000 por ramo",
            "entrega": "Entregas en Naranjo Centro o Envío Postal.",
            "Garantía del producto": "Garantía de 30 días por defectos de fabricación.",
            "Valoración": [
                {
                    "Nombre": "Carlos Herrera",
                    "Rating": "★★★★☆",
                    "Comentario": "Es una flor muy original y divertida. ¡A mis hijos les encantó!"
                },
                {
                    "Nombre": "Andrea Soto",
                    "Rating": "★★★★☆",
                    "Comentario": "Me gusta mucho, pero creo que podría tener más detalles en los colores."
                }
            ],
            "Tamanno": ["Mediana"]
        },
        {
            "_id": 8,
            "Nombre": "Flor Lavanda",
            "Imagen": "../img/lavanda.jpg",
            "Precio": "2000",
            "Descripción": "Esta delicada flor de lavanda de crochet es perfecta para crear un ambiente relajante y elegante. Ideal para decoraciones en baños o dormitorios.",
            "Galeria": [
                "../img/lavanda.jpg",
                "../img/lavanda2.jpg",
                "../img/lavanda3.jpg"
            ],
            "Tiempos": "2 días",
            "Stock": "20",
            "GastoEnvio": "1000 por ramo",
            "entrega": "Entregas en Naranjo Centro o Envío Postal.",
            "Garantía del producto": "Garantía de 30 días por defectos de fabricación.",
            "Valoración": [
                {
                    "Nombre": "Paula Vargas",
                    "Rating": "★★★★☆",
                    "Comentario": "Es una flor muy delicada, perfecta para el baño. Me gusta mucho."
                },
                {
                    "Nombre": "Miguel Álvarez",
                    "Rating": "★★★★★",
                    "Comentario": "Excelente detalle, muy bien hecho y con un acabado increíble."
                }
            ],
            "Tamanno": ["Pequeña"]
        }
    ]
    