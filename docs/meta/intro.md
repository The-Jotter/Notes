---
title: Getting Started
sidebar_position: 1
---

# Getting Started with Jotter
> Hello down there!

## Requirements
So, in order to get this clunky system to work, you need:
* [`git`](https://git-scm.com/)
* [`vscode`](https://code.visualstudio.com/) or your favourite IDE, though it doesn't have first-class support.

## Set-up
### 1. Get access to the GitHub organisation
You'll need an invite to do stuff in the GitHub organisation.

### 2. Cloning the repositories...
Before the following, it is suggested you make a parent folder to contain all of the repositories.

1. Each unit has it's own GitHub repo,
in order to edit them, you'll need to `git clone` them.

2. In addition, you'll need to `git checkout` to your own branch.

<br />

### Example

```sh title="Setting up notes for CM10195" 
git clone https://github.com/The-Jotter/CM10195
git checkout -b <YOUR GITHUB USERNAME>
```