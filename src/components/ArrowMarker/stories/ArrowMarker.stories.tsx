import ArrowMarketStories from './ArrowMarketStories';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'ArrowMarket',
  component: ArrowMarketStories,
argTypes: {}
}as ComponentMeta<typeof ArrowMarketStories>;

const Template: ComponentStory<typeof ArrowMarketStories> = args => (
  <ArrowMarketStories {...args} />
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
