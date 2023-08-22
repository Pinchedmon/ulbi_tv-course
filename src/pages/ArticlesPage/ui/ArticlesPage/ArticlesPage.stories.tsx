import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args: any) => <ArticlesPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
