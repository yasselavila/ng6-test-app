export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  html_url: string;
}

export interface Repo {
  name: string;
  full_name: string;
  description?: string;
  private: boolean;
  html_url: string;
  license: License;
  updated_at: string;
  has_issues: boolean;
  open_issues_count: number;
  forks_count: number;
  stargazers_count: number;
}
