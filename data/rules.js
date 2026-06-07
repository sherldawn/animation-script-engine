// ============ RULES & FORMULA DATA ============
// Extracted from dashboard.html for single-source-of-truth architecture.
// Dashboard renders from this data; edit here to update rules.

const formulaV2 = `2分钟以下北美向AI动画 = 
  一句话概念 + 非人类主角（动物 > 机器人 > 物品）
  + 7种结构中选1种 + 零对白或极少对白  
  + 风格化视觉（辨识度 > 精度）+ 1个视觉记忆点
  + 强结尾（笑/泪/震/思）+ AIGC友好设计
  + ≤2个主角，≤10个镜头`;

const checklist = [
  "一句话说清概念？",
  "非人类主角？",
  "不懂语言能看懂？",
  "有「停下滑动」的画面？",
  "结尾有情感交付？",
  "视觉风格有辨识度？",
  "AI能实现？",
  "看完想分享？",
  "主角≤2？",
  "镜头≤10？"
];

const rules = [
  {id:1,  title:"规律1：一个概念",
   content:"2min以下只容得下一个概念。能一句话说清就行。",
   detail:"30秒=1个gag / 60秒=1概念+1反转 / 120秒=1概念+发展+反转。如果不能一句话说清，就不适合2分钟以下。"},
  {id:2,  title:"规律2：七种结构",
   content:"见「叙事结构」页。A经典三拍 B升级链 C戏剧反讽 D循环 E蒙太奇 F反转揭示 G碎片拼贴",
   detail:"每种结构有明确的时间线模板，选定结构后按模板分配秒数。"},
  {id:3,  title:"规律3：结尾决定一切",
   content:"Punchline=笑着走 / Button line=回味 / 情感反转=泪 / 开放余韵=沉思 / 循环回归=不安 / 视觉升华=美",
   detail:"短片的结尾不是「故事结束了」，而是「情感到达了」。好的结尾是一个情感交付点。"},
  {id:4,  title:"规律4：三个受众圈层",
   content:"圈层1全年龄（覆盖广）→ 圈层2 Gen Z（传播强）→ 圈层3影迷（口碑强）。优先打1或2。",
   detail:"全年龄=零争议零暴力纯视觉 / Gen Z=荒诞反讽黑色幽默meme化 / 影迷=实验性深度学院派。"},
  {id:5,  title:"规律5：幽默排名",
   content:"🥇Slapstick 🥈反差/Subversion 🥉Absurdist 4.Dark humor 5.Irony",
   detail:"Slapstick最适合2min以下零对白。Irony通常需要对白/旁白辅助。"},
  {id:6,  title:"规律6：情感排名",
   content:"🥇孤独→连接 🥈克服恐惧/成长 🥉亲子/代际 4.接受差异 5.怀旧/失去",
   detail:"孤独→连接是2min内最高效的情感弧线（WALL·E/丧尸清道夫/Kitbull）。怀旧需要更多铺陈时间。"},
  {id:7,  title:"规律7：视觉风格排名",
   content:"🥇皮克斯3D(AI⭐⭐⭐⭐/市场⭐⭐⭐⭐⭐) 🥈风格化3D 🥉扁平2D 4.油画(AI强) 5.极简线条",
   detail:"皮克斯3D + AI生成 = 当前最大公约数。追求差异化可尝试油画或风格化3D。"},
  {id:8,  title:"规律8：AI不完美=风格",
   content:"worthikids粗糙3D→定格感 / Cyriak变形→分形美学 / Sora伪影→梦境 / 丧尸清道夫不一致→废土粗粝",
   detail:"技术局限不是问题，将局限整合为风格才是关键。"},
  {id:9,  title:"规律9：传播5要素",
   content:"🖼️视觉记忆点 💓情感触发 📸可截图引用 🎣结尾留钩子 ⚡低解释成本",
   detail:"5个要素至少满足3个。视觉记忆点+低解释成本 是短视频传播的最低门槛。"},
  {id:10, title:"规律10：平台匹配",
   content:"≤60s+punchline→TikTok/Shorts / 60-120s+情感→Shorts/X / AI话题→X / 高质量→YouTube / 系列→YouTube+TikTok",
   detail:"先选平台再定时长，不要反过来。"},
  {id:11, title:"规律11：AIGC约束=创意约束",
   content:"✅单角色静态/慢动作 ✅表情特写 ✅环境氛围 ✅风格切换 ⚠️2角色互动 ❌多角色肢体 ❌快速动作 ❌精确物理",
   detail:"主角≤2，镜头≤10，避免快速动作和精确物理交互。特写+风格切换是AI的舒适区。"}
];