import { Card, CardDescription, CardTitle } from "../ui/card";

export type ClientType = {
  id: string;
  fullName: string;
  message: string;
};

interface Props extends ClientType {}

export default function ClientCard({ fullName, message }: Props) {
  return (
    <Card className="flex flex-col gap-4 p-6">
      <CardTitle>{fullName}</CardTitle>
      <CardDescription>{message}</CardDescription>
    </Card>
  );
}
