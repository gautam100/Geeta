# Setting up a Git Repository and Making Commits

## Aim
To create a Git repository, add files, and make commits.

## Requirements
- Git installed
- VS Code or terminal

## Steps and Commands

### 1. Create a project folder
```
mkdir frontend-project
cd frontend-project
```

### 2. Create files
```
echo "# Frontend Project" > README.md
echo "<h1>Hello Frontend</h1>" > index.html
```

### 3. Initialize Git repository
```
git init
```

### 4. Check repository status
```
git status
```

### 5. Add files to staging area
```
git add README.md index.html
```

Or add all files:

```
git add .
```

### 6. Make first commit
```
git commit -m "Initial commit with frontend files"
```

### 7. View commit history
```
git log
```

## Explanation
- `git init` creates a new local repository.
- `git add` moves files to the staging area.
- `git commit` saves a snapshot of the project.
- `git status` shows the current file state.
- `git log` shows previous commits.

## Output
A local Git repository is created successfully and the first commit is made.
