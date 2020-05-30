declare module 'redux-persist-transform-immutable' {
    import { Transform } from "redux-persist/es/types";

    interface TransformConfig {
        whitelist?: Array<string>;
        blacklist?: Array<string>;
    }

    function immutableTransform(config?: TransformConfig): Transform;

    export = immutableTransform;
}
