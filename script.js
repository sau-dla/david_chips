/**
 * Script interactivo para el Instagram Dark Mode de @emprededavid
 * 100% Galletas Navideñas (Sin fotos de personas en publicaciones)
 * Caricaturas personalizadas para la familia, mascotas y amigos verificados
 * Lenguaje 100% infantil, dulce, cariñoso y respetuoso (sin palabras de calle o malandras)
 * Padres expresando amor ("Hijo te amamos") y gran orgullo familiar
 */

// SVG Oficial de insignia de cuenta verificada de Instagram
const VERIFIED_BADGE_SVG = `
  <svg class="comment-verified-icon" aria-label="Verificado" fill="#0095f6" height="13" viewBox="0 0 40 40" width="13" style="display:inline-block; vertical-align:-2px; margin-left:3px; margin-right:4px;">
    <path d="M19.998 3.094 14.638 0l-5.9 3.094-6.358-.873-.873 6.358L0 14.638l3.094 5.36L0 25.358l.873 6.059 6.358-.873 5.9 3.094 5.36-3.094 5.36 3.094 5.9-3.094 6.358.873.873-6.059L40 25.358l-3.094-5.36L40 14.638l-.873-6.059-6.358.873-5.9-3.094z" fill="#0095f6"></path>
    <path d="M17.47 28.532 9.548 20.61l3.057-3.057 4.865 4.865 10.93-10.93 3.057 3.057z" fill="#fff"></path>
  </svg>
`;

// 1. LOS 5 SEGUIDOS EXACTOS CON SUS CARICATURAS PERSONALIZADAS
const followingData = [
  {
    handle: "tibisay_list",
    name: "Tibisay List (Mamá de David) ❤️",
    avatar: "assets/avatars/tibby_avatar.jpg"
  },
  {
    handle: "felipe_villamizar",
    name: "Felipe Villamizar (Papá de David) 👨",
    avatar: "assets/avatars/felipe_avatar.jpg"
  },
  {
    handle: "rufa_maria",
    name: "Rufa María 🐾 (Perrita Mestiza Negra)",
    avatar: "assets/avatars/rufa_avatar.jpg"
  },
  {
    handle: "tobby_ramon",
    name: "Tobby Ramón 🐶 (Perrito Mestizo Color Miel)",
    avatar: "assets/avatars/tobby_avatar.jpg"
  },
  {
    handle: "sau_henriquez",
    name: "Saulimar Henríquez 🌟",
    avatar: "assets/avatars/saulimar_avatar.jpg"
  }
];

