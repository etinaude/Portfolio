export type ProjectT = {
  title: string;
  description: string;
  image_url: string;

  hover_img?: string;
  hover_video?: string;
  follow_url?: string;
};

export type LongCardT = ProjectT & {
  side: "left" | "right";
};

export class BannerT {
  style: string;
  text: string;
  display: boolean;

  constructor() {
    this.style = "";
    this.text = "";
    this.display = false;
  }
}

export class ContactFormT {
  name: string;
  email: string;
  message: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.message = "";
  }
}

export type posT = {
  x: number;
  y: number;
};

export type RepoT = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: false;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: false;
  };
  html_url: string;
  description: string;
  fork: false;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: 29603;
  stargazers_count: 18;
  watchers_count: 18;
  language: string;
  has_issues: true;
  has_projects: true;
  has_downloads: true;
  has_wiki: true;
  has_pages: false;
  forks_count: 1;
  mirror_url: null;
  archived: false;
  disabled: false;
  open_issues_count: 0;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  allow_forking: true;
  is_template: false;
  web_commit_signoff_required: false;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  languageColor: string;
};
