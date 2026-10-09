# Xiaoyu Ou 的学术主页

根据原有 al-folio 模板和 `CV-Xiaoyu Ou.pdf` 制作。包含个人介绍、研究方向、论文列表、在线简历和联系方式，支持手机浏览，使用固定深色主题。

## 网站文件

- `_pages/about.md`：个人介绍。
- `_pages/research.md`：研究经历与未来方向。
- `_bibliography/papers.bib`：完整论文数据。`selected = {true}` 的论文会出现在首页；`authorship` 标明第一作者或合作论文。页面采用 IEEE 引用格式，第一作者论文按年份分组，合作论文合并展示。
- `_data/cv.yml`：在线简历。
- `_data/socials.yml`：邮箱、ORCID、GitHub 与简历链接。
- `assets/pdf/CV-Xiaoyu-Ou.pdf`：原始简历下载。
- `_layouts/about.liquid`：首页结构。
- `_includes/header.liquid`：左侧资料栏、彩色圆形照片和导航。
- `_sass/_personal.scss`：个人主页配色与手机布局。

论文状态和时间信息按 2026 年 9 月提供的简历保留；未来研究计划不作为已完成成果。

## 发布到你提供的 GitHub 仓库

仓库名 `XiaoyuOu.github.io` 与用户名 `XiaoyuOu666` 不完全一致，因此它属于项目网站。当前配置为：

```yaml
url: https://xiaoyuou666.github.io
baseurl: /XiaoyuOu.github.io
```

发布后的预计地址：<https://xiaoyuou666.github.io/XiaoyuOu.github.io/>。这个地址仅在仓库 Pages 配置完成并成功部署后可用。

1. 将本文件所在 `website` 文件夹中的修改提交并推送到原仓库 `main` 分支。原简历保留在外层文件夹；网站使用 `assets/pdf` 内的副本。
2. 打开 GitHub 仓库的 **Settings → Pages**，把 **Source** 设置为 **GitHub Actions**。
3. 在 **Actions** 中查看 **Build and deploy GitHub Pages**，等待构建和部署成功。如果修改 Pages 设置时 workflow 已结束，可使用 **Run workflow** 再运行一次。

不要选择 GitHub 内置的普通 Jekyll 构建方式；al-folio 使用额外插件，需要这个仓库附带的 Actions 工作流。

如果希望地址直接为 `https://xiaoyuou666.github.io/`，可以把仓库改名为 `XiaoyuOu666.github.io`，同时把 `_config.yml` 中 `baseurl` 改为 `""`。

## 后续在 GitHub 上修改

网站源文件保存在 `main` 分支，每次提交会自动触发 **Build and deploy GitHub Pages**。部署完成后，电脑和手机访问同一个网站地址即可看到更新。

- [修改 About me](https://github.com/XiaoyuOu666/XiaoyuOu.github.io/edit/main/_pages/about.md)
- [修改研究方向](https://github.com/XiaoyuOu666/XiaoyuOu.github.io/edit/main/_pages/research.md)
- [修改论文数据](https://github.com/XiaoyuOu666/XiaoyuOu.github.io/edit/main/_bibliography/papers.bib)
- [修改 CV 内容](https://github.com/XiaoyuOu666/XiaoyuOu.github.io/edit/main/_data/cv.yml)
- [查看发布进度](https://github.com/XiaoyuOu666/XiaoyuOu.github.io/actions)

在 GitHub 的文件页面点击编辑，保存时提交到 `main` 即可。网页样式集中在 `_sass/_personal.scss`。通过本地工作区修改前，先同步 GitHub 上的最新提交，避免覆盖在线修改。

## 本地查看

当前电脑可运行 `preview.ps1` 构建和预览。也可以在安装 Ruby 后运行：

```text
bundle install
bundle exec jekyll serve --baseurl ""
```

构建输出位于 `_site`；该文件夹不会提交到 GitHub。ZIP 发布包只包含网站源文件，排除了本地依赖和预览输出。

## 更新提示

- 网站采用固定深色的左侧资料栏布局，保留 Arial 字体和彩色圆形照片；手机上资料栏会显示在正文上方。
- 侧栏的 Email me、ORCID、Research profile 和 CV 采用竖向排列，每项左侧配单色小图标，手机上保持相同排列。
- 各页面采用统一的内容宽度和字号层级：页面标题 2.1rem、分节标题 1.4rem、正文 0.9rem。滚动条预留固定空间，避免长短页面切换时布局宽度变化。
- CV 的教育、教学和获奖经历使用带年份的时间线，研究经历使用连接线排列；手机上年份显示在条目上方。首页研究方向采用线条图标，论文在悬停或 DOI 获得键盘焦点时柔和高亮。各分节使用细分隔线与统一留白。
- 导航采用“滑块＋轻移”：左侧高亮块在 220 毫秒内平滑移动，右侧正文在 360 毫秒内淡入并上移 14 像素，旧正文轻微上移后淡出。保留独立页面地址、浏览器前进后退和论文搜索；系统启用减少动态效果时关闭动画。相关代码位于 `assets/js/sidebar-motion.js` 和 `_sass/_personal.scss`。
- 照片位于 `assets/img/Xiaoyu-Ou.jpg`。替换该文件即可更新照片；人物在页面中的显示位置由 `_sass/_personal.scss` 内的 `object-position` 控制。
- 页面切换期间头像使用原页面已绘制的画面，照片采用同步解码，避免新页面尚未绘制照片时短暂闪动。
- 更换 PDF 简历时保持文件名不变，相关下载链接即可继续使用。
- 原始 CV 包含手机号，下载文件保留了原件；网页联系方式以邮箱为主。
- 模板许可证保留在 `LICENSE`，页脚保留了 Jekyll / al-folio 署名。
