/**
 *
 * Global/generic types for library
 */

export type Signal = {
  name: string;
  multiplex: string;
  startBit: number;
  length: number;
  endianness: string;
  signed: boolean;
  factor: number;
  offset: number;
  min: number;
  max: number;
  unit: string;
  receivingNodes: string[];
  description: string | null;
  valueTable: ValueTable | null;
}

export type Message = {
  name: string;
  id: number;
  dlc: number;
  sendingNode: string | null;
  signals: Map<string, Signal>;
  description: string | null;
}

export type Tokens = {
  [key: string]: Token;
};

export type Token = {
  name: string;
  dataFormat: RegExp;
};

export type DbcData = {
  version: string | null;
  messages: Map<string, Message>;
  description: string | null;
  namespace: string[];
  busConfiguration: number | null;
  canNodes: string[];
  valueTables: Map<string, ValueTable> | null;
}

export type ValueTable = Map<number, string>;

export type MessageRegex = {
  messageName: string;
  id: string;
  dlc: string;
  sendingNode: string;
};

export type SignalRegex = {
  name: string;
  plex: string;
  startBit: string;
  length: string;
  endian: string;
  signed: string;
  factor: string;
  offset: string;
  min: string;
  max: string;
  unit: string;
  receivingNodes: string;
};

export type VersionRegex = {
  version: string;
};

export type CanConfigRegex = {
  speed: string;
};

export type CanNodesRegex = {
  nodes: string;
};

export type DefinitionRegex = {
  definition: string;
};

export type CanFrame = {
  id: number;
  dlc: number;
  extended: boolean;
  payload: Uint8Array;
}