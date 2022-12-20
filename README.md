## Install

Use the edge version

```
npm install --save imageai
```

**Before use this package, you must install [Jimp](https://www.npmjs.com/package/sharp) or [Sharp](https://www.npmjs.com/package/jimp) to the dependencies**

## Usage

```js
const ImageAI = require("imageai);

// default with options
const converter = new ImageAI();

// with proxy options
const converter = new ImageAI({
  proxy: {
    url: "http://101.32.184.53:3128",
    chinese: true,
    image: false,
  },
});

// with async retry options
const converter = new ImageAI({
  ...options,
  retries: 100,
  factor: 3,
  randomize: false,
});

// image source
const imgBuf = fs.readFileSync("images.jpeg");
const imgUrl = "https://hfinder.net/images.jpeg";
const imgPath = "/path/to/image/images.jpeg";
const imgBase64 = "UklGRiqXAABXRUJQVlA4WAoAAAAQ...";

// Can be valid: Buffer, url, path, or base64
const image = imgBuf | imgUrl | imgPath | imgBase64;
```

### Generate AI 2D

Generate photo to animes style

```js
// default
const buffer = await converter.ai2d(image);

// crop the image, "COMPARED" | "SINGLE"
const buffer = await converter.ai2d(image, "SINGLE");
```

> From `December 6` to `December 15` the AI had been available only in `China` or with `Chinese proxies`.
> Since `December 16` the AI `works` for the rest of the world (UPD: still doesn't work in some countries) again so using proxies is `not needed` anymore, but it's limited and allows you to generate only one type of media.
> Seems like it's impossible to find `FREE` alive proxies. `Don't waste` your time searching and just buy it `somewhere`.

### Convert Waifu 2x

**Before use this function, you must install [Form Data](https://www.npmjs.com/package/form-data) to the dependencies**

Make an anime image become HD

```js
// default
const buffer = await converter.waifu2x(image);

// noice reduction, "MEDIUM" | "HIGH"
const buffer = await converter.waifu2x(image, "HIGH");

// scale the image?
const buffer = await converter.waifu2x(image, "MEDIUM", true);
```
