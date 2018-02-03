import { Action } from "@ngrx/store";
import { IMeter, IComparison, IDateRange } from "../../interfaces";

export const TRIGGER_COMPARISON_READS: string = "[Comparison] TRIGGER COMPARISON READS";
export const ADD_COMPARISON_READS: string = "[Comparison] ADD COMPARISON READS";
export const LOADING_COMPARISON_READS: string = "[Comparison] LOADING COMPARISON READS";
export const ADD_NEIGHBORHOOD_GROUP: string = "[Comparison] ADD NEIGHBORHOOD GROUP";
export const RESET_COMPARISON_TIMEOUT: string = "[Comparison] RESET COMPARISON TIMEOUT";
export const BEGIN_COMPARISON_READS: string = "[Comparison] BEGIN COMPARISON READS";
export const CHECK_COMPARISON_READS: string = "[Comparison] CHECK COMPARISON READS";

export class TriggerComparisonReads implements Action {
	public readonly type = TRIGGER_COMPARISON_READS;
	public payload: any | null;

	constructor(private _payload: any) {
		this.payload = _payload;
	}
}

export class CheckComparisonReads implements Action {
	public readonly type = CHECK_COMPARISON_READS;
	public payload: any[];

	constructor(private _payload: any[]) {
		this.payload = _payload;
	}
}

export class BeginComparisonReads implements Action {
	public readonly type = BEGIN_COMPARISON_READS;
	public payload: any[];

	constructor(private _payload: any[]) {
		this.payload = _payload;
	}
}

export class AddComparison implements Action {
	public readonly type = ADD_COMPARISON_READS;
	public payload: IComparison | null;

	constructor(private _payload: IComparison | null) {
		this.payload = _payload;
	}
}

export class LoadingComparisonReads implements Action {
	public readonly type = LOADING_COMPARISON_READS;
	public payload = null;
}

export class AddNeighborhoodGroup implements Action {
	public readonly type = ADD_NEIGHBORHOOD_GROUP;
	public payload: any;

	constructor(private _payload: any) {
		this.payload = _payload;
	}
}

export class ResetComparisonTimeout implements Action {
	public readonly type = RESET_COMPARISON_TIMEOUT;
	public payload: { guid: string, dateRange: IDateRange };

	constructor(private _payload: { guid: string, dateRange: IDateRange }) {
		this.payload = _payload;
	}
}
