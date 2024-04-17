import {
  CoreStoreActionWithoutUpdateStateOrLiftedAction,
  LiftedActionAction,
  UpdateStateAction,
} from "@mattoakes/redux-devtools-app-core";

import { EMIT } from "../constants/socketActionTypes";

export type ConnectionType = "disabled" | "custom";
export interface ConnectionOptions {
  readonly type: ConnectionType;
  readonly hostname: string;
  readonly port: number;
  readonly secure: boolean;
}

export interface EmitAction {
  type: typeof EMIT;
  message: string;
  id?: string | number | false;
  instanceId?: string | number;
  action?: unknown;
  state?: unknown;
}

export type StoreActionWithoutUpdateStateOrLiftedAction =
  | CoreStoreActionWithoutUpdateStateOrLiftedAction
  | EmitAction;

export type StoreActionWithoutUpdateState =
  | StoreActionWithoutUpdateStateOrLiftedAction
  | LiftedActionAction;

export type StoreActionWithoutLiftedAction =
  | StoreActionWithoutUpdateStateOrLiftedAction
  | UpdateStateAction;

export type StoreAction = StoreActionWithoutUpdateState | UpdateStateAction;
