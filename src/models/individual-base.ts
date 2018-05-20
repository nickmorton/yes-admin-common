import { IModelBase } from '../lib';
import { EthnicityCode } from './';

export type TGender = 'Male' | 'Female';

export interface IAddress {
	line1: string;
	line2?: string;
	district?: string;
	town: string;
	county?: string;
	postCode: string;
}

export interface IIndividualBase extends IModelBase {
	homeAddress: IAddress;
	dob: Date;
	ethnicity: EthnicityCode;
	gender: TGender;
	isDobApproximate: boolean;
	forename: string;
	surname: string;
}
