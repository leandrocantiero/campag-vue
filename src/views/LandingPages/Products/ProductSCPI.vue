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
    icon: "fa fa-money",
    title: "Contas",
    description:
      "Auxilia nos lançamentos e registros da execução, permitindo controle inteligente de todos os compromissos, sem deixar de atender todas as exigências legais.",
  },
  {
    icon: "fa fa-shopping-cart",
    title: "Compras",
    description:
      "Inicia e conduz o usuário em todo o processo de compra, começando pelo registro das demandas dos departamentos, através das solicitações, que podem passar por um controle de autorizações, até a elaboração de cotações de preços e formalização do pedido de compra. Esse processo também envolve o procedimento licitatório, todas as fases da despesa e os registros de entradas e saídas do almoxarifado.",
  },
  {
    icon: "fa fa-trophy",
    title: "Patrimônio",
    description:
      "Permite administrar a área de patrimônio acompanhando a movimentação física e financeira dos bens, bem como o controle de depreciação automática. Permitindo uma atualização automática dos valores dos bens no balanço patrimonial.",
  },
  {
    icon: "fa fa-file-text",
    title: "LC 101",
    description:
      "Todos os demonstrativos da Lei de Responsabilidade Fiscal, nos moldes das Portarias do MF/STN e dos Tribunais de Contas Estaduais, com periodicidade pré-estipulada pelo usuário, para adoção de medidas e cumprimento das exigências legais.",
  },
  {
    icon: "fa fa-archive",
    title: "Almoxarifado",
    description:
      "Através do registro de entrada e saída de materiais, permite um gerenciamento de Estoque efetivo, possibilitando esse registro através de uma ou mais unidades gestoras de estoque, e permitindo também a transferência de estoque entre essas unidades.",
  },
  {
    icon: "fa fa-truck",
    title: "Frotas",
    description:
      "Gerenciando todos os veículos e máquinas, registra as diversas despesas com manutenção e abastecimento, além de auxiliar em outros controles como, monitoramento diário de portaria, agendamento de viagens, manutenção preventiva, multas, licenciamentos e controle de pneus.",
  },
  {
    icon: "fa fa-desktop",
    title: "Portal de Transparência",
    description:
      "Processa dados e prepara automaticamente a página para divulgação na internet, gerando todos os demonstrativos exigidos pelo TCU e pela LC 101 em formato HTML ou PDF.",
  },
  {
    icon: "fa fa-cart-plus",
    title: "Orçamento",
    description:
      "Integrado ao PPA e à LDO o orçamento foi programado para processar todos os demonstrativos exigidos pelas normas legais. Faz análises de aplicações vinculadas e produz demonstrativos individualizados por fundos ou empresas públicas.",
  },
];

// hook
onMounted(() => {
  setNavPills();
});
</script>

<template>
  <BaseLayout
    title="SCPI - Sistema de Contabilidade Integrada"
    :breadcrumb="[
      { label: 'Produtos', route: '/pages/landing-pages/products' },
      { label: 'SCPI' },
    ]"
  >
    <p>
      A evolução de três usuários iniciais em 1997 para mais de dois mil cento e
      trinta em 2018, indiscutivelmente, é o maior certificado de qualidade e do
      custo/benefício deste sistema desenvolvido pela Fiorilli Software. Da
      finalidade inicial de atendimento às normas legais, orçamento,
      contabilidade e balanços, o sistema transformou-se, também, em um útil e
      prático instrumento de gestão da Administração Pública Municipal.
    </p>

    <div class="row align-items-start mt-5">
      <DefaultInfoCard
        icon="public"
        title="Integração"
        description="Recursos de Integração entre os diversos sistemas da Fiorilli Software e de terceiros que facilitam o dia a dia. Ainda, geração de arquivos digitais para os diversos sistemas do governo."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="shuffle"
        title="Automação"
        description="Controle de Contratos, Convênios, Dívida Fundada, Prestação de contas de consórcios, Prestação de contas de adiantamentos e Conciliação automática."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="payment"
        title="Portal da Transparência"
        description="Minimiza a carga de trabalho sempre com eficiência e eficácia, e ao mesmo tempo possui a segurança necessária para atendimento das normas legais com total transparência das informações."
        col="col-md-4"
      />
    </div>

    <div class="row align-items-start mt-5">
      <div class="col-md-6">
        <h4 class="text-primary">
          Interface de fácil compreensão e utilização
        </h4>
        <p>
          O SCPI foi projetado para atender as necessidades dos usuários das
          Entidades Públicas, visando facilitar o seu dia a dia. Baseamo-nos nas
          experiências dos usuários para desenvolver cada tela e o resultado foi
          um software de fácil usabilidade que permite um aprendizado muito mais
          rápido e consistente possibilitando um melhor aproveitamento da
          ferramenta.
        </p>
      </div>

      <div class="col-md-6">
        <h4 class="text-primary">Web e Desktop</h4>
        <p>
          É muito importante conhecer a realidade dos nossos clientes. Por esse
          motivo disponibilizamos ambientes que permitem a utilização da versão
          Desktop e da versão Web. O cliente pode optar por uma delas ou
          executá-las em paralelo. Dessa forma não será preciso se preocupar com
          infraestrutura ou itens de configuração. Nosso pacote é simples e
          completo!
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
        Atualmente 1 em cada 5 municípios brasileiros usam o SCPI - Sistema de
        Contabilidade Pública Integrado. Completando 21 anos no mercado, hoje é
        a ferramenta mais utilizada pelas Prefeituras, Câmaras Municipais e
        outros Órgãos Públicos para execução de suas rotinas contábeis.
      </p>

      <p>
        Estamos sempre atentos às demandas dos Órgãos Fiscalizadores e isso trás
        para os nossos clientes a segurança e tranquilidade necessária em sua
        rotina diária. O fácil acesso à nossa equipe de analistas, consultores,
        arquitetos e desenvolvedores tem sempre como resultado a velocidade no
        desenvolvimento de novas funcionalidades. Solicite uma apresentação e
        comece a utilizar rotinas de automação que trarão mais dinamismo e
        modernidade à contabilidade e prestação de contas do seu município.
      </p>
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center justify-content-between mt-5">
      <div class="col-sm-12 col-md-3 text-center">
        <a
          href="https://fiorilli.com.br/?service=scpi-sistema-de-contabilidade-publica-integrado"
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
              message="Gostaria de solicitar a apresentação do SCPI para a minha empresa na data [Informe a data aqui]. Obrigado!"
            />
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>