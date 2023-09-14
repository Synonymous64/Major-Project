"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5e54d6c2-ec29-4466-9f53-133eaafa3c2c");
  }, []);

  return null;
};
