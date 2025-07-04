import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { VscRepo, VscPerson } from "react-icons/vsc";

import RepoCard from "@/components/RepoCard";
import { Repo, User } from "@/types";

import styles from "@/styles/GithubPage.module.css";

interface GithubPageProps {
  repos: Repo[];
  user: User;
}

const GithubPage = ({ repos, user }: GithubPageProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>GitHub</h1>
        <p className={styles.pageSubtitle}>
          Browse through my GitHub repositories and see what I&apos;ve been
          working on. These are some of my public repositories showcasing
          various projects and skills.
        </p>
      </div>

      <div className={styles.githubPage}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={100}
              height={100}
              priority
            />
            <div className={styles.userInfo}>
              <h2 className={styles.username}>{user.login}</h2>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <VscRepo className={styles.statIcon} />
                  <span>{user.public_repos} repositories</span>
                </div>
                <div className={styles.statItem}>
                  <VscPerson className={styles.statIcon} />
                  <span>{user.followers} followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Popular Repositories</h3>
        </div>
        <div className={styles.reposContainer}>
          {Array.isArray(repos) && repos.length > 0 ? (
            repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))
          ) : (
            <p>No repositories found.</p>
          )}
        </div>
        <div className={styles.contributions}>
          <GitHubCalendar
            username="reydstry"
            hideColorLegend
            hideMonthLabels
            colorScheme="dark"
            theme={{
              dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              light: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const userRes = await fetch(`https://api.github.com/users/reydstry`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API}`,
      },
    });

    if (!userRes.ok) throw new Error("Failed to fetch user");

    const user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/reydstry/repos?sort=pushed&per_page=6`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API}`,
        },
      }
    );

    if (!repoRes.ok) throw new Error("Failed to fetch repos");

    const repos = await repoRes.json();

    if (!Array.isArray(repos)) throw new Error("Repos is not an array");

    return {
      props: {
        repos,
        user,
      },
      revalidate: 600,
    };
  } catch (err) {
    console.error("Error fetching GitHub data:", err);
    return {
      notFound: true,
    };
  }
}

export default GithubPage;
