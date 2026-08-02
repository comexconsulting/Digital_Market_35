export interface QuizOption {
  label: string
  points: 0 | 2 | 4
}

export interface QuizQuestion {
  category: string
  question: string
  options: QuizOption[]
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Atención al cliente / WhatsApp
  {
    category: 'Atención al cliente',
    question: '¿Cómo atendés hoy las consultas que te llegan por WhatsApp?',
    options: [
      { label: 'Las respondo yo a mano, cuando puedo', points: 0 },
      { label: 'Tengo horarios más o menos fijos para responder', points: 2 },
      { label: 'Tengo a alguien (o algo) dedicado a responder rápido', points: 4 },
    ],
  },
  {
    category: 'Atención al cliente',
    question: '¿Qué pasa si te escriben 3 personas a la misma hora?',
    options: [
      { label: 'Se me complica, alguna queda esperando', points: 0 },
      { label: 'Trato de responder rápido pero a veces se me escapa alguna', points: 2 },
      { label: 'Todas reciben respuesta en minutos', points: 4 },
    ],
  },
  {
    category: 'Atención al cliente',
    question: '¿Sabés cuántos mensajes se te "escapan" sin responder por semana?',
    options: [
      { label: 'Ni idea, no lo mido', points: 0 },
      { label: 'Más o menos', points: 2 },
      { label: 'Sí, lo tengo controlado', points: 4 },
    ],
  },
  // Organización / CRM
  {
    category: 'Organización de datos',
    question: '¿Dónde guardás los datos de tus clientes hoy?',
    options: [
      { label: 'En la cabeza / papelitos sueltos', points: 0 },
      { label: 'Un Excel o Google Sheets', points: 2 },
      { label: 'Un CRM de verdad', points: 4 },
    ],
  },
  {
    category: 'Organización de datos',
    question: 'Si un cliente te escribe después de 2 meses, ¿te acordás en qué quedaron?',
    options: [
      { label: 'Casi nunca', points: 0 },
      { label: 'A veces', points: 2 },
      { label: 'Siempre, lo tengo anotado', points: 4 },
    ],
  },
  {
    category: 'Organización de datos',
    question: '¿Hacés seguimiento a los que preguntaron pero no compraron?',
    options: [
      { label: 'No, si no vuelven yo tampoco', points: 0 },
      { label: 'A veces me acuerdo', points: 2 },
      { label: 'Sí, tengo un sistema para eso', points: 4 },
    ],
  },
  // Presencia web
  {
    category: 'Presencia web',
    question: '¿Tenés una web propia hoy?',
    options: [
      { label: 'No', points: 0 },
      { label: 'Sí, pero está vieja / no la actualizo', points: 2 },
      { label: 'Sí, actualizada y profesional', points: 4 },
    ],
  },
  {
    category: 'Presencia web',
    question: '¿Tu web genera consultas o solo "está ahí"?',
    options: [
      { label: 'Solo está ahí', points: 0 },
      { label: 'Alguna consulta cae de vez en cuando', points: 2 },
      { label: 'Me llegan consultas seguido desde la web', points: 4 },
    ],
  },
  {
    category: 'Presencia web',
    question: 'Si alguien te busca en Google hoy, ¿qué encuentra?',
    options: [
      { label: 'Nada, o algo desactualizado', points: 0 },
      { label: 'Redes sociales nomás', points: 2 },
      { label: 'Una web profesional', points: 4 },
    ],
  },
  // Automatización
  {
    category: 'Automatización',
    question: '¿Alguna tarea repetitiva de tu negocio hoy la hace una persona a mano?',
    options: [
      { label: 'Todas', points: 0 },
      { label: 'Algunas', points: 2 },
      { label: 'Casi ninguna, ya automaticé bastante', points: 4 },
    ],
  },
  {
    category: 'Automatización',
    question: 'Si mañana se triplican tus consultas, ¿tu negocio aguanta sin contratar gente?',
    options: [
      { label: 'No, se me cae todo', points: 0 },
      { label: 'Más o menos', points: 2 },
      { label: 'Sí, tengo el sistema para eso', points: 4 },
    ],
  },
  {
    category: 'Automatización',
    question: '¿Ya usás algo de inteligencia artificial en tu negocio?',
    options: [
      { label: 'No, ni sé por dónde arrancar', points: 0 },
      { label: 'Algo probé', points: 2 },
      { label: 'Sí, ya la uso en el día a día', points: 4 },
    ],
  },
]

export interface QuizTier {
  key: 'manual' | 'mixto' | 'centinela'
  name: string
  min: number
  max: number
  recommends: string
  message: string
  whatsappMessage: string
}

export const QUIZ_TIERS: QuizTier[] = [
  {
    key: 'manual',
    name: 'Modo Manual',
    min: 0,
    max: 16,
    recommends: 'Entrada — web profesional',
    message:
      'Hoy manejás tu negocio a pulmón: WhatsApp a mano, sin CRM, sin una web que te traiga clientes. No está mal — es que todavía falta la base. Te recomendamos arrancar con una web pensada para escalar, así el día que quieras sumar CRM o chatbot no hay que rehacer nada.',
    whatsappMessage: 'Hola! Hice el test y me salió "Modo Manual". Quiero agendar 20 min para armar mi base.',
  },
  {
    key: 'mixto',
    name: 'Modo Mixto',
    min: 17,
    max: 32,
    recommends: 'Core — web + CRM + chatbot',
    message:
      'Ya tenés algunas piezas en su lugar, pero seguís perdiendo tiempo (y clientes) en las costuras. Te recomendamos sumar CRM y chatbot conectados a lo que ya tenés.',
    whatsappMessage: 'Hola! Hice el test y me salió "Modo Mixto". Quiero agendar 20 min para conectar lo que ya tengo.',
  },
  {
    key: 'centinela',
    name: 'Modo Centinela',
    min: 33,
    max: 48,
    recommends: 'Premium — suite completa',
    message:
      'Ya tenés una base sólida. Estás en el punto justo para el sistema completo trabajando solo, 24/7 — web, CRM, chatbot y automatizaciones conectadas.',
    whatsappMessage: 'Hola! Hice el test y me salió "Modo Centinela". Quiero agendar 20 min para ver el sistema completo.',
  },
]

export function getTierForScore(score: number): QuizTier {
  return QUIZ_TIERS.find((t) => score >= t.min && score <= t.max) ?? QUIZ_TIERS[0]
}
