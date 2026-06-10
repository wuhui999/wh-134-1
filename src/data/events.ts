import { Bird, BIRDS, BandColor, INTERFERENCE_CLUES } from '@/data/birds';
import { getClueCompleteness } from '@/data/observation';

export interface GameEvent {
  id: string;
  birdId: string;
  clues: string[];
  interferenceClues: string[];
  visibleBands: BandColor[];
  hiddenBands: BandColor[];
  options: string[];
  correctAnswer: string;
  observerSent: boolean;
  maxObservationLevel: number;
}

export function generateEvent(
  round: number,
  observationLevel: number,
  observerSent: boolean,
  usedBirdIds: string[]
): GameEvent {
  const availableBirds = BIRDS.filter(b => !usedBirdIds.includes(b.id));
  const birdPool = availableBirds.length > 0 ? availableBirds : BIRDS;
  const bird = birdPool[Math.floor(Math.random() * birdPool.length)];

  const completeness = getClueCompleteness(observationLevel, observerSent);

  const realClues = [
    `体型：${bird.size}鸟类`,
    `栖息地：${bird.habitat}`,
    `行为：${bird.behavior}`,
  ];
  const visibleCount = Math.ceil(realClues.length * completeness);
  const clues = realClues.slice(0, visibleCount);

  const hasInterference = Math.random() < 0.3;
  const interferenceClues: string[] = [];
  if (hasInterference) {
    const shuffled = [...INTERFERENCE_CLUES].sort(() => Math.random() - 0.5);
    interferenceClues.push(shuffled[0]);
  }

  const totalBands = bird.bandColors.length;
  const visibleBandCount = Math.max(1, Math.ceil(totalBands * completeness));
  const shuffledBands = [...bird.bandColors].sort(() => Math.random() - 0.5);
  const visibleBands = shuffledBands.slice(0, visibleBandCount);
  const hiddenBands = shuffledBands.slice(visibleBandCount);

  const wrongOptions = BIRDS.filter(b => b.id !== bird.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(b => b.name);
  const options = [...wrongOptions];
  const correctIdx = Math.floor(Math.random() * 4);
  options.splice(correctIdx, 0, bird.name);

  return {
    id: `event_${round}_${Date.now()}`,
    birdId: bird.id,
    clues,
    interferenceClues,
    visibleBands,
    hiddenBands,
    options,
    correctAnswer: bird.name,
    observerSent,
    maxObservationLevel: observationLevel,
  };
}

export function generateRoundEvents(
  round: number,
  observationLevel: number,
  usedBirdIds: string[]
): { event: GameEvent; observerSent: boolean }[] {
  const eventCount = round <= 3 ? 1 : Math.random() < 0.4 ? 2 : 1;
  const events: { event: GameEvent; observerSent: boolean }[] = [];
  let currentUsed = [...usedBirdIds];

  for (let i = 0; i < eventCount; i++) {
    const observerSent = Math.random() < 0.5;
    const event = generateEvent(round, observationLevel, observerSent, currentUsed);
    currentUsed.push(event.birdId);
    events.push({ event, observerSent });
  }

  return events;
}

export function checkAnswer(event: GameEvent, answer: string): { correct: boolean; scoreChange: number; bird: Bird } {
  const bird = BIRDS.find(b => b.id === event.birdId)!;
  const correct = answer === event.correctAnswer;
  const scoreChange = correct ? 10 * event.maxObservationLevel : -5;
  return { correct, scoreChange, bird };
}

export function checkMigrationGuess(birdId: string, guess: string): boolean {
  const bird = BIRDS.find(b => b.id === birdId);
  if (!bird) return false;
  return guess === bird.migrationRoute;
}
