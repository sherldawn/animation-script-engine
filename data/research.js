// ============ RESEARCH DATA ============
// Content from MD files not covered by works.js / batch-ideas.js

// ---- PROJECT OVERVIEW (from CLAUDE.md + 调研方案.md) ----
const projectOverview = {
  goal: "创作时长2分钟以下、适合北美口味、动画形式、流媒体平台传播的短片内容。",
  subGoals: [
    "完成系统性市场调研（平台规则、受众画像、竞品分析、叙事结构、工具链、商业模式）",
    "基于调研产出《创作方法论V2.0》",
    "产出3-5个可执行的1-2分钟动画剧本",
    "建立可复制的AI动画制作工作流"
  ],
  evaluation: [
    {q:"作品应该发在哪个平台？", std:"能说出平台+理由+发布策略"},
    {q:"北美观众最吃哪种幽默？", std:"能列出3种并给出案例"},
    {q:"目标受众是谁？", std:"能描述年龄、习惯、偏好"},
    {q:"2min以下有哪些可用的叙事结构？", std:"能列出5种并各给案例"},
    {q:"竞争对手是谁？", std:"能说出10个频道/创作者"},
    {q:"他们做得好的地方是什么？", std:"每个能说出1-2个亮点"},
    {q:"用什么工具制作？", std:"有完整的工具链方案"},
    {q:"一条片子成本多少、耗时多久？", std:"有具体数字"},
    {q:"怎么赚钱？", std:"有至少2条变现路径"},
    {q:"第一条片子应该是什么？", std:"有一个明确的剧本方向"}
  ],
  researchPlan: [
    {id:"A", name:"平台算法与分发规则", priority:"🔴 最高", desc:"知道往哪发、怎么发"},
    {id:"B", name:"北美受众口味深挖", priority:"🔴 最高", desc:"知道他们笑什么、感动什么"},
    {id:"C", name:"竞品频道/创作者拆解", priority:"🟠 高", desc:"知道谁在做、做得怎么样"},
    {id:"D", name:"2min以下叙事结构库", priority:"🟠 高", desc:"知道故事怎么讲"},
    {id:"E", name:"AI动画工具链与制作流程", priority:"🟡 中", desc:"知道怎么做、花多少钱"},
    {id:"F", name:"变现路径与商业模式", priority:"🟡 中", desc:"知道怎么赚钱"}
  ],
  progress: [
    {done:true, text:"AI短片案例分析（V1.0方法论）"},
    {done:true, text:"调研方案设计（6大板块）"},
    {done:true, text:"流媒体线拆片-喜剧类（Slapstick/反讽/荒诞/黑色幽默 各Top5 = 20部）"},
    {done:true, text:"流媒体线拆片-情感类（温暖/孤独/怀旧/AI新锐 各Top5 = 20部）"},
    {done:true, text:"流媒体线-头部账号Top3（6频道x3 = 18部）"},
    {done:true, text:"传统电影节线拆片（皮克斯/奥斯卡/昂西 = 15+部）"},
    {done:true, text:"规律总结（10条规律 + 5个创作方向 + V1.5公式 + 检查清单）"},
    {done:true, text:"001火锅毛肚大战 V1-V3 迭代"},
    {done:true, text:"批量创意20（21个公式拼配创意）"},
    {done:false, text:"用户选择感兴趣/擅长的方向"},
    {done:false, text:"共创3-5个剧本"},
    {done:false, text:"AI工具链测试"},
    {done:false, text:"变现路径分析"},
    {done:false, text:"创作方法论V2.0"}
  ],
  keyReminders: [
    "目标受众是<strong>北美市场</strong>，所有分析和剧本都要以英语世界的文化语境为基准",
    "时长上限<strong>2分钟</strong>，理想时长<strong>45-90秒</strong>",
    "核心公式V1.0：<code>非人类主角 + 一个核心道具/设定 + 戏剧性反讽 + 视觉punchline + 强结尾</code>",
    "优先做能「动手验证」的事，而不是只停留在桌面调研"
  ]
};

