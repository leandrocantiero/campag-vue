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