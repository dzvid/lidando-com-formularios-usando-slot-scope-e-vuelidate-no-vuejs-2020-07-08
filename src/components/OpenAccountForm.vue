<template>
  <div class="flex flex-col p-5 bg-brand-black2">
    <header class="">
      <h1 class="text-4xl font-black text-white">Rocketbank.</h1>
      <p class="text-lg text-white">A primeira conta digital no foguete 🚀</p>
    </header>

    <form class="flex flex-col mt-10" @submit.prevent="handleSubmit">
      <label>
        <span class="text-white">Nome*</span>
        <input type="text" class="block w-full mt-1 text-brand-black1 form-input" placeholder="Igor Halfeld">
        <span class="block mt-1 text-sm font-light text-red-400">* O campo é obrigatório</span>
      </label>

      <label class="mt-5">
        <span class="text-white">E-mail*</span>
        <input text="email" class="block w-full mt-1 text-brand-black1 form-input" placeholder="iguin@iguin.com">
        <span class="block mt-1 text-sm font-light text-red-400">* O campo é obrigatório</span>
      </label>

      <label class="mt-5">
        <span class="text-white">CPF*</span>
        <input type="text" class="block w-full mt-1 text-brand-black1 form-input" placeholder="430.141.452-43">
        <span class="block mt-1 text-sm font-light text-red-400">* O campo é obrigatório</span>
      </label>

      <label class="mt-5">
        <span class="text-white">Estado</span>
        <select class="block w-full mt-1 form-select">
          <option value="rio-de-janeiro">Rio de Janeiro</option>
          <option value="sao-paulo">São Paulo</option>
          <option value="minas-gerais">Minas Gerais</option>
        </select>
      </label>

      <div class="pt-10">
        <input
          type="submit"
          value="Abrir conta!"
          class="w-full py-4 text-2xl font-medium font-black text-white uppercase rounded-sm cursor-pointer bg-brand-main">
      </div>
    </form>

  </div>
</template>

<script>
export default {
  props: {
    push: { type: Function, default: () => ({}) }
  },
  methods: {
    handleSubmit () {
      console.log('Submit!')
      this.$router.push('Success')
    }
  }
}
</script>
