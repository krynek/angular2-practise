"use strict";
var Worker = (function () {
    function Worker(id, firstName, lastName, birthdate, email, department, avatar) {
        this.id = id;
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