// 2. 50 SEGUIDORES FICTICIOS (NIÑOS, COMPAÑEROS Y PADRES CLIENTES)
const followersData = [
  { handle: "mateo_galletitas", name: "Mateo Gómez (Compañero 4to A)", avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=80" },
  { handle: "valen_navidad", name: "Valentina Ruiz 🎄", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
  { handle: "sebas_crack23", name: "Sebas Crack ⚽", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" },
  { handle: "profe_carolina", name: "Carolina Mendoza (Profe Primaria)", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" },
  { handle: "lucas_aventuras", name: "Lucas Martínez", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
  { handle: "mama_de_santi", name: "Carmen Salazar (Mamá de Santi)", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" },
  { handle: "nico_gamer_pro", name: "Nicolás Gamer 🎮", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
  { handle: "camila_sweet", name: "Camila Galletas Fan", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
  { handle: "papa_de_valen", name: "Roberto Ruiz (Cliente Fiel)", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" },
  { handle: "ana_dulces", name: "Anita Castillo 🌟", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80" },
  { handle: "dani_navidad", name: "Daniela Santos", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80" },
  { handle: "pedrito_choc", name: "Pedro González 🍫", avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=80" },
  { handle: "abuela_teresa", name: "Teresa Rivas ❤️", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" },
  { handle: "samuel_dibujos", name: "Sami Dibujante 🎨", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" },
  { handle: "claudia_mama", name: "Claudia Fernández (Mamá de Sofi)", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
  { handle: "matias_skate", name: "Matías Skate 🛹", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
  { handle: "sofi_cookies", name: "Sofía Pérez 🍪", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
  { handle: "familia_morales", name: "Familia Morales Castro", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" },
  { handle: "diego_futbolero", name: "Diego 10 ⚽", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
  { handle: "laura_estrellas", name: "Laura Navideña ⭐", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
  { handle: "profe_andres", name: "Andrés Silva (Educación Física)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
  { handle: "gabriel_chips", name: "Gabo Fan de Galletas", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" },
  { handle: "mama_de_carlitos", name: "Mariana López", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" },
  { handle: "esteban_robot", name: "Esteban Tech 🤖", avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=80" },
  { handle: "isabella_reina", name: "Isa Dulzuras", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80" },
  { handle: "tio_alberto", name: "Alberto Chips Fan", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" },
  { handle: "julian_cole", name: "Julián Compañero 5to", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
  { handle: "valeria_music", name: "Vale Canto 🎵", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
  { handle: "sandra_postres", name: "Sandra Repostería Fan", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" },
  { handle: "juanpi_lego", name: "Juanpi Legos 🧱", avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=80" },
  { handle: "lucia_navidad", name: "Lucía Santos 🔔", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
  { handle: "martin_rider", name: "Martín Bici 🚲", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
  { handle: "mama_de_andres", name: "Beatriz Paredes", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" },
  { handle: "franco_danza", name: "Franco 🌟", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" },
  { handle: "elena_dulces", name: "Elena Navidad", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80" },
  { handle: "pablo_chess", name: "Pablo Ajedrez ♟️", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
  { handle: "ximena_art", name: "Xime Pinturas 🎨", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
  { handle: "papa_de_tomas", name: "Tomás Padre (Cliente)", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" },
  { handle: "joaquin_super", name: "Joaquín Campeón", avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=80" },
  { handle: "regina_cookies", name: "Regina Galletitas 💖", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
  { handle: "bruno_biker", name: "Bruno Amigo Monseñor", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
  { handle: "monica_vecina", name: "Mónica Vecina Dulce", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" },
  { handle: "sammy_galleta", name: "Sammy Lover Cookies", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" },
  { handle: "cristian_monseñor", name: "Cristian Alumno 6to", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" },
  { handle: "patricia_mama", name: "Patricia (Mamá de Mateo)", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" },
  { handle: "rodrigo_games", name: "Rodrigo Amigo", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
  { handle: "catalina_navidad", name: "Cata Sonrisas 😊", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80" },
  { handle: "profe_javier", name: "Javier Castro (Profesor Música)", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" },
  { handle: "maria_fernanda", name: "Mafer Amiga Cole", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
  { handle: "david_chips_fans", name: "Club de Fans David-Chips 🍪", avatar: "assets/logo.webp" }
];

// 3. LAS 7 PUBLICACIONES CON COMENTARIOS DULCES, INFANTILES Y LLENOS DE AMOR FAMILIAR
const postsData = [
  {
    id: 1,
    img: "assets/flyer.jpg",
    badge: "📌 ¡ANUNCIO OFICIAL!",
    likes: 125430,
    liked: false,
    time: "HACE 2 HORAS",
    caption: "🎄✨ ¡DAVID-CHIPS: El sabor que te saca una sonrisa! ✨🎄\n\nlas nuevas galletas seran vendidas este año en el colegio monseñor castro este 8 de diciembre no se la pierdan. Ven por tus galletas especiales por unidad a solo 500 Bs. ¡Las galletitas más frescas y ricas para toda la familia! 🍪🎅🎁",
    comments: [
      {
        user: "tibisay_list",
        verified: false,
        avatar: "assets/avatars/tibby_avatar.jpg",
        text: "¡Hijo te amamos con todo nuestro corazón! ❤️ Eres nuestro mayor orgullo. Esas galletas de David-Chips están hechas con todo tu amor y dedicación. ¡Que Dios te bendiga siempre! 🍪✨",
        time: "2h"
      },
      {
        user: "felipe_villamizar",
        verified: false,
        avatar: "assets/avatars/felipe_avatar.jpg",
        text: "¡Hijo te amamos muchísimo! Tu mamá y yo estamos muy felices de ver lo responsable y talentoso que eres. ¡Todo el colegio Monseñor Castro disfrutará de tus galletitas este 8 de diciembre! 👨❤️👏",
        time: "2h"
      },
      {
        user: "dei_v",
        verified: true,
        avatar: "assets/avatars/deiv_avatar.jpg",
        text: "¡Saludos David! Tienes un talento maravilloso para la repostería a tu edad. Te deseo el mayor de los éxitos en tu venta navideña, Dios te bendiga mucho 🌊🍪✨",
        time: "1h"
      },
      {
        user: "elvis_moya",
        verified: true,
        avatar: "assets/avatars/elvis_avatar.jpg",
        text: "¡Qué hermoso emprendimiento David! Eres un niño muy dedicado y alegre. Te van a quedar deliciosas todas las galletitas 👏🍪",
        time: "1h"
      },
      {
        user: "kleyver_rivero",
        verified: true,
        avatar: "assets/avatars/kleyver_avatar.jpg",
        text: "¡David, qué emoción! Te deseo muchas ventas amigo, el 8 de diciembre estaré de primero en la fila en el colegio Monseñor Castro para comprar la mía 🙌🍪",
        time: "1h"
      },
      {
        user: "sau_henriquez",
        verified: false,
        avatar: "assets/avatars/saulimar_avatar.jpg",
        text: "¡Mi niño hermoso! Eres un orgullo para toda la familia. ¡Ya tengo apartadas mis galletitas especiales para el 8 de diciembre! Te queremos un montón 🥰🍪✨",
        time: "1h"
      },
      {
        user: "mateo_galletitas",
        verified: false,
        avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=80",
        text: "¡David, de primero en la fila en el Monseñor Castro este 8 de diciembre con mis 500 Bs! 🏃‍♂️🍪",
        time: "45m"
      },
      {
        user: "valen_navidad",
        verified: false,
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
        text: "¡Mi mamá ya me dio dinero para comprar varias galletas especiales de muñeco de nieve! 😍🎅",
        time: "30m"
      }
    ]
  },
  {
    id: 2,
    img: "assets/cookies/galleta_estrellas.jpg",
    badge: null,
    likes: 98420,
    liked: false,
    time: "HACE 1 DÍA",
    caption: "Salieron calientitas del horno las estrellas nevadas especiales con glaseado y chispas 🌟❄️ Galletas individuales para endulzar el recreo.",
    comments: [
      {
        user: "tibisay_list",
        verified: false,
        avatar: "assets/avatars/tibby_avatar.jpg",
        text: "¡Hijo te amamos! Qué belleza de estrellas, la cocina huele a pura alegría navideña. ¡Te admiramos tanto mi amor! 💖⭐",
        time: "1d"
      },
      {
        user: "enyel_eugenio",
        verified: true,
        avatar: "assets/avatars/enyel_avatar.jpg",
        text: "¡Están preciosas esas estrellas nevadas David! Tienes una creatividad maravillosa para decorar galletitas 🌟✨ Mucho éxito.",
        time: "1d"
      },
      {
        user: "juan_david",
        verified: true,
        avatar: "assets/avatars/juandavid_avatar.jpg",
        text: "¡Hola David! Esas galletitas con chispas se ven deliciosas, felicitaciones amigo. ¡Eres un gran repostero! 👏🍪",
        time: "20h"
      },
      {
        user: "tobby_ramon",
        verified: false,
        avatar: "assets/avatars/tobby_avatar.jpg",
        text: "¡Guau guau! 🐶🐾 (Tobby moviendo la colita feliz oliendo las ricas galletas de David)",
        time: "18h"
      },
      {
        user: "lucas_aventuras",
        verified: false,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        text: "¡A mííí! Esas estrellas son mis favoritas de Navidad 😋",
        time: "1d"
      }
    ]
  },
  {
    id: 3,
    img: "assets/cookies/galleta_jengibre.jpg",
    badge: null,
    likes: 112300,
    liked: false,
    time: "HACE 3 DÍAS",
    caption: "¡Los muñequitos de jengibre navideños recién horneados! 🕺🍪 Cada galleta especial decorada a mano con botones dulces.",
    comments: [
      {
        user: "felipe_villamizar",
        verified: false,
        avatar: "assets/avatars/felipe_avatar.jpg",
        text: "¡Hijo te amamos! Te quedaron increíbles esos muñecos de jengibre. Eres un campeón en la cocina 👨🍪✨",
        time: "3d"
      },
      {
        user: "alex_flores_",
        verified: true,
        avatar: "assets/avatars/alex_avatar.jpg",
        text: "¡David querido, qué delicia de galletas! Tienen una presentación de alta repostería. ¡Muchos éxitos este 8 de diciembre! 👏🍪",
        time: "2d"
      },
      {
        user: "rufa_maria",
        verified: false,
        avatar: "assets/avatars/rufa_avatar.jpg",
        text: "¡Guau! 🐾 (Rufa sentadita con su carita tierna cuidando las galletitas en la mesa)",
        time: "2d"
      },
      {
        user: "kleyver_rivero",
        verified: true,
        avatar: "assets/avatars/kleyver_avatar.jpg",
        text: "¡Esos muñequitos con botones dulces son mis favoritos David! Te quedaron súper simpáticos 😄🍪",
        time: "2d"
      }
    ]
  },
  {
    id: 4,
    img: "assets/cookies/galleta_arbolito.jpg",
    badge: null,
    likes: 87910,
    liked: false,
    time: "HACE 5 DÍAS",
    caption: "Bandeja festiva con arbolitos y figuras navideñas con chispas 🎄✨ Horneadas para la gran venta del Monseñor Castro.",
    comments: [
      {
        user: "tibisay_list",
        verified: false,
        avatar: "assets/avatars/tibby_avatar.jpg",
        text: "¡Hijo te amamos! Qué paciencia y amor le pones a cada arbolito verde. ¡Tu familia siempre te apoya! ❤️🎄",
        time: "5d"
      },
      {
        user: "elvis_moya",
        verified: true,
        avatar: "assets/avatars/elvis_avatar.jpg",
        text: "¡Muchas bendiciones para ti y tus padres en esta hermosa venta navideña David! Un abrazo grande 👏🎄",
        time: "4d"
      },
      {
        user: "kleyver_rivero",
        verified: true,
        avatar: "assets/avatars/kleyver_avatar.jpg",
        text: "¡Qué lindos arbolitos amigo! Todos en el colegio estamos esperando el 8 de diciembre para probarlas 🍪🏃‍♂️",
        time: "4d"
      }
    ]
  },
  {
    id: 5,
    img: "assets/cookies/galleta_chocolate.jpg",
    badge: null,
    likes: 104500,
    liked: false,
    time: "HACE 1 SEMANA",
    caption: "Galletas especiales de chocolate navideño y chispas crujientes 🍫 Galletas únicas a solo 500 Bs. por unidad.",
    comments: [
      {
        user: "felipe_villamizar",
        verified: false,
        avatar: "assets/avatars/felipe_avatar.jpg",
        text: "¡Hijo te amamos! Las de chocolate son una delicia total. Estamos muy orgullosos de tu dedicación hijo 👨🍫❤️",
        time: "1sem"
      },
      {
        user: "juan_david",
        verified: true,
        avatar: "assets/avatars/juandavid_avatar.jpg",
        text: "¡David, te quedaron increíbles! Eres el mejor haciendo galletas en el colegio. ¡Guárdame una especial de chocolate! 🍫😋",
        time: "6d"
      },
      {
        user: "enyel_eugenio",
        verified: true,
        avatar: "assets/avatars/enyel_avatar.jpg",
        text: "¡Qué ricas se ven esas galletas de chocolate David! Tienen un precio súper accesible para todos los niños del colegio 🙌🍪",
        time: "6d"
      }
    ]
  },
  {
    id: 6,
    img: "assets/cookies/galleta_decorada.jpg",
    badge: null,
    likes: 93200,
    liked: false,
    time: "HACE 2 SEMANAS",
    caption: "Corazones y figuras navideñas con glaseado real y detalles artesanales ❤️🎄 Perfectas para regalar a amigos o profesores.",
    comments: [
      {
        user: "alex_flores_",
        verified: true,
        avatar: "assets/avatars/alex_avatar.jpg",
        text: "¡Excelente trabajo David! Cada detalle del glaseado está hecho con mucha delicadeza y cariño. ¡Muchas felicitaciones! 🌟🍪",
        time: "2sem"
      },
      {
        user: "sau_henriquez",
        verified: false,
        avatar: "assets/avatars/saulimar_avatar.jpg",
        text: "¡Qué arte tienes en esas manitas David! Cada figura navideña está perfecta. ¡Te queremos mucho! 🥰✨",
        time: "1sem"
      },
      {
        user: "tibisay_list",
        verified: false,
        avatar: "assets/avatars/tibby_avatar.jpg",
        text: "¡Hijo te amamos! Ver tus creaciones nos alegra los días. Eres un niño bueno y trabajador mi vida ❤️",
        time: "1sem"
      }
    ]
  },
  {
    id: 7,
    img: "assets/cookies/galleta_navidad.jpg",
    badge: null,
    likes: 141200,
    liked: false,
    time: "HACE 3 SEMANAS",
    caption: "¡Taller navideño de David-Chips a toda marcha! Horneando las galletas más ricas para el colegio Monseñor Castro. ❤️🍪",
    comments: [
      {
        user: "tibisay_list",
        verified: false,
        avatar: "assets/avatars/tibby_avatar.jpg",
        text: "¡Hijo hermoso, te amamos con el alma! Todo tu esfuerzo y amor se nota en cada galleta. ¡A triunfar este 8 de diciembre mi niño! 💖🍪",
        time: "3sem"
      },
      {
        user: "felipe_villamizar",
        verified: false,
        avatar: "assets/avatars/felipe_avatar.jpg",
        text: "¡Hijo te amamos! El trabajo honesto y la alegría que le pones a David-Chips es el mejor regalo. ¡Siempre contigo campeón! 👊🎄❤️",
        time: "3sem"
      },
      {
        user: "dei_v",
        verified: true,
        avatar: "assets/avatars/deiv_avatar.jpg",
        text: "Muchas felicitaciones y bendiciones para ti David. Un gran ejemplo de niño alegre y trabajador. Éxito total 🌊🍪👏",
        time: "2sem"
      },
      {
        user: "abuela_teresa",
        verified: false,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
        text: "¡Mi nieto consentido y trabajador! Te van a quedar deliciosas como siempre, Dios te bendiga mi cielo ❤️",
        time: "2sem"
      }
    ]
  }
];

// 4. HISTORIAS DESTACADAS (Con el Flyer en la 3ra historia y fotos de galletas)
const storiesData = [
  {
    title: "Especiales 🍪",
    img: "assets/cookies/galleta_jengibre.jpg",
    text: "🍪 ¡Galletas especiales por unidad horneadas artesanalmente con amor!"
  },
  {
    title: "Favoritas 🌟",
    img: "assets/cookies/galleta_estrellas.jpg",
    text: "⭐ Más de 500 niños y familias felices degustando nuestras galletitas. ¡Gracias por el cariño!"
  },
  {
    title: "¡8 de Diciembre! 🏫",
    img: "assets/flyer.jpg",
    text: "🚨 <strong>¡GRAN NOTICIA OFICIAL!</strong><br><br>las nuevas galletas seran vendidas este año en el colegio monseñor castro este 8 de diciembre no se la pierdan 🍪🎅🎁<br><br><strong>Precio: 500 Bs. por unidad</strong>"
  }
];

let currentModalPostId = null;
let isFollowing = false;
let storyTimer = null;

// Inicializar la cuadrícula de publicaciones
function renderPosts() {
  const grid = document.getElementById("posts-grid");
  grid.innerHTML = "";

  postsData.forEach(post => {
    const card = document.createElement("div");
    card.className = "post-card";
    card.setAttribute("data-id", post.id);

    // Click simple abre el post
    card.onclick = (e) => {
      openPostModal(post.id);
    };

    // Doble click en la tarjeta de la cuadrícula da Like con animación de corazón ❤️
    card.ondblclick = (e) => {
      e.stopPropagation();
      triggerGridLike(post.id, card);
    };

    let badgeHTML = "";
    if (post.badge) {
      badgeHTML = `<div class="special-post-badge">${post.badge}</div>`;
    }

    card.innerHTML = `
      ${badgeHTML}
      <img src="${post.img}" alt="David-Chips Galleta Navideña" loading="lazy">
      <div class="post-overlay">
        <span class="overlay-stat">
          ❤️ ${formatNumber(post.likes)}
        </span>
        <span class="overlay-stat">
          💬 ${post.comments.length}
        </span>
      </div>
    `;

    grid.appendChild(card);
  });
}

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num;
}

// Dar Like desde la cuadrícula al hacer doble click
function triggerGridLike(id, cardElement) {
  const post = postsData.find(p => p.id === id);
  if (!post) return;

  if (!post.liked) {
    post.liked = true;
    post.likes += 1;
  }

  // Animación del corazón en la cuadrícula
  const heart = document.createElement("div");
  heart.className = "grid-floating-heart";
  heart.innerText = "❤️";
  cardElement.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 900);

  renderPosts();
  showToast("¡Te gusta esta publicación! ❤️");
}

// Modal de publicación individual
function openPostModal(id) {
  currentModalPostId = id;
  const post = postsData.find(p => p.id === id);
  if (!post) return;

  const modal = document.getElementById("postModal");
  const modalImg = document.getElementById("modalPostImg");
  const commentsArea = document.getElementById("modalCommentsArea");
  const likesDisplay = document.getElementById("modalLikesDisplay");
  const postTime = document.getElementById("modalPostTime");
  const likeBtn = document.getElementById("modalLikeBtn");

  modalImg.src = post.img;
  likesDisplay.innerText = `${post.likes.toLocaleString()} Me gusta`;
  postTime.innerText = post.time;

  if (post.liked) {
    likeBtn.classList.add("liked");
  } else {
    likeBtn.classList.remove("liked");
  }

  commentsArea.innerHTML = `
    <div class="comment-row caption-row">
      <img src="assets/logo.webp" alt="David-Chips" class="comment-avatar">
      <div class="comment-body">
        <span class="comment-author">emprededavid</span>
        ${VERIFIED_BADGE_SVG}
        <span class="comment-text">${post.caption.replace(/\n/g, '<br>')}</span>
        <div class="comment-time">${post.time}</div>
      </div>
    </div>
  `;

  post.comments.forEach(c => {
    const row = document.createElement("div");
    row.className = "comment-row";
    const verifiedBadge = c.verified ? VERIFIED_BADGE_SVG : '';
    row.innerHTML = `
      <img src="${c.avatar}" alt="${c.user}" class="comment-avatar">
      <div class="comment-body">
        <span class="comment-author">${c.user}</span>
        ${verifiedBadge}
        <span class="comment-text">${c.text}</span>
        <div class="comment-time">${c.time}</div>
      </div>
    `;
    commentsArea.appendChild(row);
  });

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePostModal(e) {
  if (e.target.id === "postModal") {
    closePostModalDirect();
  }
}

function closePostModalDirect() {
  const modal = document.getElementById("postModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  currentModalPostId = null;
}

// Doble click sobre la foto dentro del modal para dar Like estilo Instagram
function handleImageDblClick() {
  if (!currentModalPostId) return;
  const post = postsData.find(p => p.id === currentModalPostId);
  if (!post) return;

  if (!post.liked) {
    post.liked = true;
    post.likes += 1;
  }

  const heart = document.getElementById("modalFloatingHeart");
  heart.classList.remove("pop");
  void heart.offsetWidth; // reiniciar animación CSS
  heart.classList.add("pop");

  updateModalLikeDisplay(post);
  renderPosts();
}

// Dar / Quitar Like con el botón de corazón
function toggleModalLike() {
  if (!currentModalPostId) return;
  const post = postsData.find(p => p.id === currentModalPostId);
  if (!post) return;

  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;

  if (post.liked) {
    const heart = document.getElementById("modalFloatingHeart");
    heart.classList.remove("pop");
    void heart.offsetWidth;
    heart.classList.add("pop");
  }

  updateModalLikeDisplay(post);
  renderPosts();
}

function updateModalLikeDisplay(post) {
  const likeBtn = document.getElementById("modalLikeBtn");
  const likesDisplay = document.getElementById("modalLikesDisplay");

  if (post.liked) {
    likeBtn.classList.add("liked");
  } else {
    likeBtn.classList.remove("liked");
  }

  likesDisplay.innerText = `${post.likes.toLocaleString()} Me gusta`;
}

function focusCommentInput() {
  document.getElementById("newCommentInput").focus();
}

// Añadir comentario como "cliente_especial ❤️" con verificación azul (solo en memoria para jugar)
function addCustomComment(e) {
  e.preventDefault();
  const input = document.getElementById("newCommentInput");
  const text = input.value.trim();
  if (!text || !currentModalPostId) return;

  const post = postsData.find(p => p.id === currentModalPostId);
  if (!post) return;

  // Perfil siempre es: cliente_especial ❤️ y VERIFICADO
  const newComment = {
    user: "cliente_especial ❤️",
    verified: true,
    avatar: "assets/logo.webp",
    text: text,
    time: "Justo ahora"
  };

  // Se añade al array en memoria (al recargar la página desaparece)
  post.comments.push(newComment);
  input.value = "";

  const commentsArea = document.getElementById("modalCommentsArea");
  const row = document.createElement("div");
  row.className = "comment-row";
  row.innerHTML = `
    <img src="${newComment.avatar}" alt="${newComment.user}" class="comment-avatar">
    <div class="comment-body">
      <span class="comment-author">${newComment.user}</span>
      ${VERIFIED_BADGE_SVG}
      <span class="comment-text">${newComment.text}</span>
      <div class="comment-time">${newComment.time}</div>
    </div>
  `;
  commentsArea.appendChild(row);
  commentsArea.scrollTop = commentsArea.scrollHeight;

  renderPosts();
  showToast("¡Comentaste como cliente_especial ❤️! (Verificado)");
}

function toggleFollow() {
  isFollowing = !isFollowing;
  const followBtn = document.getElementById("followBtn");
  const followersCount = document.getElementById("followersCount");
  const followersCountMobile = document.getElementById("followersCountMobile");

  if (isFollowing) {
    followBtn.innerText = "Siguiendo";
    followBtn.classList.add("following");
    followersCount.innerText = "20,000,001";
    followersCountMobile.innerText = "20.1M";
    showToast("¡Ahora sigues a @emprededavid! 🍪");
  } else {
    followBtn.innerText = "Seguir";
    followBtn.classList.remove("following");
    followersCount.innerText = "20M";
    followersCountMobile.innerText = "20M";
    showToast("Dejaste de seguir a @emprededavid");
  }
}

function copyProfileLink() {
  const dummy = document.createElement("input");
  dummy.value = window.location.href;
  document.body.appendChild(dummy);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  showToast("¡Enlace del perfil copiado al portapapeles! 📋");
}

function showToast(message) {
  const toast = document.getElementById("toastMessage");
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ==========================================
// VISOR DE HISTORIAS DESTACADAS
// ==========================================
function openStoryHighlight(index) {
  const story = storiesData[index];
  if (!story) return;

  const viewer = document.getElementById("storyViewer");
  const mediaImg = document.getElementById("storyMediaImg");
  const textBadge = document.getElementById("storyTextBadge");
  const progressBar = document.getElementById("storyProgressBar");

  mediaImg.src = story.img;
  textBadge.innerHTML = story.text;
  viewer.classList.add("active");
  document.body.style.overflow = "hidden";

  progressBar.style.width = "0%";
  let progress = 0;
  clearInterval(storyTimer);

  storyTimer = setInterval(() => {
    progress += 2;
    progressBar.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(storyTimer);
      if (index + 1 < storiesData.length) {
        openStoryHighlight(index + 1);
      } else {
        closeStoryDirect();
      }
    }
  }, 100);
}

function closeStory(e) {
  if (e.target.id === "storyViewer") {
    closeStoryDirect();
  }
}

function closeStoryDirect() {
  const viewer = document.getElementById("storyViewer");
  viewer.classList.remove("active");
  document.body.style.overflow = "auto";
  clearInterval(storyTimer);
}

// ==========================================
// MODAL DE SEGUIDORES (50 PERFILES)
// ==========================================
function openFollowersModal() {
  const modal = document.getElementById("followersModal");
  renderFollowersList(followersData);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function renderFollowersList(list) {
  const container = document.getElementById("followersListContainer");
  container.innerHTML = "";

  list.forEach(user => {
    const row = document.createElement("div");
    row.className = "user-item-row";
    row.innerHTML = `
      <div class="user-item-left">
        <img src="${user.avatar}" alt="${user.handle}" class="user-item-avatar">
        <div class="user-item-names">
          <span class="user-item-handle">${user.handle}</span>
          <span class="user-item-fullname">${user.name}</span>
        </div>
      </div>
      <button class="user-item-btn" onclick="toggleUserFollowBtn(this)">Eliminar</button>
    `;
    container.appendChild(row);
  });
}

function filterFollowers() {
  const query = document.getElementById("searchFollowersInput").value.toLowerCase();
  const filtered = followersData.filter(u =>
    u.handle.toLowerCase().includes(query) || u.name.toLowerCase().includes(query)
  );
  renderFollowersList(filtered);
}

// ==========================================
// MODAL DE SEGUIDOS (LOS 5 EXACTOS CON CARICATURAS)
// ==========================================
function openFollowingModal() {
  const modal = document.getElementById("followingModal");
  const container = document.getElementById("followingListContainer");
  container.innerHTML = "";

  followingData.forEach(user => {
    const row = document.createElement("div");
    row.className = "user-item-row";
    row.innerHTML = `
      <div class="user-item-left">
        <img src="${user.avatar}" alt="${user.handle}" class="user-item-avatar">
        <div class="user-item-names">
          <span class="user-item-handle">${user.handle}</span>
          <span class="user-item-fullname">${user.name}</span>
        </div>
      </div>
      <button class="user-item-btn following-btn" onclick="toggleFollowingUserBtn(this)">Siguiendo</button>
    `;
    container.appendChild(row);
  });

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function toggleFollowingUserBtn(btn) {
  if (btn.innerText === "Siguiendo") {
    btn.innerText = "Seguir";
    btn.classList.remove("following-btn");
  } else {
    btn.innerText = "Siguiendo";
    btn.classList.add("following-btn");
  }
}

function toggleUserFollowBtn(btn) {
  if (btn.innerText === "Eliminar") {
    btn.innerText = "Eliminado";
    btn.style.opacity = "0.5";
  }
}

function closeListModal(e, modalId) {
  if (e.target.id === modalId) {
    closeListModalDirect(modalId);
  }
}

function closeListModalDirect(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Tecla ESC para cerrar cualquier modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePostModalDirect();
    closeStoryDirect();
    closeListModalDirect("followersModal");
    closeListModalDirect("followingModal");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderPosts();
});
