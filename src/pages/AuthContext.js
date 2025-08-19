import { createContext, useContext, useEffect, useState } from "react";
import { api } from "./api";

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);     // { email, nickname }
  const [ready, setReady] = useState(false);  // 초기 로딩 플래그

  // 새로고침 후에도 로그인 유지: 토큰 있으면 /api/me 조회
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) { setReady(true); return; }
    api.get("/api/me")
      .then(({ data }) => setUser(data))
      .finally(() => setReady(true));
  }, []);

  const login = async ({ email, password }) => {
    const { data } = await api.post("/api/auth/login", { email, password });
    localStorage.setItem("access_token", data.token);
    // 닉네임도 응답에 내려줬다면 그걸 쓰고, 아니라면 /api/me 호출
    if (data.nickname && data.email) {
      setUser({ email: data.email, nickname: data.nickname });
    } else {
      const me = await api.get("/api/me");
      setUser(me.data);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
  };

  return (
    <AuthCtx.Provider value={{ user, login, logout, ready }}>
      {children}
    </AuthCtx.Provider>
  );
}
