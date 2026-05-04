# Working with Branches and Merging, Cloning a Repository and Pushing Changes

## Aim
To work with Git branches, merge changes, clone a repository, and push changes to remote GitHub repository.

## Part A: Branching and Merging

### 1. Create a new branch
```
git branch feature-navbar
```

### 2. Switch to the branch
```
git checkout feature-navbar
```

Or use:

```
git switch feature-navbar
```

### 3. Create or edit a file
```
echo "<nav>Home About Contact</nav>" > navbar.html
```

### 4. Add and commit changes
```
git add .
git commit -m "Add navbar component"
```

### 5. Switch back to main branch
```
git switch main
```

### 6. Merge feature branch into main
```
git merge feature-navbar
```

## Part B: Cloning a Repository

```
git clone https://github.com/username/frontend-project.git
cd frontend-project
```

## Part C: Pushing Changes

### 1. Add remote repository
```
git remote add origin https://github.com/username/frontend-project.git
```

### 2. Push main branch
```
git push -u origin main
```

### 3. Push feature branch
```
git push -u origin feature-navbar
```

## Explanation
- A branch is used to work on a new feature without affecting the main code.
- Merging combines the feature branch changes into the main branch.
- Cloning downloads a remote repository to the local system.
- Pushing uploads local changes to GitHub.

## Output
The branch is created, changes are merged successfully, repository is cloned, and code is pushed to GitHub.
