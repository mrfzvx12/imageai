## Install

Use the edge version

```
npm install --save github:mrfzvx12/imageai
```

**Before use this package, you must install [Jimp](https://www.npmjs.com/package/sharp) or [Sharp](https://www.npmjs.com/package/jimp) to the dependencies**

## Usage

```js
// import * as ImageAI from "imageai";
const ImageAI = require("imageai");

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
