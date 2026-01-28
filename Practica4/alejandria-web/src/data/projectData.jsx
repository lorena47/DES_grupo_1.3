import { BookOpen, MapPin, Smile, Users, Layers, FileText, Smartphone } from 'lucide-react';

const REPO_URL = "https://github.com/lorena47/DES_grupo_1.3/blob/main";
const REPO_ROOT = "https://github.com/lorena47/DES_grupo_1.3";

export const features = [
  {
    title: "Búsqueda por Estado de Ánimo",
    desc: "¿Te sientes feliz o melancólico? Alejandría te recomienda el libro perfecto basándose en tu emoción actual.",
    icon: <Smile size={32} />,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Localizador de Librerías",
    desc: "Encuentra stock real en librerías cercanas. Apoya el comercio local frente a las grandes superficies.",
    icon: <MapPin size={32} />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Comunidad Activa",
    desc: "Un espacio donde escritores noveles y lectores conectan. Comparte reseñas y sigue a usuarios afines.",
    icon: <Users size={32} />,
    color: "bg-pink-100 text-pink-600"
  },
  {
    title: "Biblioteca Personal",
    desc: "Organiza tus lecturas, sube tus propias obras y gestiona tus listas de favoritos.",
    icon: <BookOpen size={32} />,
    color: "bg-green-100 text-green-600"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Investigación y Problema",
    desc: "Análisis de las dificultades de escritores noveles y falta de personalización para lectores jóvenes.",
    icon: <Layers />
  },
  {
    step: "02",
    title: "Diseño Iterativo",
    desc: "Evolución desde bocetos en papel hasta prototipos High-Fi, refinando la interfaz paso a paso.",
    icon: <FileText />
  },
  {
    step: "03",
    title: "Evaluación y Validación",
    desc: "Pruebas con usuarios (recorrido cognitivo) para asegurar una experiencia de uso fluida.",
    icon: <Smartphone />
  }
];

export const downloads = [
  {
    title: "Repositorio Completo",
    url: REPO_ROOT,
    type: "GITHUB"
  },
  {
    title: "Práctica 1",
    url: `${REPO_URL}/Practica1/DES_P1_GRUPO_1_3.pdf`,
    type: "PDF"
  },
  {
    title: "Práctica 2",
    url: `${REPO_URL}/Practica2/DES_P2_GRUPO_1_3.pdf`,
    type: "PDF"
  },
  {
    title: "Práctica 3",
    url: `${REPO_URL}/Practica3/Entregables/`,
    type: "CARPETA"
  }
];

export const team = [
  {
    name: "Carlota de la Vega Soriano",
    github: "https://github.com/carlotiii30"
  },
  {
    name: "Lorena Castellano Fernández",
    github: "https://github.com/lorena47"
  },
  {
    name: "Pablo García Alvarado",
    github: "https://github.com/pablovegood"
  }
];