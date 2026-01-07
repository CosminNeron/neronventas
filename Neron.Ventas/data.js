// Catálogo de todos los botones disponibles en el sistema
const MASTER_BUTTONS = {
    'salir':            { label: "Salir",             img: "/img_botones/salir.svg",   action: "salir" },
    'opciones':         { label: "Opciones",          img: "/img_botones/opciones.svg", action: "opciones" },
    'parking':          { label: "Parking",           img: "/img_botones/parking.svg", action: "parking" },
    'cajon':            { label: "Cajón",             img: "/img_botones/cajon.svg",   action: "cajon" },
    'traspaso':         { label: "Traspaso",          img: "/img_botones/img_new/Mesa.png", action: "traspaso" },
    'preparacion':      { label: "Preparación",       img: "/img_botones/preparacion.svg", action: "preparacion" },
    'mesas':            { label: "Mesas",             img: "/img_botones/mesas.svg",   action: "mesas" },
    'tarjeta':          { label: "Tarjeta",           img: "/img_botones/tarjeta.svg", action: "tarjeta" },
    'imprime':          { label: "Imprime",           img: "/img_botones/imprime.svg", action: "imprime" },
    'cerrar_venta':     { label: "Cerrar Venta",      img: "/img_botones/img_new/MonedasImprimir.png", action: "cerrar_venta" },
    'contado':          { label: "Contado",           icon: "fa-solid fa-money-bill-wave", action: "contado" },
    'parcial':          { label: "Parcial",           icon: "fa-solid fa-percent", action: "parcial" },
    'caja':             { label: "Caja",              img: "/img_botones/caja.svg", action: "caja" },
    'reparto':          { label: "Reparto",           img: "/img_botones/img_new/Moto.png", action: "reparto" },
    'qr':               { label: "QR",                icon: "fa-solid fa-qrcode", action: "qr" },
    'comensales':       { label: "Comensales",        img: "/img_botones/img_new/Comensales.png", action: "comensales" },
    'descuento':        { label: "Descuento",         img: "/img_botones/img_new/Descuento.png", action: "descuento" },
    'efectivo':         { label: "Efectivo",          img: "/img_botones/img_new/Efectivo.png", action: "efectivo" },
    'anular_documento': { label: "Anular Documento",  img: "/img_botones/img_new/AnularDocumento.png", action: "anular_documento" },
    'soporte':          { label: "Soporte",           img: "/img_botones/img_new/Botiquin.png", action: "soporte" },
    'repetir_documento':{ label: "Repetir Documento", img: "/img_botones/img_new/RepetirDocumento.png", action: "repetir_documento" },
    'mas':              { label: "Más",               icon: "fa-solid fa-ellipsis", action: "mas" }
};

const LOCKED_TOPBAR_KEYS = new Set(['opciones', 'salir']); // <-- usa las keys reales de MASTER_BUTTONS
const LOCKED_OPTIONS_KEYS = new Set(['soporte', 'salir']); // <-- usa las keys reales de MASTER_BUTTONS


// Configuración por defecto (si es la primera vez que entras)
const DEFAULT_LAYOUT = {
    topBar: ['salir', 'opciones', 'parking', 'cajon', 'traspaso', 'preparacion', 'mesas', 'tarjeta', 'imprime', 'cerrar_venta'],
    sidePanel: ['cerrar_venta', 'contado', 'parcial', 'contado', 'contado', 'contado', 'contado', 'contado', 'caja', 'reparto', 'qr', 'mas'],
    options: ['cerrar_venta', 'contado', 'parcial', 'contado', 'soporte', 'anular_documento', 'cajon', 'efectivo', 'caja', 'reparto', 'qr', 'mas']
};