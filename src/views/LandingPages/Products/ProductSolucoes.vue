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

const sbbList = [
  {
    icon: "fa fa-users",
    title: "Permite controlar diversas unidades bibliotecárias.",
  },
  {
    icon: "fa fa-book",
    title:
      "Cadastro de qualquer tipo de obra, publicações e exemplares com geração automática da ficha catalográfica.",
  },
  {
    icon: "fa fa-print",
    title:
      "Impressão de etiquetas com código de barras EAN13 para controle de acervo, etiquetas de dorso.",
  },
  {
    icon: "fa fa-file-text",
    title:
      "Controle de empréstimo e devolução de títulos a partir de alertas e multas.",
  },
  {
    icon: "fa fa-money",
    title:
      "Controle de valores por empréstimo e controle de multa por dias de atraso.",
  },
];

const scimList = [
  {
    icon: "fa fa-dashboard",
    title:
      "Realização de levantamentos do funcionamento dos diversos setores da administração.",
  },
  {
    icon: "fa fa-money",
    title:
      "Levantamento de dados estatísticos da situação econômico financeira desde a arrecadação municipal até a elaboração dos balanços.",
  },
  {
    icon: "fa fa-print",
    title:
      "Avaliação e auditoria dos demonstrativos de execução contábil e balanços.",
  },
  {
    icon: "fa fa-file-text",
    title: "Avaliação dos programas de planejamento e sua execução.",
  },
];

const sopList = [
  {
    icon: "fa fa-headphones",
    title: "Atendimento",
    description:
      "Esta função registra o atendimento, relacionando-o por natureza do assunto e pela área responsável. Contém, ainda os dados do atendente, a prioridade da solicitação e os dados do cidadão, caso este se identifique, caso contrário, o atendimento pode ser cadastrado como anônimo. O atendimento é encaminhado para o órgão competente, que deverá estabelecer data e providências, ou solução, sobre o encaminhamento. Ao efetuar o registro é possível encaminhar uma carta ou um e-mail referente ao atendimento para o órgão competente, e uma carta de esclarecimento ou e-mail para o cidadão. Também é possível a inclusão, encaminhamento, consulta, manutenção e providência para os registros de atendimento. O cidadão pode fazer consultas sobre a situação do seu atendimento diretamente pelo site ou aguardar encaminhamento do órgão responsável.",
  },
  {
    icon: "fa fa-file-text",
    title: "Acompanhamento Gerencial",
    description:
      "Esta função tem por objetivo fornecer relatórios estatísticos e gráficos que visam auxiliar o acompanhamento gerencial.",
  },
];

// hook
onMounted(() => {
  setNavPills();
});
</script>

<template>
  <BaseLayout
    title="Fiorilli Soluções - Biblioteca, Controle Interno Municipal e Ouvidoria Pública"
    :breadcrumb="[
      { label: 'Produtos', route: '/pages/landing-pages/products' },
      { label: 'SAS' },
    ]"
  >
    <p>
      SSB - O Sistema de Biblioteca foi desenvolvido com a finalidade de
      possibilitar ao cliente maior rapidez, organizaçção e controle de
      cadastros de todo o acervo bibliográfico, permitindo a gestão dos
      empréstimos e controles inerentes à Biblioteca Pública ou Escolar.
    </p>

    <p>
      SCIM - O Sistema de Controladoria Interna Municipal é destinado a produzir
      os relatórios exigidos pelos Tribunais de Contas Estaduais e auxiliar as
      atividades de fiscalização e orientação da Controladoria Municipal. Junto
      ao controle exercido pelos Tribunais, auxilia a Câmara Municipal na
      fiscalização do cumprimento das normas legais.
    </p>

    <p>
      SOP - O Sistema de Ouvidoria possibilita o acompanhamento dos trâmites e
      providências aos atendimentos prestados aos cidadãos, seja pessoalmente,
      através da internet, do correio, das caixas coletoras ou do telefone. É
      uma ferramenta auxliar no trabalho do Ouvidor para solução e resposta ao
      Cidadão.
    </p>

    <div class="row align-items-start mt-5">
      <DefaultInfoCard
        icon="public"
        title="Integração"
        description="Recursos de Integração entre os diversos sistemas da Fiorilli Software e de terceiros que facilitam o dia a dia. Ainda, geração de arquivos digitais para os diversos sistemas do governo."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="badge"
        title="Web e Desktop"
        description="Permite o acesso ao sistema a partir do computador e por meio da internet, seja por computador, smartphone ou tablet."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="archive"
        title="Eventos e Alertas"
        description="Conte com alertas que auxiliam na gestão, sendo notificado sobre o que realmente importa."
        col="col-md-4"
      />
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center mt-5">
      <h4 class="text-primary">
        Algumas funcionalidades do Sistema de Biblioteca
      </h4>

      <ul class="nav mx-3 mt-4">
        <li
          class="nav-item my-3"
          v-for="{ icon, title } of sbbList"
          :key="icon"
        >
          <h5><i :class="icon + ' mx-3 text-primary'" />{{ title }}</h5>
        </li>
      </ul>
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center mt-5">
      <h4 class="text-primary">
        Algumas funcionalidades do Sistema de Controle Interno
      </h4>

      <ul class="nav mx-3 mt-4">
        <li
          class="nav-item my-3"
          v-for="{ icon, title } of scimList"
          :key="icon"
        >
          <h5><i :class="icon + ' mx-3 text-primary'" />{{ title }}</h5>
        </li>
      </ul>
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center mt-5">
      <h4 class="text-primary">
        Algumas funcionalidades do Sistema de Ouvidoria
      </h4>

      <ul class="nav mx-3 mt-4">
        <li
          class="nav-item my-3"
          v-for="{ icon, title, description } of sopList"
          :key="icon"
        >
          <h5><i :class="icon + ' mx-3 text-primary'" />{{ title }}</h5>
          <p class="mx-4" v-html="description" />
        </li>
      </ul>
    </div>

    <div class="row align-items-center mt-5">
      <p>
        A utilização plena do Sistema de Biblioteca promove o controle de todo o
        acervo bibliotecário do município oferecendo à equipe de Bibliotecários
        do município recursos para realização da catalogação baseada nos padrões
        internacionais e ao cidadão recursos para pesquisa através da ferramenta
        web.
      </p>

      <p>
        A utilização plena do Sistema de Controle Interno Municipal com as
        adaptações necessárias e a manutenção constante, constituem em peça
        fundamental para a realização de gestões responsáveis e transparentes.
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
          href="https://fiorilli.com.br/?service=sbb-sistema-de-biblioteca"
          target="_blank"
          ><MaterialButton color="success"
            >Ver SBB no site da Fiorilli</MaterialButton
          ></a
        >
        <a
          href="https://fiorilli.com.br/?service=scim-sistema-de-controle-interno-municipal-2"
          target="_blank"
          ><MaterialButton color="success"
            >Ver SCIM no site da Fiorilli</MaterialButton
          ></a
        >
        <a
          href="https://fiorilli.com.br/?service=sop-sistema-de-ouvidoria"
          target="_blank"
          ><MaterialButton color="success"
            >Ver SOP no site da Fiorilli</MaterialButton
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
              message="Gostaria de solicitar a apresentação do SBB, SOP e SCIM para a minha empresa na data [Informe a data aqui]. Obrigado!"
            />
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>