// ---- CASE ANALYSIS (from AI短片案例分析.md) ----
const caseAnalysis = {
  title: "AI短片案例分析：两个病毒式传播的AI动画故事",
  cases: [
    {
      id: "pigeon",
      title: "《鸽子时光机》Pigeon Time Travelers",
      creator: "Marko Slavnic（Runway技术美术师，波斯尼亚战争难民，15年+影视经验）",
      duration: "46秒", tool: "Runway（几小时内完成）",
      data: "14.9K赞，8.8K收藏，1.2K转发",
      brief: "3只鸽子捡到遥控器争论是什么。第三只按下按钮消失，穿草裙回来。「下一个轮到我!」",
      fullStory: "城市街头，一个平平无奇的角落。三只鸽子歪着脑袋围在一个东西旁边——一个黑色的、带按钮的遥控器状物体。\n\n第一只鸽子笃定地宣布：「这是手机。」它用翅膀比划着，一副见过世面的模样。第二只鸽子立刻反驳，坚持说这是别的什么东西。两只鸽子越吵越凶，从嘴炮升级到肢体冲突，扑腾着翅膀互相啄。\n\n就在它们打成一团的时候，第三只鸽子悄悄走近。镜头切到遥控器的特写——观众清清楚楚看到上面写着「TIME MACHINE」两个大字。这是一个经典的「戏剧性反讽」时刻：观众知道了角色们不知道的信息。\n\n第三只鸽子毫不犹豫地按下了按钮。嗖——！它消失了。\n\n前两只鸽子愣住了。片刻之后，一道闪光，第三只鸽子回来了——但它的模样完全变了。它穿着类似原始部落的草裙，头上插着羽毛装饰，整个画风像是从史前时代穿越回来。\n\n沉默了一秒。另一只鸽子两眼放光，脱口而出：「下一个轮到我了！」\n\n全片结束。46秒，一个完美的喜剧小品。",
      dimensions: [
        {dim:"流媒体适配性", score:"5/5", note:"46秒是社交媒体黄金时长，完美匹配Reels/Shorts/TikTok"},
        {dim:"北美视角", score:"5/5", note:"鸽子是纽约/洛杉矶最标志性的「市民」角色，天然亲切"},
        {dim:"故事通俗性", score:"5/5", note:"教科书级通俗：误解-冲突-揭示真相-视觉笑料-button line"},
        {dim:"动画表现力", score:"5/5", note:"被Google DeepMind工程师评为「看起来像大型工作室制作」"},
        {dim:"喜剧结构", score:"5/5", note:"戏剧性反讽+视觉punchline+button/tag 三重喜剧技巧"},
        {dim:"病毒传播力", score:"5/5", note:"短、爽、有记忆点。「鸽子穿草裙」本身就是meme"},
        {dim:"制作成本颠覆性", score:"5/5", note:"几小时+Runway = 14.9K赞。皮克斯做类似需数月数百万"}
      ]
    },
    {
      id: "zombie",
      title: "《丧尸清道夫》Zombie Scavenger",
      creator: "刘子钰 MX-Shell（29岁云南前火车司机，无艺术/计算机背景）",
      duration: "3分34秒", tool: "Seedance 2.0（10天完成，成本约$440）",
      data: "82.5K赞，39.3K收藏，6.3K转发，全球6000万+播放",
      brief: "原子朋克废土中机器人清洁工骑机械鸵鸟清理丧尸。最终凝望橱窗人体模型。",
      fullStory: "在一片被核辐射和时间共同侵蚀的废土上，阳光惨白地照射着锈迹斑斑的加油站、坍塌的建筑和满街的残骸。这不是一个英雄降临的故事——这是一个「打工人」的日常。\n\n主角是一个机器人清洁工。它没有名字，没有情感程序，只有一个被设定好的目标：清扫。在人类灭亡之后，它依然在执行着自己的「工作」——只不过现在需要清扫的，不再是灰尘和垃圾，而是成群结队的丧尸。\n\n机器人骑着一只机械鸵鸟穿行在死寂的城镇中。这个画面既荒诞又迷人——金属羽毛在阳光下反射着冷光，鸵鸟的机械腿踏过碎裂的柏油路面。它们经过一个废弃的加油站，几只丧尸从阴影中摇晃着走出来。机器人没有恐惧、没有犹豫——它抬手开枪，就像一个清洁工拿起扫帚一样自然。在它的认知系统里，丧尸末日不是一场存亡危机，而是一次严重的「卫生事故」。\n\n这种反差构成了整部短片最核心的黑色幽默。丧尸在嘶吼扑咬，机器人在扫描、拖着清洁推车、放置警示锥筒、擦拭玻璃上的灰尘——它在用最日常的工作流程应对最极端的末日场景。\n\n然而，转折发生在最后。机器人路过一家废弃的商店，橱窗里站着一个人体模型——一个老式的、优雅的女性模特。机器人停下了。它第一次没有继续「工作」。它站在那里，凝视着这个塑料和金属构成的「人形」，就像是在废墟的世界里，突然看到了某种它本不应该理解的东西——美、思念、或者仅仅是「陪伴」的概念。\n\n这个结尾让整部影片的情感基调发生了剧烈转向。从黑色幽默的打工日常，突然滑入了一种深沉的孤独和渴望。一个不会感受的机器，在一个没有人的世界里，对着一个假人产生了停顿——这个停顿里包含了所有人类故事中最古老的主题：在荒芜中寻找连接。",
      dimensions: [
        {dim:"流媒体适配性", score:"5/5", note:"「前火车司机花3000块拍好莱坞级短片」自带爆款标题"},
        {dim:"北美视角", score:"4/5", note:"西部牛仔+末日废土+丧尸——全是北美流行文化核心符号"},
        {dim:"故事通俗性", score:"5/5", note:"零对白纯视觉叙事。「机器人打僵尸」5岁能懂"},
        {dim:"动画表现力", score:"4/5", note:"原子朋克美学极具辨识度，已接近专业动画水准"},
        {dim:"情感冲击力", score:"5/5", note:"黑色幽默到深沉孤独的情感反转"},
        {dim:"IP延展潜力", score:"5/5", note:"已签约开发长片+Yoroll互动游戏"},
        {dim:"制作成本颠覆性", score:"5/5", note:"$440 + 10天 = 6000万播放"}
      ]
    }
  ],
  classicComparisons: [
    {classic:"Pixar《For the Birds》(2000)", similarity:"鸟类角色+零对白+物理反转punchline+全年龄通吃"},
    {classic:"Pixar《Presto》(2008)", similarity:"一个道具驱动全部故事+节奏极快+致敬Looney Tunes"},
    {classic:"Pixar《Partly Cloudy》(2009)", similarity:"反差萌+结尾情感小反转+观众看到角色看不到的信息"},
    {classic:"WALL-E 前8分钟 (2008)", similarity:"几乎同一内核：机器人在废弃世界独自上班产生情感+废土+孤独"},
    {classic:"Netflix《爱死机》系列", similarity:"类型混搭+强烈视觉风格+黑色幽默+短小有冲击力的反转结尾"},
    {classic:"Pixar《La Luna》(2011)", similarity:"日常工作的奇幻化+零对白+极鲜明美学"},
    {classic:"Disney《Feast》(2014)", similarity:"非人类视角讲人类情感故事"}
  ],
  coreRules: [
    {title:"非人类主角 = 万能通行证", desc:"跨文化无障碍、天然可爱有趣、允许更大荒诞度。鸽子、机器人、小鸟、老鼠——北美动画黄金法则是用非人类角色讲人类故事。"},
    {title:"一个道具/设定驱动全部故事", desc:"《鸽子时光机》：一个遥控器。《丧尸清道夫》：一个不知道末日已来的打工机器人。最好的短片只有一个核心概念。"},
    {title:"戏剧性反讽是短片喜剧的核武器", desc:"观众知道那是时光机，鸽子不知道——这一秒的信息差创造了全片最大的笑点。先让观众看到角色看不到的东西，然后等待「爆炸」。"},
    {title:"结尾 > 开头", desc:"鸽子「下一个轮到我」=观众带着笑走。丧尸清道夫凝视人偶=观众带着沉思走。结尾是情感交付点。"},
    {title:"喜剧节奏的三拍子法则", desc:"Setup（设置15s）+ Development（发展30s）+ Punchline（爆点15s）= 三拍结构是人类喜剧感知的底层硬件。"},
    {title:"风格化 > 写实", desc:"不要让AI「模仿真实」，而要「创造风格」。有辨识度的视觉风格是作品被记住的前提。"}
  ],
  formula_v1: "1分钟爆款 = 非人类主角 + 一个核心道具/设定 + 戏剧性反讽 + 视觉punchline + 强结尾"
};

