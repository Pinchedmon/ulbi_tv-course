import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';
import { Text } from '../Text/Text';

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: any) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <Text title="text" text="23232" />,
};
