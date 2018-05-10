import { IModelBase } from './model-base';

export interface IRequest<TData> {
	data: TData;
}

export type TEntitySort<TEntity> = {
	[k in keyof TEntity]?: 1 | -1;
};

export interface IPagedRequest<TEntity extends IModelBase> {
	limit: string | number;
	skip: string | number;
	sort?: TEntitySort<TEntity>;
}

export interface IResponse<TEntity extends IModelBase> {
	entity: TEntity;
}

export interface IPagedResponse<TEntity> {
	entities: TEntity[];
}
