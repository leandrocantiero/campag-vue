/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import fiorilliScpi from '@/assets/img/fiorilli-scpi.png'
import fiorilliSip from '@/assets/img/fiorilli-sip.png'
import fiorilliSia from '@/assets/img/fiorilli-sia.png'
import fiorilliSas from '@/assets/img/fiorilli-sas.png'
import fiorilliSie from '@/assets/img/fiorilli-sie.png'
import fiorilliSis from '@/assets/img/fiorilli-sis.png'
import fiorilliSse from '@/assets/img/fiorilli-sse.png'
import fiorilliSolucoes from '@/assets/img/fiorilli-solucoes.png'

import seniorFolha from '@/assets/img/senior-folha.png'

export default [
  {
    heading: "Fiorilli Software",
    description:
      "Atuando desde 1974, com transparência e eficiência, a Fiorilli desenvolve soluções corporativas voltadas à Administração Pública. Tendo sempre como principal objetivo garantir a satisfação de seus clientes, a empresa produz softwares que atendem às necessidades das entidades públicas de todos os estados brasileiros. Além disso, o conhecimento dos nossos profissionais faz a diferença nos processos e garante a atualização constante dos nossos produtos.",
    items: [
      {
        image: fiorilliScpi,
        title: "SCPI - Sistema de Contabilidade Pública Integrado",
        route: "page-headers",
        pro: false
      },
      {
        image: fiorilliSip,
        title: "SIP - Sistema Integrado de Pessoal",
        route: "page-features",
        pro: false
      },
      {
        image: fiorilliSia,
        title: "SIA - Sistema Integrado de Arrecadação",
        route: "presentation",
        pro: false
      },
      {
        image: fiorilliSas,
        title: "SAS - Sistema de Assistência Social",
        route: "presentation",
        pro: false
      },
      {
        image: fiorilliSie,
        title: "SIE - Sistema Integrado de Ensino",
        route: "presentation",
        pro: false
      },
      {
        image: fiorilliSis,
        title: "SIS - Sistema Integrado de Saúde",
        route: "presentation",
        pro: false
      },
      {
        image: fiorilliSse,
        title: "SSE - Sistema de Secretaria",
        route: "presentation",
        pro: false
      },
      {
        image: fiorilliSolucoes,
        title: "Soluções Fiorilli - Sistemas para Biblioteca, Controle Interno e Ouvidoria",
        route: "presentation",
        pro: false
      },
    ]
  },
  {
    heading: "Senior Sistemas",
    description:
      "Presente em todo território brasileiro e na América Latina, é referência em tecnologia para gestão, a companhia tem um dos mais completos portfolios para alta performance, oferecendo soluções em Gestão Empresarial, Logística, Gestão de Pessoas, Relacionamento com Clientes, Supermercados e Gestão de Acesso e Segurança. Descubra mais sobre a história e sucessos da Senior.",
    items: [
      {
        image: seniorFolha,
        title: "Folha de Pagamento",
        route: "presentation",
        pro: false
      },
    ]
  }
];
