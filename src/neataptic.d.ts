/** Declaration file generated by dts-gen */

declare module 'neataptic' {
    export class Group {
        constructor(size: any);

        activate(value: any): any;

        clear(): void;

        connect(target: any, method: any, weight: any): any;

        disconnect(target: any, twosided: any): void;

        gate(connections: any, method: any): void;

        propagate(rate: any, momentum: any, target: any): void;

        set(values: any): void;

    }

    export class Layer {
        constructor();

        activate(value: any): any;

        clear(): void;

        connect(target: any, method: any, weight: any): any;

        disconnect(target: any, twosided: any): void;

        gate(connections: any, method: any): void;

        propagate(rate: any, momentum: any, target: any): void;

        set(values: any): void;

        static Dense(size: any): any;

        static GRU(size: any): any;

        static LSTM(size: any): any;

        static Memory(size: any, memory: any): any;

    }

    export class Neat {
        population: Network[];
        generation: any;
        constructor(input: any, output: any, fitness: any, options: any);

        createPool(network: any): void;

        evaluate(): void;

        evolve(): any;

        export(): any;

        getAverage(): any;

        getFittest(): any;

        getOffspring(): any;

        getParent(): any;

        import(json: any): void;

        mutate(): void;

        selectMutationMethod(genome: any): any;

        sort(): any;

    }

    export class Network {
        constructor(input: any, output: any);

        activate(input: any, training: any): any;

        clear(): void;

        connect(from: any, to: any, weight: any): any;

        disconnect(from: any, to: any): void;

        evolve(set: any, options: any): any;

        gate(node: any, connection: any): void;

        graph(width: any, height: any): any;

        mutate(method: any): void;

        noTraceActivate(input: any): any;

        propagate(rate: any, momentum: any, update: any, target: any): void;

        remove(node: any): void;

        serialize(): any;

        set(values: any): void;

        standalone(): any;

        test(set: any, cost: any): any;

        toJSON(): any;

        train(set: any, options: any): any;

        ungate(connection: any): void;

        static crossOver(network1: any, network2: any, equal: any): any;

        static fromJSON(json: any): any;

        static merge(network1: any, network2: any): any;

    }

    export class Node {
        constructor(type: any);

        activate(input: any): any;

        clear(): void;

        connect(target: any, weight: any): any;

        disconnect(node: any, twosided: any): void;

        gate(connections: any): void;

        isProjectedBy(node: any): any;

        isProjectingTo(node: any): any;

        mutate(method: any): void;

        noTraceActivate(input: any): any;

        propagate(rate: any, momentum: any, update: any, target: any): void;

        toJSON(): any;

        ungate(connections: any): void;

        static fromJSON(json: any): any;

    }

    export const config: {
        warnings: boolean;
    };

    export const methods: {
        activation: {
            ABSOLUTE: any;
            BENT_IDENTITY: any;
            BIPOLAR: any;
            BIPOLAR_SIGMOID: any;
            GAUSSIAN: any;
            HARD_TANH: any;
            IDENTITY: any;
            INVERSE: any;
            LOGISTIC: any;
            RELU: any;
            SELU: any;
            SINUSOID: any;
            SOFTSIGN: any;
            STEP: any;
            TANH: any;
        };
        connection: {
            ALL_TO_ALL: {
                name: string;
            };
            ALL_TO_ELSE: {
                name: string;
            };
            ONE_TO_ONE: {
                name: string;
            };
        };
        cost: {
            BINARY: any;
            CROSS_ENTROPY: any;
            HINGE: any;
            MAE: any;
            MAPE: any;
            MSE: any;
            MSLE: any;
        };
        crossover: {
            AVERAGE: {
                name: string;
            };
            SINGLE_POINT: {
                config: number[];
                name: string;
            };
            TWO_POINT: {
                config: number[];
                name: string;
            };
            UNIFORM: {
                name: string;
            };
        };
        gating: {
            INPUT: {
                name: string;
            };
            OUTPUT: {
                name: string;
            };
            SELF: {
                name: string;
            };
        };
        mutation: {
            ADD_BACK_CONN: {
                name: string;
            };
            ADD_CONN: {
                name: string;
            };
            ADD_GATE: {
                name: string;
            };
            ADD_NODE: {
                name: string;
            };
            ADD_SELF_CONN: {
                name: string;
            };
            ALL: {
                name: string;
            }[];
            FFW: {
                name: string;
            }[];
            MOD_ACTIVATION: {
                allowed: any[];
                mutateOutput: boolean;
                name: string;
            };
            MOD_BIAS: {
                max: number;
                min: number;
                name: string;
            };
            MOD_WEIGHT: {
                max: number;
                min: number;
                name: string;
            };
            SUB_BACK_CONN: {
                name: string;
            };
            SUB_CONN: {
                name: string;
            };
            SUB_GATE: {
                name: string;
            };
            SUB_NODE: {
                keep_gates: boolean;
                name: string;
            };
            SUB_SELF_CONN: {
                name: string;
            };
            SWAP_NODES: {
                mutateOutput: boolean;
                name: string;
            };
        };
        rate: {
            EXP: any;
            FIXED: any;
            INV: any;
            STEP: any;
        };
        selection: {
            FITNESS_PROPORTIONATE: {
                name: string;
            };
            POWER: {
                name: string;
                power: number;
            };
            TOURNAMENT: {
                name: string;
                probability: number;
                size: number;
            };
        };
    };

    export function Connection(from: any, to: any, weight: any): void;

    export namespace Connection {
        function innovationID(a: any, b: any): any;

    }

    export namespace architect {
        function Construct(list: any): any;

        function GRU(...args: any[]): any;

        function Hopfield(size: any): any;

        function LSTM(...args: any[]): any;

        function NARX(inputSize: any, hiddenLayers: any, outputSize: any, previousInput: any, previousOutput: any): any;

        function Perceptron(...args: any[]): any;

        function Random(input: any, hidden: any, output: any, options: any): any;

    }

    export namespace multi {
        const activations: any[];

        const workers: {
            browser: {
                TestWorker: any;
            };
            node: {
                TestWorker: any;
            };
        };

        function activateSerializedNetwork(input: any, A: any, S: any, data: any, F: any): any;

        function deserializeDataSet(serializedSet: any): any;

        function serializeDataSet(dataSet: any): any;

        function testSerializedSet(set: any, cost: any, A: any, S: any, data: any, F: any): any;

    }

}