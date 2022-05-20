<template>
  <v-app>
    <v-card>
      <v-navigation-drawer
        class="nav"
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        app
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="./assets/ydnZ3AGH_400x400.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>GitSolinf</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in item"
            :key="item.title"
            link
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      item: [
        { title: "Home", icon: "mdi-home", path: "/" },
        { title: "Lucas Rodrigo", icon: "mdi-github", path: "/Lucas" },
        { title: "", icon: "", path: "/" },
        { title: "", icon: "", path: "/" },
        { title: "", icon: "", path: "/" },
        { title: "", icon: "", path: "/" },
      ],
      mini: true,
    };
  },
};
</script>


