import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { Pop } from "../Utils/Pop.js";
import { saveState } from "../Utils/Store.js";
import { SandboxServer } from "./AxiosService.js";

class JobsService {
  async getJobs() {
    const res = await SandboxServer.get("/api/jobs");
    console.log(res.data);
    appState.jobs = res.data.map((j) => new Job(j));
  }

  async addJob(formData) {
    const res = await SandboxServer.post("/api/jobs", formData);
    appState.jobs = [...appState.jobs, new Job(res.data)];
  }

  async deleteJob(id) {
    if (!(await Pop.confirm("Delete this listing?"))) {
      return;
    }

    SandboxServer.delete(`/api/jobs/${id}`);
    appState.jobs = appState.jobs.filter((j) => j.id != id);
  }
}

export const jobsService = new JobsService();
