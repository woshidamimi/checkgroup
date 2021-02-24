<template>
  <div class="wrapper">
    <label class="raw">
      <input type="checkbox" class="half" :checked="isChecked" @change="handleChange" />
      <div :class="['show', getIcon, getClass]">
      </div>
      <span class="text">全选{{value}}</span>
    </label>
  </div>
</template>
<script>
import Bus from "./eventBus.js";
export default {
  name: "CheckGroup",
  props: {
    groupName: {
      type: String,
      default: "default"
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      status: "none",
      isChecked: false
    };
  },
  computed: {
    getIcon() {
      const obj = {
        "active-half": "mi-icon-sami-select",
        full: "mi-icon-seleted",
        none: null
      };
      const status = this.status;
      return obj[status];
    },
    getClass() {
      const status = this.status;
      return status;
    }
  },
  created() {
    this.ids = {};
    this.initEvent();
  },
  mounted() {},
  methods: {
    handleChange() {
      console.log("change", this.isChecked);
      const value = !this.isChecked;
      // this.$emit("input", value);
      const emitName = this.groupName + "Select";
      Bus.$emit(emitName, value);
    },
    initEvent() {
      const eventName = this.groupName;
      console.log(Bus);
      Bus.$on(eventName, obj => {
        const id = obj.id;
        if (id) {
          this.ids[id] = obj.value;
        }
        const values = Object.values(this.ids);
        const result = [...new Set(values)];
        console.log(result);
        if (result.length == 2) {
          this.status = "active-half";
          this.$emit("input", "half");
          this.isChecked = false;
          return false;
        }
        if (result[0] && result.length === 1) {
          this.status = "full";
          this.$emit("input", "full");
          this.isChecked = true;
        }
        if (!result[0] && result.length === 1) {
          this.status = "none";
          this.$emit("input", "none");
          this.isChecked = false;
        }
      });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  position: relative;
}
.raw {
  display: inline-flex;
  align-items: center;
}
.raw:hover {
  background: #ddd;
}
.show {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0075ff;
  font-weight: bold;
  font-size: 20px;

}
.show img {
  width: 100%;
}
.icon-set {
  font-size: 44px;
  background: #ccc;
}
.text {
  font-size: 40px;
  margin-left: 10px;
  margin-right: 10px;
}
.active-half {
  background: #0075ff;
  color: #fff;
}
.full {
  background: #0075ff;
  color: #fff;
}
.none {
}
.half {

  opacity: 0;
  position: absolute;
}
</style>