# Josette's Website

a personal portfolio

### Client

The site is bundled with several React packages. Material-UI is packaged for a styled 
component library.


### Server

The server is a simple Express server. When booted, it will search along the server file path for certificate files. If
found, it will boot the server in HTTPS mode, otherwise in traditional HTTP mode. The site uses morgan for logging.

## Quick Start

First, download the required npm packages.

```bash
npm install
```

Then, run the appropriate command for your purposes.

```bash
npm run [start / build]
