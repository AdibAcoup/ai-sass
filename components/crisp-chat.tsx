"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1eb010fb-d4fa-471d-8b1d-b12431dbfde4");
  }, []);

  return null;
};