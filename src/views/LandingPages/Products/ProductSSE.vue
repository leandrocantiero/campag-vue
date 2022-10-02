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
    title: "Cadastro de documentos",
    description:
      "O cadastro dos documentos é rápido, fácil e contém informações que possibilitam seu total controle. O usuário pode cadastrar diversos tipos de documentos como atas, ofícios, decretos e leis definindo seus modelos, tornando assim muito fácil a confecção de um documento novo, já que o sistema vincula o cadastro do documento com o arquivo em si, que por sua vez fica gravado em banco de dados. O sistema proporciona diversas opções de pesquisa.",
  },
  {
    icon: "fa fa-archive",
    title: "Controle dos arquivamentos e endereçamentos",
    description:
      "Todo protocolo, processo e ou documentação cadastrada no sistema pode ser endereçada. O endereçamento físico consiste em informar a localização do arquivo dentro da instituição, sendo ele arquivado ou não. O processo de localização de um documento se torna rápido e preciso com a utilização do sistema.",
  },
  {
    icon: "fa fa-calendar-o",
    title: "Agenda de compromisso",
    description:
      "Permite o controle da agenda de diversos usuários, sendo tudo definido por senhas.",
  },
  {
    icon: "fa fa-random",
    title: "Cotrole de protocolo e tramitações",
    description:
      "Todo documento cadastrado é enviado para o setor administrativo responsável, cada setor tem a opção de informar seu parecer e arquivar ou dar andamento, enviando o protocolo para um outro setor administrativo. Tudo isso pode ser realizado em tempo real se todos os setores da instituição estiverem ligados através de uma rede de computadores. O processo de tramitação de documentos e seus pareceres são totalmente gravados para consultas e relatórios futuros, garantindo a segurança e agilidade das informações. Cada tipo de documento possui um controle de tempo, para que não ultrapasse o tempo de resposta.",
  },
  {
    icon: "fa fa-file-o",
    title: "Anexando documento ao protocolo",
    description:
      "Documentos como cópias de RG, Certidões, Atestados, etc, podem ser anexados a um protocolo bastando que se informe o tipo de documento.",
  },
  {
    icon: "fa fa-shield",
    title: "Segurança",
    description:
      "O sistema permite um controle avançado de usuários, com senhas e com atribuições de permissões à nível de tela e operação.",
  },
];

// hook
onMounted(() => {
  setNavPills();
});
</script>

<template>
  <BaseLayout
    title="SSE - Sistema de Secretaria"
    :breadcrumb="[
      { label: 'Produtos', route: '/pages/landing-pages/products' },
      { label: 'SSE' },
    ]"
  >
    <p>
      O Sistema Integrado de Secretaria tem por finalidade controlar e gerenciar
      os processos, protocolos e documentação em geral da instituição. O Sistema
      controla os protocolos e seus trâmites, com pareceres e endereçamento de
      arquivos, possui um editor próprio que possibilita o gerenciamento de
      todos os documentos (decretos, ofícios, etc), possui agenda de compromisso
      e um sistema de consulta fácil e rápido permitindo um acompanhamento
      detalhado dos processos, protocolo, documentos e seus autores.
    </p>

    <div class="row align-items-start mt-5">
      <DefaultInfoCard
        icon="public"
        title="Tramitação em Massa"
        description="Importação do cadastro de pessoas, família e endereços de maneira que dispensa o cadastro em uma implantação inicial, bem como a atualização constante desses cadastros, ambos via arquivo."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="badge"
        title="Editor Próprio"
        description="Permite a gestão de três tipos de quotas para benefícios: mensal, anual e por grupo de benefício. Dessa maneira é possível controlar o bloqueio de uma concessão por quantidade e/ou valor."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="archive"
        title="Agenda Executiva"
        description="O sistema disponibiliza os três formulários mensais exigidos pelo SUAS: CRAS, CREAS E CENTRO POP."
        col="col-md-4"
      />
    </div>

    <div class="row align-items-start mt-5">
      <div class="col-md-6">
        <h4 class="text-primary">
          Interface de fácil compreensão e utilização
        </h4>
        <p>
          O SSE foi projetado para atender as necessidades dos usuários das
          Entidades Públicas, visando facilitar o seu dia a dia. Baseamo-nos nas
          experiências dos usuários para desenvolver cada tela e o resultado foi
          um software de fácil usabilidade que permite um aprendizado muito mais
          rápido e consistente possibilitando um melhor aproveitamento da
          ferramenta.
        </p>
      </div>

      <div class="col-md-6">
        <h4 class="text-primary">Consulta WEB</h4>
        <p>
          Qualquer pessoa pode, através da internet consultar seus processos
          usando o módulo de consulta WEB. Com essa ferramenta não é necessário
          se dirigir até o setor de protocolo para verificar a situação dos seus
          processos ou solicitações. Utilizando o protocolo a informação é
          acessada em tempo real.
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
        O Sistema de Secretaria é ferramenta fundamental para qualquer Órgão
        Público que utilize ou manipule documentos e processos. Atentos às
        demandas e a realidade dos Órgãos nós desenvolvemos funcionalidades que
        atendem suas necessidades.
      </p>

      <p>
        O SSE permite a gestão dos documentos e processos físicos ou digitais.
        Permite a criação de modelos que agilizam os pareceres e por
        consequência todo o fluxo dos processos. Pensando em oferecer eficiência
        nos processos e transparência para a sociedade desenvolvemos o módulo de
        consulta web que permite ao cidadão executar consultas e prazos.
      </p>

      <p>
        Alinhada ainda às demandas dos Órgãos, desenvolvemos uma poderosa
        ferramenta de gestão de compromissos para os Executivos Públicos.
      </p>

      <p>
        Solicite uma apresentação e comece a utilizar essa ferramenta que trará
        mais dinamismo e modernidade à sua Entidade Pública.
      </p>
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center justify-content-between mt-5">
      <div class="col-sm-12 col-md-3 text-center">
        <a
          href="https://fiorilli.com.br/?service=sse-sisterma-de-secretaria"
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
              message="Gostaria de solicitar a apresentação do SSE para a minha empresa na data [Informe a data aqui]. Obrigado!"
            />
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>