import { EmergencyContact } from '../types';

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  // Argentina
  {
    id: 'arg-135',
    country: 'Argentina',
    name: 'Centro de Asistencia al Suicida (CAS)',
    number: '135',
    description: 'Atención gratuita desde CABA y Gran Buenos Aires o (011) 5275-1135 desde todo el país.',
    available: '24 horas / 7 días',
    type: 'suicide_prevention',
  },
  {
    id: 'arg-salud-mental',
    country: 'Argentina',
    name: 'Línea Nacional de Salud Mental',
    number: '0800-999-0091',
    description: 'Orientación y apoyo en salud mental del Ministerio de Salud de la Nación.',
    available: '24 horas / 365 días',
    type: 'mental_health',
  },
  {
    id: 'arg-sedronar',
    country: 'Argentina',
    name: 'SEDRONAR (Consumo problemático de sustancias)',
    number: '141',
    description: 'Orientación, contención y derivación confidencial y gratuita en adicciones.',
    available: '24 horas / Todo el país',
    type: 'substances',
  },
  {
    id: 'arg-same',
    country: 'Argentina',
    name: 'SAME Emergencias Médicas y Psiquiátricas',
    number: '107',
    description: 'Sistema de atención médica de urgencias en vía pública o domicilio.',
    available: '24 horas',
    type: 'emergency',
  },
  {
    id: 'arg-ninez',
    country: 'Argentina',
    name: 'Línea 102 - Protección y Asistencia a la Niñez y Adolescencia',
    number: '102',
    description: 'Espacio de escucha confidencial y abordaje de vulneraciones de derechos.',
    available: '24 horas',
    type: 'youth',
  },

  // España
  {
    id: 'es-024',
    country: 'España',
    name: 'Línea 024 - Atención a la Conducta Suicida',
    number: '024',
    description: 'Servicio público, confidencial y gratuito de ayuda a personas con pensamientos de suicidio.',
    available: '24 horas / 365 días',
    type: 'suicide_prevention',
  },
  {
    id: 'es-esperanza',
    country: 'España',
    name: 'Teléfono de la Esperanza',
    number: '717 003 717',
    description: 'Escucha y orientación psicológica ante crisis emocionales y soledad no deseada.',
    available: '24 horas',
    type: 'mental_health',
  },

  // Internacional
  {
    id: 'int-988',
    country: 'Internacional / EE.UU.',
    name: '988 Suicide & Crisis Lifeline',
    number: '988',
    description: 'Línea de prevención del suicidio y crisis en español e inglés (EE.UU. y territorio internacional asociado).',
    available: '24/7 Gratis y Confidencial',
    type: 'suicide_prevention',
  },
  {
    id: 'int-befrienders',
    country: 'Global / Internacional',
    name: 'Befrienders Worldwide / IASP',
    number: 'https://www.befrienders.org',
    description: 'Red global de centros de apoyo emocional y prevención del suicidio en más de 30 países.',
    available: 'En línea / Directorio Global',
    type: 'mental_health',
  },
];
