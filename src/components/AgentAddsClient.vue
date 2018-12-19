<template>
  <div class="internal-client-form">
    <p>Agent Adding a new Client to CRM</p>
    <el-form ref="form" :model="clientDraft" label-width="120px">
      <el-form-item class="single-line-entry" label="Client Name:">
        <el-input v-model="clientDraft.clientName" placeholder="and roommates, if applicable"></el-input>
      </el-form-item>
      <el-form-item class="single-line-entry" label="Client Type:">
        <el-select v-model="clientDraft.clientType" placeholder="buyer, renter, etc.">
          <el-option label="buyer" value="buyer"></el-option>
          <el-option label="seller" value="seller"></el-option>
          <el-option label="landlord" value="landlord"></el-option>
          <el-option label="renter" value="renter"></el-option>
        </el-select>
      </el-form-item>
      <BuyerForm v-if="clientDraft.clientType === 'buyer'" user="agent"/>
      <SellerForm v-if="clientDraft.clientType === 'seller'"  user="agent"/>
      <LandlordForm v-if="clientDraft.clientType === 'landlord'"  user="agent"/>
      <RenterForm v-if="clientDraft.clientType === 'renter'"  user="agent"/>
    </el-form>
  </div>
</template>
<script>
  import BuyerForm from './BuyerForm';
  import SellerForm from './SellerForm';
  import RenterForm from './RenterForm';
  import LandlordForm from './LandlordForm';
  import { mapMutations, mapGetters } from 'vuex';

  export default {
    components: {
      BuyerForm,
      SellerForm,
      LandlordForm,
      RenterForm
    },
    computed: {
      ...mapGetters({
        clientDraft: 'clientDraft'
      })
    },
    methods: {
      ...mapMutations({
      })
    }
  }
</script>
<style>
.internal-client-form {
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  width: 500px;
  height: 800px;
  margin: 30px auto 0 auto;
  background-color: white;
}
/*
.single-line-entry {
  margin: 5px 5px 0 5px;
  float: left;
  width: 333px;
} */
</style>
