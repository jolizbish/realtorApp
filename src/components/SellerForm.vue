<template>
  <div>
    <!-- seller form -->
    <el-form-item class="single-line-entry" label="Ideal List Date">
      <el-radio-group v-model="clientDraft.moveDate">
        <el-radio label="ASAP" name="moveDate" value="0"></el-radio>
        <el-radio label="Within 1 month" name="moveDate" value="1"></el-radio>
        <el-radio label="Within 2 months" name="moveDate" value="2"></el-radio>
        <el-radio label="More than 2 months from now" name="moveDate" value="3"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item class="single-line-entry" label="List Price">
      <el-input v-model="clientDraft.budget" placeholder="$"></el-input>
    </el-form-item>
    <el-form-item label="Listing Size">
      <el-input v-model="clientDraft.sqft" placeholder="sq. ft."></el-input>
    </el-form-item>
    <el-form-item label="Beds">
      <el-radio-group v-model="clientDraft.beds">
        <el-radio label="0" name="beds" value="0"></el-radio>
        <el-radio label="1" name="beds" value="1"></el-radio>
        <el-radio label="2" name="beds" value="2"></el-radio>
        <el-radio label="3" name="beds" value="3"></el-radio>
        <el-radio label="4" name="beds" value="4"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Baths">
      <el-radio-group v-model="clientDraft.baths">
        <el-radio label="1" name="baths" value="1"></el-radio>
        <el-radio label="2" name="baths" value="2"></el-radio>
        <el-radio label="3" name="baths" value="3"></el-radio>
        <el-radio label="4" name="baths" value="4"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Neighborhoods">
      <el-select v-model="clientDraft.neighborhoods" placeholder="all good in tha hood">
        <el-option label="Downtown" value="Downtown"></el-option>
        <el-option label="Clarksville" value="Clarksville"></el-option>
        <el-option label="Eastside" value="Eastside"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Additional notes">
      <el-input type="textarea" v-model="clientDraft.notes" placeholder="what else would you like to tell us about your listing?"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="saveNewClient(clientDraft);">Create</el-button>
    </el-form-item>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      clientDraft: 'clientDraft'
    })
  },
  watch: {
  },
  methods: {
    ...mapMutations({
      mutatePetSelections: 'mutatePetSelections',
      mutateDateSelection: 'mutateDateSelection',
      mutateBudget: 'mutateBudget',
      mutateBedSelections: 'mutateBedSelections',
      mutateBathSelections: 'mutateBathSelections',
      mutateNeighborhoodSelections: 'mutateNeighborhoodSelections',
      mutateCurrentNotes: 'mutateCurrentNotes'
    }),
    ...mapActions({
      saveNewClient:'saveNewClient'
    })
  }
}
</script>
<style></style>
