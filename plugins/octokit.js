import Vue from "vue";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: ""
});

Vue.prototype.octokit = octokit;
