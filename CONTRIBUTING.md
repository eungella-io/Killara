# Before you Contribute

-   Is it necessary?
-   Does it make developing Killara easier?
-   Does it fix a bug? -> Create an issue with the steps to reproduce
-   Does it break anything? -> Run the tests
-   Does it stick to the original goal of Killara -> Distraction free writing
-   Does it reduce the build size?
-   Does it improve the user experience?
-   Does it improve the performance?

# How to Contribution

Make sure you have [Git](https://git-scm.com/), [Node](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) installed on your machine. You can use [NVM](https://github.com/nvm-sh/nvm) to manage your node versions. Also you need to install [Tauri CLI](https://tauri.app/v1/guides/getting-started/setup/html-css-js#create-the-rust-project). You may also need the [GitHub CLI](https://github.com/cli/cli).

1.  Fork the repo
2.  Clone your fork
3.  Sync your local master

    3.1.

    ```bash
    git remote add upstream git@github.com:eungella-io/Killara.git
    ```

    3.2.

    ```bash
    git fetch upstream
    ```

    3.3.

    ```bash
    git branch --set-upstream-to=upstream/main main
    ```

    3.4.

    ```bash
    git pull
    ```

4.  Run locally

    4.1 Move to the project directory and install dependencies

    ```shell
    cd Killara
    yarn install
    ```

    4.2 Run the app

    ```shell
    yarn run tauri dev
    ```

5.  Create a branch

    ```bash
    git branch issue-2 # use issue_number, replace issue-2 with appropriate branch name
    git checkout issue-2
    ```

6.  Push your changes to your fork with git push
    ```bash
    git add .
    git commit -m"Write a meaningfull commit message"
    git push
    ```
7.  Create a pull request

    7.1 Use the url from the terminal

    ```bash
    remote: Create a pull request for 'issue-2' on GitHub by visiting:
    remote:      https://github.com/........................
    ```

    7.2 If you're having problem finding the url

        a) https://github.com/eungella-io/Killara/pulls

        b) Click the button 'New pull request'

        c) Click the link 'compare across forks'

        d) Change head repository to your fork

        e) Change the branch to your branch

        f) Create pull request

8.  Repeat

    ```bash
    git checkout main
    git pull
    ```
