// Benjamin Graham Investment Philosophy Mind Map Data
// Based on Week 3: Value Investing Summary

export const grahamData = {
  title: "Resumo Graham: Investimento em Valor",
  sections: [
    {
      id: "principles",
      title: "Princípios e Fundamentos",
      icon: "⚖️",
      subsections: [
        {
          id: "investment-speculation",
          title: "Investimento vs. Especulação",
          items: [
            {
              text: "Segurança do principal",
              explanation:
                "Um investimento real, após análise minuciosa, deve garantir que o capital inicial investido não seja perdido de forma permanente. Graham diferencia o investidor do especulador pelo foco na preservação do valor em vez da aposta em flutuações de preços.",
            },
            {
              text: "Retorno satisfatório",
              explanation:
                "Diferente de buscar 'jackpots' de loteria, o investidor inteligente busca um lucro razoável e adequado com base em fatos e lógica. Graham define retorno satisfatório como aquele que o investidor está disposto a aceitar, desde que aja com inteligência e prudência.",
            },
          ],
        },
        {
          id: "margin-safety",
          title: "Margem de Segurança",
          items: [
            {
              text: "Preço abaixo do valor intrínseco",
              explanation:
                "É o conceito de comprar um ativo por um valor significativamente menor do que seu valor real ou intrínseco para mitigar riscos de erros de cálculo ou azar. Graham descreve isso como comprar uma nota de 1 dólar por apenas 50 centavos, criando um amortecedor contra a volatilidade.",
            },
          ],
        },
        {
          id: "mr-market",
          title: "Senhor Mercado",
          items: [
            {
              text: "Aproveitar volatilidade emocional",
              explanation:
                "Metáfora de um sócio maníaco-depressivo que oferece preços absurdos diariamente, ora por euforia, ora por pânico. O investidor deve usar o Sr. Mercado como um servo, comprando dele quando ele está pessimista e vendendo para ele quando ele está eufórico.",
            },
          ],
        },
        {
          id: "disclaimer",
          title: "Disclaimer (Passivo)",
          items: [
            {
              text: "Monitorar estritamente",
              explanation:
                "Embora o investidor defensivo busque o mínimo de esforço, ele deve revisar sua carteira periodicamente para garantir que os fundamentos das empresas líderes escolhidas permaneçam sólidos.",
            },
            {
              text: "Alocação 50-50 (ativos/renda)",
              explanation:
                "Recomendação clássica de dividir o portfólio igualmente entre ações de alta qualidade e títulos de renda fixa para equilibrar risco e retorno. Graham sugere que essa proporção pode variar entre 25% e 75% dependendo das condições de mercado, mas deve ser rebalanceada anualmente.",
            },
            {
              text: "Focar em empresas líderes",
              explanation:
                "O investidor passivo deve restringir suas compras a grandes empresas, bem estabelecidas, com histórico de lucros e finanças conservadoras.",
            },
          ],
        },
      ],
    },
    {
      id: "investor-types",
      title: "Tipos de Investidor",
      icon: "👤",
      subsections: [
        {
          id: "entrepreneur",
          title: "Empreendedor (Ativo)",
          items: [
            {
              text: "Análise original e dedicada",
              explanation:
                "Este investidor está disposto a dedicar tempo e esforço consideráveis para realizar pesquisas profundas e independentes sobre os negócios.",
            },
            {
              text: "Busca por barganhas",
              explanation:
                "Diferente do passivo, ele caça ativamente ações que o mercado negligenciou ou puniu injustamente, visando retornos acima da média.",
            },
            {
              text: "Estratégias específicas",
              explanation:
                "Inclui a exploração de 'situações especiais', como arbitragens, liquidações ou empresas secundárias com potencial de valorização.",
            },
          ],
        },
      ],
    },
    {
      id: "selection-criteria",
      title: "Critérios de Seleção (quantitativos)",
      icon: "📊",
      items: [
        {
          text: "Tamanho adequado da empresa",
          explanation:
            "Exclui pequenas empresas que podem ser excessivamente voláteis; Graham sugeria vendas anuais de pelo menos 100 milhões de dólares (ajustados para cerca de 500 milhões hoje).",
        },
        {
          text: "Condição financeira forte (2:1 corrente)",
          explanation:
            "Os ativos circulantes devem ser o dobro do passivo circulante para garantir que a empresa sobreviva a crises de liquidez.",
        },
        {
          text: "Estabilidade de lucros (10 anos)",
          explanation:
            "Exige que a empresa tenha apresentado lucros positivos em cada um dos últimos 10 anos, evitando negócios cíclicos ou instáveis.",
        },
        {
          text: "Registro de dividendos (20 anos)",
          explanation:
            "Um histórico de 20 anos de pagamentos ininterruptos de dividendos sinaliza uma gestão amigável ao acionista e saúde de caixa.",
        },
        {
          text: "Crescimento de lucros (1/3 em 10 anos)",
          explanation:
            "Requer um aumento de pelo menos 33% no lucro por ação nos últimos 10 anos, usando médias de três anos para suavizar flutuações.",
        },
        {
          text: "P/L moderado (máx. 12x)",
          explanation:
            "O preço não deve exceder 15 vezes a média dos lucros dos últimos três anos (embora algumas simplificações modernas usem limites mais baixos para maior conservadorismo).",
        },
        {
          text: "P/VP moderado (máx. 1.5x ou Regra 22.5)",
          explanation:
            "O preço da ação não deve ultrapassar 1,5 vezes o valor patrimonial. A Regra de 22.5 estipula que o produto de P/L por P/VP não deve exceder esse número.",
        },
      ],
    },
    {
      id: "strategies",
      title: "Estratégias Quantitativas",
      icon: "📈",
      subsections: [
        {
          id: "net-net",
          title: "Net-Net (NCAV)",
          items: [
            {
              text: "Comprar abaixo do capital circulante líquido",
              explanation:
                "Estratégia radical de comprar ações cujo preço de mercado é menor que 2/3 do valor líquido dos ativos circulantes (ativos circulantes menos todas as dívidas), valorizando ativos fixos em zero.",
            },
          ],
        },
        {
          id: "formula",
          title: "Fórmula de Graham",
          items: [
            {
              text: "V = √(2 x 1.5 x 2c)",
              explanation:
                "Também conhecida como Número de Graham, essa fórmula simplificada (V = √(22.5 × EPS × BVPS) calcula o preço máximo que um investidor defensivo deve pagar para manter os limites de P/L de 15 e P/VP de 1,5.",
            },
          ],
        },
      ],
    },
    {
      id: "psychology",
      title: "Psicologia e Comportamento",
      icon: "🧠",
      items: [
        {
          text: "Discrição emocional",
          explanation:
            "O investidor inteligente deve ter o temperamento necessário para não deixar as emoções de medo ou ganância ditarem suas decisões financeiras.",
        },
        {
          text: "Resistência à psicologia do rebanho",
          explanation:
            "Significa manter o pensamento independente e não seguir a multidão em momentos de euforia (bolhas) ou depressões (crashes).",
        },
        {
          text: "Paciência a longo prazo",
          explanation:
            "O valor real leva tempo para ser reconhecido pelo mercado; o investidor deve agir como dono de negócio e focar no desempenho operacional ao longo de décadas.",
        },
      ],
    },
    {
      id: "legacy",
      title: "Legados e Discípulos",
      icon: "🏆",
      items: [
        {
          text: "Warren Buffett (10 anos mentor)",
          explanation:
            "Buffett foi aluno de Graham na Columbia e trabalhou em sua empresa, considerando-o a maior influência em sua vida após seu próprio pai.",
        },
        {
          text: "Security Analysis (1934)",
          explanation:
            "Considerado a 'Bíblia' da análise de investimentos, este livro técnico formalizou a disciplina de avaliar títulos com base em fundamentos.",
        },
        {
          text: "The Intelligent Investor (1949)",
          explanation:
            "O guia definitivo para o investidor individual, focado em princípios emocionais e políticas de investimento, descrito por Buffett como o melhor livro de investimentos já escrito.",
        },
        {
          text: "Pai da Análise Fundamentalista",
          explanation:
            "Graham revolucionou Wall Street ao substituir o palpite e a sorte por métodos matemáticos e rigorosos de avaliação de empresas.",
        },
      ],
    },
  ],
};
