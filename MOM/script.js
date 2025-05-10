document.addEventListener('DOMContentLoaded', function() {
  // Crear flores decorativas
  crearFlores();
  
  // Inicializar la lluvia de corazones
  iniciarLluviaCorazones();
});

function crearFlores() {
  const flores = document.getElementById('flores');
  const floresImagenes = [
    'https://cdn.pixabay.com/photo/2017/01/31/23/36/flower-2028313_1280.png',
    'https://cdn.pixabay.com/photo/2013/07/13/10/23/flower-157477_1280.png',
    'https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png',
    'https://cdn.pixabay.com/photo/2016/04/01/09/24/cherry-1299726_1280.png'
  ];
  
  for (let i = 0; i < 10; i++) {
    const flor = document.createElement('div');
    flor.className = 'flor';
    flor.style.backgroundImage = `url(${floresImagenes[Math.floor(Math.random() * floresImagenes.length)]})`;
    
    // Posición aleatoria alrededor del sobre
    const angulo = Math.random() * Math.PI * 2;
    const distancia = 80 + Math.random() * 120;
    const x = Math.cos(angulo) * distancia;
    const y = Math.sin(angulo) * distancia;
    
    flor.style.left = `calc(50% + ${x}px)`;
    flor.style.top = `calc(50% + ${y}px)`;
    flor.style.width = `${20 + Math.random() * 20}px`;
    flor.style.height = `${20 + Math.random() * 20}px`;
    
    // Animación personalizada
    flor.style.animationDuration = `${4 + Math.random() * 4}s`;
    flor.style.animationDelay = `${Math.random() * 2}s`;
    
    flores.appendChild(flor);
  }
}

function iniciarLluviaCorazones() {
  const container = document.getElementById('corazonesRain');
  const corazonesColores = ['#ff6b95', '#ff4081', '#ff94b6', '#ffb3c6', '#ffc0d5'];
  
  // Crear 40 corazones
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const corazon = document.createElement('div');
      corazon.classList.add('corazon-rain');
      
      // Tamaño aleatorio
      const size = 10 + Math.random() * 20;
      corazon.style.width = `${size}px`;
      corazon.style.height = `${size}px`;
      
      // Posición X aleatoria
      corazon.style.left = `${Math.random() * 100}%`;
      
      // Color aleatorio
      corazon.style.backgroundColor = corazonesColores[Math.floor(Math.random() * corazonesColores.length)];
      
      // Forma de corazón
      corazon.style.borderRadius = '50%';
      corazon.style.transform = 'rotate(-45deg)';
      corazon.style.boxShadow = `${size/5}px -${size/5}px 0 ${corazonesColores[Math.floor(Math.random() * corazonesColores.length)]}`;
      corazon.style.position = 'absolute';
      
      // Agregar la animación de caída
      const duracion = 6 + Math.random() * 10;
      corazon.style.animationDuration = `${duracion}s`;
      
      container.appendChild(corazon);
      
      // Eliminar el corazón cuando termine la animación
      setTimeout(() => {
        container.removeChild(corazon);
      }, duracion * 1000);
      
    }, 300 * i); // Crear un nuevo corazón cada 300ms
  }
  
  // Reiniciar la lluvia de corazones cada 15 segundos
  setTimeout(iniciarLluviaCorazones, 15000);
}

function abrirSobre() {
  const tapa = document.getElementById('tapa');
  const carta = document.getElementById('carta');
  const flores = document.getElementById('flores');
  const abrirBtn = document.querySelector('.abrir-btn');
  
  // Animación de la tapa
  tapa.style.transform = 'rotateX(-180deg)';
  
  // Mostrar la carta con animación
  setTimeout(() => {
    carta.classList.add('visible');
    flores.classList.add('visible');
    abrirBtn.style.display = 'none';
    
    // Iniciar efectos especiales adicionales
    confeti();
  }, 800);
}

function mostrarMensajes() {
  const mensajes = document.getElementById('mensajes');
  mensajes.classList.toggle('visible');
  
  // Si se están mostrando los mensajes, añadir efecto de brillo
  if (mensajes.classList.contains('visible')) {
    brilloEspecial();
  }
}

function confeti() {
  // Esta función simula un efecto de confeti
  const container = document.querySelector('body');
  const colores = ['#ffb3c6', '#ff94b6', '#ff7bac', '#ff4081', '#fff'];
  
  for (let i = 0; i < 100; i++) {
    const confeti = document.createElement('div');
    const size = Math.random() * 10 + 5;
    
    confeti.style.width = `${size}px`;
    confeti.style.height = `${size}px`;
    confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    confeti.style.position = 'fixed';
    confeti.style.top = '-20px';
    confeti.style.left = `${Math.random() * 100}vw`;
    confeti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confeti.style.zIndex = '1000';
    
    // Animación de caída
    confeti.style.animation = `caida ${Math.random() * 3 + 2}s linear forwards`;
    confeti.style.animationDelay = `${Math.random() * 5}s`;
    
    // Crear keyframes para la animación de caída
    const keyframes = `
      @keyframes caida {
        0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(${Math.random() * 360}deg); opacity: 0; }
      }
    `;
    
    // Agregar los keyframes al documento
    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);
    
    // Agregar el confeti al contenedor
    container.appendChild(confeti);
    
    // Eliminar el confeti después de la animación
    setTimeout(() => {
      container.removeChild(confeti);
      document.head.removeChild(style);
    }, 7000);
  }
}

function brilloEspecial() {
  // Añadir un efecto de brillo a los elementos del mensaje
  const mensajesItems = document.querySelectorAll('#mensajes li');
  
  mensajesItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.boxShadow = '0 0 15px rgba(255, 64, 129, 0.7)';
      
      setTimeout(() => {
        item.style.boxShadow = 'none';
      }, 1000);
    }, index * 200);
  });
}