export type ArrowProps = {
  iconName:
    | 'rightYellow'
    | 'rightRed'
    | 'leftYellow'
    | 'leftRed'
    | 'downYellow'
    | 'downRed'
    | 'hitRed'
    | 'hitYellow',
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
  value?: 45 | 90 | 135 | 180 | 225 | 270 | 315,
};
