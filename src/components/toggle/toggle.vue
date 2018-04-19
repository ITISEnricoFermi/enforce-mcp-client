<template>
<div class="toggle u-noselect">
  <input type="checkbox" name="check" class="check" id="check" @click="toggle">
  <label for="check" class="label"></label>
</div>
</template>

<script>
export default {
  name: 'toggle',
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped lang="scss">
.toggle {
    max-width: 300px;
    margin: 94px auto 0;
    text-align: center;
    display: table-cell;
    vertical-align: middle;

    .check {
        max-height: 0;
        max-width: 0;
        opacity: 0;
        cursor: pointer;
    }

    .label {
        display: inline-block;
        position: relative;
        box-shadow: inset 0 0 0 1px #d5d5d5;
        text-indent: -5000px;
        height: 30px;
        width: 50px;
        border-radius: 15px;
        cursor: pointer;
        margin-top: 0.25rem;
        margin-bottom: -0.25rem;
        background: $color-button-red;
    }

    .label::before {
        content: "";
        position: absolute;
        display: block;
        height: 30px;
        width: 30px;
        top: 0;
        left: 0;
        border-radius: 15px;
        background: rgba(19,191,17,0);
        -moz-transition: 0.25s ease-in-out;
        -webkit-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
    }

    .label::after {
        content: "";
        position: absolute;
        display: block;
        height: 30px;
        width: 30px;
        top: 0;
        left: 0;
        border-radius: 15px;
        background: white;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.2);
        -moz-transition: 0.25s ease-in-out;
        -webkit-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
    }
    .check:checked + .label::before {
        width: 50px;
        background: rgba(19,191,17,1);
    }

    .check:checked + .label::after {
        left: 20px;
        box-shadow: inset 0 0 0 1px rgba(19,191,17,1), 0 2px 4px rgba(0,0,0,.2);
    }

}
</style>
