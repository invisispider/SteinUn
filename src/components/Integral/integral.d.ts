type AqalModules = 'quadrants'|'levels'|'lines'|'types'|'states'; 

interface AqalModel {
    [key in AqalModules]: AqalModule;
}

interface AqalModuleCollection {
    [key: string]: AqalSelected;
}

interface AqalSelected {
    description: string;
    types: { [key: number]: AqalSub };
    drawbacks: string;
}

interface AqalSub {
    type: string;
    desc: string;
}

declare module 'integral.types' {
    export const AqalModel;
}
