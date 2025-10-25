import { delayPromise } from "./delay";
import {
  getProjects as dbGetProjects,
  getTasksByProject as dbGetTasksByProject,
  createTask as dbCreateTask,
  toggleTaskDone as dbToggleTaskDone,
  searchUsers as dbSearchUsers,
  getUserProfile as dbGetUserProfile,
  type Project,
  type Task,
  type User,
} from "./db";

export type { Project, Task, User };

export async function getProjects(): Promise<Project[]> {
  return delayPromise(dbGetProjects());
}

export async function getTasksByProject(projectId: string): Promise<Task[]> {
  return delayPromise(dbGetTasksByProject(projectId));
}

export async function createTask(
  projectId: string,
  title: string
): Promise<Task> {
  return delayPromise(dbCreateTask(projectId, title));
}

export async function toggleTaskDone(
  taskId: string
): Promise<Task | undefined> {
  return delayPromise(dbToggleTaskDone(taskId));
}

export async function searchUsers(query: string): Promise<User[]> {
  return delayPromise(dbSearchUsers(query));
}

export async function getUserProfile(
  userId: string
): Promise<User | undefined> {
  return delayPromise(dbGetUserProfile(userId));
}

export type ProjectSummary = {
  project: Project;
  total: number;
  done: number;
};

// Dashboard API example that intentionally uses Promise.all
export async function getDashboard(): Promise<ProjectSummary[]> {
  const projects = await getProjects();
  // TODO 07: (중급) Promise.all 을 활용해서 각 프로젝트의 task 개수(total, done)를 계산하세요.
  // 힌트: getTasksByProject(p.id)를 병렬로 호출하고, map 으로 합치세요.
  const tasksByProject = await Promise.all(
    projects.map((project) => getTasksByProject(project.id))
  );

  const summaries: ProjectSummary[] = projects.map((project, index) => {
    const tasks = tasksByProject[index];
    return {
      project,
      total: tasks.length,
      done: tasks.filter((t) => t.done).length,
    };
  }); // <- 수정 필요
  return summaries;
}
