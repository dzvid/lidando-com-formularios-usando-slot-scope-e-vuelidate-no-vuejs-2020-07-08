<template>
  <div class="flex flex-col p-5 bg-brand-black2">
    <header class="">
      <h1 class="text-4xl font-black text-white">Rocketbank.</h1>
      <p class="text-lg text-white">A primeira conta digital no foguete 🚀</p>
    </header>

    <form class="flex flex-col mt-10" @submit.prevent="handleSubmit">
      <label>
        <span class="text-white">Nome*</span>
        <input @input="$v.name.$touch()" v-model="name" type="text" class="block w-full mt-1 text-brand-black1 form-input" placeholder="Igor Halfeld">
        <span v-if="isNameInvalid" class="block mt-1 text-sm font-light text-red-400">* O campo é obrigatório</span>
      </label>

      <label class="mt-5">
        <span class="text-white">E-mail*</span>
        <input @input="$v.email.$touch()" v-model="email" text="email" class="block w-full mt-1 text-brand-black1 form-input" placeholder="iguin@iguin.com">
        <span v-if="isEmailInvalid" class="block mt-1 text-sm font-light text-red-400">* O campo é obrigatório</span>
      </label>

      <label class="mt-5">
        <span class="text-white">CPF*</span>
        <input ref="cpf" @input="$v.cpf.$touch()" v-model="cpf" type="text" class="block w-full mt-1 text-brand-black1 form-input" placeholder="430.141.452-43">
        <span v-if="isCPFInvalid" class="block mt-1 text-sm font-light text-red-400">* O campo é obrigatório</span>
      </label>

      <label class="mt-5">
        <span class="text-white">Estado</span>
        <select @change="$v.state.$touch()" v-model="state" class="block w-full mt-1 form-select">
          <option value="" selected disabled>Selecione</option>
          <option value="rio-de-janeiro">Rio de Janeiro</option>
          <option value="sao-paulo">São Paulo</option>
          <option value="minas-gerais">Minas Gerais</option>
        </select>
        <span v-if="isStateInvalid" class="block mt-1 text-sm font-light text-red-400">* O campo é obrigatório</span>
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
import VMasker from 'vanilla-masker'
import { required, minLength } from 'vuelidate/lib/validators'
import { isValid as isValidCpf } from '@fnando/cpf'

function validEmail (email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(String(email).toLowerCase()) // eslint-disable-line
}

// Clean mask to validate
const validateCPF = cpf => {
  const rawCPF = cpf.replace(/(\.|-)/g, '')
  return isValidCpf(rawCPF)
}

export default {
  props: {
    push: { type: Function, default: () => ({}) }
  },
  data: () => ({
    name: '',
    email: '',
    cpf: '',
    state: ''
  }),
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      validEmail
    },
    cpf: {
      required,
      validCpf: validateCPF
    },
    state: {
      required
    }
  },
  computed: {
    isNameInvalid () {
      return this.$v.name.$dirty && (!this.$v.name.required || !this.$v.name.minLength)
    },
    isEmailInvalid () {
      return this.$v.email.$dirty && (!this.$v.email.required || !this.$v.email.validEmail)
    },
    isCPFInvalid () {
      return this.$v.cpf.$dirty && (!this.$v.cpf.required || !this.$v.cpf.validCpf)
    },
    isStateInvalid () {
      return this.$v.state.$dirty && !this.$v.state.required
    }
  },
  mounted () {
    VMasker(this.$refs.cpf).maskPattern('999.999.999-99')
  },
  methods: {
    handleSubmit () {
      console.log('Submit!')
      this.$v.$touch()

      if (!this.$v.$invalid) {
        console.log('It\'s a valid form!', {
          name: this.name,
          email: this.email,
          cpf: this.cpf,
          state: this.state
        })
        this.$router.push('Success')
        return
      }

      console.log('Invalid :(')
    }
  }
}
</script>
