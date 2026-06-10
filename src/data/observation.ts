export interface ObservationPoint {
  id: string;
  name: string;
  level: 1 | 2 | 3;
  position: { x: number; y: number };
  placed: boolean;
}

export const OBSERVATION_SLOTS: ObservationPoint[] = [
  { id: 'op1', name: '芦苇荡观测点', level: 1, position: { x: 20, y: 30 }, placed: false },
  { id: 'op2', name: '浅滩观测点', level: 1, position: { x: 50, y: 20 }, placed: false },
  { id: 'op3', name: '河口观测点', level: 1, position: { x: 75, y: 45 }, placed: false },
  { id: 'op4', name: '湖心观测点', level: 1, position: { x: 40, y: 60 }, placed: false },
  { id: 'op5', name: '草甸观测点', level: 1, position: { x: 65, y: 75 }, placed: false },
];

export const PLACEMENT_COST = 20;
export const UPGRADE_COSTS: Record<number, number> = { 1: 15, 2: 25 };

export function getClueCompleteness(level: number, observerSent: boolean): number {
  const base = level === 1 ? 0.5 : level === 2 ? 0.75 : 1.0;
  return observerSent ? Math.min(1.0, base + 0.25) : base;
}

export const OBSERVER_COST = 10;
export const MAX_ROUNDS = 10;
export const INITIAL_BUDGET = 150;
