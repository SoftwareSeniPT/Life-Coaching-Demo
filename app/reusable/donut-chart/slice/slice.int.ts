export interface ISliceProps {
  key: number;
  value: string;
  percent: number;
  percentValue: number;
  startAngle: number;
  angle: number;
  radius: number;
  hole: number;
  trueHole: number;
  showLabel: boolean;
  fill: string;
  stroke: any;
  strokeWidth: number;
}

export interface ISliceState {
  path?: string;
  x?: number;
  y?: number;
}
