<template>
  <b-list-group>
      <draggable 
        v-model="myArray" 
        group="people" 
        @start="drag=true" 
        @end="drag=false" 
        item-key="id">
        <template #item="{element}">
          <b-list-group-item>{{element.name}}</b-list-group-item>
        </template>
      </draggable>
</b-list-group>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "Master",
  components: {
        draggable,
  },
  data() {
    return {
      drag: false,
      myArray: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
    }
  },
}
</script>