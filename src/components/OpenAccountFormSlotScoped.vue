<template>
  <div class="flex flex-col p-5 bg-brand-black2">
    <header class="">
      <h1 class="text-4xl font-black text-white">Rocketbank.</h1>
      <p class="text-lg text-white">A primeira conta digital no foguete 🚀</p>
    </header>

    <form-validator
      :initial-values="form"
      :schema="{
        name: {
          required: (value) => !!value
        }
      }"
      class="flex flex-col mt-10"
      @send="handleSubmit">
      <template slot-scope="{ errors, revalidate }">
        <label>
          <span class="text-white">Nome*</span>
          <input @input="revalidate" v-model="form.name" type="text" class="block w-full mt-1 text-brand-black1 form-input" placeholder="Igor Halfeld">
          <span v-if="errors.name.$dirty && !errors.name.required" class="block mt-1 text-sm font-light text-red-400">* O campo é obrigatório</span>
        </label>

        <div class="pt-10">
          <input
            type="submit"
            value="Abrir conta!"
            class="w-full py-4 text-2xl font-medium font-black text-white uppercase rounded-sm cursor-pointer bg-brand-main">
        </div>
      </template>
    </form-validator>

  </div>
</template>

<script>
import FormValidator from './FormValidator'

export default {
  props: {
    push: { type: Function, default: () => ({}) }
  },
  components: { FormValidator },
  data: () => ({
    form: {
      name: ''
    }
  }),
  methods: {
    handleSubmit ({ hasErrors }) {
      console.log('* Has errors', hasErrors)

      if (!hasErrors) {
        console.log('It\'s a valid form!', {
          name: this.name
        })
        this.$router.push('Success')
        return
      }

      console.log('Invalid :(')
    }
  }
}
</script>
