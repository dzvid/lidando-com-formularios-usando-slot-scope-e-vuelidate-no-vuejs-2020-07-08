<template>
  <div class="flex items-center w-full pb-16 lg:h-full lg:pb-16 bg-brand-black1">

    <div class="flex justify-center w-full mt-24 lg:mt-24">
      <div class="flex flex-col items-center justify-between w-4/5 lg:flex-row">
        <div class="w-full p-16 lg:w-1/2">
          <img class="w-full" src="../assets/finance.svg" alt="Ilustração">
        </div>

        <open-account-form-slot-scoped v-if="badassMode" class="w-full rounded-sm lg:w-1/2" />
        <open-account-form v-else class="w-full rounded-sm lg:w-1/2" />
      </div>
    </div>

  </div>
</template>

<script>
import OpenAccountForm from '../components/OpenAccountForm'
import OpenAccountFormSlotScoped from '../components/OpenAccountFormSlotScoped'

export default {
  name: 'App',
  components: { OpenAccountForm, OpenAccountFormSlotScoped },
  data: () => ({
    badassMode: true
  })
}
</script>
