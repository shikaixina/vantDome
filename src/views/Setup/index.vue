<template>
  <div>
    <div v-if="!state">
      <van-contact-card type="add" @click="onAdd" />
      <van-contact-card type="edit" :name="currentContact.name" :tel="currentContact.tel" @click="onEdit" />
      <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
    </div>
    <div v-else>
      <van-contact-edit is-edit show-set-default :contact-info="editingContact" set-default-label="设为默认联系人" @save="onSave" @delete="onDelete" />
    </div>
  </div>
</template>
<script lang="ts" setup="props">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = ref(false)
const onAdd = () => (state.value = true)
const editingContact = ref({})
const onSave = (contactInfo) => (state.value = false)
const onDelete = (contactInfo) => (state.value = false)
const currentContact = reactive({
  name: '李四',
  tel: '130111111111',
})
const onEdit = () => (state.value = true)
</script>
<style lang="less" scoped>
.van-cell {
  width: 100%;
}
</style>
