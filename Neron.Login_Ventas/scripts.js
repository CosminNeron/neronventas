document.addEventListener('DOMContentLoaded', () => {
  /* --- REFERENCIAS --- */
  let inputDestino = null;
  
  const licenciaNumero = document.querySelector('.licencia-numero');
  const btnSoporte = document.getElementById('btnSoporte');
  const menuSoporte = document.getElementById('menuSoporte');
  const inputClave = document.getElementById('claveInput');
  const btns = document.querySelectorAll('.keys button');
  const toggleClave = document.getElementById('toggleClave');
  const actualContainer = document.querySelector('.actualizaciones-container');
  const modalActualizaciones = document.getElementById('modal-actualizaciones');
  const btnCerrar = document.getElementById("btn-cerrar");
  const inputClaveModal = document.querySelector('.input-clave-modal');
  const modalVerBorrar = document.getElementById('modal-clave-ver-borrar')
  const btnVerBorrar = document.getElementById('ver-borrar');
  const inputClaveVerBorrar = document.getElementById('input-clave-ver-borrar');
  const btnValidarClaveVerBorrar = document.getElementById('validar-clave-ver-borrar');
  const btnCerrarVerBorrar = document.getElementById("btn-cerrar-ver-borrar");
  const modalActualizacionesBorrar = document.getElementById('modal-actualizaciones-borrar')
  const btnSalirActualizacionesBorrar = document.getElementById("btn-salir-actualizaciones-borrar");


  inputDestino = inputClave;


  /* 🔹 COPIAR LICENCIA */
  if (licenciaNumero) {
    licenciaNumero.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(licenciaNumero.textContent.trim());
        const aviso = document.createElement('span');
        aviso.textContent = '📋 Copiado';
        aviso.classList.add('copiado-aviso');
        licenciaNumero.appendChild(aviso);
        setTimeout(() => aviso.remove(), 1500);
      } catch {
        alert('No se pudo copiar la licencia 😕');
      }
    });
  }

  /* 🔹 MENÚ SOPORTE */
  if (btnSoporte && menuSoporte) {
    btnSoporte.addEventListener('click', (e) => {
      e.preventDefault();
      menuSoporte.style.display =
        menuSoporte.style.display === 'flex' ? 'none' : 'flex';
    });

    document.addEventListener('click', (e) => {
      if (!btnSoporte.contains(e.target) && !menuSoporte.contains(e.target)) {
        menuSoporte.style.display = 'none';
      }
    });
  }

  /* 🔹 TECLADO EN PANTALLA */
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.textContent.trim();
  
      if (!isNaN(value) || value === "-") escribir(value);
      else if (value === "C") escribir("BACK");
      else if (value === "×") escribir("CLEAR");
      else if (value === "✔") escribir("ENTER");
    });
  });
  document.querySelectorAll(".keys-modal button").forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.textContent.trim();
  
      if (!isNaN(value) || value === "-") escribir(value);
      else if (value === "C") escribir("BACK");
    });
  });

  /* 🔹 TECLADO FÍSICO (sin foco necesario) */
  function escribir(valor) {
    if (!inputDestino) return;
  
    if (valor === "BACK") {
      inputDestino.value = inputDestino.value.slice(0, -1);
      return;
    }
  
    if (valor === "CLEAR") {
      inputDestino.value = "";
      return;
    }
  
    if (valor === "ENTER") {
      handleEnter();
      return;
    }
  
    inputDestino.value += valor;
  }
  
  document.addEventListener("keydown", (e) => {
    if (!inputDestino) return;
  
    if (/^[0-9\-]$/.test(e.key)) {
      e.preventDefault();
      escribir(e.key);
    }
  
    if (e.key === "Backspace") {
      e.preventDefault();
      escribir("BACK");
    }
  
    if (e.key === "Delete") {
      e.preventDefault();
      escribir("CLEAR");
    }
  
    if (e.key === "Enter") {
      e.preventDefault();
      escribir("ENTER");
    }
  });

  /* 🔹 ACCIÓN DE ENTER */
  function handleEnter() {
    if (!inputDestino || !inputDestino.value) return;
  
    // 👉 Validación SOLO para el modal ver/borrar
    if (inputDestino === inputClaveVerBorrar) {
      validarClaveVerBorrar();
      return;
    }
  
    // 👉 Login normal
    if (inputDestino === inputClave) {
      alert(`Clave ingresada: ${inputDestino.value}`);
      inputDestino.value = '';
      return;
    }
  
    // 👉 Clave de actualizaciones (si quieres usar ENTER aquí)
    if (inputDestino === inputClaveModal) {
      alert(`Clave actualización: ${inputDestino.value}`);
      inputDestino.value = '';
      return;
    }
  };
  

  /* 🔹 OJITO PERSONALIZADO (SVGs dorados) */
  if (toggleClave && inputClave) {
    const icono = toggleClave.querySelector('img');
    toggleClave.addEventListener('click', () => {
      const visible = inputClave.type === 'text';
      inputClave.type = visible ? 'password' : 'text';
      icono.src = visible
        ? '/img/ojo-no-visible.svg'
        : '/img/ojo-visible.svg';
    });
  }

   /* 🔹 CLICK EN ACTUALIZACIONES */
  actualContainer.addEventListener('click', (e) => {
    abrir();
    console.log("CLICK DETECTADO");
  });
  btnCerrar.addEventListener('click', (e) => {
    cerrar();
    console.log(modalActualizaciones.style);
  });
  function abrir() {
    modalActualizaciones.style.display = "block";
    inputDestino = inputClaveModal;
  }
  function cerrar() {
    modalActualizaciones.style.display = "none";
    inputDestino = inputClave;
  }

  /* 🔹 CLICK EN VER BORRAR */
  btnVerBorrar.addEventListener('click', (e) => {
    abrirClaveVerBorrar();
  });

  function abrirClaveVerBorrar() {
    modalVerBorrar.style.display = "block";
    modalActualizaciones.style.display = "none"; // 🔥 CLAVE
    inputDestino = inputClaveVerBorrar;
  };
  
  /* 🔹 CLICK EN VALIDAR y CERRAR CLAVE VER BORRAR */
  function validarClaveVerBorrar() {
    const clave = inputClaveVerBorrar.value;
  
    if (clave == "5555") {
      modalVerBorrar.style.display = "none";
      abrirActualizacionesBorrar(); // 👈 SOLO AQUÍ
      console.log('Clave correcta')
    } else {
      alert("La clave no es válida");
      modalVerBorrar.style.display = "none";
      volverAModalActualizaciones();
      console.log('Clave incorrecta')
    }
  
    inputClaveVerBorrar.value = "";
  };
  
  
  btnCerrarVerBorrar.addEventListener("click", () => {
    volverAModalActualizaciones();
  });
  function volverAModalActualizaciones() {
    modalVerBorrar.style.display = "none";
    modalActualizaciones.style.display = "block";
    inputDestino = inputClaveModal;
  };
  
  function abrirActualizacionesBorrar(){
    modalActualizacionesBorrar.style.display ="flex"
  }

   /* 🔹 CLICK EN SALIR EN ACTUALIZACIONES BORRAR */
   if (btnSalirActualizacionesBorrar) {
    btnSalirActualizacionesBorrar.addEventListener("click", (e) => {
      e.preventDefault();
      salirActualizacionesBorrar();
    });
  }
  function salirActualizacionesBorrar() {
    modalActualizacionesBorrar.style.display = "none";
    modalActualizaciones.style.display = "block";
    inputDestino = inputClaveModal; // seguir escribiendo en el input del modal de actualizaciones
  }    
});
