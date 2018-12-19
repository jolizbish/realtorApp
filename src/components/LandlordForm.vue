<template>
  <div>
    <!-- landlord form -->
    <el-form-item class="single-line-entry" label="Move Date">
      <el-date-picker
        type="move-date"
        placeholder="select date (still not functioning!)"
        v-model="clientDraft.moveDate"
        style="width: 100%;"
      ></el-date-picker>
    </el-form-item>
    <el-form-item class="single-line-entry" label="Budget">
      <el-input v-model="clientDraft.budget" placeholder="max total per month"></el-input>
    </el-form-item>
    <el-form-item label="Pets allowed?">
      <el-checkbox-group v-model="clientDraft.pets">
        <el-checkbox label="Cat(s)" name="cats"></el-checkbox>
        <el-checkbox label="Dog(s)" name="dogs"></el-checkbox>
        <el-checkbox label="More than 2 pets total" name="pets"></el-checkbox>
      </el-checkbox-group>
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
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Neighborhood">
      <el-input v-model="clientDraft.neighborhoods" placeholder="neighborhood"></el-input>
    </el-form-item>
    <el-form-item label="Additional notes">
      <el-input type="textarea" v-model="clientDraft.notes"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="saveNewClient(clientDraft)">Create</el-button>
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
