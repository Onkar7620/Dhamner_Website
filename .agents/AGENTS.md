# Project Rules: Dhamner Website

## Git Commit & Push Verification Rules
Before concluding a work session or declaring a user request completed, the agent MUST run the following checks:

1. **Automatic Status Verification**:
   * Always run `git status` to verify that there are no untracked or unstaged modifications in the workspace.
   * If there are modified files, ensure they are added (`git add`) and committed.

2. **Remote Push Verification**:
   * Verify that all local commits have been pushed to the remote repository.
   * Run `git diff origin/main` to confirm that the local workspace and remote branch are fully in sync and no changes are left unstaged or unpushed.

3. **No Uncommitted Walkthrough Claims**:
   * Do not claim a feature is completed or document it in `walkthrough.md` unless the changes have been fully committed and pushed.
