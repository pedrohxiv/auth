"use client";

import { useState } from "react";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const AdminPage = () => {
  const [apiRouteStatus, setApiRouteStatus] = useState(0);
  const [serverActionStatus, setServerActionStatus] = useState(0);

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      setApiRouteStatus(response.status);
    });
  };

  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        setServerActionStatus(403);
      }

      if (data.success) {
        setServerActionStatus(200);
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowRole="ADMIN">
          <FormSuccess message="Your are allowed to use this content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <div className="flex flex-row items-center gap-4">
            {apiRouteStatus !== 0 && (
              <Badge
                variant={apiRouteStatus === 200 ? "success" : "destructive"}
              >
                {apiRouteStatus}
              </Badge>
            )}
            <Button onClick={onApiRouteClick} variant="sky">
              Click to test
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <div className="flex flex-row items-center gap-4">
            {serverActionStatus !== 0 && (
              <Badge
                variant={serverActionStatus === 200 ? "success" : "destructive"}
              >
                {serverActionStatus}
              </Badge>
            )}
            <Button onClick={onServerActionClick} variant="sky">
              Click to test
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
