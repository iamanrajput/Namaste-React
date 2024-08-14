# Episode 2
- npm doesn't means node package manager,
- npm don't have any full form.

### Difference between npm i and npm i -D is -D install package as developer mode

### Difference between Caret(^) and Tilde (~)
```
"devDependencies": {
    "parcel": "^2.12.0"
  }
```
#### Here, ^(Caret) = It automatically updates minor and patch updates.

#### There is one more ~(Tilde) = It automatically updates major and minor updates.

#### It is always advisable to use minor update because major update may create error in code, as it is written according to old version.

## Difference between package.json & package-lock.json:

- package.json = It contains basic information about the project.
- package.lock.json = It describes the exact tree that was generated to allow subsequent installs to have the identical tree.
