"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/MyInfo/MyInfo.js";
  "./pages/index/index.js";
  "./pages/Bills/MyPublishBills/MyPublishBills.js";
  "./pages/message/message.js";
  "./pages/Bills/MyReceiveBills/MyReceiveBills.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("warn", "at App.vue:4", "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    common_vendor.index.__f__("log", "at App.vue:5", "App Launch");
    common_vendor.index.MyShowToast = (title) => {
      common_vendor.index.showToast({
        icon: "none",
        title
      });
    };
    common_vendor.index.setTabBarBadge({
      index: 1,
      text: "1"
    });
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:18", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:21", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
