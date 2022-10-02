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
    icon: "fa fa-clone",
    title: "Cadastros",
    description:
      "No SAS, os cadastros seguem o modelo do Cadastramento Único para Programas Sociais do Governo Federal, proporcionando aos governos municipais, estaduais e federal, o diagnóstico socioeconômico das famílias cadastradas, possibilitando a análise das suas principais necessidades.",
  },
  {
    icon: "fa fa-users",
    title: "Projetos e programa sociais",
    description:
      "Permite gerenciar de forma dinâmica, os Projetos e Programas Sociais oferecidos pela instituição. Controla o período de vigência dos projetos, assim como o valor deste. Evita a duplicação do benefício a uma mesma pessoa, assim como também controla as peculiaridades de cada projeto, como por exemplo, o intervalo de idade permitida, exclusividade, parentesco etc... Além de controlar o histórico da pessoa, relacionando os projetos e programas sociais que a pessoa ou família participa ou já participou.",
  },
  {
    icon: "fa fa-trophy",
    title: "Concessão e benefícios",
    description:
      "Permite gerenciar requerimentos e concessões de benefícios. Quando feito o requerimento, este fica em aberto até que seja feita a concessão ou seu cancelamento. A tela de concessão mostra os benefícios já recebidos pela pessoa e pela sua família, contendo a data, benefício, o valor, além dos pareceres e do profissional que fez a concessão, evitando assim a sobreposição de benefícios, e análise do histórico rápido e fácil.",
  },
  {
    icon: "fa fa-money",
    title: "Despesas",
    description:
      "O controle de despesas de cada família assim como a condição financeira da mesma está integrado tanto no cadastro da família quanto às visitas domiciliares, podendo ser atualizada em qualquer um dos módulos da forma mais simples possível. A partir desses dados é elaborada a condição financeira da família.",
  },
  {
    icon: "fa fa-home",
    title: "Visitas domiciliares",
    description:
      "Nesse módulo, o SAS dá suporte as visitas domiciliares. Permite controle total da visita, assim como o motivo da visita, do entrevistado, desenvolvimento do caso, parecer, despesas constatadas, profissional responsável pela visita, composição familiar, parentesco e condições financeiras da família. O sistema ainda permite ao usuário agendar as visitas familiares.",
  },
  {
    icon: "fa fa-headphones",
    title: "Atendimentos",
    description:
      "Permite realizar o atendimento a pessoa, mostrando em uma única tela todos os atendimentos realizados para a família, bem como um resumo cadastral contendo dados pessoais, da família, visitas, programas sociais que participa e benefícios concedidos. A partir do atendimento é possível realizar de maneira fácil a concessão de um benefício, relacionamento a um projeto, agendamento de outro atendimento, visita ou até o encaminhamento para outro profissional e/ou unidade, sem a necessidade de ficar trocando de telas.",
  },
];

// hook
onMounted(() => {
  setNavPills();
});
</script>

<template>
  <BaseLayout
    title="SAS - Sistema de Assistência Social"
    :breadcrumb="[
      { label: 'Produtos', route: '/pages/landing-pages/products' },
      { label: 'SAS' },
    ]"
  >
    <p>
      O Sistema de Assistência Social foi desenvolvido para garantir à
      Administração Municipal o controle de todo o processo de arrecadação de
      receitas municipais de forma detalhada e segura. Trata-se de um sistema
      cujas funcionalidades podem ser adaptadas às regras de qualquer Código
      Tributário Municipal, a fim de calcular e controlar todos os tributos e
      preços públicos previstos em lei municipal. Projetado para controlar a
      arrecadação de maneira fácil, porém completa, o SAS permite aos usuários
      total controle sobre tabelas de cálculo, com ferramentas que possibilitam
      previsões de arrecadação com diferentes fatores, controles estatísticos,
      gráficos e relatórios existentes em todos os módulos que compõem esse
      sistema. Além disso, o SAS possui Controle de Usuários e de LOG avançados,
      por meio do qual o sistema armazena todas as operações feitas por todos os
      usuários.
    </p>

    <div class="row align-items-start mt-5">
      <DefaultInfoCard
        icon="public"
        title="Integração Cadunico"
        description="Importação do cadastro de pessoas, família e endereços de maneira que dispensa o cadastro em uma implantação inicial, bem como a atualização constante desses cadastros, ambos via arquivo."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="badge"
        title="Benefícios"
        description="Permite a gestão de três tipos de quotas para benefícios: mensal, anual e por grupo de benefício. Dessa maneira é possível controlar o bloqueio de uma concessão por quantidade e/ou valor."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="archive"
        title="Formulários Mensais"
        description="O sistema disponibiliza os três formulários mensais exigidos pelo SUAS: CRAS, CREAS E CENTRO POP."
        col="col-md-4"
      />
    </div>

    <div class="row align-items-start mt-5">
      <div class="col-md-6">
        <h4 class="text-primary">Alertas que melhoram os resultados</h4>
        <p>
          O SAS foi projetado para atender as necessidades dos usuários das
          Entidades Públicas, visando facilitar o seu dia a dia e trazer
          melhores resultados. A partir de avisos e alertas na tela inicial, o
          usuário consegue visualizar atendimentos e visitas agendadas,
          encaminhamentos recebidos e pessoas que estão expirando a data de
          participação em um projeto.
        </p>
      </div>

      <div class="col-md-6">
        <h4 class="text-primary">Unificação das telas</h4>
        <p>
          É muito importante conhecer a realidade dos nossos clientes. Por esse
          motivo disponibilizamos ambientes que permitem a melhor utilização e
          aproveitamento dos dados e do tempo empreendido no lançamento. A
          partir da tela de atendimentos é possível fazer concessão de um
          benefícios, relacionamento a um projeto, agendamento de outro
          atendimento, visita ou até o encaminhamento para outro profissional
          e/ou unidade.
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
        O SAS foi criado há mais de 10 anos com o intuito de suprir as Unidades
        Assistenciais a agilizarem os processos diários de concessão de
        benefícios e gestão de projetos e programas sociais. Trazendo ainda
        benefícios nos atendimentos e visitas domiciliares.
      </p>

      <p>
        Como resultado proporcionamos mais agilidade na tomada de decisão para a
        concessão de um benefício, vinculação a um projeto/programa social, por
        disponibilizar de maneira simples a disposição da renda e despesa das
        famílias.
      </p>

      <p>
        Solicite uma apresentação e comece a utilizar rotinas de automação que
        trarão mais dinamismo e modernidade à assistência social do seu
        município.
      </p>
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center justify-content-between mt-5">
      <div class="col-sm-12 col-md-3 text-center">
        <a
          href="https://fiorilli.com.br/?service=sas-sistema-de-assistencia-social"
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
              message="Gostaria de solicitar a apresentação do SAS para a minha empresa na data [Informe a data aqui]. Obrigado!"
            />
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>