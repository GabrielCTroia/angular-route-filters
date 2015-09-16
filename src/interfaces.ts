/// <reference path="./vendor.d.ts" />
/// <reference path="./basic.d.ts" />
'use strict';

module RouteFilters {

  export interface IRouteDataStructure {
    name: string;
    params?: {[name: string]: boolean}
    data?: {
      beforeFilters?: [string]
    }
  }

  export interface IBeforeFilter {
    condition(): boolean|PromisesAPlus.Thenable<any>|any;
    resolve(): PromisesAPlus.Thenable<void>;
    getName(): string;
  }

  export type ConditionReturn = boolean|PromisesAPlus.Thenable<boolean>;

  export interface IBeforeFilterDefinition {
    condition(filterScope: Basic.IHashMap<any>): ConditionReturn;
    resolve(filterScope: Basic.IHashMap<any>): void;
  }

}
