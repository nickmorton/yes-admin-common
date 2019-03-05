import { IModelBase, IPagedRequest, ValidationRuleFactory, ValidatorBase } from '../lib';
import {
	ContactTypeCode,
	CrisisSupportCode,
	EmploymentStatusCode,
	FamilySupportCode,
	HousingStatusCode,
	IssueCode,
	JobSearchFrequencyCode,
	VisitTimeCode
} from './';

export interface IUserVisit extends IModelBase {
	userId: string;
	contactType: ContactTypeCode;
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
	visitTime: VisitTimeCode;
	wasByAppointment: boolean;
}

export interface IUserVisitsGetRequest extends IPagedRequest<IUserVisit> {
	userId: string;
}

export class UserVisitValidator extends ValidatorBase<IUserVisit> {
	// TODO: Apply default value and maximum date validation
	public static defaultDate = new Date();
	public static maximumDate = new Date();

	constructor() {
		super([
			{
				propertyName: 'date',
				rules: [
					ValidationRuleFactory.required(),
				],
			},
		]);
	}

	public validate(entity: IUserVisit): boolean {
		return super.validate(entity);
	}
}
