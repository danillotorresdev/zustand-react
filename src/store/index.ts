import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Store } from "./Store";
import { createCounterSlice } from "./slices/counterSlice";
import { createUserSlice } from "./slices/userSlice";

export const useStore = create<Store>()(
  devtools(
    persist(
      immer((...params) => ({
        counter: { ...createCounterSlice(...params) },
        user: { ...createUserSlice(...params) },
      })),
      {
        name: "storage-key",
        merge: (persistedState, currentState) => {
          Object.entries(currentState).forEach(([key, initialSliceValue]) => {
            const typesafeKey = key as keyof Store;
            const persistedSliceValue = (persistedState as Store)[typesafeKey];
            if (persistedSliceValue) {
              Object.assign(initialSliceValue, persistedSliceValue);
            }
          });
          return currentState;
        },
      }
    ),
    { enabled: import.meta.env.DEV }
  )
);
