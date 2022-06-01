export type ActivityEvents =
  | "workspace-created"
  | "member-joined"
  | "user-signin";

export function createActivityEvent({
  userID,
  event,
}: {
  userID: string;
  event: ActivityEvents;
}): { userID: string; event: ActivityEvents } {
  return {
    userID,
    event,
  };
}
