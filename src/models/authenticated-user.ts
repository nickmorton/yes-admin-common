export interface IAuthenticatedUser {
	email: string;
	firstName: string;
	fullName: string;
	lastName: string;
	pictureUrl: string;
	token?: string;
}
