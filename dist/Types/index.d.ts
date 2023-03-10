export interface AIOpts {
    /**
     * Wanna use proxy agent?
     */
    proxy?: {
        /**
         * Proxy URL to connect
         */
        url: string;
        /**
         *  Your proxy is from chinese?
         */
        chinese: boolean;
        /**
         * Wanna use proxy on image requests?
         */
        image: boolean;
    };
    /**
     * An optional function that is invoked after a new retry is performed. It's passed the
     * `Error` that triggered it as a parameter.
     */
    onRetry?: ((e: Error, attempt: number) => any) | undefined;
    /**
     * Whether to retry forever.
     * @default false
     */
    forever?: boolean | undefined;
    /**
     * Whether to [unref](https://nodejs.org/api/timers.html#timers_unref) the setTimeout's.
     * @default false
     */
    unref?: boolean | undefined;
    /**
     * The maximum time (in milliseconds) that the retried operation is allowed to run.
     * @default Infinity
     */
    maxRetryTime?: number | undefined;
    /**
     * The maximum amount of times to retry the operation.
     * @default 10
     */
    retries?: number | undefined;
    /**
     * The exponential factor to use.
     * @default 1
     */
    factor?: number | undefined;
    /**
     * The number of milliseconds before starting the first retry.
     * @default 1000
     */
    minTimeout?: number | undefined;
    /**
     * The maximum number of milliseconds between two retries.
     * @default Infinity
     */
    maxTimeout?: number | undefined;
    /**
     * Randomizes the timeouts by multiplying a factor between 1-2.
     * @default false
     */
    randomize?: boolean | undefined;
}
