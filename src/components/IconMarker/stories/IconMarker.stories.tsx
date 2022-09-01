import IconMarkerStories from './IconMarkerStories';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'IconMarker',
  component: IconMarkerStories,
  argTypes: {},
}as ComponentMeta<typeof IconMarkerStories> ;


const Template :ComponentStory<typeof IconMarkerStories> = (args) => <IconMarkerStories {...args} />;

export const Primary = Template.bind({});

export const Explosion = {
  args: {
    iconName: 'explosion',
  },
};

export const Rocket = {
  args: {
    iconName: 'rocket',
  },
};
export const BigExplosion = {
  args: {
    iconName: 'bigExplosion',
  },
};
export const Gun = {
  args: {
    iconName: 'gun',
  },
};

export const Fire = {
  args: {
    iconName: 'fire',
  },
};
