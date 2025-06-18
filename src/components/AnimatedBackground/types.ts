
export type LineType = 'horizontal' | 'vertical' | 'diagonal' | 'approach' | 'recede';

export interface LineConfig {
  type: LineType;
  duration: number;
  interval: number;
  initialCount: number;
}

export interface LineElement extends HTMLDivElement {
  lineType: LineType;
}
