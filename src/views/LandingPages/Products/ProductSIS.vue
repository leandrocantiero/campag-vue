<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "@/layouts/sections/components/BaseLayout.vue";
import View from "@/layouts/sections/components/View.vue";

// Components
import DefaultInfoCard from "@/examples/cards/infoCards/DefaultInfoCard.vue";
import ContactForm from "../ContactUs/components/ContactForm.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";

const list = [
  {
    icon: "fa fa-h-square",
    title: "Ambulatório",
    description:
      "Nosso módulo de atendimento ambulatorial possui ficha completa do paciente, com informações pessoais, endereço e características do domicílio, documentação, programas sociais, prontuários, fotos e ainda permite a inserção de documentos digitais. Regras e que evitam duplicidade no cadastramento dos pacientes, biometria e o usuário ainda pode contar com um motor de busca por fonética. Ainda possuímos cadastro de população flutuante. No caso de prontuários físicos nosso sistema permite o controle total possibilitando trabalhar com várias unidades interligadas. Você ainda pode optar pela importação dos dados dos pacientes diretamente da base nacional do Cartão SUS. O prontuário do paciente, trás todo o histórico, procedimentos e serviços prestados a ele, em todas as suas passagens por qualquer unidade de saúde cadastrada no sistema, com informações sobre os atendimentos, as receitas emitidas, os medicamentos retirados por ele, os exames realizados e seus resultados, as vacinas aplicadas, as doenças diagnosticadas e documentos digitais anexados a essas passagens com opções de filtro e compatibilidades de especialidades.",
  },
  {
    icon: "fa fa-users",
    title: "Agentes Comunitários",
    description:
      "Nós possuímos um módulo específico para gerenciamento dos pacientes e domicílios pelos agentes comunitários de saúde. Os agentes poderão utilizar aplicativos mobile para realização das visitas domiciliares.",
  },
  {
    icon: "fa fa-hospital-o",
    title: "Vacinas",
    description:
      "Gerencie o calendário de vacinação através de parâmetros que  servirão de base para o controle de doses aplicadas aos pacientes nos atendimentos de rotina. Além disso, permita o cadastro e o agendamento de vacinas e controle de faltosos.",
  },
  {
    icon: "fa fa-medkit",
    title: "Farmácia",
    description:
      "O módulo de farmácia trás um gerenciamento completo do estoque de medicamentos e materiais das unidades de saúde, possibilitando ainda o gerenciamento dos produtos por lotes, validades e estoque mínimo. Permitimos o lançamento das entradas, saídas e transferências de produtos entre unidades, contendo informações referentes a fornecedores, pacientes e lotes, tornando possível a emissão do balancete que é apresentado ao Tribunal de Contas do Estado. Contamos com integração com o Qualifar-SUS e BNDASAF via webservice, gerando arquivos para posterior transmissão, com todas as informações necessárias referentes ao estoque, às entradas, dispensação perdas dos medicamentos nas unidades farmacêuticas, dispensando assim o uso do HORUS.",
  },
  {
    icon: "fa fa-hospital-o",
    title: "Hospital",
    description:
      "Faça a gestão das internações hospitalares SUS ou de convênios, desde a chegada do paciente ao hospital até a sua alta e ainda administre a emissão de laudo médico, evolução clínica do paciente, evolução social, prescrição médica, alta, encerramento e emita diversos documentos que podem ser customizados de acordo com a sua necessidade.",
  },
  {
    icon: "fa fa-money",
    title: "Faturamento",
    description:
      "Considerado o melhor sistema de faturamento do mercado, nosso sistema realiza a consistência dos dados de produção, principalmente em relação aos procedimentos e suas regras de compatibilidade como entre procedimento e CID, procedimento entre diversas outras. Dessa forma evitamos a glosa no faturamento já no ato do lançamento e não posteriormente.",
  },
];

// hook
onMounted(() => {
  setNavPills();
});
</script>