// ---- TOP CHANNELS (from 流媒体线-头部账号Top3作品.md) ----
const topChannels = [
  {
    name: "Alan Becker", fans: "28M+", style: "极简火柴人", timeRange: "5-20min", dialogue: "零",
    link: "https://www.youtube.com/@alanbecker",
    positioning: "火柴人动画，以「Animator vs. Animation」系列闻名",
    insights: "极简设计（火柴人）+ 极致动作 = 全球通行。meta叙事 = 天然吸引力。零对白 = 无语言障碍。视频偏长但核心概念可压缩。",
    works: [
      {title:"Animator vs. Animation IV (2014)", views:"2.8亿+", duration:"14min",
       story:"火柴人The Chosen One和The Dark Lord在互联网世界大战——穿越Facebook、Google、YouTube等网站，用各平台的UI元素作武器。",
       highlight:"动作编排堪比好莱坞但用火柴人。「互联网本身是战场」的meta设定。14分钟无一秒对白。"},
      {title:"Animation vs. Minecraft 系列 (2015-至今)", views:"系列累计数十亿", duration:"5-20min",
       story:"火柴人们进入Minecraft世界，从零开始生存、建造、冒险。完整复现了Minecraft游戏机制，加入远超游戏本身的创意战斗和叙事。",
       highlight:"游戏IP x 动画的完美融合。吸引了Minecraft玩家和动画爱好者两个群体。"},
      {title:"The Chosen One's Return (2020)", views:"1亿+", duration:"18min",
       story:"经典反派The Chosen One回归，与火柴人家族展开史诗级对决。",
       highlight:"观众对线条角色投入了真实情感。证明极简角色也能承载史诗叙事。"}
    ]
  },
  {
    name: "Cas van de Pol", fans: "5M+", style: "3D可爱风", timeRange: "1-2min", dialogue: "极少",
    link: "https://www.youtube.com/@CasvanDePol",
    positioning: "动画恶搞/风格混搭短片，以「If [Studio] Made...」系列闻名",
    insights: "2分钟以下是核心时长 = 与我们完全匹配。「如果XX做YY」是可无限复制的概念模板。蹭热点+快速出片是流量密码。风格化>写实。",
    works: [
      {title:"If Pixar Made A Horror Movie (2021)", views:"5000万+", duration:"~2min",
       story:"皮克斯风格的可爱角色在典型恐怖片场景中——诡异旅馆、闪烁灯光、追杀怪物。所有恐怖元素都被可爱化。",
       highlight:"「如果XX做YY」模板开山之作。2分钟内完成完整类型片体验。反差=笑点。"},
      {title:"If Disney Made Squid Game (2021)", views:"数千万", duration:"~2min",
       story:"迪士尼公主风格角色参加《鱿鱼游戏》死亡竞赛。",
       highlight:"蹭热点IP的极致案例。时效性+反差=病毒传播。"},
      {title:"If Pixar Made Attack on Titan (2022)", views:"数千万", duration:"~2min",
       story:"皮克斯风可爱小人面对进击的巨人——但巨人也是可爱版。",
       highlight:"动漫 x 西方动画跨界。在北美和日本同时引发讨论。"}
    ]
  },
  {
    name: "Kurzgesagt", fans: "23M+", style: "扁平化2D", timeRange: "5-10min", dialogue: "旁白",
    link: "https://www.youtube.com/@kurzgesagt",
    positioning: "科普动画，用精美2D动画解释科学和哲学话题",
    insights: "虽不是「剧情动画」但证明了概念驱动的动画在北美有巨大市场。辨识度极强的扁平化2D风格 = 品牌效应。旁白驱动 = 另一种2min以下可用的叙事方式。",
    works: [
      {title:"The Egg (2019)", views:"3.4亿+", duration:"7:55",
       story:"一个男人死后遇到上帝。上帝告诉他：你将转世成历史上每一个人。整个宇宙是一个「卵」，而你是正在孵化的存在。",
       highlight:"基于Andy Weir小说。23M频道最高播放量。评论区集体哭泣+反思。"},
      {title:"The Immune System Explained (2014)", views:"1.5亿+", duration:"6:49",
       story:"用拟人化的细胞军队解释人体免疫系统如何对抗细菌入侵。",
       highlight:"「科学+战争叙事」——把微观世界讲成史诗战争。极好懂的比喻。"},
      {title:"Optimistic Nihilism (2017)", views:"3亿+", duration:"6:33",
       story:"面对宇宙浩瀚和人类渺小的「乐观虚无主义」：既然什么都不重要，你就可以自由定义什么对你重要。",
       highlight:"存在主义+乐观主义完美结合。在Gen Z中引发大量人生意义讨论。"}
    ]
  },
  {
    name: "Corridor Crew", fans: "10M+", style: "真人+AI/VFX", timeRange: "3-20min", dialogue: "对话",
    link: "https://www.youtube.com/@CorridorCrew",
    positioning: "VFX/AI技术实验+影视制作幕后",
    insights: "AI动画在北美的接受度正在快速变化，他们是风向标。「制作过程」本身就是内容。理解技术受众口味。",
    works: [
      {title:"AI Anime - Rock Paper Scissors (2023)", views:"数千万", duration:"~3min",
       story:"用AI技术制作的动漫风短片——两个角色玩石头剪刀布，每回合以夸张的动漫式打斗呈现。",
       highlight:"第一批引发全网讨论的AI动画作品之一。评论两极分化。"},
      {title:"VFX Artists React 系列", views:"系列累计数十亿", duration:"15-20min",
       story:"专业VFX师分析电影中的好CG和坏CG。",
       highlight:"教育+娱乐完美结合。评论区是调研北美技术向观众口味的窗口。"},
      {title:"We Made Anime in ONE Day with AI (2024)", views:"数千万", duration:"~15min",
       story:"团队挑战一天内用最新AI工具制作完整动漫风短片。展示全过程。",
       highlight:"完整的AI动画制作工作流展示——对工具链调研极有参考价值。"}
    ]
  },
  {
    name: "TheOdd1sOut", fans: "20M+", style: "简笔画2D", timeRange: "5-8min", dialogue: "旁白",
    link: "https://www.youtube.com/@TheOdd1sOut",
    positioning: "个人故事动画（storytime animation）",
    insights: "「个人故事」(storytime)在北美有巨大市场。简笔画不等于低质量——核心是叙事节奏和幽默。需要「个人身份」锚点，与无对白动画方向不完全匹配。",
    works: [
      {title:"Sooubway 系列 (2017-2018)", views:"系列累计10亿+", duration:"5-8min",
       story:"James讲述在Subway打工的搞笑经历——奇葩顾客、荒唐要求、同事互动。",
       highlight:"「打工经历」叙事——北美年轻人共同经历。简笔画+自嘲=低门槛高共鸣。"},
      {title:"My Thoughts on Sports (2017)", views:"1亿+", duration:"5min",
       story:"James用动画讲他和体育的「恩怨」——不擅长运动被迫参加体育课。",
       highlight:"观察式幽默(observational humor)——「你有没有发现...」式叙事在北美极受欢迎。"},
      {title:"Life is Fun ft. Boyinaband (2018)", views:"3亿+", duration:"3:44",
       story:"音乐动画MV，两人讨论「人生有什么意义」——乐观vs悲观最后荒诞和解。",
       highlight:"音乐+动画+哲学。证明简笔画也能做出数亿播放的MV。"}
    ]
  },
  {
    name: "worthikids", fans: "700K+", style: "手工感3D", timeRange: "30s-3min", dialogue: "极少",
    link: "https://www.youtube.com/@worthikids",
    positioning: "风格化3D短片，模拟定格动画质感",
    insights: "粉丝量不大(700K)但行业影响力巨大 = 质量>数量。1-2分钟是甜区 = 与我们完全匹配。「手工感3D」= AI可尝试模拟的方向。荒诞+冷面 = 不需笑声提醒的高级喜剧。",
    works: [
      {title:"Biggs (2020)", views:"数百万", duration:"2:40",
       story:"中世纪酒馆场景。壮汉进入酒馆用极度夸张荒诞的方式点酒。酒保反应冷淡到诡异。",
       highlight:"「冷面荒诞」完美样本。80年代定格动画质感。2分钟内创造不可思议的氛围。"},
      {title:"Wizard (2019)", views:"数百万", duration:"~1min",
       story:"巫师试图施法但不断出错——每次效果都偏离预期，越来越离谱。",
       highlight:"1分钟内完美的「不断升级的失误」结构。证明1分钟足以讲完整搞笑故事。"},
      {title:"Get Stickbugged (2020)", views:"数千万", duration:"15秒",
       story:"正常场景突然切到跳舞的竹节虫动画——成为2020年全网meme。",
       highlight:"15秒meme=全网爆发。证明「超短内容」只要够有记忆点就能病毒传播。"}
    ]
  }
];

