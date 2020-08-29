<template>
  <div class="flex items-center w-full h-full bg-brand-black1">

    <div class="flex justify-center w-full">
      <div class="flex items-center justify-between w-4/5">
        <div class="w-1/2 p-16">
          <img class="w-full" src="../assets/finance.svg" alt="Ilustração">
        </div>

        <open-account-form class="w-1/2 rounded-sm" />
      </div>
    </div>

  </div>
</template>

<script>
import OpenAccountForm from '../components/OpenAccountForm'

export default {
  name: 'App',
  components: { OpenAccountForm }
}
</script>
