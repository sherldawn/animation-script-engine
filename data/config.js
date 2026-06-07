// ============ STRUCTURES DATA ============
const structures = [
  {id:"A", name:"经典三拍", desc:"Setup → Development → Punchline，最经典的短片喜剧结构",
   timeline:"[0-15s] Setup：角色+设定+道具登场\n[15-45s] Development：冲突/误解/升级\n[45-60s] Punchline：视觉反转 + Button line",
   examples:"鸽子时光机、For the Birds",
   fit:"纯喜剧、gag类"},
  {id:"B", name:"升级链", desc:"同一件事不断升级直到失控",
   timeline:"[0-10s] 建立一个动作/问题\n[10-30s] 第一次尝试→失败\n[30-50s] 第二次尝试→更大的失败\n[50-70s] 第三次→最大的失败或意外成功\n[70-80s] Punchline",
   examples:"Knick Knack、Lifted、Cat Came Back、worthikids《Wizard》",
   fit:"肢体喜剧、「笨蛋尝试做事」类"},
  {id:"C", name:"戏剧反讽", desc:"观众知道角色不知道的事，等待「爆炸」",
   timeline:"[0-10s] 角色发现/面对某物\n[10-15s] 观众通过画面获知真相（角色不知道）\n[15-50s] 角色基于错误认知行动（观众等待）\n[50-60s] 真相揭示，角色反应 = Punchline",
   examples:"鸽子时光机、Partly Cloudy",
   fit:"喜剧、误解类"},
  {id:"D", name:"循环", desc:"展示一个循环，每轮略有变化，最终打破或揭示循环含义",
   timeline:"[0-20s] 展示一个循环（A做某事→结果→回到起点）\n[20-40s] 第二个循环（略有变化/升级）\n[40-55s] 第三个循环（打破循环 或 揭示含义）\n[55-60s] 结尾：回到循环但含义已变",
   examples:"Afternoon Class、The Witness、Ice Merchants",
   fit:"日常观察、荒诞、黑色幽默"},
  {id:"E", name:"蒙太奇", desc:"快速切换画面序列，压缩时间/空间，用对比制造情感",
   timeline:"[0-10s] 建立起点状态\n[10-50s] 快速切换的画面序列（表达时间流逝/状态变化）\n[50-60s] 落点：终点状态 vs 起点状态的对比",
   examples:"Feast（食物蒙太奇）、Alike（颜色变化）、Negative Space（打包蒙太奇）",
   fit:"情感类、人生故事类"},
  {id:"F", name:"反转揭示", desc:"建立看似正常的场景，一个信息揭示完全不同的真相",
   timeline:"[0-40s] 建立一个看似正常/温暖/搞笑的场景\n[40-55s] 一个画面/信息揭示了完全不同的真相\n[55-60s] 观众在新认知下重新理解之前看到的一切",
   examples:"Bao（包子被吃了）、Hair Love（妈妈在化疗）、Negative Space（棺材）",
   fit:"情感冲击、黑色幽默"},
  {id:"G", name:"碎片拼贴", desc:"围绕一个主题呈现多个独立短画面，无因果关系靠主题统一",
   timeline:"[全程] 围绕一个主题/问题，呈现多个独立的短画面\n无因果关系，靠主题统一\n结尾回到起始问题，给出（或不给出）回答",
   examples:"Windshield Wiper（爱是什么？）、Cyriak系列（纯视觉）",
   fit:"氛围片、实验性内容、TikTok洗脑循环"}
];

// ============ DIRECTIONS DATA ============
const directions = [
  {medal:"🥇", title:"动物喜剧 + Slapstick + 戏剧反讽", time:"60秒",
   proto:"鸽子时光机 × For the Birds × Presto",
   why:"零对白、全年龄、高完播、强分享性、AI可实现",
   struct:"经典三拍或升级链", visual:"皮克斯式3D", risk:"🟢 低"},
  {medal:"🥈", title:"打工人荒诞 + 黑色幽默 + 情感反转", time:"90秒",
   proto:"丧尸清道夫 × WALL·E × Three Robots",
   why:"打工梗全球共鸣、机器人主角安全、结尾可有深度",
   struct:"蒙太奇 + 反转揭示", visual:"原子朋克/风格化3D", risk:"🟡 中（需平衡幽默与情感）"},
  {medal:"🥉", title:"「如果XX做YY」恶搞混搭", time:"60-90秒",
   proto:"Cas van de Pol",
   why:"模板无限可复制、可蹭热点、2分钟以下黄金时长",
   struct:"经典三拍", visual:"皮克斯式可爱3D", risk:"🟢 低-中（依赖热点时效）"},
  {medal:"4️⃣", title:"荒诞/Deadpan + 风格化视觉", time:"30-60秒",
   proto:"worthikids × Cyriak",
   why:"Gen Z市场大、辨识度高、可系列化",
   struct:"碎片拼贴或循环", visual:"手工感3D或AI独特风格", risk:"🟡 中（需找到自己的「怪」调性）"},
  {medal:"5️⃣", title:"视觉诗/氛围片", time:"60秒",
   proto:"The Frost × Windshield Wiper × Cyriak",
   why:"AI最擅长的方向、制作门槛低、可走电影节线",
   struct:"碎片拼贴", visual:"油画/超现实", risk:"🔴 高（流媒体传播力不确定）"}
];

