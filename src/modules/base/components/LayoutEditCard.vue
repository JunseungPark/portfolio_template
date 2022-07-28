<template>
  <b-row class="g-0">
    <b-col xs="10" sm="10" md="10">
      <NewLayout :newLayouts="newLayouts"/>
    </b-col>
    <b-col xs="2" sm="2" md="2">
      <ContentsList :itemLayouts="itemLayouts"/>
    </b-col>
  </b-row>
</template>

<script>
import NewLayout from '@/modules/base/components/NewLayout.vue'
import ContentsList from '@/modules/base/components/ContentsList.vue'

export default {
  name: "LayoutEditCard",
  components: {
      NewLayout,
      ContentsList
  },
  data() {
    return {
      drag: false,
      newLayouts: [
        { name: "TestHeader", id: 1 },

      ],
      itemLayouts: [
        { name: "TestFooter", id: 3 },
        { name: "TestLayout", id: 2 },
        { name: "Test2Layout", id: 4 },
        { name: "Test3Layout", id: 5 },
        { name: "Test4Layout", id: 6 },
        { name: "Test5Layout", id: 7 },
        { name: "Test6Layout", id: 8 },
        { name: "Test7Layout", id: 9 },
      ],
    }
  },
}
</script>