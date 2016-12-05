/**
 * Interface for clasess that represent a worker
 * 
 * @interface
 */
export interface IWorker {
	$key?: string;
	firstName: string;
	lastName: string;
	birthdate: string;
	email: string;
	department: string;
	avatar: string;
}
/**
 * Class representing a worker.
 * 
 * @class
 * @implements {IWorker}
 */
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