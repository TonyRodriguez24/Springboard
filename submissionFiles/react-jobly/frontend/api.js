import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response || err.message);

      if (err.response && err.response.data && err.response.data.error) {
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
      } else {
        throw [err.message || "Unknown API error"];
      }
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async searchCompanies(name) {
    let response = await this.request(`companies/?name=${name}`)
    return response.companies;
  }

  static async searchJobs(title) {
    let response = await this.request(`jobs/?title=${title}`)
    return response.jobs
  }

  static async register(formData) {
    const response = await this.request(`auth/register`, formData, "POST")
    JoblyApi.token = response.token //setting the joblyApi token used to communicate to the token we get from registering
    localStorage.setItem("token", response.token) //storing the token inside local localStorage
    return response.token
  }

  static async login(formData) {
    const response = await this.request('auth/login', formData, "POST")
    JoblyApi.token = response.token //setting the joblyApi token used to communicate to the token we get from registering
    localStorage.setItem("token", response.token) //storing the token inside local localStorage
    return response.token
  }

  static logout() {
    JoblyApi.token = null;
    localStorage.removeItem("token")
  }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";



export default JoblyApi;