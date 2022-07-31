# Before you contribute

-   Is it necessary?
-   Does it make developing Killara easier?
-   Does it fix a bug? -> Create an [issue](https://github.com/eungella-io/Killara/issues/new) with the steps to reproduce
-   Does it break anything? -> Run the tests
-   Does it stick to the original goal of Killara -> Distraction-free writing
-   Does it reduce the build size?
-   Does it improve the user experience?
-   Does it improve the performance?

# How to contribute

## Prerequisite

| Name                                                                                               | Description                                            | Notes                                                                                                                |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [Visual Studio Code](https://code.visualstudio.com/download)                                       | Code editor                                            | [Workspace](https://github.com/eungella-io/Killara/blob/main/.vscode/settings.json) settings comes with the project. |
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)             | Code formatter                                         | [Prettier](https://github.com/eungella-io/Killara/blob/main/.prettierrc.json) settings comes with the project.       |
| [Git](https://git-scm.com/)                                                                        | Version control                                        | You may also need the [GitHub CLI](https://github.com/cli/cli)                                                       |
| [Node](https://nodejs.org/en/)                                                                     | JavaScript runtime                                     | You can use [NVM](https://github.com/nvm-sh/nvm) to manage your node versions                                        |
| [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)                                          | Package manager for JavaScript                         |                                                                                                                      |
| [Tauri CLI](https://tauri.app/v1/guides/getting-started/setup/html-css-js#create-the-rust-project) | Start front-end development server and other processes |                                                                                                                      |

If you're having trouble with the development setup, make sure you have read the [FAQ](https://github.com/eungella-io/FAQ) first before raising an [issue](https://github.com/eungella-io/Killara/issues/new).

## Git

1.  Fork the repo
2.  Clone your fork
3.  Sync your local master

    3.1.

    ```shell
    git remote add upstream git@github.com:eungella-io/Killara.git
    ```

    3.2.

    ```shell
    git fetch upstream
    ```

    3.3.

    ```shell
    git branch --set-upstream-to=upstream/main main
    ```

    3.4.

    ```shell
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

    ```shell
    git branch issue-2 # use issue_number, replace issue-2 with appropriate branch name
    git checkout issue-2
    ```

6.  Push your changes to your fork with git push
    ```shell
    git add .
    git commit -m"Write a meaningfull commit message"
    git push
    ```
7.  Create a pull request

    7.1 Use the url from the terminal

    ```shell
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

    ```shell
    git checkout main
    git pull
    ```

# Upgrade yarn package

```shell
yarn outdated
yarn upgrade
```
