import { IPagedRequest, ValidationRuleFactory, ValidatorBase } from '../lib';
import { IIndividualBase } from './';

export interface IUser extends IIndividualBase {
	lastVisited: Date;
}

export interface IUserGetRequest extends IPagedRequest<IUser> {
	name?: string;
}

export class UserValidator extends ValidatorBase<IUser> {
	public static defaultDobYear = new Date(2000, 0, 1);
	public static maximumDob = new Date();

	constructor() {
		super([
			{
				propertyName: 'forename',
				rules: [
					ValidationRuleFactory.required(),
					ValidationRuleFactory.maxLength(64),
				],
			},
			{
				propertyName: 'surname',
				rules: [
					ValidationRuleFactory.required(),
					ValidationRuleFactory.maxLength(64),
				],
			},
		]);
	}

	public validate(entity: IUser): boolean {
		return super.validate(entity);
	}
}
