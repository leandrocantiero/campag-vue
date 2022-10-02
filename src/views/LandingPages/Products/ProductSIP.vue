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
    icon: "fa fa-cog",
    title: "Parâmetros",
    description:
      "Destaca-se no menu parâmetros o cadastro de unidades e as configurações de integração contábil com o SCPI, conforme as categorias de despesa com suporte à AUDESP. As tabelas de previdência nacional, municipal, para aposentados e IRRF, com flexibilidade para inclusões e alterações, com opção para atualização automática. A tabela de cargos com CBO possui opção para controle de vagas e toda documentação necessária para atender os TCE(s), inclusive as classificações necessárias para o eSocial . Mudança de salário automático, histórico de alterações legais do quadro de cargos e salários, útil para simulação do impacto do aumento de salário, contas e convênios bancários da empresa, etc.",
  },
  {
    icon: "fa fa-calendar-o",
    title: "Evento/Rubricas",
    description:
      "Permite a configuração de inúmeras fórmulas, totalmente aberta para o usuário, com fácil entendimento, tais como, a soma de outros eventos, uma base fixa, uma referência salarial diferente do salário base, entre outros. Novas opções de cálculos posteriores ao valor encontrado e intervalo de percentual semelhante ao mecanismo de alíquota para previdência. Parâmetros específicos para programação de pagamento de adicionais de tempo de serviço, também com opção de intervalo de percentual com base na quantidade de anos e demonstração legível do progresso do adicional no holerite.",
  },
  {
    icon: "fa fa-wrench",
    title: "Manutenção",
    description:
      "Manipulação completa de todas as informações relativas ao trabalhador, desde a admissão até a demissão. Assistente para inclusão de eventos fixos em massa filtrada por diversos critérios, manutenção de eventos variáveis otimizado para lançamento de empréstimos gerando apenas um registro, facilitando a manutenção. Importação em layout de arquivos de convênios e empréstimos. Declarações ao INSS CAT e PPP. Registra e manipula informações de controle dos dispositivos de avaliação exigidos pela Emenda Constitucional nº 19 de 04/07/98. Manutenção do movimento mensal de contribuintes autônomos para informações à SEFIP.",
  },
  {
    icon: "fa fa-calculator",
    title: "Cálculo",
    description:
      "Folha mensal. Adiantamento mensal. Recibo de férias com impressão apenas das férias gozadas e abono pecuniário. Cálculo de licença-prêmio. Folha complementar com diversas opções de apuração e demonstração no mês desejado. Adiantamento e fechamento do 13º. Rescisão. Complementar de rescisão.",
  },
  {
    icon: "fa fa-desktop",
    title: "SIP web",
    description:
      "Software totalmente integrado com a portaria 1510 do MTE, com controle total das marcações dos servidores, configuração de jornadas de trabalho, parâmetros para cálculos de horas extras, adicionais noturnos e faltas. Possui integração automática com alguns fabricantes de relógio de ponto, sem que haja interferência do usuário para a coleta de dados. Possui alguns relatórios como a Impressão do Extrato de ponto, relação de batidas duplicadas entre outros.",
  },
  {
    icon: "fa fa-hand-pointer-o",
    title: "Cartão de Ponto web",
    description:
      "Gerenciando todos os veículos e máquinas, registra as diversas despesas com manutenção e abastecimento, além de auxiliar em outros controles como, monitoramento diário de portaria, agendamento de viagens, manutenção preventiva, multas, licenciamentos e controle de pneus.",
  },
];

// hook
onMounted(() => {
  setNavPills();
});
</script>

<template>
  <BaseLayout
    title="SIP - Sistema Integrado de Pessoal"
    :breadcrumb="[
      { label: 'Produtos', route: '/pages/landing-pages/products' },
      { label: 'SIP' },
    ]"
  >
    <p>
      O Sistema Integrado de Pessoal-SIP é multi-empresa, multitarefa e
      multiusuário com permissão por tela. Possui senha de acesso criptografada.
      Todos os relatórios do sistema podem ser alterados pelo usuário, além de
      serem armazenados mais de um layout para cada relatório criado pelo
      sistema da Fiorilli.
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
        title="E-social"
        description="Suporte total ao eSocial, em atendimento ao Decreto nº 8373/2014 instituiu o Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="payment"
        title="Paramêtrização"
        description="Nossos eventos ou rubricas são totalmente parametrizáveis. Isso significa que toda formula de cálculo utilizada por sua empresa pode ser facilmente escrita de maneira rápida, segura e sem a intervenção de programação ou desenvolvimento."
        col="col-md-4"
      />
    </div>

    <div class="row align-items-start mt-5">
      <div class="col-md-6">
        <h4 class="text-primary">
          Interface de fácil compreensão e utilização
        </h4>
        <p>
          O SIP foi projetado para atender as necessidades dos usuários das
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
          Através dos módulos web os usuários conseguem fazer seus lançamentos
          de forma rápida e segura. Isso permite que os lançamentos sejam feitos
          pelas unidades externas e que essa ação seja descentralizada. Ainda,
          possibilita aos funcionários a extração de documentos e solicitações
          de diretos de forma mais rápida e menos onerosa.
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
        Atualmente 1 em cada 5 municípios brasileiros usam o SIP - Sistema
        Integrado de Pessoal. Completando 21 anos no mercado, hoje é a
        ferramenta mais utilizada pelas Prefeituras, Câmaras Municipais e outros
        Órgãos Públicos para execução de suas rotinas de Recursos Humanos e
        Folha de Pagamento.
      </p>

      <p>
        Nosso sistema possui módulos web que oferecem aos nossos clientes a
        possibilidade de distribuir o trabalho através do compartilhamento de
        responsabilidades. Através desse módulo os colaboradores da empresa
        podem interagir com o Setor de Recursos Humanos, trazendo maior
        transparência e dinamismo ao Setor.
      </p>

      <p>
        Utilizamos recursos Microsoft LDAP, que possibilitam aos colaboradores
        interagirem no portal através de um único login. Todos os nossos
        eventos/rubricas são facilmente parametrizáveis e isso traz para o
        Órgão, total independência na gestão das suas informações. Nossos
        usuários podem contar com recursos visuais fantásticos de conferência na
        geração da folha de pagamento.
      </p>

      <p>
        Solicite uma apresentação e comece a utilizar o sistema de pessoal mais
        completo, seguro e dinâmico do mercado. Nossas rotinas de automação
        trarão mais segurança e praticidade ao Gestor do Município.
      </p>
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center justify-content-between mt-5">
      <div class="col-sm-12 col-md-3 text-center">
        <a
          href="https://fiorilli.com.br/?service=sip-sistema-integrado-de-pessoal"
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
              message="Gostaria de solicitar a apresentação do SIP para a minha empresa na data [Informe a data aqui]. Obrigado!"
            />
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>