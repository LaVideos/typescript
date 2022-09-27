interface IApp{
    name:string;
    setName(name:string):void;
    projects:IProject[];
    addProject(project:IProject):void;
}

interface IProject{
    tasks:ITask[];
    addTask(task:ITask):void;
    editTask(task:Partial<ITask>):void;
    deleteTask(id:number):void;
    getTotalTime():number;
    getAllTaskByDeveloper(id:number):ITask[];
}

interface ITask {
    id:number;
    durationInMin:number;
    completed:boolean;
    developer:IUser;
    getInfo():string;
}

interface IUser{
    id:number;
    name:string;
}

export type {
    IApp,
   ITask,
    IUser,
    IProject
}