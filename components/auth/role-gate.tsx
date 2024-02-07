"use client";

import { FormError } from "@/components/form-error";
import { useCurrentRole } from "@/hooks/use-current-role";

interface RoleGateProps {
  children: React.ReactNode;
  allowRole: "ADMIN" | "USER";
}

export const RoleGate = ({ children, allowRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowRole) {
    return (
      <FormError message="You do not have permission to use this content!" />
    );
  }

  return <>{children}</>;
};
