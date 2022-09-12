<template>
  
  <nav>
    
      <v-toolbar app color="grey">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Vuetify </span>
        <span>Demo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn flat color="primary">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" color="grey">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="/src/assets/potato.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Neil Irvine Morales
            </v-list-item-title>
            <v-list-item-subtitle>mnibmorales@tip.edu.hph</v-list-item-subtitle>
          </v-list-item-content>

        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      
      <br>
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
        <div> </div>
        <br>
        <v-divider></v-divider>
        <v-list-item
          v-for="item in items1"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
   
  </nav>

</template>

<script setup>
  
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/' },
           { title: 'Math', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-help-box', path: '/stringApp'},
           { title: 'Quiz App', icon: 'mdi-information ', path: '/quiz1'},
           
           
        ])
        const  items1 =  ref([
           { title: 'About Me', icon: 'mdi-information ', path: '/aboutme'},
           { title: 'About the Application', icon: 'mdi-information ', path: '/page'},
           { title: 'About Axios', icon: 'mdi-information ', path: '/axios'},
           
           
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>
<script>
  export default {
    data: () => ({
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }),
  }
</script>