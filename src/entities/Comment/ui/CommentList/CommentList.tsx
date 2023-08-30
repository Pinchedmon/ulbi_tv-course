import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from 'entities/Comment/model/types/comment';
import cls from './CommentList.module.scss';
import CommentCard from '../CommentCard/CommentCard';

interface CommentListProps {
	className?: string
	comments?: Comment[]
	isLoading?: boolean
}
const CommentList = memo((props:CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('');
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading className={cls.comment} comment={undefined} />
                <CommentCard isLoading className={cls.comment} comment={undefined} />
                <CommentCard isLoading className={cls.comment} comment={undefined} />
            </div>

        );
    }
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? comments.map((comment: Comment) => (
                <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} />
            )) : <Text text={t('Комментарии отсутствуют')} /> }
        </div>
    );
});

export default CommentList;