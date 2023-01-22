export interface WarningSchema {
  type: 'warning' | 'files'

  headerTitle?: string

  subject: string
  title: string
  content?: string
  time: string
  color: string

  ignoreButton: boolean
}

const getWarnings = () => warnings[Math.floor(Math.random() * warnings.length)]

export default getWarnings

const today = new Date()

const warnings: WarningSchema[][] = [
  // Engenharia Informática
  [
    {
      type: 'warning',

      headerTitle: 'Importante',

      subject: '[22-23] Programação Funcional [ENGINF]',
      title: ' [J.Ricardo Sousa] Horário de atendimento',
      content: 'Informo que o meu horário de atendimento da próxima semana será no dia 23/jan às 14h00.',
      time: 'Há 1 dia',
      color: '#2174a8',

      ignoreButton: false
    },

    {
      type: 'warning',

      subject: '[22-23] Álgebra Linear para Engenharia [ENGINF]',
      title: 'Mini-Teste',
      content: 'Informa-se os alunos que as suas respetivas notas estão disponíveis em Avaliação. O mini teste valerá 25% da not afinal.',
      time: 'Há 3 dias',
      color: '#ffe202',

      ignoreButton: false
    },

    {
      type: 'warning',

      subject: '[22-23] Cálculo para Engenharia [ENGINF]',
      title: ' [Horário de atendimento]',
      content: 'Informo que, após o fim do mês, o horário de atendimento da docente M.Antunes Pereira será fixado semanalmente. Na corrente semana, o horário decorrerá no dia 05 de janeiro às 16h na sala Edif. 2-016.',
      time: 'Há 4 dias',
      color: '#c66ed2',

      ignoreButton: true
    },

    {
      type: 'warning',

      subject: '[22-23] Cálculo para Engenharia [ENGINF]',
      title: ' TP5+TP6:: dia 16 - Sala1.15(Ed.2)',
      content: 'TP5+TP6:: Informam-se os alunos de que as aulas, de dia 16, das 11h às 13h, decorrerão, em simultâneo,na Sala 1.15 (do Edifício2).',
      time: 'Há 6 dias',
      color: '#c66ed2',

      ignoreButton: false
    },

    {
      type: 'files',

      headerTitle: 'Esta Semana',

      subject: '[22-23] Álgebra Linear para Engenharia [ENGINF]',
      title: 'Adicionado a: Resolução fichas práticas',
      time: 'Há 1 dia',

      color: '#ffe202',
      ignoreButton: true
    },

    {
      type: 'files',

      subject: '[22-23] Programação Funcional [ENGINF]',
      title: '2 items adicionados',
      time: 'Há 3 dias',
      color: '#2174a8',

      ignoreButton: true
    },

    {
      type: 'files',

      subject: '[22-23] Programação Funcional [ENGINF]',
      title: '3 items adicionados',
      time: 'Há 4 dias',
      color: '#2174a8',

      ignoreButton: true
    },

    {
      type: 'files',

      subject: '[22-23] Cálculo para Engenharia [ENGINF]',
      title: '1 items adicionados',
      time: 'Há 6 dias',
      color: '#c66ed2',

      ignoreButton: true
    },

    {
      type: 'files',

      headerTitle: 'Semanas anteriores',

      subject: '[22-23] Cálculo para Engenharia [ENGINF]',
      title: 'Adicionado a: Resolução fichas práticas',
      time: `28 de setembro de ${today.getFullYear()} | 18:32`,

      color: '#c66ed2',
      ignoreButton: true
    },

    {
      type: 'files',

      subject: '[22-23] Cálculo para Engenharia [ENGINF]',
      title: 'Adicionado a: Testes anteriores',
      time: `15 de setembro de ${today.getFullYear()} | 18:32`,
      color: '#c66ed2',

      ignoreButton: true
    },

    {
      type: 'files',

      subject: '[22-23] Programação Funcional [ENGINF]',
      title: '3 items adicionados',
      time: `10 de setembro de ${today.getFullYear()} | 18:32`,
      color: '#2174a8',

      ignoreButton: true
    }
  ]
]