const channelComparison = [
  {name:"Alan Becker", fans:"28M", time:"5-20min", style:"极简火柴人", dialogue:"零", value:"动作设计/meta叙事"},
  {name:"Cas van de Pol", fans:"5M", time:"1-2min", style:"3D可爱风", dialogue:"极少", value:"时长/模板/流量打法 (最匹配)"},
  {name:"Kurzgesagt", fans:"23M", time:"5-10min", style:"扁平化2D", dialogue:"旁白", value:"视觉风格/品牌建设"},
  {name:"Corridor Crew", fans:"10M", time:"3-20min", style:"真人+AI/VFX", dialogue:"对话", value:"AI工具链/行业风向"},
  {name:"TheOdd1sOut", fans:"20M", time:"5-8min", style:"简笔画2D", dialogue:"旁白", value:"幽默节奏/选题"},
  {name:"worthikids", fans:"700K", time:"30s-3min", style:"手工感3D", dialogue:"极少", value:"时长/风格化/氛围 (最匹配)"}
];

// ---- FESTIVAL SUMMARY (from 传统电影节线-按分类拆片.md) ----
const festivalInsights = {
  festivalVsStreaming: [
    {dim:"时长", festival:"5-15分钟（有的长达30min）", streaming:"2分钟以下（越短越好）"},
    {dim:"主题", festival:"深度、社会议题、个人表达", streaming:"普世共鸣、强笑点、强反转"},
    {dim:"视觉", festival:"艺术性、风格化、实验性", streaming:"辨识度、高完成度、好看"},
    {dim:"情感", festival:"可以复杂、暧昧、不提供答案", streaming:"需要明确的情感交付（笑/泪/惊）"},
    {dim:"对白", festival:"可以有大量对白", streaming:"越少越好（跨语言传播）"},
    {dim:"争议性", festival:"允许甚至鼓励触及敏感议题", streaming:"避免争议以最大化传播"}
  ],
  crossoverFeatures: [
    "一个概念撑全片：Blind Vaysha、Day & Night、Ice Merchants",
    "非人类主角：For the Birds、Kitbull、Partly Cloudy",
    "零对白/极少对白：几乎所有皮克斯短片、Ice Merchants、Alike",
    "视觉隐喻代替语言：Alike的颜色、Float的漂浮、Memorable的名画变形",
    "强结尾（无论是笑是泪）：所有获奖/爆款作品共性",
    "风格化>写实：从2D手绘到定格到低多边形，个人风格=记忆点"
  ],
  compressPatterns: [
    {pattern:"日常工作的极端化", works:"Ice Merchants、La Luna、丧尸清道夫", strategy:"一个工作循环=30s，3个循环+意外=2min"},
    {pattern:"一个概念/一句话前提", works:"Blind Vaysha、Day & Night、Float", strategy:"概念展示30s+发展60s+反转30s"},
    {pattern:"物品/道具驱动", works:"Paperman、Negative Space、Geri's Game", strategy:"一个道具的「旅程」压缩到90s"},
    {pattern:"反复失败到最终成功/认命", works:"Knick Knack、Cat Came Back、Lifted", strategy:"3次失败x20s+结局20s=80s"},
    {pattern:"颜色/形态变化=情感变化", works:"Alike、Memorable、Ryan", strategy:"蒙太奇式快速变化60s+静止结尾30s"}
  ]
};