export interface IWorker {
	$key?: string;
	firstName: string;
	lastName: string;
	birthdate: string;
	email: string;
	department: string;
	avatar: string;
}

export class Worker implements IWorker {
	constructor(
		public firstName: string,
		public lastName: string,
		public birthdate: string,
		public email: string,
		public department: string,
		public avatar: string
	) {}
}