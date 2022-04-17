export type AppState = "waiting" | "queued" | "talking" | "deciding";

export interface App {
  state: AppState;
}

export enum AppActionTypes {
  QUEUE = "app/queue",
  QUEUE_SUCCESS = "app/queue_success",
  QUEUE_FAILURE = "app/queue_error",
}

export interface appState {
  isLoading: boolean;
  data: App;
  errors?: string;
}
