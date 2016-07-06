FromAppFilter.$inject = ['config'];
export function FromAppFilter(config) {
    return (input) => {
        return config.documentRoot + input;
    }
}