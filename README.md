# bufenc

Authenticated buffer encryption, using AES-256 in Galois Counter Mode.

## install

### To use it in nodejs applications
```sh
npm i bufenc
```

## Why
Maybe you want to encrypt a buffer (may be originated from a file or a voice record or something like that).
Of course you also want to detect manipulations, when you decrypt the buffer. \
With `bufenc` you can exactly to this, with simply calling to easy to use function, one for encryption, one for decryption

## How
!TBD!

## Security Architecture
!TBD!

## Used libraries
!TBD!

## Development

### Scripts
* QA: `npx roboter qa`
* QA without license check: `npx roboter analyze && npx roboter test && npx roboter deps`
* Tests only: `npx roboter test`
* Build: `npx roboter build`

### Github Actions
* qa: Runs on any pull-request and executes a `QA without license check`. Can also be run manually.
* release: Runs on pushes to `main` branch (except for tagging pushes) and publishes a new version of this package. \
  Version number must be increased correctly, before.

## License
This project is MIT License \
See [LICENSE.txt](./LICENSE.txt)