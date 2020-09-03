<template>
  <form @submit.prevent="handleSubmit">
    <slot
      v-if="errors"
      :errors="errors"
      :revalidate="() => applyValidation()" />
  </form>
</template>

<script>
export default {
  props: {
    initialValues: { type: Object, default: () => ({}) },
    schema: { type: Object, default: () => ({}) }
  },
  data: () => ({
    errors: null,
    hasErrors: {}
  }),
  watch: {
    schema () {
      this.applyValidation()
    }
  },
  mounted () {
    this.applyValidation({ isSetup: true })
  },
  methods: {
    handleSubmit () {
      this.applyValidation()

      const validations = Object.values(this.hasErrors)
      this.$emit('send', { ...this.errors, hasErrors: validations.includes(true) })
    },
    applyValidation ({ isSetup = false } = {}) {
      const errors = {}
      const keysToValidate = Object.keys(this.initialValues)

      for (const key of keysToValidate) {
        const validators = this.schema[key]
        const value = this.initialValues[key]

        for (const [validator, fn] of Object.entries(validators)) {
          const isValid = fn(value)
          errors[key] = { $dirty: !isSetup }
          errors[key][validator] = isValid
          this.computeErrors(key, validator, isValid)
        }
      }

      this.errors = errors
    },
    computeErrors (key, validator, isValid) {
      const uniqueId = `${key}-${validator}`
      this.hasErrors[uniqueId] = !isValid
    }
  }
}
</script>
