"use client";

import { useI18n } from "@/locales/client";
import React, { useState, useEffect } from "react";

interface AgeCalculatorProps {
  birthDate: string;
}

const AgeCalculator: React.FC<AgeCalculatorProps> = ({ birthDate }) => {
  const [age, setAge] = useState<number>(0);
  const t = useI18n();

  useEffect(() => {
    const calculateAge = () => {
      const today = new Date();
      const birth = new Date(birthDate);
      let ageNow = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      const dayDiff = today.getDate() - birth.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        ageNow--;
      }

      setAge(ageNow);
    };

    calculateAge();

    const interval = setInterval(calculateAge, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <span>
      {age} {t("age")}
    </span>
  );
};

export default AgeCalculator;
