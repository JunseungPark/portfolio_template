<template>
  <div class="modal" ref="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-body">
          <vue3-simple-html2pdf
            ref="vue3SimpleHtml2pdf"
            :options="pdfOptions"
            :filename="exportFilename"
          >
            <b-list-group v-if="newLayouts !=null">
              <b-list-group-item class="border-0" v-for="layout in newLayouts" :key="layout.id">
                <component :is="findCompoent(layout.subject, layout.name)"/>
              </b-list-group-item>
            </b-list-group>
          </vue3-simple-html2pdf>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
          <button type="button" class="btn btn-primary" @click="generateReport">generateReport</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { Modal } from 'bootstrap';

export default {
  name: "PreviewModal",
  props: {
    isShowMoadal: {
      type: Boolean,
    },
    newLayouts: {
      type: Array
    }
  },

  /// ------------------------- LIFE -------------------------///
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  /// ------------------------- LIFE -------------------------///
  data() {
    return {
      modal: null,
      modalVisible:true,
      pdfOptions: {
        margin: 5,
        image: {
          type: 'jpeg',
          quality: 1,
        },
        html2canvas: { scale: 3 },
        jsPDF: {
          unit: 'mm',
          format: 'a3',
          orientation: 'p',
        },
      },
      exportFilename: 'my-custom-file.pdf',
    }
  },
  watch: {
    isShowMoadal(val) {
      if (!this.modal) return
      if (val) {
        this.modal.show()
      } else {
        this.modal.hide()
      }
    },
  },
  methods: {
    generateReport () {
      this.$refs.vue3SimpleHtml2pdf.download()
    },
    findCompoent(subject, name){
      return defineAsyncComponent(() =>import(`@/modules/base/components/${subject}/${name}.vue`));
    },
    hideModal() {
      this.$emit('hideModal');
    }
  },
}
</script>a