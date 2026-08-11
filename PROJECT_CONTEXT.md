# Project context

This repository is the complete source and documentation boundary for the project. GitHub is its
only version-control, issue, continuous-integration, and release service. The project has no
subprojects, submodules, mirrors, package registry, external build service, or separate
distribution channel.

The organization owner is currently the only person with sensitive repository access.
Collaborator access is assigned manually after a maintenance need is recorded, reviewed when
responsibilities change, and removed when no longer required. The organization base permission
does not grant new members repository access.

The checked-in GitHub Actions workflow is the complete CI configuration. No project secrets are
configured for or supplied to it. Its workflow token has read-only default permissions, and its
`test` job is required before changes to `main` can merge. Hosted organization, repository,
ruleset, Actions, and security settings remain the authority for enforcement details.

`v0.1.0` is the first and only official release. Its uploaded versioned source archive is the only
separately uploaded release asset; GitHub also supplies its standard tag source archives. The
release notes identify the uploaded archive and its SHA-256 digest.

The project has not performed or documented a threat model, attack-surface analysis, broader
security assessment, SBOM, VEX analysis, SCA policy, SAST policy, support period, or
end-of-security-updates policy. No claim is made that these materials exist outside this project
boundary.
