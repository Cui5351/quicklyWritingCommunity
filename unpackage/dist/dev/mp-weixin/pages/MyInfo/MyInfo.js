"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const Bottom = () => "../../components/Bottom.js";
const uniIcons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _sfc_main = {
  name: "",
  components: {
    uniIcons,
    Bottom
  },
  setup() {
    const userInfo = common_vendor.reactive({
      name: "张三",
      avatar: "/static/logo.png",
      phone: "15799441146",
      money: 0,
      publishCount: 0,
      myBills: 3
    });
    const login = common_vendor.reactive(true);
    const toggle = (page) => {
      if (!login) {
        common_vendor.index.MyShowToast("请先登录");
        return;
      }
      common_vendor.index.navigateTo({
        url: page
      });
    };
    return { userInfo, toggle };
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_Bottom = common_vendor.resolveComponent("Bottom");
  (_easycom_uni_icons2 + _component_Bottom)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return {
    a: $setup.userInfo.avatar,
    b: common_vendor.t($setup.userInfo.name),
    c: common_vendor.t($setup.userInfo.phone),
    d: common_vendor.p({
      type: "right",
      size: "17"
    }),
    e: common_assets._imports_0,
    f: common_vendor.t($setup.userInfo.publishCount),
    g: common_vendor.o(($event) => $setup.toggle("/pages/Bills/MyPublishBills/MyPublishBills")),
    h: common_vendor.p({
      type: "right",
      size: "17"
    }),
    i: common_assets._imports_1,
    j: common_vendor.t($setup.userInfo.myBills),
    k: common_vendor.p({
      type: "right",
      size: "17"
    }),
    l: common_assets._imports_2,
    m: common_vendor.t((_a = $setup.userInfo.money) == null ? void 0 : _a.toFixed(2)),
    n: common_vendor.p({
      type: "right",
      size: "17"
    }),
    o: common_vendor.f(7, (item, k0, i0) => {
      return {
        a: "../../static/c" + item + ".png",
        b: "35112905-4-" + i0,
        c: item
      };
    }),
    p: common_vendor.p({
      type: "right"
    }),
    q: common_vendor.p({
      loadding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-35112905"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/MyInfo/MyInfo.js.map
