<template>
  <v-app id="home">
    <v-container>
      <v-card elevation="8" color="black" shaped>
        <v-card-title class="card-box">Seja bem vindo!</v-card-title>
        <v-form>
          <v-card-text class="card-box"
            >Olá, este é um projeto de Vuetify consumindo a API do
            GitHub</v-card-text
          >
        </v-form>
      </v-card>

      <v-timeline class="timeline">
        <v-timeline-item v-for="n in 1" :key="n" color="green lighten-2" large>
          <template v-slot:opposite>
            <span>Inicio</span>
          </template>
          <v-card class="elevation-2" color="black">
            <v-card-title class="card-box">
              O Inicio
              <v-card-text class="v-card-text">
                Foi proposto pela coordenação do Projeto o desenvolvimento de
                uma aplicação utilizando Vuetify que consumisse uma API de livre
                escolha.
              </v-card-text>
            </v-card-title>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" color="green lighten-2" large>
          <template v-slot:opposite>
            <span>Criação</span>
          </template>
          <v-card class="elevation-2" color="black">
            <v-card-title class="card-box">
              A Criação
              <v-card-text class="v-card-text">
                O projeto base desenvolvido, é uma busca de usuários existentes
                no GitHub.
              </v-card-text>
            </v-card-title>
          </v-card>
        </v-timeline-item>
        <v-timeline-item v-for="n in 1" :key="n" color="green lighten-2" large>
          <template v-slot:opposite>
            <span>Objetivo</span>
          </template>
          <v-card class="elevation-2" color="black">
            <v-card-title class="card-box">
              O Objetivo
              <v-card-text class="v-card-text">
                O projeto tem como objetivo despertar o espírito criativo e o
                aprendizado para desenvolver uma tela com o consumo de uma API.
              </v-card-text>
            </v-card-title>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>
#home {
  background-color: #161b22;
  color: white;
}
.card-box {
  background-color: #0d1117;
  color: white;
}

.timeline {
  color: white;
}

.v-sheet.v-card.v-sheet--shaped {
  border-radius: 30px 30px;
  border: transparent !important;
}
</style>
