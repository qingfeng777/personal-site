<template>

        <div class="index">
                <ul>
              <li>
                <router-link to="/manager/home">
                    博客管理首页
                </router-link>
              </li>
              <li>
                <router-link to="/manager/edit">
                  edit      
                </router-link>
              </li>
              <li>
                <router-link to="/manager/tag">
                  tag        
                </router-link>
              </li>
            </ul>
            <router-view />
</div>

</template>

<script>

</script>


<style>

</style>

