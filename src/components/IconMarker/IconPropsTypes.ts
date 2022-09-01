export type iconNameType =
  | 'explosion'
  | 'rocket'
  | 'bigExplosion'
  | 'gun'
  | 'fire';

export type IconPropsTypes = {
  iconName: iconNameType,
  longt?: number,
  latit?: number,
  anchr?:
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'center',
};
