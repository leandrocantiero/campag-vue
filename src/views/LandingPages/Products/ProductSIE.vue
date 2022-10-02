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
    icon: "fa fa-user",
    title: "Alunos e matrículas",
    description:
      "O cadastro de alunos é unificado e completo, permitindo estatísticas confiáveis e íntegras do seu histórico no município mesmo quando trabalhando com várias escolas interligadas. Oferece controle total de matrículas, desde o cadastro até o final do ano letivo ou evasão, onde o sistema controla também o motivo da evasão, seja por desistência, transferência ou outros motivos.",
  },
  {
    icon: "fa fa-desktop",
    title: "Lançamento de aulas",
    description:
      "O SIE permite que sejam lançadas as aulas em seus respectivos horários para cada turma, alertando o usuário, caso este tente lançar duas aulas diferentes para o mesmo professor no mesmo horário, garantindo o dinamismo e a integridade dos horários.",
  },
  {
    icon: "fa fa-graduation-cap",
    title: "Faltas e notas",
    description:
      "Gerenciamento completo de faltas e notas. O sistema é flexível e configurável para diferentes formas de avaliação e notas (conceitos), calculando automaticamente a média final e a condição do aluno, se aprovado ou reprovado.",
  },
  {
    icon: "fa fa-users",
    title: "Gestão de turmas",
    description:
      "Em uma tela simples e prática, o usuário pode lançar: Notas, Faltas, Causas e Intervenções, Ausências Compensadas, Conteúdo Ministrado, Planejamento de Aula, Sondagem de Escrita, bem como possíveis Ocorrências. Além de visualizar o Horário de Aula da Turma e de forma rápida, acessar as Disciplinas Padrão e Matrículas dessa Turma, e o cadastro do Aluno selecionado.",
  },
  {
    icon: "fa fa-bus",
    title: "Passe escolar",
    description:
      "Controla a distribuição de passe escolar para os alunos que usufruem deste benefício, informando ao usuário as últimas retiradas do aluno de modo que ele evite sobreposição.",
  },
  {
    icon: "fa fa-line-chart",
    title: "Controle estatístico",
    description:
      "O sistema oferece vários relatórios gerenciais e estatísticos com a opção de visualização, impressão e exportação.",
  },
];

// hook
onMounted(() => {
  setNavPills();
});
</script>

<template>
  <BaseLayout
    title="SIE - Sistema Integrado de Ensino"
    :breadcrumb="[
      { label: 'Produtos', route: '/pages/landing-pages/products' },
      { label: 'SIE' },
    ]"
  >
    <p>
      O SIE - Sistema Integrado de Ensino é uma solução da Fiorilli Software
      desenvolvido com a finalidade de gerenciar de forma simples, organizada e
      unificada todas as instituições de ensino do município. Gerencia a parte
      acadêmica das escolas, controlando desde notas e faltas dos alunos até
      falta de professores, atribuição de aulas e formulação do horário destas
      em um banco de dados único, simplificando consultas e permitindo um
      gerenciamento global.
    </p>

    <div class="row align-items-start mt-5">
      <DefaultInfoCard
        icon="shuffle"
        title="Educacenso"
        description="Totalmente integrado com a nova versão do sistema do Governo Federal. Importe e exporte dados facilmente."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="archive-paper"
        title="Gestão de Turmas"
        description="Em uma única tela você pode fazer gestão e as conferências necessárias para posterior impressão de documentos escolares."
        col="col-md-4"
      />

      <DefaultInfoCard
        icon="public"
        title="Módulo Web"
        description="Através de um módulo exclusivo, o docente pode lançar notas, faltas, conteúdo ministrado, planejamento e ocorrências."
        col="col-md-4"
      />
    </div>

    <div class="row align-items-start mt-5">
      <div class="col-md-6">
        <h4 class="text-primary">Escola integrada à família</h4>
        <p>
          De maneira simples e unificada, os Pais ou Responsáveis, conseguem
          visualizar toda a vida escolar do Aluno. Os Pais ainda podem ver as
          notas, as faltas e as ocorrências, estando sempre atento àquilo que
          acontece na escola. O Aluno pode até fazer download de arquivos
          disponibilizados pelo Professor.
        </p>
      </div>

      <div class="col-md-6">
        <h4 class="text-primary">Muito mais recursos</h4>
        <p>
          Se você possui nosso sistema de Contabilidade Pública, o SCPI, seu
          almoxarifado estará totalmente integrado. Isso significa que você
          poderá importar suas requisições de compras e até cadastrar produtos
          no SIE.
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
        O Sistema Integrado de Ensino está a 10 anos no mercado, nasceu das
        necessidades diárias e crescentes de uma Secretaria Escolar. Há 4 anos
        disponibilizamos o módulo WEB para Professor e Aluno. A partir daí as
        ações de inovação foram constantes.
      </p>

      <p>
        Podemos citar a unificação das informações como sendo uma das maiores
        vantagens na utilização do sistema. O aluno terá um único cadastro e
        esse será utilizado para matrículas em toda a rede municipal, tendo
        assim um histórico unificado e completo de toda vida escolar. Com o SIE,
        você vai acabar com o retrabalho. A partir de uma única alimentação de
        nota e falta é possível fazer a impressão de toda documentação
        necessária do aluno.
      </p>

      <p>
        Solicite uma apresentação e comece a utilizar rotinas de automação que
        trarão mais dinamismo e modernidade à Rede Pública de Ensino da sua
        Cidade.
      </p>
    </div>

    <hr class="horizontal dark my-5" />

    <div class="row align-items-center justify-content-between mt-5">
      <div class="col-sm-12 col-md-3 text-center">
        <a
          href="https://fiorilli.com.br/?service=sie-sistema-integrado-de-ensino"
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
              message="Gostaria de solicitar a apresentação do SIE para a minha empresa na data [Informe a data aqui]. Obrigado!"
            />
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>