<template>
  <BaseLayout
    title="SIS - Sistema Integrado de Saúde"
    :breadcrumb="[
      { label: 'Produtos', route: '/pages/landing-pages/products' },
      { label: 'SIS' },
    ]"
  >
    <p>
      O SIS – Sistema Integrado de Saúde tem por finalidade controlar todo o
      atendimento ambulatorial de unidades e postos de saúde. Atende todas as
      normas e exigências do SUS, de acordo com a NOB-96 e as portarias que
      regulamentaram a tabela de procedimentos e suas definições.
    </p>

    <div class="row align-items-start mt-5">
      <DefaultInfoCard
        icon="public"
        title="Integração"
        description="O Sistema é totalmente integrado, desde o acolhimento do paciente à execução e gestão do faturamento. Módulos que promovem total aproveitamento das informações, evitando retrabalho."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="badge"
        title="Faturamento"
        description="Completo faturamento ambulatorial e hospitalar além de promover a geração dos arquivos de produção do SUS (BPAMAG, SISAIH, ESUS, HORUS, CIHA) e Convênios (TISS)."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="archive"
        title="Prontuário Eletrônico"
        description="Permite aos profissionais uma completa gestão do atendimento através do sistema. Do agendamento ao atendimento, o sistema oferece aos profissionais a visualização dos históricos, geração de documentos, encaminhamentos, solicitações de exames, etc."
        col="col-md-4"
      />
    </div>

    <div class="row align-items-start mt-5">
      <div class="col-md-6">
        <h4 class="text-primary">Gerenciamento Laboratorial</h4>
        <p>
          Imagine poder contar com um módulo de gerenciamento laboratorial
          integrado a todo sistema, permitindo o agendamento, requisição, acesso
          à resultados e históricos dos pacientes. O SIS permite tudo isso de
          forma totalmente transparente ao usuário. Nosso módulo de Gestão
          laboratorial possui funções que auxiliam na desde a requisição dos
          exames, coleta, lançamento dos resultados, conferência até a emissão
          do laudo e consultas.
        </p>
      </div>

      <div class="col-md-6">
        <h4 class="text-primary">Farmácia</h4>
        <p>
          A distribuição de medicamentos pode ser um grande problema para
          qualquer gestor público. Isso porque nem sempre as ferramentas e
          módulos farmacêuticos possibilitam uma gestão inteligente dessa
          distribuição. Ao longo dos anos, analisamos as necessidades e
          experiências dos usuários e desenvolvemos um módulo de gestão
          totalmente integrado aos demais módulos do sistema. Tenha controle
          total sobre a distribuição de medicamentos através das farmácias do
          seu município.
        </p>
      </div>
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center mt-5">
      <h4 class="text-primary">Algumas funcionalidades do sistema</h4>

      <ul class="nav mx-3 mt-4">
        <li
          class="nav-item my-4"
          v-for="{ icon, title, description } of list"
          :key="icon"
        >
          <h5><i :class="icon + ' mx-2 text-primary'" />{{ title }}</h5>
          <p class="mx-4" v-html="description" />
        </li>
      </ul>
    </div>

    <div class="row align-items-center mt-5">
      <p>
        Atualmente o SIS atende as necessidades de Secretarias de Saúde, Postos
        de Saúde, Unidades Básicas de Saúde, Unidades de Pronto Atendimento,
        Hospitais, Farmácias e Laboratórios Municipais com aquilo que realmente
        esses Órgãos necessitam. Ele foi projetado para atender as necessidades
        dos usuários das Entidades Públicas, visando facilitar o seu dia a dia.
      </p>

      <p>
        Baseamo-nos nas experiências dos usuários para desenvolver cada tela e o
        resultado foi um software de fácil usabilidade que permite um
        aprendizado muito mais rápido e consistente possibilitando um melhor
        aproveitamento da ferramenta.
      </p>

      <p>
        A principal função desse conjunto de ferramentas é ofertar ao nosso
        cliente a possibilidade de executar àquilo que é seu objetivo oferecendo
        as garantias necessárias para um faturamento correto e sem obstáculos.
      </p>

      <p>
        Solicite uma apresentação e comece a utilizar rotinas de automação que
        trarão mais dinamismo e modernidade à saúde pública do seu município.
      </p>
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center justify-content-between mt-5">
      <div class="col-sm-12 col-md-3 text-center">
        <a
          href="https://fiorilli.com.br/?service=sis-sistema-integrado-de-saude"
          target="_blank"
          ><MaterialButton color="success"
            >Ver no site da Fiorilli</MaterialButton
          ></a
        >
      </div>
      <div class="col-sm-12 col-md-3 text-center">
        <MaterialButton
          color="success"
          data-bs-toggle="modal"
          data-bs-target="#modalApresentation"
          >Solicitar apresentação</MaterialButton
        >
      </div>
    </div>

    <div
      class="modal fade"
      id="modalApresentation"
      tabindex="-1"
      aria-labelledby="modalApresentationLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalApresentationLabel">
              Solicitar apresentação
            </h5>
          </div>

          <div class="modal-body px-4 py-4">
            <ContactForm
              :showCancelBtn="true"
              message="Gostaria de solicitar a apresentação do SIS para a minha empresa na data [Informe a data aqui]. Obrigado!"
            />
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>