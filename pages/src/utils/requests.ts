import { REPO_FULL_NAME } from "@/constants";
import axios from "axios"

const githubFileApi = axios.create({
    baseURL: `https://api.github.com/repos/${REPO_FULL_NAME}/contents`,
    timeout: 5000,
})

export { githubFileApi }