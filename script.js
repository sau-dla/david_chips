/**
 * Script para el perfil de Instagram de @emprededavid
 * Incluye datos de las 7 publicaciones, comentarios de niños/clientes,
 * historias destacadas interactivas y botones funcionales.
 */

// 1. Datos de las 7 publicaciones de galletas navideñas
const postsData = [
  {
    id: 1,
    // La publicación estrella y más reciente con el anuncio oficial obligatorio
    img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&auto=format&fit=crop&q=80",
    badge: "📌 ¡ANUNCIO OFICIAL!",
    likes: 125430,
    liked: false,
    time: "HACE 2 HORAS",
    caption: "🎄✨ ¡GRAN NOTICIA PARA TODOS NUESTROS AMIGOS Y CLIENTES! ✨🎄\n\nLas nuevas galletas seran vendidas este año en el colegio monseñor castro este 8 de diciembre no se la pierdan. Tendremos las favoritas de siempre y nuevos muñequitos de jengibre con chispas de colores. ¡Vengan temprano antes de que se acaben! 🍪🎅🎁",
    comments: [
      {
        user: "mateo_galletitas",
        avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=80",
        text: "¡David, el año pasado las de muñeco de nieve estaban insuperables! ¡De primero en la fila en el Monseñor Castro este 8 de diciembre! 🏃‍♂️🍪",
        time: "1h"
      },
      {
        user: "valen_navidad",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
        text: "¡Mi mamá ya me dio permiso para comprar la caja grande de 12 galletas! 😍🎅 ¡Qué emoción!",
        time: "1h"
      },
      {
        user: "sebas_crack23",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80",
        text: "¡Guárdame 3 de árbol de navidad con chispas David! Eres el mejor chef del colegio 🔥🍪",
        time: "45m"
      },
      {
        user: "profe_carolina",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
        text: "¡Todo el colegio Monseñor Castro está orgulloso de tu talento David! Ya aparté mi pedido para la sala de profesores 👏❤️",
        time: "30m"
      },
      {
        user: "camila_sweet",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        text: "¡Las mejores galletas navideñas del mundo! No me lo pierdo por nada ✨",
        time: "15m"
      }
    ]
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1576715159532-32eb4490f140?w=800&auto=format&fit=crop&q=80",
    badge: null,
    likes: 98420,
    liked: false,
    time: "HACE 1 DÍA",
    caption: "Salieron calientitas del horno las estrellas nevadas con glaseado de vainilla 🌟❄️ ¿A quién le gustaría una?",
    comments: [
      {
        user: "lucas_aventuras",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        text: "¡A mííí! Esas estrellas son mis favoritas de Navidad 😋",
        time: "1d"
      },
      {
        user: "mama_de_santi",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
        text: "Qué delicia David, la presentación está impecable como siempre. ¡Felicitaciones!",
        time: "18h"
      }
    ]
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1543255006-d6395b6f1171?w=800&auto=format&fit=crop&q=80",
    badge: null,
    likes: 112300,
    liked: false,
    time: "HACE 3 DÍAS",
    caption: "¡Los hombres de jengibre ya tienen sus botones de caramelo listos para la fiesta! 🕺🍪 Listos para empacar.",
    comments: [
      {
        user: "nico_gamer_pro",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        text: "El detalle de la bufanda roja quedó épico amigo 🤩",
        time: "2d"
      },
      {
        user: "ana_dulces",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
        text: "¡Huelen a Navidad desde la foto! No veo la hora de que llegue el 8 de diciembre.",
        time: "1d"
      }
    ]
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=800&auto=format&fit=crop&q=80",
    badge: null,
    likes: 87910,
    liked: false,
    time: "HACE 5 DÍAS",
    caption: "En plena producción con los arbolitos de navidad con chispas de colores 🎄✨ ¡Hacer galletas es mi parte favorita de la Navidad!",
    comments: [
      {
        user: "dani_navidad",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
        text: "¡Qué paciencia para decorarlos todos! Están hermosos 🎄",
        time: "4d"
      },
      {
        user: "claudia_reposteria",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        text: "Un gran repostero en potencia, ¡mucho éxito con la venta!",
        time: "3d"
      }
    ]
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1545696968-1a5245650b36?w=800&auto=format&fit=crop&q=80",
    badge: null,
    likes: 104500,
    liked: false,
    time: "HACE 1 SEMANA",
    caption: "¡Cajas navideñas listas para regalar a amigos, profesores y familia! 🎁 Cada caja lleva una sorpresa dulce adentro.",
    comments: [
      {
        user: "familia_rodriguez",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80",
        text: "¡Apartamos 4 cajas para nuestros regalos familiares! 🎁🙌",
        time: "6d"
      },
      {
        user: "isa_galleta",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
        text: "¡El lazo rojo les da el toque perfecto!",
        time: "5d"
      }
    ]
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&auto=format&fit=crop&q=80",
    badge: null,
    likes: 93200,
    liked: false,
    time: "HACE 2 SEMANAS",
    caption: "Probando la receta secreta de chocolate navideño y malvaviscos 🍫 ¡Quedaron súper suaves y crujientes por fuera!",
    comments: [
      {
        user: "pedrito_choc",
        avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&auto=format&fit=crop&q=80",
        text: "¡Chocolate y navidad es la mejor combinación del mundo! 🍫🤤",
        time: "1sem"
      }
    ]
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop&q=80",
    badge: null,
    likes: 141200,
    liked: false,
    time: "HACE 3 SEMANAS",
    caption: "¡Así empezó el taller de galletas de este año! Harina, moldes navideños y muchas ganas de endulzar la navidad de todos. ❤️🍪 Gracias por su apoyo constante.",
    comments: [
      {
        user: "abuela_teresa",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
        text: "¡Mi nieto consentido y trabajador! Te van a quedar deliciosas como siempre ❤️",
        time: "2sem"
      },
      {
        user: "amigos_del_cole",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80",
        text: "¡Crack David! Todos tus compañeros te apoyamos siempre 🚀",
        time: "2sem"
      }
    ]
  }
];

