"use strict";
const common_vendor = require("../../../common/vendor.js");
const MyBills = () => "../../../components/MyBills.js";
const _sfc_main = {
  name: "",
  components: {
    MyBills
  },
  onPullDownRefresh() {
    common_vendor.index.showLoading({
      title: "加载中",
      mask: true
    });
    setTimeout(() => {
      common_vendor.index.hideLoading();
    }, 1500);
  },
  setup() {
    const active = common_vendor.ref(0);
    const tabbar = common_vendor.reactive(["全部", "待接单", "已接单", "已完成", "已取消"]);
    const toggleTab = (index) => {
      active.value = index;
    };
    const datas = common_vendor.reactive([{
      publishDateTime: "2025-5-21 10:11",
      category: "软件工程",
      title: "软工实验报告，求各位大神帮帮忙!",
      publisher: "小任",
      balance: 28.88,
      status: 1
    }]);
    return { active, tabbar, toggleTab, datas };
  }
};
if (!Array) {
  const _component_MyBills = common_vendor.resolveComponent("MyBills");
  _component_MyBills();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.tabbar, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.n(index == $setup.active ? "active" : ""),
        c: index,
        d: common_vendor.o(($event) => $setup.toggleTab(index), index)
      };
    }),
    b: common_vendor.f($setup.datas, (item, index, i0) => {
      return {
        a: "9db773c6-0-" + i0,
        b: common_vendor.p({
          data: item
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9db773c6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/Bills/MyPublishBills/MyPublishBills.js.map
