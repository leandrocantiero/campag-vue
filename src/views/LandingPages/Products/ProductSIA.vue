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
    icon: "fa fa-home",
    title: "Imobiliário",
    description:
      "Módulo destinado ao controle dos Impostos Predial e Territorial Urbanos e também de Taxas de Serviços Urbanos, com cadastro de todos os imóveis edificados e não edificados para lançamento, gravação do histórico das alterações cadastrais e memória de cálculos, impressão de relatórios gerenciais, guias de recolhimento, certidões e gráficos para análise. Possui também um aplicativo mobile para recadastramento dos imóveis, com sincronização on-line, sem a necessidade de troca de arquivo txt.",
  },
  {
    icon: "fa fa-calendar-o",
    title: "Mobiliário",
    description:
      "Permite o controle de informações cadastrais das empresas, dos autônomos e dos ambulantes que exercem alguma atividade econômica no Município, além do cálculo e do lançamento das taxas mobiliárias previstas na legislação municipal. Também permite uma gestão completa das notas fiscais eletrônicas de serviços e das demais formas de escrituração de serviços por Prestadores e Tomadores, localizados ou não no Município que utiliza o SIA. Essa gestão compreende, ainda, as escriturações de serviços de prestadores específicos, como as instituições financeiras, os cartórios e as empresas de pedágio. Tanto a ferramenta de notas fiscais de serviços eletrônicas, quanto a declaração eletrônica de instituições financeiras (DES-IF) estão desenvolvidas de acordo com o modelo conceitual divulgado pela Associação Brasileira das Secretarias de Finanças das Capitais (ABRASF). Essas e as demais ferramentas de gestão de serviços prestados no Município permitem um cruzamento de informações registradas por Prestadores e Tomadores que facilita a fiscalização municipal. Além disso, ainda possui ferramentas que permitem a importação e o controle de todos os arquivos disponibilizados no Portal do Simples Nacional e o cruzamento das informações existentes nesses arquivos com aquelas que foram escrituradas no SIA em relação aos mesmos serviços.",
  },
  {
    icon: "fa fa-wrench",
    title: "Água, estogo e saneamento",
    description:
      "Este módulo do sistema permite o lançamento das Tarifas cobradas pela prestação de serviços de água, de coleta de esgoto, de realização de reparos na rede, de ligações, de cortes, de religações e das demais ordem de serviços. A Fiorilli Software ainda disponibiliza um aplicativo mobile para a coleta de dados (leitura) da unidade consumidora e para a emissão simultânea das faturas de consumo de serviço, com uma sincronização das informações entre o aplicativo mobile e o sistema feita via rede/Internet, sem a necessidade de troca de arquivos.",
  },
  {
    icon: "fa fa-calculator",
    title: "Rural",
    description:
      "Destinado ao cadastro de propriedades rurais e ao cálculo de taxa pelo serviço de conservação de estradas rurais de acordo com o índice de utilização de cada propriedade e o escoamento de produção, além da emissão de guia para recolhimento desses valores.",
  },
  {
    icon: "fa fa-desktop",
    title: "SIA web",
    description:
      "Disponibiliza na internet, diretamente no site oficial da entidade, alguns serviços para os contribuintes, tais como: consulta de Informações cadastrais, emissão de certidões, controle de autenticidade das certidões emitidas, consulta de dívidas, impressão do extrato de dívidas e geração de guias para recolhimento de dívidas já executadas, daquelas que estão abertas e se referem ao exercício corrente e também das que já estão inscritas em dívida ativa. Também permite a solicitação de serviços com a geração das respectivas guias de receitas diversas, além de consultas de sepultamentos registrados no módulo Cemitério.",
  },
  {
    icon: "fa fa-hand-pointer-o",
    title: "ISS web",
    description:
      "Módulo disponibilizado no site oficial da entidade para uso dos prestadores de serviço estabelecidos no Município para a emissão de Nota Fiscal Eletrônica de Serviços – NFS-e, de acordo com as regras gerais de cobrança de ISS previstas na legislação nacional, com as regras específicas para cobrança desse imposto estabelecidas na legislação municipal e conforme o modelo conceitual de NFS-e divulgado pela Associação Brasileira das Secretarias de Finanças das Capitais (ABRASF). Permite a solicitação de credenciamento, por prestadores e tomadores de serviço, diretamente no próprio site, com controle de liberação ou não do acesso ao sistema pelo servidor usuário do SIA, bem como da definição das funcionalidades do sistema ao qual cada credenciado terá acesso. Além da emissão de NFS-e, permite o registro de declarações simplificadas de serviços prestados por pessoas jurídicas cuja atividade não exija a identificação do tomador de cada serviço, o registro de declarações completas de serviços executados no Município por prestadores estabelecidos fora do seu território, além do registro de declarações de serviços tomados por tomadores do Município e do processamento da Declaração Eletrônica de Serviços de Instituições Financeiras – DES-IF. Permite a geração de guia para recolhimento de ISS próprio e de ISS retido, além da emissão de relatórios do movimento econômico registrado por prestadores e tomadores no sistema em determinado período. Está diretamente vinculado aos cadastros do módulo Mobiliário e aos registros e controles de dívidas do módulo Financeiro do SIA.",
  },
  {
    icon: "fa fa-hand-pointer-o",
    title: "Abertura, alteração e encerramento de empresas",
    description:
      "Este módulo possibilita a integração do SIA com o sistema da Junta Comercial de cada Estado, permitindo que as empresas solicitem o registro de abertura, de alteração ou de encerramento de seus cadastros de forma on-line, diminuindo a burocracia envolvida nesses procedimentos. Para tanto, permite a consulta de viabilidade para abertura das empresas de acordo com a lei de zoneamento do Município e o controle todos os trâmites dos processos de abertura, alteração e encerramento das empresas. Este módulo cria um canal de comunicação online entre os escritórios e Prefeitura, permitindo o registro de solicitações, o envio de documentos e o cadastro de perguntas e respostas relacionadas a esses procedimentos por ambas as partes, o que possibilita que o cadastro mobiliário das empresas passe a ter informações mais completas e atualizadas.",
  },
];

