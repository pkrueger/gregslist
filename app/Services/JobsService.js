import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { saveState } from "../Utils/Store.js";
import { SandboxServer } from "./AxiosService.js";

class JobsService {
  async getJobs() {
    const res = await SandboxServer.get("/api/jobs");
    console.log(res.data);
    appState.jobs = res.data.map((j) => new Job(j));
  }

  addJob(formData) {
    let job = new Job(formData);
    appState.jobs = [job, ...appState.jobs];
    saveState("jobs", appState.jobs);
  }
}

export const jobsService = new JobsService();
