# Security policy

Report vulnerabilities privately through GitHub private vulnerability reporting. Do not include
secrets in an issue or pull request.

The project currently has no configured project credentials or Actions secrets. If credentials are
introduced, they will be stored in GitHub Actions secrets, granted to the smallest necessary
workflow scope, and rotated after suspected exposure or maintainer offboarding. Maintainers review
secret access during the same access review used for repository permissions.
