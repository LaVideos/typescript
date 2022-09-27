import {IApp, IProject, ITask, IUser} from "./interfaces";

class Task implements ITask{
    completed: boolean;
    developer: User;
    durationInMin: number;
    id: number;

    constructor(completed: boolean, developer: User, durationInMin: number) {
        this.completed = completed;
        this.developer = developer;
        this.durationInMin = durationInMin;
        this.id = this.developer.id;
    }

    getInfo(): string {
        return ` \n 
        completed - ${this.completed}\n
        developer - ${this.developer.name}\n
        duration - ${this.durationInMin}\n
        id - ${this.id} 
        `;
    }
}

class App implements IApp{
    name: string;
    projects: Project[];

    addProject(project: Project): void {
        this.projects.push(project)
    }

    setName(name: string): void {
        this.name = name;
    }

    constructor(name:string,projects:Project[]) {
        this.name = name;
        this.projects = projects;

    }
}

class Project implements IProject{
    constructor(tasks: Task[]) {
        this.tasks = tasks;
    }
    tasks: Task[];

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    deleteTask(id: number): void {
        this.tasks.splice((id-1),1);
    }

    editTask(task: Partial<Task>): void {
        const task2Update = this.tasks.map(value => value.id === task.id);
        if(task2Update){
            Object.assign(task2Update,task);
        }else {
            throw new Error("Wrong task")
        }
    }

    getAllTaskByDeveloper(id: number): Task[] {
        return this.tasks.filter(value => value.id === id);
    }

    getTotalTime(): number {
        let totalTime:number = 0;
        this.tasks.map(value => totalTime+= value.durationInMin)
        return totalTime;
    }

}

class User implements IUser{

    static count = 0;
    id: number;
    name: string;

    constructor(name: string) {
        this.name = name;
        this.id = ++User.count;
    }




}

const user1 = new User("Eric");
const users2 = new User("Kyle");
const users3 = new User("Kenny");
const users4 = new User("Stan");

const task = new Task(false,user1,10);
const task2 = new Task(true,users2,10);
const task3 = new Task(true,users3,10);
const task4 = new Task(true,users4,10);

const project = new Project([task,task2,task3,task4]);
const app = new App("New app",[project]);

console.log("user - "+JSON.stringify(user1));
console.log("*************************************************************************************")
console.log("user - "+JSON.stringify(users2));
console.log("*************************************************************************************")

console.log("task info - "+(task.getInfo()))
console.log("*************************************************************************************")
console.log("task info - " + task2.getInfo())
console.log("*************************************************************************************")
console.log(JSON.stringify(project))
console.log("*************************************************************************************")
project.deleteTask(user1.id);
console.log(JSON.stringify(project))
console.log("*************************************************************************************")
const users5 = new User("Batters");
const task5 = new Task(false,users5,10);
project.addTask(task5);
console.log(JSON.stringify(project));
console.log("*************************************************************************************")
task5.completed = true;
project.editTask(task5);
console.log(JSON.stringify(project));
console.log("*************************************************************************************")
console.log("All task by developer - " + JSON.stringify(project.getAllTaskByDeveloper(task4.id)));
console.log("*************************************************************************************")
console.log("Total time - "+JSON.stringify(project.getTotalTime()));
console.log("*************************************************************************************")
app.setName("Cool app");
console.log("App - "+JSON.stringify(app))






