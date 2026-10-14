# district-demo

余杭区「区数据看板 V2」静态演示包（前端构建产物，非源码）。

- 演示入口：<https://xjhyonier.github.io/district-demo/>
- 内含 8 个维度页签、合计行、4 张指标卡，数据为演示口径。
- 构建来源：内部 an-admin 前端工程（`UMI_ENV=test`）+ 静态发布前缀改写，仅用于线上预览分享。

## 说明

- 目录内的 `*.js` / `*.css` / `favicon.ico` 等为构建产物，按内容哈希命名，请勿手动修改。
- 若直接访问仓库根域名，页面会跳转到演示页（hash 路由需要 `#/an/...` 前缀）。
