# PUP Vicinity Map

Interactive image map of the PUP Santa Mesa campus. Hover and click buildings, search the directory, and explore hotspots on a single page. Vanilla HTML, CSS, and JavaScript.

## Features

| Feature | Description |
|---------|-------------|
| Image map hotspots | Area targets on the campus map |
| Directory panel | Search and filter locations |
| Offline-friendly | Local `stamesa.jpg` map asset |

## Quick start

```bash
python -m http.server 8000
```

## Structure

```text
pup-vicinity-map/
  index.html
  stamesa.jpg
```

## Other design eras

| Branch | Era |
|--------|-----|
| `overhaul/dark-offline` | Dark offline-first layout |
| `overhaul/dark-premium` | Dark premium styling |
| `overhaul/light-split` | Light split map + directory |

`main` is the current hero-map + drawer layout.

## License

MIT. See [LICENSE](LICENSE).

Campus imagery and PUP marks belong to the Polytechnic University of the Philippines.

## Course note

Built for CMPE 364 (Web and Mobile Systems), Polytechnic University of the Philippines, under Engr. Arlene B. Canlas. Published here as a standalone project.
