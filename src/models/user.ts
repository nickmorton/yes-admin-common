import { ValidationRuleFactory, ValidatorBase } from '../lib';
import { CrisisSupportCode, FamilySupportCode, IIndividualBase, IssueCode, JobSearchFrequencyCode } from './';

export interface IUser extends IIndividualBase {
	crisisSupport: CrisisSupportCode[];
	familySupport: FamilySupportCode;
	hasCurrentCV: boolean;
	hasSkillsToFindJob: boolean;
	isSearchingForJob: boolean;
	jobInterviewsInLastMonth: number;
	jobSearchFrequency: JobSearchFrequencyCode;
	lastVisited: Date;
	visits: IUserVisit[];
}

export interface IUserVisit {
	date: Date;
	wasByAppointment: boolean;
	issue: IssueCode;
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
