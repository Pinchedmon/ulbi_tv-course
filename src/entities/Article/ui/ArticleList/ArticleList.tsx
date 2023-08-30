import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../../Article';
import cls from './ArticleList.module.scss';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
}
const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0).map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ));
const ArticleList = (props:ArticleListProps) => {
    const {
        className, articles, isLoading, view = ArticleView.SMALL,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                { getSkeletons(view)}
            </div>
        );
    }
    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    );
    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.length > 0
                ? articles?.map(renderArticle)
                : null}
        </div>
    );
};

export default ArticleList;
