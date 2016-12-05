"use strict";
/**
 * Class representing a worker.
 *
 * @class
 * @implements {IWorker}
 */
var Worker = (function () {
    function Worker(firstName, lastName, birthdate, email, department, avatar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.email = email;
        this.department = department;
        this.avatar = avatar;
    }
    return Worker;
}());
exports.Worker = Worker;
//# sourceMappingURL=worker.js.map