import { IPagedRequest, ValidationRuleFactory, ValidatorBase } from '../lib';
import { CrisisSupportCode, FamilySupportCode, IIndividualBase, IssueCode, JobSearchFrequencyCode } from './';
import { EmploymentStatusCode, HousingStatusCode } from './';

export interface IUser extends IIndividualBase {
	lastVisited: Date;
	visits: IUserVisit[];
}

export interface IUserGetRequest extends IPagedRequest<IUser> {
	name?: string;
}

export interface IUserVisit {
	crisisSupport: CrisisSupportCode[];
	date: Date;
	employmentStatus: EmploymentStatusCode;
	familySupport: FamilySupportCode;
	housingStatus: HousingStatusCode;
	issue: IssueCode;
	hasCurrentCV: boolean;
	hasSkillsToFindJob: boolean;
	isSearchingForJob: boolean;
	jobInterviewsInLastMonth: number;
	jobSearchFrequency: JobSearchFrequencyCode;
	wasByAppointment: boolean;
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
