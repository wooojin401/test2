import { useContext, useEffect, useRef } from 'react';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

export function usePrompt(message, when) {
  const navigationContext = useContext(NavigationContext);
  const navigator = navigationContext && navigationContext.navigator;

  // 최신 값 보관
  const enabledRef = useRef(when);
  useEffect(() => {
    enabledRef.current = when;
  }, [when]);

  useEffect(() => {
    if (!navigator) return;

    // 원본 백업
    const origPush = navigator.push;
    const origReplace = navigator.replace;
    const origGo = navigator.go;

    // 호출 시점에 enabledRef로 판단
    const wrap = (method) => (...args) => {
      if (!enabledRef.current) return method(...args);
      const ok = window.confirm(message);
      if (ok) method(...args);
    };

    navigator.push = wrap(origPush);
    navigator.replace = wrap(origReplace);
    if (typeof origGo === 'function') navigator.go = wrap(origGo);

    // 새로고침/탭 닫기
    const handleBeforeUnload = (e) => {
      if (!enabledRef.current) return;
      e.preventDefault();
      e.returnValue = message;
      return message;
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      navigator.push = origPush;
      navigator.replace = origReplace;
      if (typeof origGo === 'function') navigator.go = origGo;
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigator, message]);
}
