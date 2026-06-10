## 1. 架构设计

```mermaid
graph TD
    "前端层" --> "状态管理(Zustand)"
    "前端层" --> "路由(React Router)"
    "前端层" --> "UI组件(React + Tailwind)"
    "状态管理(Zustand)" --> "本地存储(LocalStorage)"
    "UI组件(React + Tailwind)" --> "游戏引擎(事件生成/规则判定)"
    "游戏引擎(事件生成/规则判定)" --> "鸟类数据/环志规则(静态数据)"
```

纯前端架构，无后端服务，所有数据存储在LocalStorage。

## 2. 技术说明

- 前端：React@18 + TypeScript + Tailwind CSS + Vite
- 初始化工具：vite-init
- 后端：无
- 数据库：无（使用LocalStorage持久化）
- 状态管理：Zustand
- 路由：React Router DOM v6

## 3. 路由定义

| 路由 | 用途 |
|------|------|
| / | 开始页，主菜单 |
| /map | 地图页，观测点布局与回合管理 |
| /event/:eventId | 事件页，鸟类识别 |
| /codex | 图鉴页，鸟种与环志规则 |
| /result | 结算页，最终得分统计 |

## 4. 数据模型

### 4.1 游戏状态

```typescript
interface GameState {
  round: number;
  maxRounds: number;
  budget: number;
  maxBudget: number;
  score: number;
  observationPoints: ObservationPoint[];
  unlockedBirds: string[];
  eventHistory: EventRecord[];
  phase: 'map' | 'event' | 'result';
  currentEventId: string | null;
}
```

### 4.2 观测点

```typescript
interface ObservationPoint {
  id: string;
  name: string;
  level: 1 | 2 | 3;
  position: { x: number; y: number };
  upgradeCost: number;
}
```

### 4.3 鸟类数据

```typescript
interface Bird {
  id: string;
  name: string;
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

type BandColor = '红' | '蓝' | '绿' | '黄' | '橙' | '白' | '黑';
```

### 4.4 事件记录

```typescript
interface GameEvent {
  id: string;
  birdId: string;
  clues: string[];
  interferenceClues: string[];
  visibleBands: BandColor[];
  hiddenBands: BandColor[];
  options: string[];
  correctAnswer: string;
  observerSent: boolean;
}

interface EventRecord {
  eventId: string;
  birdId: string;
  playerAnswer: string;
  correct: boolean;
  scoreChange: number;
  observerSent: boolean;
  routeGuessed: boolean;
  routeCorrect: boolean;
}
```

### 4.5 存档结构

```typescript
interface SaveData {
  gameState: GameState;
  timestamp: number;
  version: string;
}
```

## 5. 核心游戏逻辑

### 5.1 事件生成算法

1. 从鸟类池中随机选择1-2种鸟类
2. 根据鸟类难度生成线索（简单鸟线索更多）
3. 30%概率添加干扰线索
4. 根据观测点等级决定可见环志数量
5. 生成4个选项（1正确+3干扰）

### 5.2 识别判定规则

- 环志颜色组合完全匹配 → 正确识别
- 部分匹配 → 提示"接近但不准确"
- 完全不匹配 → 误判

### 5.3 得分计算

- 正确识别：10 × 最高观测点等级
- 错误识别：-5
- 路线推测正确：+15
- 剩余预算奖励：⌊剩余预算/10⌋ × 2
