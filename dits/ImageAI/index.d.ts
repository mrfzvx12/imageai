/// <reference types="node" />
import { AIOpts } from "../Types";
declare class ImageAI {
    #private;
    /**
     * Create a new ImageAI instance
     * @param {AIOpts} opts:{@link AIOpts} image ai options
     */
    constructor(opts?: AIOpts);
    /**
     * Image Super-Resolution for Anime-style art.
     * @param {string|Buffer} image:string|Buffer source image
     * @param {"MEDIUM"|"HIGH"} noise?:"MEDIUM"|"HIGH" use noise ?
     * @param {boolean} scale?:boolean wanna scale 2x?
     * @returns {Promise<Buffer>} image Buffer
     */
    waifu2x(image: string | Buffer, noise?: "MEDIUM" | "HIGH", scale?: boolean): Promise<Buffer>;
    /**
     * Generate a hyper-realistic photo an anime style!
     * @param {string|Buffer} image:string|Buffer image source
     * @param {"COMPARED"|"SINGLE"} crop?:"COMPARED"|"SINGLE" wanna crop the image?
     * @returns {Promise<Buffer>} image Buffer
     */
    ai2d(image: string | Buffer, crop?: "COMPARED" | "SINGLE"): Promise<Buffer>;
}
export default ImageAI;
