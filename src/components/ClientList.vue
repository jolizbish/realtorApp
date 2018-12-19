<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180"></el-table-column>
    <el-table-column prop="name" label="Name" width="180"></el-table-column>
    <el-table-column prop="address" label="Address"></el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Lindsey Daniel',
        address: '609 Clayton Lane #557'
      }, {
        date: '2016-05-02',
        name: 'Jenn Jackson',
        address: 'Somewhere in Houston'
      }, {
        date: '2016-05-04',
        name: 'Joe Pazak',
        address: 'AMLI on 2nd'
      }, {
        date: '2016-05-01',
        name: 'Zoya Liu',
        address: '4610 Gonzalez St'
      }]
    }
  }
}
</script>
<style>

</style>