// ============ CREATIVE IDEAS DATA ============
const statusClass = {
  draft: "status-draft",
  discussion: "status-discussion",
  final: "status-final",
  rejected: "status-rejected"
};

const creativeIdeas = [
  {
    id: 1,
    num: "001",
    title: "火锅毛肚大战 → 猫之对峙幻想",
    status: "discussion",
    statusLabel: "🔄 讨论中（V3完成）",
    mdFile: "剧本/001-火锅毛肚大战.md",
    oneLiner: "两只猫为最后一条鱼对峙，脑内各自幻想成史诗对决——海鸥趁机叼走了鱼",
    phases: [
      {
        title: "💡 原始想法",
        content: "4个小伙伴一起吃火锅，最后一片毛肚下锅。4人对视，战意顿起，4双筷子扭打在一起难解难分！一个转场，几人化身为红不败、蓝洪七、黄小龙和黑达摩在清汤牛油双拼锅里拼起武功。毛肚几次易主，最终黄小龙偷鸡成功，回归现实之中，她在众人羡慕的目光中吃下毛肚——yue！出字幕：毛肚老了不好吃哦~！"
      },
      {
        title: "🔍 诊断分析",
        content: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 16px">' +
          '<div style="color:#00b894">✅ 一句话概念：通过</div>' +
          '<div style="color:#d63031">❌ 非人类主角：4个人类</div>' +
          '<div style="color:#d63031">❌ 跨文化理解：毛肚/火锅/武侠全是中国编码</div>' +
          '<div style="color:#fdcb6e">⚠️ 视觉钩子：武侠有潜力但对北美非钩子</div>' +
          '<div style="color:#00b894">✅ 结尾情感交付：反转punchline存在</div>' +
          '<div style="color:#d63031">❌ 视觉风格：未定义</div>' +
          '<div style="color:#d63031">❌ AI可实现：4角色武打=灾难</div>' +
          '<div style="color:#fdcb6e">⚠️ 分享冲动：中国观众会，北美不确定</div>' +
          '</div>' +
          '<p style="margin-top:12px"><strong>通过率：2/8 = 25%</strong> → 需要大幅改编</p>' +
          '<p style="margin-top:8px"><strong>核心问题：</strong></p>' +
          '<p>1️⃣ 概念超载（4个概念挤入1分钟）</p>' +
          '<p>2️⃣ 文化壁垒（4层中国特定编码）</p>' +
          '<p>3️⃣ AIGC不可实现（4角色快速武打）</p>' +
          '<p>4️⃣ 角色太多（1分钟无法建立4个角色）</p>' +
          '<p style="margin-top:8px;color:#00b894"><strong>✅ 值得保留的内核：</strong>"日常小事 → 脑内史诗化幻想 → 被现实打回原形"——这个反差结构全球通用</p>'
      },
      {
        title: "❌ V2：北美化改编（被否决）",
        content: '<p><span style="display:inline-block;font-size:11px;padding:2px 8px;border-radius:10px;background:rgba(253,203,110,.2);color:#fdcb6e">V2</span> 毛肚→披萨，4人→4只动物，武侠→slapstick</p>' +
          '<p style="margin-top:8px"><strong>否决原因（用户反馈）：</strong></p>' +
          '<p>• 4只动物抢披萨 → AIGC同样无法处理4角色复杂互动</p>' +
          '<p>• "抢披萨"太普通，没有记忆点</p>' +
          '<p>• 失去了原版最有价值的"幻想化"转场</p>' +
          '<p style="margin-top:8px;color:#fdcb6e"><strong>关键洞察：</strong>问题不在于换什么食物，而在于减少角色、避免复杂动作、保留记忆点</p>'
      },
      {
        title: "✅ V3：猫之对峙幻想（当前版本）",
        content: '<p><span style="display:inline-block;font-size:11px;padding:2px 8px;border-radius:10px;background:rgba(0,184,148,.2);color:#00b894">V3</span> <strong>The Last Fish</strong> — 60秒</p>' +
          '<p style="margin-top:8px">两只猫为最后一条鱼对峙，脑内各自幻想成史诗对决——海鸥趁机叼走了鱼。</p>' +
          '<div style="margin-top:12px">' +
          '<div style="background:var(--card);border-radius:6px;padding:10px 12px;margin-top:6px;border-left:3px solid var(--accent2);font-size:12px"><div style="display:flex;justify-content:space-between"><strong style="color:var(--accent2)">#1</strong><span style="color:var(--text3)">0-5s ⭐</span></div>码头/户外桌面。一个盘子，最后一条金黄酥脆的鱼。海鸥叫声、海浪。</div>' +
          '<div style="background:var(--card);border-radius:6px;padding:10px 12px;margin-top:6px;border-left:3px solid var(--accent2);font-size:12px"><div style="display:flex;justify-content:space-between"><strong style="color:var(--accent2)">#2</strong><span style="color:var(--text3)">5-10s ⭐⭐</span></div>橘猫和黑猫从两侧走入。对视。眯眼。</div>' +
          '<div style="background:var(--card);border-radius:6px;padding:10px 12px;margin-top:6px;border-left:3px solid var(--accent2);font-size:12px"><div style="display:flex;justify-content:space-between"><strong style="color:var(--accent2)">#3</strong><span style="color:var(--text3)">10-15s ⭐⭐</span></div>🤠 橘猫幻想：蜕变西部牛仔。沙漠、风沙、手悬枪套。莫里康内式口哨配乐。</div>' +
          '<div style="background:var(--card);border-radius:6px;padding:10px 12px;margin-top:6px;border-left:3px solid var(--accent2);font-size:12px"><div style="display:flex;justify-content:space-between"><strong style="color:var(--accent2)">#4</strong><span style="color:var(--text3)">15-20s ⭐⭐</span></div>⚔️ 黑猫幻想：蜕变日本武士。樱花、竹林、武士刀。太鼓鼓点。</div>' +
          '<div style="background:var(--card);border-radius:6px;padding:10px 12px;margin-top:6px;border-left:3px solid var(--accent2);font-size:12px"><div style="display:flex;justify-content:space-between"><strong style="color:var(--accent2)">#5</strong><span style="color:var(--text3)">20-30s ⭐⭐</span></div>交叉剪辑加速：拔枪手 → 拔刀手 → 眼睛特写 → 风沙卷起 → 樱花暴风。两世界开始融合。</div>' +
          '<div style="background:var(--card);border-radius:6px;padding:10px 12px;margin-top:6px;border-left:3px solid var(--accent2);font-size:12px"><div style="display:flex;justify-content:space-between"><strong style="color:var(--accent2)">#6</strong><span style="color:var(--text3)">30-35s ⭐⭐⭐</span></div>幻想巅峰！开枪！挥刀！两股力量碰撞——白光闪烁——</div>' +
          '<div style="background:var(--card);border-radius:6px;padding:10px 12px;margin-top:6px;border-left:3px solid var(--accent2);font-size:12px"><div style="display:flex;justify-content:space-between"><strong style="color:var(--accent2)">#7</strong><span style="color:var(--text3)">35-42s ⭐⭐⭐</span></div>回到现实！两只猫同时扑向盘子——</div>' +
          '<div style="background:var(--card);border-radius:6px;padding:10px 12px;margin-top:6px;border-left:3px solid var(--accent2);font-size:12px"><div style="display:flex;justify-content:space-between"><strong style="color:var(--accent2)">#8</strong><span style="color:var(--text3)">42-48s ⭐⭐</span></div>爪子拍在空盘子上。鱼没了。困惑。面面相觑。</div>' +
          '<div style="background:var(--card);border-radius:6px;padding:10px 12px;margin-top:6px;border-left:3px solid var(--accent2);font-size:12px"><div style="display:flex;justify-content:space-between"><strong style="color:var(--accent2)">#9</strong><span style="color:var(--text3)">48-55s ⭐⭐</span></div>镜头拉远——海鸥叼着鱼飞走。它甚至没有回头看。</div>' +
          '<div style="background:var(--card);border-radius:6px;padding:10px 12px;margin-top:6px;border-left:3px solid var(--accent2);font-size:12px"><div style="display:flex;justify-content:space-between"><strong style="color:var(--accent2)">#10</strong><span style="color:var(--text3)">55-60s ⭐</span></div>Punchline：两猫对视→同时转头——远处还有另一条鱼。眼睛再次眯起…循环暗示。</div>' +
          '</div>' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 16px;margin-top:16px">' +
          '<div style="color:#00b894">✅ 一句话概念</div>' +
          '<div style="color:#00b894">✅ 非人类主角（猫+海鸥）</div>' +
          '<div style="color:#00b894">✅ 跨文化理解（零对白）</div>' +
          '<div style="color:#00b894">✅ 视觉钩子（牛仔猫/武士猫=meme）</div>' +
          '<div style="color:#00b894">✅ 结尾情感交付（笑+循环）</div>' +
          '<div style="color:#00b894">✅ 风格辨识度（三种风格切换）</div>' +
          '<div style="color:#00b894">✅ AI可实现（特写+风格切换）</div>' +
          '<div style="color:#00b894">✅ 想分享（猫觉得自己是牛仔）</div>' +
          '</div>' +
          '<p style="margin-top:12px;color:#00b894"><strong>通过率：8/8 = 100% ✅</strong></p>'
      }
    ],
    evolution: [
      "原版内核提取：「日常小事→脑内史诗化→现实打脸」",
      "去除文化特定层：火锅→码头 / 毛肚→鱼 / 武侠→全球化对决原型",
      "适配AIGC约束：4角色→2 / 打斗→对峙+幻想 / 复杂互动→特写+风格切换",
      "增加记忆点：牛仔猫+武士猫 = 视觉meme / 海鸥偷鱼 = 第三方punchline",
      "V3:《猫之对峙幻想》 ✅"
    ]
  }
];