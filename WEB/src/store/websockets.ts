import { Store } from "@reduxjs/toolkit";

export const ws =
  typeof window !== "undefined"
    ? new WebSocket("ws://localhost:8000")
    : undefined;

export const init = (callback: (value: any) => any) => {
  if (ws)
    ws.onmessage = (message) => {
      callback(JSON.parse(message.data));
      console.log(message);
    };
};

export const emit = (type: string, payload: any) => {
  if (ws) ws.send(JSON.stringify({ type, payload: payload }));
};
