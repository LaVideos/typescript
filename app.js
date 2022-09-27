"use strict";
exports.__esModule = true;
var Task = /** @class */ (function () {
    function Task(completed, developer, durationInMin) {
        this.completed = completed;
        this.developer = developer;
        this.durationInMin = durationInMin;
        this.id = this.developer.id;
    }
    Task.prototype.getInfo = function () {
        return " \n \n        completed - ".concat(this.completed, "\n\n        developer - ").concat(this.developer.name, "\n\n        duration - ").concat(this.durationInMin, "\n\n        id - ").concat(this.id, " \n        ");
    };
    return Task;
}());
var App = /** @class */ (function () {
    function App(name, projects) {
        this.name = name;
        this.projects = projects;
    }
    App.prototype.addProject = function (project) {
        this.projects.push(project);
    };
    App.prototype.setName = function (name) {
        this.name = name;
    };
    return App;
}());
var Project = /** @class */ (function () {
    function Project(tasks) {
        this.tasks = tasks;
    }
    Project.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    Project.prototype.deleteTask = function (id) {
        this.tasks.splice((id - 1), 1);
    };
    Project.prototype.editTask = function (task) {
        var task2Update = this.tasks.map(function (value) { return value.id === task.id; });
        if (task2Update) {
            Object.assign(task2Update, task);
        }
        else {
            throw new Error("Wrong task");
        }
    };
    Project.prototype.getAllTaskByDeveloper = function (id) {
        return this.tasks.filter(function (value) { return value.id === id; });
    };
    Project.prototype.getTotalTime = function () {
        var totalTime = 0;
        this.tasks.map(function (value) { return totalTime += value.durationInMin; });
        return totalTime;
    };
    return Project;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.id = ++User.count;
    }
    User.count = 0;
    return User;
}());
var user1 = new User("Eric");
var users2 = new User("Kyle");
var users3 = new User("Kenny");
var users4 = new User("Stan");
var task = new Task(false, user1, 10);
var task2 = new Task(true, users2, 10);
var task3 = new Task(true, users3, 10);
var task4 = new Task(true, users4, 10);
var project = new Project([task, task2, task3, task4]);
var app = new App("New app", [project]);
console.log("user - " + JSON.stringify(user1));
console.log("*************************************************************************************");
console.log("user - " + JSON.stringify(users2));
console.log("*************************************************************************************");
console.log("task info - " + (task.getInfo()));
console.log("*************************************************************************************");
console.log("task info - " + task2.getInfo());
console.log("*************************************************************************************");
console.log(JSON.stringify(project));
console.log("*************************************************************************************");
project.deleteTask(user1.id);
console.log(JSON.stringify(project));
console.log("*************************************************************************************");
var users5 = new User("Batters");
var task5 = new Task(false, users5, 10);
project.addTask(task5);
console.log(JSON.stringify(project));
console.log("*************************************************************************************");
task5.completed = true;
project.editTask(task5);
console.log(JSON.stringify(project));
console.log("*************************************************************************************");
console.log("All task by developer - " + JSON.stringify(project.getAllTaskByDeveloper(task4.id)));
console.log("*************************************************************************************");
console.log("Total time - " + JSON.stringify(project.getTotalTime()));
console.log("*************************************************************************************");
app.setName("Cool app");
console.log("App - " + JSON.stringify(app));
