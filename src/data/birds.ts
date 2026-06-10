export type BandColor = '红' | '蓝' | '绿' | '黄' | '橙' | '白' | '黑';

export interface Bird {
  id: string;
  name: string;
  emoji: string;
  scientificName: string;
  description: string;
  habitat: string;
  behavior: string;
  size: '小型' | '中型' | '大型';
  bandColors: BandColor[];
  migrationRoute: string;
  migrationStart: string;
  migrationEnd: string;
  difficulty: 1 | 2 | 3;
}

export const BAND_COLOR_HEX: Record<BandColor, string> = {
  '红': '#e74c3c',
  '蓝': '#3498db',
  '绿': '#27ae60',
  '黄': '#f1c40f',
  '橙': '#e67e22',
  '白': '#ecf0f1',
  '黑': '#2c3e50',
};

export const BAND_COLOR_MEANING: Record<BandColor, string> = {
  '红': '东方迁徙路线',
  '蓝': '北方繁殖地',
  '绿': '南方越冬地',
  '黄': '中途停歇地',
  '橙': '湿地栖息种',
  '白': '候鸟标记',
  '黑': '留鸟标记',
};

export const BIRDS: Bird[] = [
  {
    id: 'black_stork',
    name: '黑鹳',
    emoji: '🦅',
    scientificName: 'Ciconia nigra',
    description: '国家一级保护动物，体态优雅的大型涉禽，全身除腹部外均为黑色，具金属光泽。',
    habitat: '山地河流、湿地、水库',
    behavior: '单独或成对活动，在浅水中慢步行走觅食',
    size: '大型',
    bandColors: ['红', '蓝', '白'],
    migrationRoute: '东北-华中-华南',
    migrationStart: '长白山',
    migrationEnd: '鄱阳湖',
    difficulty: 3,
  },
  {
    id: 'spoonbill',
    name: '白琵鹭',
    emoji: '🪶',
    scientificName: 'Platalea leucorodia',
    description: '大型涉禽，嘴长而扁平似琵琶，全身白色，姿态优雅似仙鸟。',
    habitat: '沼泽、河滩、芦苇荡',
    behavior: '成群活动，用琵琶嘴在水中左右扫动觅食',
    size: '大型',
    bandColors: ['蓝', '绿', '橙'],
    migrationRoute: '华北-华东-东南沿海',
    migrationStart: '黄河三角洲',
    migrationEnd: '闽江口',
    difficulty: 2,
  },
  {
    id: 'mandarin',
    name: '鸳鸯',
    emoji: '🦆',
    scientificName: 'Aix galericulata',
    description: '色彩绚丽的中小型鸭类，雄鸟羽色华丽，自古被视为爱情象征。',
    habitat: '山地溪流、湖泊、池塘',
    behavior: '成对或小群活动，善于在水面和树上栖息',
    size: '中型',
    bandColors: ['黄', '红', '黑'],
    migrationRoute: '东北-长江中下游',
    migrationStart: '兴凯湖',
    migrationEnd: '洞庭湖',
    difficulty: 1,
  },
  {
    id: 'crane',
    name: '白头鹤',
    emoji: '🦢',
    scientificName: 'Grus monacha',
    description: '大型涉禽，头颈部白色，体羽深灰，栖息于沼泽湿地。',
    habitat: '沼泽、湿地、浅水湖泊',
    behavior: '小群活动，在浅水中觅食，行走缓慢优雅',
    size: '大型',
    bandColors: ['绿', '白', '红'],
    migrationRoute: '西伯利亚-长江中下游',
    migrationStart: '贝加尔湖',
    migrationEnd: '鄱阳湖',
    difficulty: 3,
  },
  {
    id: 'egret',
    name: '白鹭',
    emoji: '🪽',
    scientificName: 'Egretta garzetta',
    description: '体态修长优美的白色涉禽，常见于湿地和农田，部分为留鸟。',
    habitat: '水田、河流、湖泊、湿地',
    behavior: '单独或小群活动，静立等待猎物或慢步觅食',
    size: '中型',
    bandColors: ['橙', '黑'],
    migrationRoute: '部分留居-短距离南迁',
    migrationStart: '华北平原',
    migrationEnd: '长江流域',
    difficulty: 1,
  },
  {
    id: 'kingfisher',
    name: '翠鸟',
    emoji: '💎',
    scientificName: 'Alcedo atthis',
    description: '体型小巧色彩鲜艳的食鱼鸟，背部翠蓝色，腹部橘黄色，飞行如蓝宝石闪光。',
    habitat: '溪流、池塘、河流沿岸',
    behavior: '单独活动，停栖枝头俯冲入水捕鱼',
    size: '小型',
    bandColors: ['黄', '蓝'],
    migrationRoute: '留鸟为主-部分短迁',
    migrationStart: '北方种群南迁',
    migrationEnd: '黄河以南',
    difficulty: 1,
  },
  {
    id: 'snipe',
    name: '扇尾沙锥',
    emoji: '🐦',
    scientificName: 'Gallinago gallinago',
    description: '中型涉禽，嘴极长，体色棕褐具纵纹，栖息于沼泽草地，善伪装。',
    habitat: '沼泽、湿草地、稻田',
    behavior: '单独活动，用长嘴在泥中探食，受惊时呈锯齿状飞行',
    size: '中型',
    bandColors: ['白', '黄', '绿'],
    migrationRoute: '北方繁殖-华南越冬',
    migrationStart: '内蒙古',
    migrationEnd: '珠江三角洲',
    difficulty: 2,
  },
  {
    id: 'bittern',
    name: '大麻鳽',
    emoji: '🌿',
    scientificName: 'Botaurus stellaris',
    description: '大型鹭科鸟类，体色棕黄具黑色纵纹，善伪装，受惊时伸直颈部模拟芦苇。',
    habitat: '芦苇荡、沼泽、湿地',
    behavior: '独居隐蔽，在芦苇中缓慢移动，以鱼蛙为食',
    size: '大型',
    bandColors: ['红', '橙', '蓝'],
    migrationRoute: '北方繁殖-华中越冬',
    migrationStart: '松嫩平原',
    migrationEnd: '洪湖',
    difficulty: 2,
  },
];

export const INTERFERENCE_CLUES = [
  '飞行时发出尖锐的鸣叫',
  '经常在树冠层活动',
  '以种子为主要食物',
  '喜欢在岩石上栖息',
  '尾巴呈剪刀状',
  '额头有白色斑块',
  '飞行高度极高',
  '在悬崖上筑巢',
  '脚蹼发达善游泳',
  '颈部可旋转180度',
];
