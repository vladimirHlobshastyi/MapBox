export type iconNameType =
  | 'rightYellow'
  | 'rightRed'
  | 'leftYellow'
  | 'leftRed'
  | 'downYellow'
  | 'downRed'
  | 'hitRed'
  | 'hitYellow';

export type rotateType = 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315;

export type ArrowProps = {
  iconName: iconNameType,
  longt: number,
  latit: number,
  anchr?:
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center',
  rotate?: rotateType,
};
