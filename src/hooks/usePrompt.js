import { useContext, useEffect } from 'react';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

export function usePrompt(message, when) {
  const navigator = useContext(NavigationContext).navigator;

  useEffect(() => {
    if (!when) return;

    const push = navigator.push;
    const replace = navigator.replace;

    const confirmAndRun = (method) => (...args) => {
      const shouldProceed = window.confirm(message);
      if (shouldProceed) {
        method(...args);
      }
    };

    navigator.push = confirmAndRun(push);
    navigator.replace = confirmAndRun(replace);

    return () => {
      navigator.push = push;
      navigator.replace = replace;
    };
  }, [navigator, message, when]);
}
