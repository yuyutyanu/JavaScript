var Contractor = function() {
    this.hourly = "$15";
};

var FullTime = function() {
    this.hourly = "$12";
};

var PartTime = function() {
    this.hourly = "$11";
};

var Temporary = function() {
    this.hourly  = "$10";
};

function Factory() {
    this.createEmployee = function(type) {
        var employee;

        if(type === "fulltime"){
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else if (type === "temporary") {
            employee = new Temporary();
        } else if (type === "contractor") {
            employee = new Contractor();
        }

        employee.type = type;

        return employee;
    }
}

var factory = new Factory();

var John  = factory.createEmployee("fulltime");
var Aden  = factory.createEmployee("parttime");
var Smith = factory.createEmployee("temporary");
var David = factory.createEmployee("contractor");

console.log(John instanceof FullTime);
console.log(Aden instanceof PartTime);
console.log(Smith instanceof Temporary);
console.log(David instanceof Contractor);

console.log(John);
console.log(Aden);
console.log(Smith);
console.log(David);