// hook
onMounted(() => {
  setNavPills();
});
</script>

<template>
  <BaseLayout
    title="SIA - Sistema Integrado de Arrecadação"
    :breadcrumb="[
      { label: 'Produtos', route: '/pages/landing-pages/products' },
      { label: 'SIA' },
    ]"
  >
    <p>
      O Sistema Integrado de Arrecadação foi desenvolvido para garantir à
      Administração Municipal o controle de todo o processo de arrecadação de
      receitas municipais de forma detalhada e segura. Trata-se de um sistema
      cujas funcionalidades podem ser adaptadas às regras de qualquer Código
      Tributário Municipal, a fim de calcular e controlar todos os tributos e
      preços públicos previstos em lei municipal. Projetado para controlar a
      arrecadação de maneira fácil, porém completa, o SIA permite aos usuários
      total controle sobre tabelas de cálculo, com ferramentas que possibilitam
      previsões de arrecadação com diferentes fatores, controles estatísticos,
      gráficos e relatórios existentes em todos os módulos que compõem esse
      sistema. Além disso, o SIA possui Controle de Usuários e de LOG avançados,
      por meio do qual o sistema armazena todas as operações feitas por todos os
      usuários.
    </p>

    <div class="row align-items-start mt-5">
      <DefaultInfoCard
        icon="payment"
        title="Gestão da Arrecadação"
        description="O sistema permite uma gestão completa e integrada de toda a área de arrecadação da Prefeitura com um banco de dados centralizado, permitindo cruzamento de informações, aumento do recebimento de receitas próprias e economia de recursos."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="badge"
        title="Serviços ao Contribuinte"
        description="O sistema fornece facilidades aos contribuintes, com a disponibilização de funcionalidades de pesquisa de situação fiscal e emissão de guias e certidões via Internet, gerando economia de tempo para o contribuinte e de recursos para Prefeitura."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="public"
        title="Integração"
        description="Integração em tempo real entre módulos web: ISSWEB e os módulos Mobiliário e Financeiro, integração entre o módulo de Água e Esgoto e os aplicativos Mobile, integração via internet entre o módulo Imobiliário e o aplicativo de recadastramento de Imóveis."
        col="col-md-4"
      />
    </div>

    <div class="row align-items-start mt-5">
      <div class="col-md-6">
        <h4 class="text-primary">
          Gestão completa do ISSQN e Simples Nacional
        </h4>
        <p>
          O sistema permite o cruzamento das informações registradas na emissão
          das notas fiscais eletrônicas de serviços (NFS-e) e de declarações de
          serviços prestados e tomados no Município com os dados coletados a
          partir do processamento dos arquivos disponibilizados no portal do
          Simples Nacional, facilitando a fiscalização dos dados dos serviços
          tributáveis no Município e o incremento de receita de ISSQN.
        </p>
      </div>

      <div class="col-md-6">
        <h4 class="text-primary">Abertura, alteração e encerramento online</h4>
        <p>
          Permite que as empresas solicitem o registro de abertura, de alteração
          ou de encerramento de seus cadastros de forma on-line diminuindo a
          burocracia envolvida nesses procedimentos. Permite a consulta de
          viabilidade para abertura das empresas de acordo com a lei de
          zoneamento do município.
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
        Atualmente 10% das cidades brasileiras usam o SIA - Sistema Integrado de
        Arrecadação. O sistema foi desenvolvido em contanto com quem utiliza de
        fato, por isso possui uma sequência lógica das funcionalidades que o
        usuário necessita para executar o seu trabalho.
      </p>

      <p>
        Estamos sempre atentos às demandas dos Órgãos Fiscalizadores e isso trás
        para os nossos clientes a segurança e tranquilidade necessária em sua
        rotina diária. O fácil acesso à nossa equipe de analistas, consultores,
        arquitetos e desenvolvedores tem sempre como resultado a velocidade no
        desenvolvimento de novas funcionalidades.
      </p>

      <p>
        Solicite uma apresentação e comece a utilizar rotinas de automação que
        trarão mais dinamismo e modernidade à arrecadação do seu município.
      </p>
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center justify-content-between mt-5">
      <div class="col-sm-12 col-md-3 text-center">
        <a
          href="https://fiorilli.com.br/?service=sia-sistema-integrado-de-arrecadacao"
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
              message="Gostaria de solicitar a apresentação do SIA para a minha empresa na data [Informe a data aqui]. Obrigado!"
            />
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>