# Artifact review and reproduction

`test/fixtures/generated-tool` is an intentionally committed executable fixture. Its complete
human-readable source is `tools/fixture-source.c`. Reproduce it on Linux with:

```sh
cc -O2 tools/fixture-source.c -o test/fixtures/generated-tool
sha256sum test/fixtures/generated-tool
```

The fixture has no network, file, environment, or dynamic-input behavior. It prints one fixed
line and exits. Review the source and reproduce the hash before approving a changed fixture. The
artifact remains an intentional generated-executable gap even when its content is reviewable.
