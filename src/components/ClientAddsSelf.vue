<template>
  <div class="external-client-form">
    <p>MAKE YOUR MOVE</p>
    <el-form ref="form" :model="clientDraft" label-width="120px">
      <el-form-item class="single-line-entry" label="Client Name:">
        <el-input v-model="clientDraft.clientName" placeholder="and roommates, if applicable"></el-input>
      </el-form-item>
      <el-form-item class="single-line-entry" label="I'm looking to:">
        <el-select v-model="clientDraft.clientType" placeholder="rent, buy, sell...">
          <el-option label="buy" value="buyer"></el-option>
          <el-option label="sell" value="seller"></el-option>
          <el-option label="list a rental" value="landlord"></el-option>
          <el-option label="rent" value="renter"></el-option>
        </el-select>
      </el-form-item>
      <BuyerForm v-if="clientDraft.clientType === 'buyer'"  user="client"/>
      <SellerForm v-if="clientDraft.clientType === 'seller'"  user="client"/>
      <LandlordForm v-if="clientDraft.clientType === 'landlord'"  user="client"/>
      <RenterForm v-if="clientDraft.clientType === 'renter'"  user="client"/>
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
