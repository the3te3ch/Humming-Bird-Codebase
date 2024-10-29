// utils/navigation.ts
"use client";
import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  const navigate = (href: string) => {
    router.push(href);
  };

  return { navigate };
};
