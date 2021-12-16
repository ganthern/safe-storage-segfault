# safe-storage-segfault
poc for segfaulting electron.safeStorage.isEncryptionAvailable()

expected output would be:
```
nig@nig ~/dev/repositories/safe-storage-segfault
└─ $ ▶ npm start

> safe-storage-segfault@1.0.0 start
> electron .

working
still working
availability,maybe: true
```

but it is:
```
nig@nig ~/dev/repositories/safe-storage-segfault
└─ $ ▶ npm start

> safe-storage-segfault@1.0.0 start
> electron .

working
still working
/home/nig/dev/repositories/safe-storage-segfault/node_modules/electron/dist/electron exited with signal SIGSEGV
```
