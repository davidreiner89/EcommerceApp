export interface EnvioHistorial {
  id: string;
  numeroEnvio: string;
  nombre: string;
  telefono: number;
  destinoLlegada: string;
  direccion: string;
  referencia: string;
  contenido: string;
  cantidad: number;
  estado: string;
  intentoUno?: string;
  intentoDos?: string;
  intentoTres?: string;
  comentarios: string;
  imagenesComentarios: string[];
  imagenesIntentoUno?: string[];
  imagenesIntentoDos?: string[];
  fecha: string;
  totalHoras: string;
}
