import ArrowMarkerStories from './ArrowMarkerStories';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'ArrowMarket',
  component: ArrowMarkerStories,
argTypes: {}
}as ComponentMeta<typeof ArrowMarkerStories>;

const Template: ComponentStory<typeof ArrowMarkerStories> = args => (
  <ArrowMarkerStories {...args} />
);

export const Primary = Template.bind({});

export const RightYellow = {
  args: {
    iconName: 'rightYellow',
    rotate: 0,
  },
};

export const RightRed = {
  args: {
    iconName: 'rightRed',
    rotate: 0,
  },
};
export const LeftYellow = {
  args: {
    iconName: 'leftYellow',
    rotate: 0,
  },
};
export const LeftRed = {
  args: {
    iconName: 'leftRed',
    rotate: 0,
  },
};

export const DownYellow = {
  args: {
    iconName: 'downYellow',
    rotate: 0,
  },
};
export const DownRed = {
  args: {
    iconName: 'downRed',
    rotate: 0,
  },
};
export const HitRed = {
  args: {
    iconName: 'hitRed',
    rotate: 0,
  },
};
export const HitYellow = {
  args: {
    iconName: 'hitYellow',
    rotate: 0,
  },
};