// 2. Datos de las Historias Destacadas (3 Highlights)
const storiesData = [
  {
    title: "Recetas 🍪",
    img: "https://images.unsplash.com/photo-1543255006-d6395b6f1171?w=800&auto=format&fit=crop&q=80",
    text: "🍪 ¡Recetas 100% artesanales con jengibre de primera calidad, canela, mantequilla y mucho amor navideño!"
  },
  {
    title: "Clientes Felices 🌟",
    img: "https://images.unsplash.com/photo-1576715159532-32eb4490f140?w=800&auto=format&fit=crop&q=80",
    text: "⭐ Más de 500 niños y familias felices degustando nuestras galletas en cada temporada. ¡Gracias a todos!"
  },
  {
    // La 3ra historia destacada con el mensaje oficial solicitado
    title: "¡8 de Diciembre! 🏫",
    img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&auto=format&fit=crop&q=80",
    text: "🚨 <strong>¡ATENCIÓN!</strong><br><br>las nuevas galletas seran vendidas este año en el colegio monseñor castro este 8 de diciembre no se la pierdan 🍪🎅🎁"
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
    card.onclick = () => openPostModal(post.id);

    let badgeHTML = "";
    if (post.badge) {
      badgeHTML = `<div class="special-post-badge">${post.badge}</div>`;
    }

    card.innerHTML = `
      ${badgeHTML}
      <img src="${post.img}" alt="Galleta Navideña" loading="lazy">
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

// Formatear números estilo Instagram (ej: 125.4k)
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
}

// Abrir modal de una publicación específica
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

  // Actualizar estado del botón Me Gusta
  if (post.liked) {
    likeBtn.classList.add("liked");
  } else {
    likeBtn.classList.remove("liked");
  }

  // Renderizar descripción del autor + comentarios
  commentsArea.innerHTML = `
    <!-- Fila de la descripción del autor -->
    <div class="comment-row caption-row">
      <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=100&auto=format&fit=crop&q=80" alt="David" class="comment-avatar">
      <div class="comment-body">
        <span class="comment-author">emprededavid</span>
        <span class="comment-text">${post.caption.replace(/\n/g, '<br>')}</span>
        <div class="comment-time">${post.time}</div>
      </div>
    </div>
  `;

  // Añadir los comentarios de niños/clientes
  post.comments.forEach(c => {
    const row = document.createElement("div");
    row.className = "comment-row";
    row.innerHTML = `
      <img src="${c.avatar}" alt="${c.user}" class="comment-avatar">
      <div class="comment-body">
        <span class="comment-author">${c.user}</span>
        <span class="comment-text">${c.text}</span>
        <div class="comment-time">${c.time}</div>
      </div>
    `;
    commentsArea.appendChild(row);
  });

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Cerrar modal de publicación
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

// Dar / Quitar Like dentro del modal
function toggleModalLike() {
  if (!currentModalPostId) return;
  const post = postsData.find(p => p.id === currentModalPostId);
  if (!post) return;

  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;

  const likeBtn = document.getElementById("modalLikeBtn");
  const likesDisplay = document.getElementById("modalLikesDisplay");

  if (post.liked) {
    likeBtn.classList.add("liked");
  } else {
    likeBtn.classList.remove("liked");
  }

  likesDisplay.innerText = `${post.likes.toLocaleString()} Me gusta`;
  renderPosts(); // actualizar grid
}

// Enfocar caja de comentario
function focusCommentInput() {
  document.getElementById("newCommentInput").focus();
}

// Añadir nuevo comentario interactivo
function addCustomComment(e) {
  e.preventDefault();
  const input = document.getElementById("newCommentInput");
  const text = input.value.trim();
  if (!text || !currentModalPostId) return;

  const post = postsData.find(p => p.id === currentModalPostId);
  if (!post) return;

  const newComment = {
    user: "pequeño_cliente",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    text: text,
    time: "Justo ahora"
  };

  post.comments.push(newComment);
  input.value = "";

  // Añadir visualmente al modal
  const commentsArea = document.getElementById("modalCommentsArea");
  const row = document.createElement("div");
  row.className = "comment-row";
  row.innerHTML = `
    <img src="${newComment.avatar}" alt="${newComment.user}" class="comment-avatar">
    <div class="comment-body">
      <span class="comment-author">${newComment.user}</span>
      <span class="comment-text">${newComment.text}</span>
      <div class="comment-time">${newComment.time}</div>
    </div>
  `;
  commentsArea.appendChild(row);
  commentsArea.scrollTop = commentsArea.scrollHeight;

  renderPosts(); // actualizar contador en grid
  showToast("¡Comentario publicado con éxito! 🍪");
}

// Botón de Seguir / Dejar de seguir
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

// Compartir perfil / Copiar enlace
function copyProfileLink() {
  const dummy = document.createElement("input");
  dummy.value = window.location.href;
  document.body.appendChild(dummy);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  showToast("¡Enlace del perfil copiado al portapapeles! 📋");
}

// Toast de notificación
function showToast(message) {
  const toast = document.getElementById("toastMessage");
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ==========================================
// VISOR DE HISTORIAS DESTACADAS (STORY VIEWER)
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

  // Animación de la barra de progreso
  progressBar.style.width = "0%";
  let progress = 0;
  clearInterval(storyTimer);

  storyTimer = setInterval(() => {
    progress += 2;
    progressBar.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(storyTimer);
      // Si hay siguiente historia la abre, sino cierra
      if (index + 1 < storiesData.length) {
        openStoryHighlight(index + 1);
      } else {
        closeStoryDirect();
      }
    }
  }, 100); // 5 segundos aprox
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

// Cerrar modales con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePostModalDirect();
    closeStoryDirect();
  }
});

// Cargar posts al iniciar
document.addEventListener("DOMContentLoaded", () => {
  renderPosts();
});

