# Using Git Ignore and Viewing History, Project Collaboration on Git

## Aim
To use `.gitignore`, view Git history, and collaborate on a Git project.

## Part A: Creating .gitignore

The `.gitignore` file is used to ignore files and folders that should not be committed.

### Example
Create a file named `.gitignore`:

```
touch .gitignore
```

Add the following content:

```
node_modules/
.env
dist/
.DS_Store
*.log
```

### Add and commit .gitignore
```
git add .gitignore
git commit -m "Add gitignore file"
```

## Part B: Viewing Git History

### Show commit history
```
git log
```

### Show short commit history
```
git log --oneline
```

### Show changes in a commit
```
git show commit_id
```

### Show file changes
```
git diff
```

## Part C: Project Collaboration on Git

### 1. Fork or clone the repository
```
git clone https://github.com/username/project-name.git
```

### 2. Create a new branch
```
git switch -c feature-footer
```

### 3. Make changes and commit
```
git add .
git commit -m "Add footer section"
```

### 4. Push branch
```
git push -u origin feature-footer
```

### 5. Create Pull Request
Go to GitHub and create a Pull Request to merge `feature-footer` into `main`.

### 6. Pull latest changes
```
git pull origin main
```

## Explanation
- `.gitignore` prevents unnecessary files from being tracked.
- `git log` helps view commit history.
- GitHub collaboration is usually done through branches and pull requests.

## Output
Unwanted files are ignored, commit history is viewed, and team collaboration is performed using branches and pull requests.
