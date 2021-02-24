<template>
  <div>
    <label  :class="['label-box', disable ? 'disable-style': '']">
      <span :class="['icon', value ? 'active': '', getIcon]"></span>
      <input
        class="check-box"
        @change="handleChange"
        :checked="value"
        :disabled="disable"
        type="checkbox"
      />

      <span class="text">what siisldlsldsldl</span>
    </label>
  </div>
</template>
<script>
import Bus from "./eventBus.js";
export default {
  name: "CheckChild",
  data() {
    return {};
  },
  props: {
    disable: {
      type: Boolean,
      default: false
    },
    groupName: {
      type: String,
      default: "default"
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getIcon() {
      const value = this.value;
      return value ? "mi-icon-seleted" : " ";
    }
  },
  created() {
    this.id = Date.now() + Math.random();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const eventName = this.groupName;
      const id = this.id;
      const value = this.value;
      const obj = {
        id,
        value
      };
      
      Bus.$emit(eventName, obj);
      const emitName = this.groupName + "Select";
      Bus.$on(emitName, value => {
        if(this.disable) {
        return false;
      }
        this.$emit("input", value);
        const obj = {
          id,
          value
        };
        Bus.$emit(eventName, obj);
      });
    },
    handleChange() {
      const eventName = this.groupName;
      const value = !this.value;
      const id = this.id;
      const obj = {
        id,
        value
      };
      Bus.$emit(eventName, obj);
      this.$emit("input", value);
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.label-box {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  height: 30px;
  font-size: 20px;
}
.label-box:hover {
  background: #ccc;
}
.disable-style {
  cursor: not-allowed;
  opacity: 0.7;
}
.check-box {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.text {
  margin-left: 15px;
  display: inline-block;
}
.check-box:checked + .text {
  color: #0075ff;
  /* color: #fff; */
}

.icon {
  width: 20px;
  height: 20px;
  border: 1px solid #0075ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.active {
  background: #0075ff;
  color: #fff;
}
</style>