# Security policy

Report vulnerabilities privately through GitHub private vulnerability reporting. Do not include
secrets in an issue or pull request.

Project credentials are stored only in GitHub Actions secrets, granted to the smallest necessary
workflow scope, and rotated after suspected exposure or maintainer offboarding. Maintainers review
secret access during the same access review used for repository permissions.
