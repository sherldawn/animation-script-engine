// ============ TAG REGISTRY ============
// Single source of truth for all tag definitions.
// Filter UI auto-generates from this file.
// To add a new tag: just add an entry here + tag the relevant works.

const tagRegistry = {
  type: {
    label: "内容类型",
    multi: true,
    options: {
      slapstick:  {label:"🤸 Slapstick肢体喜剧", color:"#e17055"},
      irony:      {label:"🎭 反讽/讽刺", color:"#0984e3"},
      absurd:     {label:"🌀 荒诞", color:"#6c5ce7"},
      dark:       {label:"🖤 黑色幽默", color:"#636e72"},
      warm:       {label:"☀️ 温暖治愈", color:"#fdcb6e"},
      lonely:     {label:"🌙 孤独与连接", color:"#74b9ff"},
      nostalgia:  {label:"📼 怀旧", color:"#fd79a8"},
      ai:         {label:"🤖 AI新锐", color:"#00cec9"},
      chinese:    {label:"🇨🇳 中国文化", color:"#d63031"},
      japanese:   {label:"🇯🇵 日本美学", color:"#fd79a8"},
      game:       {label:"🎮 游戏IP/风格", color:"#a29bfe"},
      music:      {label:"🎵 音乐驱动", color:"#e84393"},
      commercial: {label:"📺 商业/宣传", color:"#00b894"},
      scifi:      {label:"🔬 科幻/未来", color:"#0984e3"},
      social:     {label:"📱 社媒原生", color:"#6c5ce7"},
      experiment: {label:"🧪 实验艺术", color:"#fd79a8"},
      human:      {label:"👤 人类主角", color:"#b2bec3"}
    }
  },
  artStyle: {
    label: "画风",
    multi: true,
    options: {
      pixar3d:    {label:"✨ 皮克斯3D", color:"#6c5ce7"},
      stylized3d: {label:"🎲 风格化3D", color:"#a29bfe"},
      lowpoly:    {label:"💎 低多边形", color:"#00cec9"},
      anime:      {label:"🎌 日式动画", color:"#fd79a8"},
      flat2d:     {label:"📐 扁平2D", color:"#0984e3"},
      handdrawn:  {label:"✏️ 手绘", color:"#fdcb6e"},
      watercolor: {label:"💧 水彩", color:"#74b9ff"},
      oilpaint:   {label:"🖼️ 油画", color:"#e17055"},
      crayon:     {label:"🖍️ 蜡笔/粉笔", color:"#fdcb6e"},
      yarn:       {label:"🧶 毛线/毛毡", color:"#00b894"},
      pixel:      {label:"👾 像素", color:"#636e72"},
      silhouette: {label:"🌑 剪影", color:"#2d3436"},
      collage:    {label:"🧩 拼贴/混搭", color:"#e84393"},
      sketch:     {label:"〰️ 简笔/线条", color:"#b2bec3"},
      photoReal:  {label:"📷 照片级写实", color:"#636e72"},
      woodcut:    {label:"🪵 木刻版画", color:"#e17055"},
      geometric:  {label:"🔷 几何极简", color:"#0984e3"},
      atomPunk:   {label:"☢️ 原子朋克", color:"#fdcb6e"},
      flash:      {label:"⚡ Flash风格", color:"#e84393"},
      inkwash:    {label:"🎋 水墨", color:"#636e72"},
      ukiyoe:     {label:"🌊 浮世绘风", color:"#0984e3"}
    }
  },
  technique: {
    label: "技法",
    multi: true,
    options: {
      "3dModel":      {label:"🧊 3D建模渲染", color:"#6c5ce7"},
      celShade:       {label:"🎨 三渲二", color:"#a29bfe"},
      "2dTraditional":{label:"🖌️ 传统2D动画", color:"#fdcb6e"},
      "2dDigital":    {label:"💻 数字2D", color:"#0984e3"},
      stopMotion:     {label:"🎬 定格动画", color:"#00b894"},
      rotoscope:      {label:"🔄 转描", color:"#e84393"},
      aiGenerated:    {label:"🤖 AI生成", color:"#00cec9"},
      motionGraphics: {label:"📊 动态图形", color:"#74b9ff"},
      mixed:          {label:"🔀 混合技法", color:"#636e72"},
      liveActionAnim: {label:"🎭 真人+动画", color:"#b2bec3"},
      photoManip:     {label:"📸 照片拼接", color:"#e17055"},
      gameEngine:     {label:"🕹️ 游戏引擎", color:"#a29bfe"}
    }
  },
  texture: {
    label: "材质/质感",
    multi: true,
    options: {
      smooth:     {label:"🪞 光滑数字", color:"#6c5ce7"},
      handcraft:  {label:"🧵 手工质感", color:"#00b894"},
      paper:      {label:"📄 纸质感", color:"#fdcb6e"},
      clay:       {label:"🪨 粘土", color:"#e17055"},
      fabric:     {label:"🧶 布料/毛线", color:"#fd79a8"},
      grain:      {label:"🎞️ 胶片/颗粒", color:"#636e72"},
      painterly:  {label:"🎨 绘画笔触", color:"#e84393"},
      pencil:     {label:"✏️ 铅笔线条", color:"#b2bec3"},
      woodblock:  {label:"🪵 版画", color:"#e17055"},
      lowfi:      {label:"📺 低保真", color:"#a29bfe"}
    }
  },
  source: {
    label: "来源",
    multi: false,
    options: {
      streaming: {label:"📱 流媒体", color:"#636e72"},
      festival:  {label:"🏆 电影节", color:"#fdcb6e"},
      channel:   {label:"📺 头部账号", color:"#0984e3"}
    }
  },
  compress: {
    label: "可压缩至2min",
    multi: false,
    options: {
      yes:   {label:"✅ 可压缩", color:"#00b894"},
      maybe: {label:"⚠️ 需调整", color:"#fdcb6e"}
    }
  },
  dialogue: {
    label: "对白",
    multi: false,
    options: {
      none: {label:"🤫 零对白", color:"#00cec9"},
      few:  {label:"💬 极少", color:"#74b9ff"},
      some: {label:"🗣️ 有对白", color:"#b2bec3"}
    }
  }
};

// Helper: get tag display info
function getTagInfo(category, value) {
  const cat = tagRegistry[category];
  if (!cat || !cat.options[value]) return {label: value, color: "#636e72"};
  return cat.options[value];
}