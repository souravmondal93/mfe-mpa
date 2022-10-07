import React from 'react';

export function usePersistedState(
  key: string,
  defaultValue: { title: string; enabled: string }
) {
  const [state, setState] = React.useState(() => {
    const persistedState = localStorage.getItem(key);
    return persistedState ? JSON.parse(persistedState) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
}
export default usePersistedState;
