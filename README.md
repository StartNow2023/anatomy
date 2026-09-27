# 解剖学习笔记 · Anatomy Notes

我的人体解剖学习网站。按《系统解剖学》的顺序分 8 个阶段学，每个阶段一个页面，每页配一个小测验。
纯静态网页（HTML + CSS + JS），不需要安装任何东西，直接用 GitHub Pages 发布。

网址（开启 Pages 后）：**https://startnow2023.github.io/anatomy/**

---

## 一、网站里有什么

| 页面 | 内容 |
| --- | --- |
| `index.html` 学习路线 | 8 个阶段的卡片：学什么、过关标准，可以打勾记录进度 |
| `terms.html` 第 0 阶段 · 方位术语 | 解剖学姿势、8 对方位术语（带示意图）、三个切面、速查表、小测验 |
| `bones.html` 第 1 阶段 · 骨骼 | 可点击的全身骨骼图、206 块骨怎么数、骨的形状、"在自己身上摸一摸"清单、看图认骨小测验 |

第 2～7 阶段（关节、肌肉、内脏、脉管、感觉器、神经）还没做。

## 二、怎么开启 GitHub Pages（只需做一次）

1. 进入仓库页面 → 顶部 **Settings**（设置）
2. 左侧菜单点 **Pages**
3. 在 **Build and deployment** 下：
   - Source 选 **Deploy from a branch**
   - Branch 选 **main**，文件夹选 **/ (root)**，点 **Save**
4. 等 1～3 分钟，页面顶部会显示网址：**https://startnow2023.github.io/anatomy/**

> 仓库需要是 Public（公开）才能免费使用 Pages。

## 三、内容在哪里改

| 想改什么 | 改哪个文件 |
| --- | --- |
| 8 个阶段的说明 | `js/roadmap.js` 顶部的 `STAGES` |
| 方位术语说明 | `js/terms.js` 顶部的 `TERMS` |
| 方位术语小测验题目 | `js/terms.js` 顶部的 `QUESTIONS` |
| 每块骨头的说明 | `js/bones.js` 顶部的 `BONES` |
| "在自己身上摸一摸"清单 | `js/bones.js` 顶部的 `LANDMARKS` |
| 颜色、字体等样式 | `css/style.css` 最上面的 `:root` |

## 四、以后怎么加新阶段（比如第 2 阶段"关节"）

1. 照着 `bones.html` 复制一个新页面，比如 `joints.html`，改掉标题和内容
2. 在 `js/roadmap.js` 的 `STAGES` 里，给"关节"那一项加上 `href: "joints.html"`，路线页就会出现"开始学习"按钮
3. 在每个页面顶部的导航里加一行 `<a href="joints.html">2 关节</a>`

## 五、版权和合规

- 骨骼图、人形图都是用代码自己画的简化示意图，文字是自己整理的笔记，小测验的题目是自己出的。
- 以后加图：只用自己画的，或者 OpenStax、Wikimedia Commons 等注明可以使用的图，并在图下写上出处。**不要**直接用教材、图谱、App 或其他网站的图。
- 加题目：自己出题。**不要**照搬教材课后题、题库 App 或考试真题。
- 每页底部都有声明：内容仅供学习参考，不构成医疗建议。
- 打勾进度只保存在访问者自己的浏览器里，网站不收集任何个人信息。

## 六、在自己电脑上预览（可选）

直接双击打开 `index.html` 就能看。也可以在文件夹里运行：

```
python3 -m http.server
```

然后浏览器打开 http://localhost:8000 。
