// ============ GENERATOR CONFIG ============
// Tag categories specific to the Story Generator.
// Supplements tagRegistry with creative-specific dimensions.

const generatorTags = {
  protagonist: {
    label: "🐾 主角类型",
    options: {
      cat:"🐱 猫", dog:"🐕 狗", bird:"🐦 鸟类", robot:"🤖 机器人",
      insect:"🐛 昆虫", ocean:"🐙 海洋生物", object:"📦 物品",
      plant:"🌵 植物", rodent:"🐹 小动物"
    }
  },
  emotion: {
    label: "💫 情感基调",
    options: {
      pureFun:"😂 纯笑料", funTears:"🥹 笑中带泪", deepLone:"🌙 深沉孤独",
      absurdSat:"🎭 荒诞讽刺", nostalgic:"📼 怀旧感伤", darkFun:"🖤 暗黑有趣"
    }
  },
  duration: {
    label: "⏱️ 时长",
    options: { s30:"⚡ 30秒", s60:"🎯 60秒", s90:"📐 90秒", s120:"🎬 120秒" }
  }
};

const durationSec = { s30:30, s60:60, s90:90, s120:120 };

// Keyword maps for smart matching against works/rules
const protagonistKW = {
  cat:['猫','cat','kitten','feline','喵'], dog:['狗','dog','金毛','puppy','canine'],
  bird:['鸽子','鸟','bird','owl','crow','pigeon','猫头鹰','乌鸦','鹳'],
  robot:['机器人','robot','bot','android','清洁','扫地','外卖'],
  insect:['蚂蚁','萤火虫','ant','firefly','蜜蜂','bee'],
  ocean:['章鱼','金鱼','fish','octopus','鲸','whale','海'],
  object:['闹钟','手套','路灯','物品','lamp','clock','信号'],
  plant:['仙人掌','plant','cactus','花','tree','向日葵'],
  rodent:['仓鼠','兔子','蜗牛','青蛙','hamster','frog','snail','松鼠']
};

const emotionKW = {
  pureFun:['slapstick','笑','gag','funny','punchline','喜剧'],
  funTears:['温暖','感动','治愈','warm','tear','heart'],
  deepLone:['孤独','lonely','连接','connection','沉默'],
  absurdSat:['荒诞','反讽','irony','absurd','satire','讽刺'],
  nostalgic:['怀旧','nostalgia','回忆','memory','时光'],
  darkFun:['黑色幽默','dark humor','黑暗','死亡','末日']
};

// Curated subsets for generator UI (avoid overwhelming choices)
const genTypeSubset = ['slapstick','irony','absurd','dark','warm','lonely','nostalgia','scifi','music','experiment'];
const genArtSubset = ['pixar3d','stylized3d','anime','flat2d','handdrawn','watercolor','oilpaint','inkwash','atomPunk','pixel','ukiyoe'];